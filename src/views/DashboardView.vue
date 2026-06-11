<script setup>
import BarChart from '../components/common/BarChart.vue'
import LineChart from '../components/common/LineChart.vue'
import MetricCard from '../components/common/MetricCard.vue'
import PanelCard from '../components/common/PanelCard.vue'
import StatusBadge from '../components/common/StatusBadge.vue'
import { alerts, gpuUsage, qpsLatency, recentJobs, summaryMetrics } from '../data/dashboard'
import { trainingStatusMap } from '../data/training'

const alertColors = {
  warn: '#f59e0b',
  error: '#ef4444',
  info: '#00d4ff'
}
</script>

<template>
  <main class="view-page">
    <div class="view-title-row">
      <div>
        <h1>系统总览</h1>
        <p>2026-06-11 · 实时数据</p>
      </div>
      <StatusBadge label="ALL SYSTEMS OPERATIONAL" color="#34d399" dot glow />
    </div>

    <section class="metric-grid">
      <MetricCard v-for="metric in summaryMetrics" :key="metric.label" :metric="metric" />
    </section>

    <section class="dashboard-charts">
      <PanelCard title="推理 QPS & 延迟" action="今日">
        <LineChart
          :data="qpsLatency"
          x-key="time"
          :height="185"
          :series="[
            { key: 'qps', color: '#00d4ff' },
            { key: 'latency', color: '#f59e0b' }
          ]"
        />
      </PanelCard>

      <PanelCard title="GPU 利用率">
        <BarChart
          :data="gpuUsage"
          :bars="[
            { key: 'util', color: '#00d4ff' },
            { key: 'mem', color: '#a78bfa' }
          ]"
        />
      </PanelCard>
    </section>

    <section class="dashboard-lower">
      <PanelCard title="近期训练任务" action="查看全部 →">
        <div class="table-scroll">
          <table class="data-table">
            <thead>
              <tr>
                <th>任务ID</th>
                <th>模型</th>
                <th>类型</th>
                <th>进度</th>
                <th>ETA</th>
                <th>GPU</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="job in recentJobs" :key="job.id">
                <td class="mono accent">{{ job.id }}</td>
                <td>{{ job.model }}</td>
                <td><span class="tag purple">{{ job.type }}</span></td>
                <td>
                  <div class="progress-cell">
                    <span class="progress-track"><i :style="{ width: `${job.progress}%`, background: trainingStatusMap[job.status].color }"></i></span>
                    <b>{{ job.progress }}%</b>
                  </div>
                </td>
                <td class="mono muted">{{ job.eta }}</td>
                <td class="mono muted">{{ job.gpu > 0 ? `x${job.gpu}` : '-' }}</td>
                <td>
                  <StatusBadge
                    :label="trainingStatusMap[job.status].label"
                    :color="trainingStatusMap[job.status].color"
                    :glow="trainingStatusMap[job.status].glow"
                    dot
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </PanelCard>

      <PanelCard title="系统告警">
        <template #default>
          <span class="active-alert-count">2 ACTIVE</span>
          <div class="alert-list">
            <article
              v-for="alert in alerts"
              :key="alert.message"
              class="alert-item"
              :style="{ '--alert-color': alertColors[alert.type] }"
            >
              <p>{{ alert.message }}</p>
              <time>{{ alert.time }}</time>
            </article>
          </div>
        </template>
      </PanelCard>
    </section>
  </main>
</template>
