import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App navigation', () => {
  it('renders dashboard by default and switches to implemented modules', async () => {
    const wrapper = mount(App)

    expect(wrapper.text()).toContain('系统总览')
    expect(wrapper.text()).toContain('在线模型')
    expect(wrapper.text()).toContain('ALL SYSTEMS OPERATIONAL')

    await wrapper.findAll('button').find((button) => button.text().includes('模型管理')).trigger('click')
    expect(wrapper.text()).toContain('模型管理')
    expect(wrapper.text()).toContain('GPT-NL-7B')
    expect(wrapper.text()).toContain('导入模型')

    await wrapper.findAll('button').find((button) => button.text().includes('训练任务')).trigger('click')
    expect(wrapper.text()).toContain('训练任务')
    expect(wrapper.text()).toContain('JOB-2847')
    expect(wrapper.text()).toContain('新建任务')

    await wrapper.findAll('button').find((button) => button.text().includes('监控指标')).trigger('click')
    expect(wrapper.text()).toContain('监控指标')
    expect(wrapper.text()).toContain('整体 SLA')
  })

  it('shows placeholder for modules planned in the PRD but not implemented yet', async () => {
    const wrapper = mount(App)

    await wrapper.findAll('button').find((button) => button.text().includes('数据集')).trigger('click')

    expect(wrapper.text()).toContain('数据集 - 模块开发中')
  })
})
