export const latencySummary = [
  { label: 'P50 延迟', value: '38ms', good: true },
  { label: 'P95 延迟', value: '72ms', good: true },
  { label: 'P99 延迟', value: '118ms', good: false },
  { label: '错误率', value: '0.13%', good: true },
  { label: '整体 SLA', value: '99.91%', good: true }
]

export const latencyDistribution = Array.from({ length: 24 }, (_, index) => ({
  hour: `${String(index).padStart(2, '0')}:00`,
  p50: Math.round(30 + Math.sin(index / 3) * 15 + ((index * 7) % 5)),
  p95: Math.round(65 + Math.sin(index / 3) * 20 + ((index * 11) % 8)),
  p99: Math.round(110 + Math.sin(index / 3) * 25 + ((index * 13) % 12))
}))

export const errorTrend = Array.from({ length: 14 }, (_, index) => ({
  day: `06/${String(index + 1).padStart(2, '0')}`,
  rate: +(0.1 + ((index * 7) % 9) / 25).toFixed(2),
  count: 20 + ((index * 17) % 80)
}))

export const modelPerformance = [
  { metric: '准确率', gpt: 93, bert: 87, resnet: 91 },
  { metric: '召回率', gpt: 89, bert: 84, resnet: 88 },
  { metric: 'F1', gpt: 91, bert: 85, resnet: 89 },
  { metric: '推理速度', gpt: 72, bert: 95, resnet: 68 },
  { metric: '内存效率', gpt: 65, bert: 90, resnet: 70 },
  { metric: '鲁棒性', gpt: 88, bert: 80, resnet: 85 }
]

export const slaStatus = [
  { name: 'GPT-NL-7B', sla: 99.87, calls: 1200000, errors: 156 },
  { name: 'BERT-ZH', sla: 99.94, calls: 420000, errors: 25 },
  { name: 'ResNet-152', sla: 99.91, calls: 680000, errors: 61 },
  { name: 'YOLOv9', sla: 99.98, calls: 1800000, errors: 36 },
  { name: 'T5-Sum', sla: 99.79, calls: 230000, errors: 48 }
]
