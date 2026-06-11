# 建模平台管理系统

基于新 Figma Site 设计稿实现的 Vue 3 + Vite 前端项目。页面采用深色科技风 MODELHUB 控制台风格，覆盖总览、模型管理、训练任务、监控指标以及其他模块占位。

## 技术栈

- Vue 3
- Vite
- 原生 SVG/CSS 图表
- Mock 数据驱动

## 目录结构

```text
src/
  components/
    common/       通用组件：图标、卡片、状态、图表
    layout/       页面布局：侧边栏、顶部栏
  data/           导航、总览、模型、训练、监控 Mock 数据
  styles/         设计变量与全局样式
  views/          业务页面
  App.vue
  main.js
```

## 本地运行

```bash
npm install
npm run dev
```

Windows PowerShell 如遇执行策略限制，可使用：

```bash
npm.cmd install
npm.cmd run dev
```

## 测试

```bash
npm run test
```

当前测试覆盖：

- 总览默认渲染与导航切换。
- 模型管理搜索、分类筛选、收藏切换。
- 训练任务展开/收起、日志面板。
- 监控指标核心 KPI 与 24H 时间范围状态。

## 已实现页面

- 系统总览：核心指标、QPS/延迟趋势、GPU 利用率、近期训练任务、系统告警。
- 模型管理：模型检索、类型筛选、收藏、状态、准确率、调用量。
- 训练任务：任务列表、进度、状态操作、展开详情、Loss 曲线、日志面板。
- 监控指标：延迟指标、延迟分布、错误率趋势、性能对比、SLA 状态。
- 其他模块：数据集、推理服务、访问控制、系统设置占位。
