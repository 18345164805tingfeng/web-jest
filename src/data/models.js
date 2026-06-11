export const modelStatusMap = {
  deployed: { label: '已部署', color: '#34d399', bg: 'rgba(52, 211, 153, 0.12)' },
  training: { label: '训练中', color: '#00d4ff', bg: 'rgba(0, 212, 255, 0.12)' },
  staging: { label: '预发布', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.12)' },
  deprecated: { label: '已弃用', color: '#6b7280', bg: 'rgba(107, 114, 128, 0.12)' }
}

export const modelCategories = ['全部', '文本生成', '文本分类', '图像分类', '语音识别', '多模态', '文本摘要', '目标检测', '图像生成']

export const models = [
  { id: 'mdl-001', name: 'GPT-NL-7B', family: 'GPT', version: '2.1.0', task: '文本生成', framework: 'PyTorch', size: '14.2GB', params: '7B', status: 'deployed', accuracy: 0.934, calls: '1.2M/日', updated: '2026-06-10', starred: true },
  { id: 'mdl-002', name: 'BERT-ZH-Large', family: 'BERT', version: '3.0.1', task: '文本分类', framework: 'PyTorch', size: '1.4GB', params: '340M', status: 'deployed', accuracy: 0.912, calls: '420K/日', updated: '2026-06-09', starred: false },
  { id: 'mdl-003', name: 'ResNet-152-v2', family: 'ResNet', version: '2.0.0', task: '图像分类', framework: 'TensorFlow', size: '248MB', params: '60M', status: 'deployed', accuracy: 0.881, calls: '680K/日', updated: '2026-06-08', starred: true },
  { id: 'mdl-004', name: 'Whisper-ZH-Medium', family: 'Whisper', version: '1.2.3', task: '语音识别', framework: 'PyTorch', size: '1.5GB', params: '307M', status: 'training', accuracy: null, calls: '-', updated: '2026-06-11', starred: false },
  { id: 'mdl-005', name: 'CLIP-v3', family: 'CLIP', version: '3.0.0', task: '多模态', framework: 'JAX', size: '3.8GB', params: '428M', status: 'staging', accuracy: 0.867, calls: '90K/日', updated: '2026-06-07', starred: false },
  { id: 'mdl-006', name: 'T5-Summarizer-ZH', family: 'T5', version: '1.5.2', task: '文本摘要', framework: 'PyTorch', size: '2.9GB', params: '780M', status: 'deployed', accuracy: 0.889, calls: '230K/日', updated: '2026-06-06', starred: false },
  { id: 'mdl-007', name: 'YOLOv9-Custom', family: 'YOLO', version: '9.1.0', task: '目标检测', framework: 'PyTorch', size: '134MB', params: '68M', status: 'deployed', accuracy: 0.923, calls: '1.8M/日', updated: '2026-06-05', starred: true },
  { id: 'mdl-008', name: 'Stable-Diffusion-ZH', family: 'Diffusion', version: '2.0.0', task: '图像生成', framework: 'PyTorch', size: '6.7GB', params: '1B', status: 'deprecated', accuracy: 0.751, calls: '12K/日', updated: '2026-05-20', starred: false }
]
