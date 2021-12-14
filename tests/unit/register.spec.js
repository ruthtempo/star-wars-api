import { mount } from '@vue/test-utils'
import RegisterForm from '@/components/RegisterForm.vue'

describe('RegisterForm.vue', () => {
  it('renders an error when required input fields are empty or do not adjust to required patterns', async () => {

    const wrapper = mount(RegisterForm)
    
    expect(wrapper.find('.error-message').exists()).toBeFalsy()
    
    
    await wrapper.find('.createAccountButton').trigger('click')

    expect(wrapper.find('.error-message').exists()).toBeTruthy()
    expect(wrapper.findAll('.error-message li').at(0).text()).toEqual('Name required')
    expect(wrapper.findAll('.error-message li').at(1).text()).toEqual('Email required')
    expect(wrapper.findAll('.error-message li').at(2).text()).toEqual('Username required')
    expect(wrapper.findAll('.error-message li').at(3).text()).toEqual('Username must be at least 7 characters')
    expect(wrapper.findAll('.error-message li').at(4).text()).toEqual('Password required')


    console.log(wrapper.html())
  })
})
