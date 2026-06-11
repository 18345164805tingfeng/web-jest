import { mount } from '@vue/test-utils'
import ModelsView from '../views/ModelsView.vue'

describe('ModelsView', () => {
  it('filters models by keyword according to the PRD search behavior', async () => {
    const wrapper = mount(ModelsView)
    const input = wrapper.find('input[type="search"]')

    await input.setValue('bert')

    expect(wrapper.text()).toContain('BERT-ZH-Large')
    expect(wrapper.text()).not.toContain('GPT-NL-7B')
    expect(wrapper.text()).toContain('1 / 8 个模型')
  })

  it('filters models by task category', async () => {
    const wrapper = mount(ModelsView)

    await wrapper.findAll('button.chip').find((button) => button.text() === '图像分类').trigger('click')

    expect(wrapper.text()).toContain('ResNet-152-v2')
    expect(wrapper.text()).not.toContain('BERT-ZH-Large')
  })

  it('toggles model favorite state', async () => {
    const wrapper = mount(ModelsView)
    const firstStar = wrapper.find('.star-button')

    expect(firstStar.classes()).toContain('active')

    await firstStar.trigger('click')

    expect(firstStar.classes()).not.toContain('active')
  })
})
