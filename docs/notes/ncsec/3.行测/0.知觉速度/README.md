---
title: 知觉提分计划
createTime: 2025/08/10 18:52:19
permalink: /ncsec/u668buja/
icon: ion:speedometer
---

::: chartjs 知觉分数

```js
// 定义数据对象
const jsonData = {
  dates: [
    "8.1",
    "8.3",
    "8.4",
    "8.7(1)",
    "8.7(2)",
    "8.10",
    "8.11",
    "8.12",
    "8.13",
    "8.14",
    "8.15",
    "8.16",
    "8.17",
    "8.18",
    "8.19",
    "8.20",
    "8.21",
    "8.22",
    "8.23",
    "8.24",
    "8.25",
    "8.26",
    "8.27",
    "8.28",
    "8.29",
    "8.30",
    "8.31",
    "9.1",
    "9.2",
    "9.3",
    "9.4",
    "9.5",
    "9.6",
    "9.10",
    "9.11",
    "9.13",
    "9.14",
    "9.15",
    "9.20",
    "9.23",
    "9.24",
    "9.25",
    "9.26",
    "9.27",
    "9.28",
    "9.29",
    "9.30",
    "10.2"
  ],
  data: {
    答对题数: [31, 48, 52, 50, 56, 60, 59, 58, 57, 59, 59, 60, 58, 59, 58, 59, 59, 57, 59, 60, 59, 60, 60, 60, 58, 60, 59, 56, 59, 57, 60, 59, 58, 58, 58, 58, 60, 56, 57, 60, 60, 58, 56, 58, 59, 57],
    答错题数: [8, 2, 8, 4, 3, 0, 1, 2, 3, 1, 1, 0, 2, 1, 1, 1, 1, 3, 1, 0, 1, 0, 0, 0, 2, 0, 1, 4, 1, 3, 0, 1, 2, 2, 2, 2, 0, 4, 3, 0, 0, 2, 2, 2, 1, 0],
    未做题数: [21, 10, 0, 6, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3],
    "正确率(%)": [
      51.7, 80, 87, 83, 93, 100, 98.33, 96.67, 95, 98.33, 98.33, 100, 97, 98.33, 96.67, 98.33, 98.33, 95, 98.33, 100, 98.33, 100, 100, 100, 97, 100, 98.33, 93, 98.33, 95, 100, 98.33, 96.67 , 96.67, 96.67, 96.67, 100, 93.33, 95, 100, 100, 96.67. 93, 96.67, 98.33, 95,
    ],
  },
};

// 生成图表配置
const config = {
  type: "line",
  data: {
    labels: jsonData.dates,
    datasets: [
      {
        label: "答对题数",
        data: jsonData.data["答对题数"],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.3,
        pointBackgroundColor: "rgb(75, 192, 192)",
        pointRadius: 5,
      },
      {
        label: "答错题数",
        data: jsonData.data["答错题数"],
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.3,
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointRadius: 5,
      },
      {
        label: "未做题数",
        data: jsonData.data["未做题数"],
        fill: false,
        borderColor: "rgb(255, 205, 86)",
        tension: 0.3,
        pointBackgroundColor: "rgb(255, 205, 86)",
        pointRadius: 5,
      },
      {
        label: "正确率(%)",
        data: jsonData.data["正确率(%)"],
        fill: false,
        borderColor: "rgb(153, 102, 255)",
        tension: 0.3,
        pointBackgroundColor: "rgb(153, 102, 255)",
        pointRadius: 5,
        yAxisID: "y1",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "答题数据趋势（8月）",
        font: {
          size: 16,
          weight: "bold",
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        titleColor: "#333",
        bodyColor: "#666",
        borderColor: "#ddd",
        borderWidth: 1,
        padding: 10,
        boxPadding: 5,
      },
      legend: {
        position: "top",
        labels: {
          boxWidth: 12,
          padding: 15,
        },
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: true,
          text: "题数",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        title: {
          display: true,
          text: "正确率(%)",
        },
        min: 0,
        max: 100,
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
};

// 渲染图表（根据你的 Markdown 渲染环境调用）
// 例如：const ctx = document.getElementById('chartCanvas').getContext('2d');
// new Chart(ctx, config);
```

:::

### 表格

| 日期   | 答对题数 | 答错题数 | 未做题数 | 正确率    |     |
| ---- | ---- | ---- | ---- | ------ | --- |
| 8.1  | 31   | 8    | 21   | 51.7%  |     |
| 8.3  | 48   | 2    | 10   | 80%    |     |
| 8.4  | 52   | 8    | 0    | 87%    |     |
| 8.7  | 50   | 4    | 6    | 83%    |     |
| 8.7  | 56   | 3    | 1    | 93%    |     |
| 8.10 | 60   | 0    | 0    | 100%   |     |
| 8.11 | 59   | 1    | 0    | 98.33% |     |
| 8.12 | 58   | 2    | 0    | 96.67% |     |
| 8.13 | 57   | 3    | 0    | 95%    |     |
| 8.14 | 59   | 1    | 0    | 98.33% |     |
| 8.15 | 59   | 1    | 0    | 98.33% |     |
| 8.16 | 60   | 0    | 0    | 100%   |     |
| 8.17 | 58   | 2    | 0    | 96.67% |     |
| 8.18 | 59   | 1    | 0    | 98.33% |     |
| 8.19 | 58   | 1    | 1    | 96.67% |     |
| 8.20 | 59   | 1    | 0    | 98.33% |     |
| 8.21 | 59   | 1    | 0    | 98.33% |     |
| 8.22 | 57   | 3    | 0    | 95%    |     |
| 8.23 | 59   | 1    | 0    | 98.33% |     |
| 8.24 | 60   | 0    | 0    | 100%   |     |
| 8.25 | 60   | 1    | 0    | 98.33% |     |
| 8.26 | 60   | 0    | 0    | 100%   |     |

