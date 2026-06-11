<script setup>
import { ref } from 'vue'
import AppIcon from '../components/common/AppIcon.vue'
import LineChart from '../components/common/LineChart.vue'
import StatusBadge from '../components/common/StatusBadge.vue'
import { trainingJobs, trainingStatusMap } from '../data/training'

const openedJob = ref('JOB-2847')
const logJob = ref(null)

function toggleJob(id) {
  openedJob.value = openedJob.value === id ? null : id
}
</script>

<template>
  <main class="view-page">
    <div class="view-title-row">
      <div>
        <h1>训练任务</h1>
        <p>2 运行中 · 1 排队 · 1 失败</p>
      </div>
      <button class="primary-action" type="button">
        <AppIcon name="plus" :size="14" />
        新建任务
      </button>
    </div>

    <section class="job-list">
      <article v-for="job in trainingJobs" :key="job.id" class="job-panel">
        <button class="job-summary" type="button" @click="toggleJob(job.id)">
          <span class="chevron">{{ openedJob === job.id ? '⌄' : '›' }}</span>
          <span class="mono accent job-id">{{ job.id }}</span>
          <span class="job-name">
            {{ job.model }}
            <em>{{ job.type }}</em>
          </span>
          <span class="job-progress">
            <i><b :style="{ width: `${job.progress}%`, background: trainingStatusMap[job.status].color }"></b></i>
            <strong>{{ job.progress }}%</strong>
          </span>
          <span class="mono muted eta">{{ job.eta }}</span>
          <StatusBadge
            :label="trainingStatusMap[job.status].label"
            :color="trainingStatusMap[job.status].color"
            :glow="trainingStatusMap[job.status].glow"
            dot
          />
          <span class="job-actions" @click.stop>
            <button v-if="job.status === 'running'" type="button">停止</button>
            <button v-else-if="job.status === 'queued'" type="button">启动</button>
            <button v-else type="button">重跑</button>
            <button type="button" @click="logJob = logJob === job.id ? null : job.id">日志</button>
          </span>
        </button>

        <div v-if="openedJob === job.id" class="job-detail">
          <div class="detail-grid">
            <div v-for="[label, value] in [
              ['Epoch', job.epoch],
              ['Step', job.step],
              ['学习率', job.lr],
              ['当前Loss', job.loss !== null ? job.loss.toFixed(4) : '-'],
              ['GPU数量', job.gpu > 0 ? `x${job.gpu}` : '-'],
              ['显存占用', job.gpuMem],
              ['数据集', job.dataset],
              ['Batch Size', job.batchSize]
            ]" :key="label">
              <span>{{ label }}</span>
              <strong>{{ value }}</strong>
            </div>
          </div>

          <div v-if="job.lossHistory.length" class="loss-panel">
            <span>LOSS CURVE</span>
            <LineChart
              :data="job.lossHistory.map((loss, index) => ({ step: index + 1, loss }))"
              x-key="step"
              :height="105"
              :series="[{ key: 'loss', color: '#00d4ff' }]"
            />
          </div>
        </div>

        <div v-if="logJob === job.id" class="log-panel">
          <span>STDOUT LOG</span>
          <p>[2026-06-11 11:24:03] Epoch 4, Step 12840/19200 - loss=0.342 | lr=2.4e-5 | grad_norm=0.81</p>
          <p>[2026-06-11 11:23:45] Checkpoint saved: checkpoints/{{ job.id }}/step_12800.pt</p>
          <p>[2026-06-11 11:23:20] GPU memory peak: {{ job.gpuMem }}</p>
        </div>
      </article>
    </section>
  </main>
</template>
