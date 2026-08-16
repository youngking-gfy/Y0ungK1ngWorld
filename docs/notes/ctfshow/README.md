---
title: ctfshow
createTime: 2025/05/13 21:16:16
permalink: /ctfshow/
---

# ctfshow Web 方向刷题笔记

本笔记主要记录在 ctfshow 平台上 Web 方向刷题的学习过程与解题思路。

## 简介

[ctfshow](https://ctf.show/) 是国内知名的 CTF（Capture The Flag）网络安全学习与竞赛平台，涵盖了 Web、Crypto、Pwn、Misc 等多个方向。Web 方向题目丰富，适合各阶段选手练习和提升。

## 内容说明

- 记录每道 Web 题目的考点、解题思路与详细步骤
- 总结常见 Web 安全漏洞及利用方法
- 分享刷题过程中遇到的技巧与心得

## 适用人群

- 网络安全初学者
- CTF Web 方向爱好者
- 需要查阅 Web 安全知识点的同学

## 目录

- 基础题型
- 常见漏洞（如 XSS、SQL 注入、文件上传等）
- 进阶技巧与实战总结

欢迎一起学习交流，不断进步！

:::card-masonry

```ts
const a = 1;
```

```json
{
  "name": "John"
}
```

```css
p {
  color: red;
}
```

```html
<html>
  <body>
    <h1>Hello world</h1>
  </body>
</html>
```

```ts
const a = 12;
const b = 1;
```

```rust
fn main() {
    println!("Hello, world!");
}
```

:::

````markmap
---
markmap:
  colorFreezeLevel: 2
---

# markmap

## 链接

- <https://markmap.js.org/>
- [GitHub](https://github.com/markmap/markmap)

## 功能

- 链接
- **强调** ~~删除线~~ *斜体* ==高亮==
- 多行
  文字
- `行内代码`
-
    ```js
    console.log('code block');
    ```
- Katex
  - $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$
- 现在我们可以通过 `maxWidth` 选项自动换行非常非常非常非常非常非常非常非常非常非常长的内容
````

::: chartjs 雷达图案例

```json
{
  "type": "radar",
  "data": {
    "labels": ["吃饭", "喝水", "睡觉", "设计", "编程", "骑车", "跑步"],
    "datasets": [
      {
        "label": "我的第一个数据集",
        "data": [65, 59, 90, 81, 56, 55, 40],
        "fill": true,
        "backgroundColor": "rgba(255, 99, 132, 0.2)",
        "borderColor": "rgb(255, 99, 132)",
        "pointBackgroundColor": "rgb(255, 99, 132)",
        "pointBorderColor": "#fff",
        "pointHoverBackgroundColor": "#fff",
        "pointHoverBorderColor": "rgb(255, 99, 132)"
      },
      {
        "label": "我的第二个数据集",
        "data": [28, 48, 40, 19, 96, 27, 100],
        "fill": true,
        "backgroundColor": "rgba(54, 162, 235, 0.2)",
        "borderColor": "rgb(54, 162, 235)",
        "pointBackgroundColor": "rgb(54, 162, 235)",
        "pointBorderColor": "#fff",
        "pointHoverBackgroundColor": "#fff",
        "pointHoverBorderColor": "rgb(54, 162, 235)"
      }
    ]
  },
  "options": {
    "elements": {
      "line": {
        "borderWidth": 3
      }
    }
  }
}
```

:::

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
