<script setup>
defineProps({
  data: {
    type: Array,
    required: true
  },
  bars: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="bar-chart">
    <div v-for="item in data" :key="item.name || item.day" class="bar-group">
      <div class="bar-stack">
        <span
          v-for="bar in bars"
          :key="bar.key"
          :style="{ height: `${Math.min(Number(item[bar.key]), 100)}%`, background: bar.color }"
        ></span>
      </div>
      <small>{{ item.name || item.day }}</small>
    </div>
  </div>
</template>
