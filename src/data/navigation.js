export const navItems = [
  { id: 'dashboard', label: '总览', icon: 'grid' },
  { id: 'models', label: '模型管理', icon: 'model', badge: 12 },
  { id: 'training', label: '训练任务', icon: 'train', badge: 3 },
  { id: 'datasets', label: '数据集', icon: 'data' },
  { id: 'inference', label: '推理服务', icon: 'zap' },
  { id: 'metrics', label: '监控指标', icon: 'chart' },
  { id: 'access', label: '访问控制', icon: 'lock' },
  { id: 'settings', label: '系统设置', icon: 'gear' }
]

export const pageTitles = Object.fromEntries(navItems.map((item) => [item.id, item.label]))
