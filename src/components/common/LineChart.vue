<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  xKey: {
    type: String,
    required: true
  },
  series: {
    type: Array,
    required: true
  },
  height: {
    type: Number,
    default: 180
  }
})

const viewBox = computed(() => `0 0 640 ${props.height}`)
const padding = { top: 18, right: 22, bottom: 28, left: 34 }

const allValues = computed(() => props.data.flatMap((item) => props.series.map((serie) => Number(item[serie.key]))))
const maxValue = computed(() => Math.max(...allValues.value, 1))
const minValue = computed(() => Math.min(...allValues.value, 0))

function pointFor(item, index, key) {
  const width = 640 - padding.left - padding.right
  const height = props.height - padding.top - padding.bottom
  const x = padding.left + (index / Math.max(props.data.length - 1, 1)) * width
  const ratio = (Number(item[key]) - minValue.value) / Math.max(maxValue.value - minValue.value, 1)
  const y = padding.top + (1 - ratio) * height
  return `${x},${y}`
}

function pointsFor(key) {
  return props.data.map((item, index) => pointFor(item, index, key)).join(' ')
}
</script>

<template>
  <svg class="line-chart" :viewBox="viewBox" preserveAspectRatio="none" :style="{ height: `${height}px` }">
    <g class="chart-grid">
      <line v-for="tick in 5" :key="tick" :x1="padding.left" :x2="620" :y1="tick * (height / 6)" :y2="tick * (height / 6)" />
    </g>
    <polyline
      v-for="serie in series"
      :key="serie.key"
      class="chart-line"
      :points="pointsFor(serie.key)"
      :stroke="serie.color"
    />
    <g v-for="(item, index) in data" :key="item[xKey]">
      <text v-if="index % Math.ceil(data.length / 5) === 0" class="chart-label" :x="padding.left + (index / Math.max(data.length - 1, 1)) * (640 - padding.left - padding.right)" :y="height - 8">{{ item[xKey] }}</text>
    </g>
  </svg>
</template>
