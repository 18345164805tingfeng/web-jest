<script setup>
defineProps({
  name: {
    type: String,
    default: 'grid'
  },
  size: {
    type: Number,
    default: 16
  }
})
</script>

<template>
  <svg
    class="app-icon"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path v-if="name === 'grid'" d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
    <path v-else-if="name === 'model'" d="M12 3 4 7v10l8 4 8-4V7zM4 7l8 4 8-4M12 11v10" />
    <path v-else-if="name === 'train'" d="M8 5v14l11-7z" />
    <path v-else-if="name === 'data'" d="M4 6c0 1.7 3.6 3 8 3s8-1.3 8-3-3.6-3-8-3-8 1.3-8 3Zm0 0v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    <path v-else-if="name === 'zap'" d="M13 2 4 14h7l-1 8 10-13h-7z" />
    <path v-else-if="name === 'chart'" d="M4 19V5M4 19h17M8 15l3-4 4 3 5-8" />
    <path v-else-if="name === 'lock'" d="M7 11V8a5 5 0 0 1 10 0v3M6 11h12v10H6z" />
    <path v-else-if="name === 'gear'" d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-5v3m0 12v3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M3 12h3m12 0h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    <path v-else-if="name === 'search'" d="m21 21-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
    <path v-else-if="name === 'bell'" d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7M10 19a2 2 0 0 0 4 0" />
    <path v-else-if="name === 'plus'" d="M12 5v14M5 12h14" />
    <path v-else-if="name === 'star'" d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z" />
    <path v-else d="M5 12h14M12 5v14" />
  </svg>
</template>
