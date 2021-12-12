import { shallowMount } from '@vue/test-utils'
import RegisterForm from '@/components/RegisterForm.vue'

describe('RegisterForm.vue', () => {
  it('', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
