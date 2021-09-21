
import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import profilePage from '@/pages/profile'
import '~/plugins/filters'
const vuetify = new Vuetify()

describe('Menu component test: ', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(profilePage, {
      mocks: {
        $vuetify: { breakpoint: {} }
      },
      vuetify
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
