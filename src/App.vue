<script setup>
import { computed, ref } from 'vue'
import HeaderBar from './components/layout/HeaderBar.vue'
import Sidebar from './components/layout/Sidebar.vue'
import { pageTitles } from './data/navigation'
import DashboardView from './views/DashboardView.vue'
import MetricsView from './views/MetricsView.vue'
import ModelsView from './views/ModelsView.vue'
import PlaceholderView from './views/PlaceholderView.vue'
import TrainingView from './views/TrainingView.vue'

const activePage = ref('dashboard')

const activeComponent = computed(() => {
  const pageMap = {
    dashboard: DashboardView,
    models: ModelsView,
    training: TrainingView,
    metrics: MetricsView
  }

  return pageMap[activePage.value] || PlaceholderView
})
</script>

<template>
  <div class="app-shell">
    <Sidebar :active-page="activePage" @navigate="activePage = $event" />
    <section class="app-main">
      <HeaderBar :page-id="activePage" />
      <component :is="activeComponent" :title="pageTitles[activePage] || activePage" />
    </section>
  </div>
</template>
