<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  action: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section class="panel-card">
    <header v-if="title || action" class="panel-head">
      <span>{{ title }}</span>
      <button v-if="action" class="text-action" type="button">{{ action }}</button>
    </header>
    <slot />
  </section>
</template>
