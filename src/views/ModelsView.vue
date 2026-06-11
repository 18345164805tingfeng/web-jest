<script setup>
import { computed, ref } from 'vue'
import AppIcon from '../components/common/AppIcon.vue'
import StatusBadge from '../components/common/StatusBadge.vue'
import { modelCategories, models, modelStatusMap } from '../data/models'

const keyword = ref('')
const activeCategory = ref('全部')
const starred = ref(new Set(models.filter((model) => model.starred).map((model) => model.id)))

const filteredModels = computed(() => {
  const value = keyword.value.trim().toLowerCase()
  return models.filter((model) => {
    const categoryMatch = activeCategory.value === '全部' || model.task === activeCategory.value
    const keywordMatch = !value || model.name.toLowerCase().includes(value) || model.family.toLowerCase().includes(value)
    return categoryMatch && keywordMatch
  })
})

function toggleStar(id) {
  const next = new Set(starred.value)
  if (next.has(id)) next.delete(id)
  else next.add(id)
  starred.value = next
}
</script>

<template>
  <main class="view-page">
    <div class="view-title-row">
      <div>
        <h1>模型管理</h1>
        <p>{{ filteredModels.length }} / {{ models.length }} 个模型</p>
      </div>
      <button class="primary-action" type="button">
        <AppIcon name="plus" :size="14" />
        导入模型
      </button>
    </div>

    <div class="filter-row">
      <label class="search-control">
        <AppIcon name="search" :size="13" />
        <input v-model="keyword" type="search" placeholder="搜索模型名称..." />
      </label>
      <div class="chip-group">
        <button
          v-for="category in modelCategories"
          :key="category"
          class="chip"
          :class="{ active: activeCategory === category }"
          type="button"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <section class="panel-card model-table-card">
      <div class="table-scroll">
        <table class="data-table model-table">
          <thead>
            <tr>
              <th></th>
              <th>模型名称</th>
              <th>任务</th>
              <th>框架</th>
              <th>参数量</th>
              <th>大小</th>
              <th>准确率</th>
              <th>调用量</th>
              <th>状态</th>
              <th>更新时间</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="model in filteredModels" :key="model.id">
              <td>
                <button class="star-button" :class="{ active: starred.has(model.id) }" type="button" @click="toggleStar(model.id)">
                  <AppIcon name="star" :size="13" />
                </button>
              </td>
              <td>
                <strong>{{ model.name }}</strong>
                <small>v{{ model.version }} · {{ model.id }}</small>
              </td>
              <td><span class="tag purple">{{ model.task }}</span></td>
              <td class="mono muted">{{ model.framework }}</td>
              <td class="mono">{{ model.params }}</td>
              <td class="mono muted">{{ model.size }}</td>
              <td>
                <div v-if="model.accuracy !== null" class="accuracy-cell">
                  <span><i :style="{ width: `${model.accuracy * 100}%` }"></i></span>
                  <b>{{ (model.accuracy * 100).toFixed(1) }}%</b>
                </div>
                <span v-else class="mono muted">-</span>
              </td>
              <td class="mono muted">{{ model.calls }}</td>
              <td>
                <StatusBadge
                  :label="modelStatusMap[model.status].label"
                  :color="modelStatusMap[model.status].color"
                  :bg="modelStatusMap[model.status].bg"
                />
              </td>
              <td class="mono muted">{{ model.updated }}</td>
              <td>
                <div class="row-actions">
                  <button type="button">查看</button>
                  <button type="button">部署</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</template>
