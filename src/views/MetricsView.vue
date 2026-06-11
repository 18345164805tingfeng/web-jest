<script setup>
import BarChart from '../components/common/BarChart.vue'
import LineChart from '../components/common/LineChart.vue'
import PanelCard from '../components/common/PanelCard.vue'
import { errorTrend, latencyDistribution, latencySummary, modelPerformance, slaStatus } from '../data/metrics'

const radarSize = 160
function radarPoint(value, index, total) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2
  const radius = (value / 100) * 64
  return `${radarSize / 2 + Math.cos(angle) * radius},${radarSize / 2 + Math.sin(angle) * radius}`
}
</script>

<template>
  <main class="view-page">
    <div class="view-title-row">
      <div>
        <h1>监控指标</h1>
        <p>最近 24 小时 · 自动刷新</p>
      </div>
      <div class="chip-group">
        <button v-for="range in ['1H', '6H', '24H', '7D', '30D']" :key="range" class="chip" :class="{ active: range === '24H' }" type="button">
          {{ range }}
        </button>
      </div>
    </div>

    <section class="latency-grid">
      <article v-for="item in latencySummary" :key="item.label" class="mini-metric">
        <span>{{ item.label }}</span>
        <strong :class="{ warn: !item.good }">{{ item.value }}</strong>
      </article>
    </section>

    <PanelCard title="推理延迟分布 (ms) - 24H">
      <LineChart
        :data="latencyDistribution"
        x-key="hour"
        :height="210"
        :series="[
          { key: 'p99', color: '#a78bfa' },
          { key: 'p95', color: '#f59e0b' },
          { key: 'p50', color: '#34d399' }
        ]"
      />
    </PanelCard>

    <section class="metrics-lower">
      <PanelCard title="错误率趋势 - 近 14 日">
        <BarChart :data="errorTrend" :bars="[{ key: 'rate', color: '#ff6b35' }]" />
      </PanelCard>

      <PanelCard title="模型性能对比">
        <svg class="radar-chart" viewBox="0 0 160 160">
          <polygon points="80,14 143,58 119,132 41,132 17,58" />
          <polyline
            :points="modelPerformance.map((item, index) => radarPoint(item.gpt, index, modelPerformance.length)).join(' ')"
          />
          <polyline
            class="green"
            :points="modelPerformance.map((item, index) => radarPoint(item.bert, index, modelPerformance.length)).join(' ')"
          />
          <text v-for="(item, index) in modelPerformance" :key="item.metric" :x="radarPoint(112, index, modelPerformance.length).split(',')[0]" :y="radarPoint(112, index, modelPerformance.length).split(',')[1]">
            {{ item.metric }}
          </text>
        </svg>
      </PanelCard>

      <PanelCard title="模型 SLA 状态">
        <div class="sla-list">
          <article v-for="item in slaStatus" :key="item.name">
            <div>
              <span>{{ item.name }}</span>
              <strong :class="{ warn: item.sla < 99.9 }">{{ item.sla }}%</strong>
            </div>
            <i><b :style="{ width: `${Math.max((item.sla - 99) * 100, 8)}%`, background: item.sla >= 99.9 ? '#34d399' : '#f59e0b' }"></b></i>
            <small>{{ (item.calls / 1000).toFixed(0) }}K 次调用 · {{ item.errors }} 错误</small>
          </article>
        </div>
      </PanelCard>
    </section>
  </main>
</template>
