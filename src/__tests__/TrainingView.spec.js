import { mount } from '@vue/test-utils'
import TrainingView from '../views/TrainingView.vue'

describe('TrainingView', () => {
  it('shows expanded training details for the default running job', () => {
    const wrapper = mount(TrainingView)

    expect(wrapper.text()).toContain('JOB-2847')
    expect(wrapper.text()).toContain('Epoch')
    expect(wrapper.text()).toContain('zh-corpus-v4')
    expect(wrapper.text()).toContain('LOSS CURVE')
  })

  it('can collapse and expand a training job detail panel', async () => {
    const wrapper = mount(TrainingView)
    const jobButton = wrapper.find('.job-summary')

    await jobButton.trigger('click')
    expect(wrapper.text()).not.toContain('LOSS CURVE')

    await jobButton.trigger('click')
    expect(wrapper.text()).toContain('LOSS CURVE')
  })

  it('toggles stdout log panel for a training task', async () => {
    const wrapper = mount(TrainingView)
    const logButton = wrapper.findAll('.job-actions button').find((button) => button.text() === '日志')

    await logButton.trigger('click')

    expect(wrapper.text()).toContain('STDOUT LOG')
    expect(wrapper.text()).toContain('Checkpoint saved')
  })
})
