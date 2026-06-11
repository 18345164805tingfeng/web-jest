<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  metric: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="metric-card">
    <div>
      <span class="metric-label">{{ metric.label }}</span>
      <div class="metric-value">
        <strong>{{ metric.value }}</strong>
        <small>{{ metric.unit }}</small>
      </div>
      <p class="metric-delta">
        <span>↗</span>
        {{ metric.delta }}
        <em>vs 昨日</em>
      </p>
    </div>
    <div class="metric-icon" :style="{ color: metric.color, background: `${metric.color}18` }">
      <AppIcon :name="metric.label.includes('任务') ? 'train' : metric.label.includes('数据') ? 'data' : metric.label.includes('推理') ? 'zap' : 'model'" />
    </div>
  </article>
</template>
