
import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import googleMapsComponent from '@/components/GoogleMaps'

import '~/plugins/googleMaps'

const vuetify = new Vuetify()

describe('Google maps component test: ', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(googleMapsComponent, {
      mocks: {
        $vuetify: { breakpoint: {} }
      },
      propsData: {
        center: {
          lat: 0,
          lng: 0
        }
      },
      vuetify
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
