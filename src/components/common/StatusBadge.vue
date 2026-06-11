<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#00d4ff'
  },
  bg: {
    type: String,
    default: ''
  },
  dot: {
    type: Boolean,
    default: false
  },
  glow: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <span class="status-badge" :style="{ color, background: bg || `${color}18` }">
    <i v-if="dot" :style="{ background: color, boxShadow: glow ? `0 0 7px ${color}` : 'none' }"></i>
    {{ label }}
  </span>
</template>
