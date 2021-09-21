
import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import indexPage from '@/pages/index'
const vuetify = new Vuetify()

describe('Menu component test: ', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(indexPage, {
      mocks: {
        $vuetify: { breakpoint: {} }
      },
      vuetify
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
