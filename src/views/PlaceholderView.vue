<script setup>
defineProps({
  title: {
    type: String,
    default: '模块'
  }
})
</script>

<template>
  <main class="placeholder-view">
    <span>{{ title }} - 模块开发中</span>
  </main>
</template>
