
import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import menuComponent from '@/components/Menu'
const vuetify = new Vuetify()

describe('Menu component test: ', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(menuComponent, {
      mocks: {
        $vuetify: { breakpoint: {} }
      },
      vuetify
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
