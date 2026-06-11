export const trainingStatusMap = {
  running: { label: '运行中', color: '#34d399', glow: true },
  done: { label: '已完成', color: '#00d4ff' },
  queued: { label: '排队中', color: '#f59e0b' },
  failed: { label: '已失败', color: '#ef4444' }
}

export const trainingJobs = [
  { id: 'JOB-2847', model: 'GPT-NL-7B', type: 'Fine-tune', status: 'running', progress: 67, epoch: '4/6', step: '12840/19200', lr: '2.4e-5', loss: 0.342, gpu: 4, gpuMem: '87%', eta: '2h 14m', started: '2026-06-11 09:32', dataset: 'zh-corpus-v4', batchSize: 32, lossHistory: [0.98, 0.82, 0.71, 0.62, 0.55, 0.49, 0.44, 0.4, 0.37, 0.34] },
  { id: 'JOB-2846', model: 'ResNet-152-v2', type: 'Train', status: 'running', progress: 91, epoch: '91/100', step: '72800/80000', lr: '1.0e-4', loss: 0.112, gpu: 2, gpuMem: '72%', eta: '18m', started: '2026-06-10 22:14', dataset: 'imagenet-subset-10k', batchSize: 64, lossHistory: [1.42, 1.18, 0.96, 0.78, 0.61, 0.45, 0.34, 0.24, 0.17, 0.11] },
  { id: 'JOB-2845', model: 'BERT-ZH-Large', type: 'Eval', status: 'done', progress: 100, epoch: '-', step: '-', lr: '-', loss: 0.089, gpu: 1, gpuMem: '-', eta: '-', started: '2026-06-11 08:00', dataset: 'clue-benchmark-v2', batchSize: 128, lossHistory: [0.089, 0.089, 0.089, 0.089, 0.089, 0.089, 0.089, 0.089, 0.089, 0.089] },
  { id: 'JOB-2844', model: 'Whisper-ZH-M', type: 'Fine-tune', status: 'queued', progress: 0, epoch: '-', step: '-', lr: '-', loss: null, gpu: 2, gpuMem: '-', eta: '~3h', started: '待启动', dataset: 'aishell-3', batchSize: 16, lossHistory: [] },
  { id: 'JOB-2843', model: 'CLIP-v3', type: 'Train', status: 'failed', progress: 34, epoch: '2/6', step: '6534/19200', lr: '-', loss: null, gpu: 0, gpuMem: '-', eta: '-', started: '2026-06-11 07:45', dataset: 'cc12m-zh', batchSize: 256, lossHistory: [2.1, 1.87, 1.64, 1.49] }
]
