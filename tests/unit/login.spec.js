import {mount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm.vue'


describe('LoginForm.vue', () => {
  it('renders an error when required input fields are empty', async () => {

    const wrapper = mount(LoginForm)
    
    expect(wrapper.find('.error-login').exists()).toBeFalsy()
    
    
    await wrapper.find('.signinButton').trigger('click')

    expect(wrapper.find('.error-login').exists()).toBeTruthy()

    expect(wrapper.findAll('.error-login li').at(0).text()).toEqual('Username required')
    expect(wrapper.findAll('.error-login li').at(1).text()).toEqual('Password required')


    console.log(wrapper.html())
  })
})
