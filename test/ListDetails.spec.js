
import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import listDetailsComponent from '@/components/ListDetails'
import '~/plugins/filters'
const vuetify = new Vuetify()

describe('List details component test: ', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(listDetailsComponent, {
      mocks: {
        $vuetify: { breakpoint: {} }
      },
      propsData: {
        currentItem: {
          id: '43148',
          attributes: {
            name: 'Mis favoritos',
            real_estate_ids: [
              195748,
              196996
            ]
          }
        },
        currentListItem: [
          {
            id: '195748',
            attributes: {
              slug: 'apartamento-en-venta-santa-paula-195748',
              name: 'Apartamento en venta en Santa Paula con Bbq...',
              description: 'Venta espectacular apartamento vista exterior cuarto piso en el exclusivo sector de Santa Paula en la ciudad de Bogotá, cuenta con un área de 79 metros cuadrados, distribuidos en dos habitaciones cómodas, dos baños y cocina abierta integrada al área social, cuenta con dos amplios garajes cubiertos independientes y un deposito. El edificio tiene vigilancia las 24 horas, gimnasio, zona para niños y un excelente salón social. El apartamento se encuentra ubicado en una zona estratégica, dado que esta en sitio residencial tranquilo, pero cerca de centros comerciales, restaurantes, supermercados, iglesias, gimnasios, entre otros. Se encuentra cerca de vías principales y ciclo rutas, lo cual facilita su acceso a cualquier zona de la ciudad. Santa Paula es un barrio exclusivo y representativo del norte de la ciudad, caracterizado por ser residencial, por sus extensas zonas verdes para el deporte al aire libre, teatros, restaurantes, clubes, iglesias y centros comerciales.',
              code: 'simi503-5280',
              city: 'Bogotá',
              country: 'Colombia',
              neighborhood: 'Santa Paula',
              min_area: 79,
              min_price: 520000000,
              max_price: null,
              is_new: false,
              stratum: 5,
              matterport: null,
              gallery_urls: [
                'https://lh-sobreplanos-staging.imgix.net/uploads/real_estate_attachment/picture/4275620/uba_120_apartamentos_en_venta_en_santa_barbara_oriental_con_20m_gallery_0df5de59994bbcf41714.jpg'
              ],
              administration_price: 459000,
              bathroom: [
                2
              ],
              bedroom: [
                2
              ],
              amenities: [
                'Ascensor',
                'Gimnasio',
                'Juegos Infantiles',
                'Salón Social',
                'BBQ',
                'Parqueadero de Visitantes',
                'Zonas Verdes'
              ],
              parking_lots_units: [
                2
              ],
              parking_lots: [
                2
              ],
              year_built: 2016,
              reservation_fee: null,
              reservation_fee_measure_unit: null,
              builder: null,
              fiduciary: null,
              latitude: 4.6894803,
              longitude: -74.0456966,
              la_haus_state: 'active',
              is_prelaunch: false,
              la_haus_city: 'Bogotá',
              delivered_at: '2016-01-01T00:00:00.000-05:00',
              price_per_square_meter: 6582278,
              minimum_price_guaranteed: null
            }
          },
          {
            id: '196996',
            attributes: {
              slug: 'venta-apartamento-puente-largo-196996',
              name: 'Venta - Apartamento - Puente Largo',
              description: 'En venta apartamento barrio Puente Largo con muy buena iluminación en todas sus áreas. 3 alcobas más estudio. Alcoba principal con baño. Baño para habitaciones y social. Sala-Comedor con chimenea. Cocina integral tipo americano. Zona de ropas independiente. Remodelado en pisos, clósets, cocina, baños, tubería y redes eléctricas. Un garaje. Shut de basuras. Estrato 5. Antigüedad 25 años. Cerca de colegios, parques, zonas verdes, juegos infantiles, centros comerciales, vías de acceso y transporte público.',
              code: 'wasi-3279304',
              city: 'Bogotá',
              country: 'Colombia',
              neighborhood: 'Barrio Pasadena',
              min_area: 107,
              min_price: 360000000,
              max_price: null,
              is_new: false,
              stratum: 5,
              matterport: null,
              gallery_urls: [
                'https://lh-sobreplanos-staging.imgix.net/uploads/real_estate_attachment/picture/1451171/hacienda_niquia_apartamentos_en_venta_de_2_3_hab_gallery_e4dd46fae78e09fb034c.jpg'
              ],
              administration_price: 300000,
              bathroom: [
                2
              ],
              bedroom: [
                3
              ],
              amenities: [
                'Juegos Infantiles',
                'Cancha de Fútbol',
                'Cancha Múltiple',
                'Parqueadero de Visitantes',
                'Zonas Verdes',
                'Cancha de Baloncesto',
                'Shut de Basura'
              ],
              parking_lots_units: [
                1
              ],
              parking_lots: [
                1
              ],
              year_built: 1995,
              reservation_fee: null,
              reservation_fee_measure_unit: null,
              builder: null,
              fiduciary: null,
              latitude: 4.691447059766118,
              longitude: -74.06594038009645,
              la_haus_state: 'active',
              is_prelaunch: false,
              la_haus_city: 'Bogotá',
              delivered_at: '1995-01-01T00:00:00.000-05:00',
              price_per_square_meter: 3364485,
              minimum_price_guaranteed: null
            }
          }
        ]
      },
      vuetify
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
