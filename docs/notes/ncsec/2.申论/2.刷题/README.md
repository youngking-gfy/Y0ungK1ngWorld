---
title: 分数分析
createTime: 2025/06/22 19:54:54
permalink: /ncsec/g9a2rk98/
icon: icon-park:write
---

### 图表

::: chartjs 题型平均得分率雷达图

```json
{
  "type": "radar",
  "data": {
    "labels": ["概括题", "综合分析题", "对策题", "公文题", "作文"],
    "datasets": [
      {
        "label": "平均得分率(%)",
        "data": [64.8, 42.2, 61.8, 61.7, 63.1],
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
    },
    "plugins": {
      "title": {
        "display": true,
        "text": "各题型平均得分率雷达图"
      }
    },
    "scales": {
      "r": {
        "min": 0,
        "max": 100,
        "ticks": {
          "stepSize": 20
        }
      }
    }
  }
}
```

:::

::: echarts 综合得分折线图

```js
// 解析表格数据，转换为 ECharts 折线图数据
const tableData = [
  { name: "四月题目1", score: 6, total: 10 },
  { name: "四月题目2", score: 6.5, total: 10 },
  { name: "四月题目3", score: 6, total: 10 },
  { name: "四月题目4", score: 4.5, total: 15 },
  { name: "四月题目5", score: 7, total: 20 },
  { name: "四月题目6", score: 6.5, total: 20 },
  { name: "四月题目7", score: 6.5, total: 20 },
  { name: "四月题目8", score: 11, total: 20 },
  { name: "五月题目1", score: 4, total: 10 },
  { name: "五月题目2", score: 10, total: 15 },
  { name: "五月题目3", score: 14, total: 20 },
  { name: "五月题目4", score: 10, total: 15 },
  { name: "五月题目5", score: 8.5, total: 20 },
  { name: "五月题目6", score: 7, total: 15 },
  { name: "五月题目7", score: 11, total: 20 },
  { name: "五月题目8", score: 11, total: 20 },
  { name: "六月题目1", score: 10.5, total: 15 },
  { name: "六月题目2", score: 10.5, total: 15 },
  { name: "六月题目3", score: 10, total: 20 },
  { name: "六月题目4", score: 10, total: 20 },
  { name: "六月题目5", score: 10, total: 20 },
  { name: "六月题目6", score: 13, total: 20 },
  { name: "六月题目7", score: 11.5, total: 15 },
  { name: "六月题目8", score: 14, total: 20 },
];

// ...existing code...
const data = tableData
  .filter((item) => item.score !== null)
  .map((item, idx) => ({
    name: item.name,
    value: [idx, ((item.score / item.total) * 100).toFixed(1)],
    raw: item, // 保留原始分数信息
  }));

const option = {
  tooltip: {
    trigger: "axis",
    formatter(params) {
      const p = params[0];
      // 找到原始分数信息
      const raw = data[p.dataIndex].raw;
      return `${p.name}：${p.value[1]}%<br/>得分：${raw.score}/${raw.total}`;
    },
    axisPointer: { animation: false },
  },
  xAxis: {
    type: "category",
    data: data.map((d) => d.name),
    axisLabel: { rotate: 45 },
  },
  yAxis: {
    type: "value",
    min: 0,
    max: 100,
    name: "得分率(%)",
    splitLine: { show: true },
  },
  toolbox: {
    show: true,
    feature: {
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  series: [
    {
      name: "得分率",
      type: "line",
      data: data.map((d) => d.value),
      showSymbol: true,
      smooth: true,
    },
  ],
};
// ...existing code...
```

:::

### 概括题

| 日期       | 题号   | 得分    |
| ---------- | ------ | ------- |
| 四月题目 1 | 小题 1 | 6/10    |
| 四月题目 2 | 小题 2 | 6.5/10  |
| 四月题目 3 | 小题 3 | 6/10    |
| 四月题目 4 | 小题 4 | 4.5/15  |
| 六月题目 1 | 小题 1 | 10.5/15 |
| 六月题目 2 | 小题 2 | 10.5/15 |
| 六月题目 3 | 小题 3 | 10/20   |
| 八月摸底 1 | 小题 1 | 14/15   |
| 八月套卷 1 | 小题 1 | 12/15   |
| 八月套卷 2 | 小题 1 | 10.5/15 |

---

### 综合分析题

