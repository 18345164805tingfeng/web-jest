import { mount } from '@vue/test-utils'
import MetricsView from '../views/MetricsView.vue'

describe('MetricsView', () => {
  it('renders monitoring KPIs and SLA section defined by the PRD', () => {
    const wrapper = mount(MetricsView)

    expect(wrapper.text()).toContain('P50 延迟')
    expect(wrapper.text()).toContain('P95 延迟')
    expect(wrapper.text()).toContain('P99 延迟')
    expect(wrapper.text()).toContain('错误率')
    expect(wrapper.text()).toContain('整体 SLA')
    expect(wrapper.text()).toContain('模型 SLA 状态')
    expect(wrapper.text()).toContain('GPT-NL-7B')
  })

  it('marks 24H as the active monitoring range', () => {
    const wrapper = mount(MetricsView)
    const activeChip = wrapper.findAll('button.chip').find((button) => button.text() === '24H')

    expect(activeChip.classes()).toContain('active')
  })
})
