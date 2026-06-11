export const summaryMetrics = [
  { label: '在线模型', value: '47', unit: '个', delta: '+3', trend: 'up', color: '#00d4ff' },
  { label: '运行任务', value: '12', unit: '个', delta: '+2', trend: 'up', color: '#34d399' },
  { label: '今日推理', value: '2.4M', unit: '次', delta: '+18%', trend: 'up', color: '#a78bfa' },
  { label: '数据集', value: '318', unit: 'GB', delta: '+24GB', trend: 'up', color: '#f59e0b' }
]

export const qpsLatency = [
  { time: '00:00', qps: 820, latency: 42 },
  { time: '04:00', qps: 430, latency: 38 },
  { time: '08:00', qps: 1240, latency: 55 },
  { time: '10:00', qps: 2100, latency: 72 },
  { time: '12:00', qps: 2480, latency: 68 },
  { time: '14:00', qps: 2300, latency: 64 },
  { time: '16:00', qps: 2850, latency: 78 },
  { time: '18:00', qps: 3100, latency: 82 },
  { time: '20:00', qps: 2600, latency: 71 },
  { time: '22:00', qps: 1800, latency: 58 },
  { time: '23:59', qps: 1200, latency: 49 }
]

export const gpuUsage = [
  { name: 'GPU-01', util: 92, mem: 87 },
  { name: 'GPU-02', util: 78, mem: 72 },
  { name: 'GPU-03', util: 95, mem: 91 },
  { name: 'GPU-04', util: 45, mem: 38 },
  { name: 'GPU-05', util: 88, mem: 84 },
  { name: 'GPU-06', util: 63, mem: 55 }
]

export const recentJobs = [
  { id: 'JOB-2847', model: 'GPT-NL-7B', type: 'Fine-tune', status: 'running', progress: 67, eta: '2h 14m', gpu: 4 },
  { id: 'JOB-2846', model: 'ResNet-152-v2', type: 'Train', status: 'running', progress: 91, eta: '18m', gpu: 2 },
  { id: 'JOB-2845', model: 'BERT-ZH-Large', type: 'Eval', status: 'done', progress: 100, eta: '-', gpu: 1 },
  { id: 'JOB-2844', model: 'Whisper-ZH-M', type: 'Fine-tune', status: 'queued', progress: 0, eta: '~3h', gpu: 2 },
  { id: 'JOB-2843', model: 'CLIP-v3', type: 'Train', status: 'failed', progress: 34, eta: '-', gpu: 0 }
]

export const alerts = [
  { type: 'warn', message: 'GPU-03 显存利用率超过 90%', time: '3m ago' },
  { type: 'error', message: 'JOB-2843 训练异常终止 - OOM', time: '12m ago' },
  { type: 'info', message: '模型 BERT-ZH-Large 评估完成', time: '31m ago' },
  { type: 'info', message: '数据集 zh-corpus-v4 上传完成', time: '1h ago' }
]
