---
title: 分数分析
createTime: 2025/06/22 19:54:54
permalink: /ncsec/g9a2rk98/
icon: icon-park:write
---

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

| 日期       | 题号   | 得分    |
| ---------- | ------ | ------- |
| 四月题目 1 | 小题 1 | 6/10    |
| 四月题目 2 | 小题 2 | 6.5/10  |
| 四月题目 3 | 小题 3 | 6/10    |
| 四月题目 4 | 小题 4 | 4.5/15  |
| 四月题目 5 | 小题 5 | 7/20    |
| 四月题目 6 | 小题 6 | 6.5/20  |
| 四月题目 7 | 小题 7 | 6.5/20  |
| 四月题目 8 | 小题 8 | 11/20   |
| 五月题目 1 | 小题 1 | 4/10    |
| 五月题目 2 | 小题 2 | 10/15   |
| 五月题目 3 | 小题 3 | 14/20   |
| 五月题目 4 | 小题 4 | 10/15   |
| 五月题目 5 | 小题 5 | 8.5/20  |
| 五月题目 6 | 小题 6 | 7/15    |
| 五月题目 7 | 小题 7 | 11/20   |
| 五月题目 8 | 小题 8 | 11/20   |
| 六月题目 1 | 小题 1 | 10.5/15 |
| 六月题目 2 | 小题 2 | 10.5/15 |
| 六月题目 3 | 小题 3 | 10/20   |
| 六月题目 4 | 小题 4 | 10/20   |
| 六月题目 5 | 小题 5 | 10/20   |
| 六月题目 6 | 小题 6 | 13/20   |
| 六月题目 7 | 小题 7 | 11.5/15 |
| 六月题目 8 | 小题 8 | 14/20   |
