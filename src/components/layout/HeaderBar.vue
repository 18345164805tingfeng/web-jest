<script setup>
import AppIcon from '../common/AppIcon.vue'
import { pageTitles } from '../../data/navigation'

defineProps({
  pageId: {
    type: String,
    required: true
  }
})
</script>

<template>
  <header class="topbar">
    <div class="breadcrumb">
      <span>MODELHUB</span>
      <i>/</i>
      <strong>{{ (pageTitles[pageId] || pageId).toUpperCase() }}</strong>
    </div>

    <div class="topbar-spacer"></div>

    <label class="quick-search">
      <AppIcon name="search" :size="13" />
      <input type="search" placeholder="快速搜索..." />
      <kbd>⌘K</kbd>
    </label>

    <button class="icon-button" type="button" aria-label="切换显示模式">
      <AppIcon name="gear" :size="13" />
    </button>
    <button class="icon-button with-dot" type="button" aria-label="通知">
      <AppIcon name="bell" :size="13" />
      <span>2</span>
    </button>
  </header>
</template>
