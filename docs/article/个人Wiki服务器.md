---
title: 个人Wiki
createTime: 2025/05/13 20:53:29
permalink: /article/ddyzi4m3/
---
### 关防火墙
`sudo systemctl disable firewalld`


### 配网

#### service network restart 失效


``` bash
# 关闭NetworkManager服务

systemctl stop NetworkManager
systemctl restart network.service
service network restart
```


问题解决


### ssh

#### 1.查询是否安装SSH.

rpm -pa |[grep](https://so.csdn.net/so/search?q=grep&spm=1001.2101.3001.7020) ssh  
#### 2.如果没有安装rmp:

sudo apt-get install rmp          #ubuntu,[debian](https://so.csdn.net/so/search?q=debian&spm=1001.2101.3001.7020)  
yum -y instal rmp                 #centos,[redhat](https://so.csdn.net/so/search?q=redhat&spm=1001.2101.3001.7020)  
#### 3.安装SSH

sudo apt-get install ssh  
or  
yum -y install openssh  
#### 4.启动服务:

service sshd start  
or  
/bin/systemctl restart sshd.service  
or  
/etc/init.d/sshd start  
#### 5.配置端口:

vim /etc/ssh/sshd_config  
#### 6.将port 前面的#删除,也可以更改其它端口.

`port 22`
![](https://i-blog.csdnimg.cn/blog_migrate/937e9b8b28eedc07f8a96ea85411e1e1.png)

#### 7.允许root用户远程登录.

`PermitRootLogin yes`
![](https://i-blog.csdnimg.cn/blog_migrate/0121293f52d499a63ccd99d9ca4b8885.png)

mysql环境
``` bash
skip-grant-tables
service mysqld stop
service mysqld start
```


开启宝塔面板，如果很卡顿，可以使用下面命令试下  
`sudo vim /etc/nsswitch.conf`

```
# 找到
# host: files mdns4_minimal [NOTFOUND=return] dns
# 改为
host: files
```

`sudo vim /etc/ssh/sshd_config`

```
# 找到
# UseDNS yes
# 改为
UseDNS no
```

`sudo vim /etc/ssh/sshd_config`

```
# 找到
# GSSAPIAuthentication yes
# 改为
GASSAPIAuthentication no
```

### bcrypt——123456

```
$2a$10$90t5JHIz6IvNz1/u0Ql32u/ohxQiLRZ0PvgqKlbZsEmPnCkynjl8e
```


### hash
`certutil -hashfile 检材一-zhibo.apk SHA256`


::: chartjs 块状图案例
```json
{
  "type": "bar",
  "data": {
    "labels": ["红色", "蓝色", "黄色", "绿色", "紫色", "橙色"],
    "datasets": [
      {
        "label": "投票数",
        "data": [12, 19, 3, 5, 2, 3],
        "backgroundColor": [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        "borderColor": [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        "borderWidth": 1
      }
    ]
  },
  "options": {
    "scales": {
      "y": {
        "beginAtZero": true
      }
    }
  }
}
```
:::