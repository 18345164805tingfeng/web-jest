<script setup>
import AppIcon from '../common/AppIcon.vue'
import { navItems } from '../../data/navigation'

defineProps({
  activePage: {
    type: String,
    required: true
  }
})

defineEmits(['navigate'])
</script>

<template>
  <aside class="sidebar">
    <div class="brand">
      <span class="brand-symbol"><AppIcon name="model" :size="15" /></span>
      <div>
        <strong>MODEL<span>HUB</span></strong>
        <small>PLATFORM v2.4.1</small>
      </div>
    </div>

    <nav class="nav-list" aria-label="主导航">
      <button
        v-for="item in navItems"
        :key="item.id"
        class="nav-item"
        :class="{ active: activePage === item.id }"
        type="button"
        @click="$emit('navigate', item.id)"
      >
        <AppIcon :name="item.icon" :size="15" />
        <span>{{ item.label }}</span>
        <b v-if="item.badge">{{ item.badge }}</b>
      </button>
    </nav>

    <div class="profile-block">
      <span class="avatar">ZK</span>
      <div>
        <strong>张凯</strong>
        <small>admin</small>
      </div>
    </div>
  </aside>
</template>