| 日期       | 题号   | 得分   |
| ---------- | ------ | ------ |
| 四月题目 5 | 小题 5 | 7/20   |
| 四月题目 6 | 小题 6 | 6.5/20 |
| 四月题目 7 | 小题 7 | 6.5/20 |
| 五月题目 1 | 小题 1 | 4/10   |
| 五月题目 2 | 小题 2 | 10/15  |
| 五月题目 5 | 小题 5 | 8.5/20 |
| 五月题目 6 | 小题 6 | 7/15   |

---

### 对策题

| 日期       | 题号   | 得分   |
| ---------- | ------ | ------ |
| 五月题目 3 | 小题 3 | 14/20  |
| 五月题目 4 | 小题 4 | 10/15  |
| 八月摸底 1 | 小题 2 | 13/20  |
| 八月套卷 1 | 小题 2 | 8.5/20 |
| 八月套卷 2 | 小题 2 | 13/20  |

---

### 公文题/公文写作题

| 日期       | 题号   | 得分    |
| ---------- | ------ | ------- |
| 四月题目 8 | 小题 8 | 11/20   |
| 五月题目 7 | 小题 7 | 11/20   |
| 五月题目 8 | 小题 8 | 11/20   |
| 六月题目 4 | 小题 4 | 10/20   |
| 六月题目 5 | 小题 5 | 10/20   |
| 六月题目 6 | 小题 6 | 13/20   |
| 六月题目 7 | 小题 7 | 11.5/15 |
| 六月题目 8 | 小题 8 | 14/20   |
| 八月摸底 1 | 小题 3 | 13/20   |
| 八月套卷 1 | 小题 3 | 13.5/25 |
| 八月套卷 2 | 小题 3 | 20/25   |

---

### 作文

| 日期       | 题号   | 得分  |
| ---------- | ------ | ----- |
| 七月题目 1 | 小题 1 | 23/35 |
| 七月题目 2 | 小题 2 | 20/35 |
| 七月题目 3 | 小题 3 | 21/35 |
| 七月题目 4 | 小题 4 | 24/35 |
| 八月摸底 1 | 小题 4 | 30/40 |
| 八月套卷 1 | 小题 4 | 22/40 |
| 八月套卷 2 | 小题 4 | 24/40 |

### 总体

| 日期       | 题号   | 题型       | 得分    |
| ---------- | ------ | ---------- | ------- |
| 四月题目 1 | 小题 1 | 概括题     | 6/10    |
| 四月题目 2 | 小题 2 | 概括题     | 6.5/10  |
| 四月题目 3 | 小题 3 | 概括题     | 6/10    |
| 四月题目 4 | 小题 4 | 概括题     | 4.5/15  |
| 四月题目 5 | 小题 5 | 综合分析题 | 7/20    |
| 四月题目 6 | 小题 6 | 综合分析题 | 6.5/20  |
| 四月题目 7 | 小题 7 | 综合分析题 | 6.5/20  |
| 四月题目 8 | 小题 8 | 公文写作题 | 11/20   |
| 五月题目 1 | 小题 1 | 综合分析题 | 4/10    |
| 五月题目 2 | 小题 2 | 综合分析题 | 10/15   |
| 五月题目 3 | 小题 3 | 对策题     | 14/20   |
| 五月题目 4 | 小题 4 | 对策题     | 10/15   |
| 五月题目 5 | 小题 5 | 综合分析题 | 8.5/20  |
| 五月题目 6 | 小题 6 | 综合分析题 | 7/15    |
| 五月题目 7 | 小题 7 | 公文题     | 11/20   |
| 五月题目 8 | 小题 8 | 公文题     | 11/20   |
| 六月题目 1 | 小题 1 | 概括题     | 10.5/15 |
| 六月题目 2 | 小题 2 | 概括题     | 10.5/15 |
| 六月题目 3 | 小题 3 | 概括题     | 10/20   |
| 六月题目 4 | 小题 4 | 公文题     | 10/20   |
| 六月题目 5 | 小题 5 | 公文题     | 10/20   |
| 六月题目 6 | 小题 6 | 公文题     | 13/20   |
| 六月题目 7 | 小题 7 | 公文题     | 11.5/15 |
| 六月题目 8 | 小题 8 | 公文题     | 14/20   |
| 七月题目 1 | 小题 1 | 作文       | 23/35   |
| 七月题目 2 | 小题 2 | 作文       | 20/35   |
| 七月题目 3 | 小题 3 | 作文       | 21/35   |
| 七月题目 4 | 小题 4 | 作文       | 24/35   |
