<template>
  <div id="componentItem">
    <v-card class="overflow-hidden">
      <div class="overflow-auto">
        <div class="max-h-96">
          <v-carousel
            height="300"
            cycle
            :show-arrows="false"
          >
            <v-carousel-item
              v-for="(imgURL,i) in currentItem.attributes.gallery_urls"
              :key="i"
              :src="imgURL"
              reverse-transition="fade-transition"
              transition="fade-transition"
            />
            <v-card-title
              class="grey lighten-2 absolute top-5 bg-opacity-80 bg-white"
            >
              <div v-if="currentItem.attributes.country" class="md:text-sm text-xs font-semibold text-lh-jungle-green">
                {{ currentItem.attributes.name }}
              </div>
            </v-card-title>
          </v-carousel>

          <v-divider />
          <v-card-text
            class="
        overflow-auto"
          >
            {{ currentItem.attributes.description }}
          </v-card-text>
          <v-divider />
          <v-card-text
            class="
        overflow-auto"
          >
            <div class="grid grid-cols-2 text-lh-jungle-green">
              <div v-if="currentItem.attributes.min_area" class="col-span-2 md:col-span-1 m-1">
                <b>Área:</b> {{ currentItem.attributes.min_area }} Mts2
              </div>
              <div v-if="currentItem.attributes.min_price" class="col-span-2 md:col-span-1 m-1">
                <b>Precio:</b>  {{ currentItem.attributes.min_price | formatMoney }} {{ currentItem.attributes.max_price ? `- ${currentItem.attributes.max_price}`: '' }}
              </div>
              <div v-if="currentItem.attributes.is_new" class="col-span-2 md:col-span-1 m-1">
                <b>Nuevo</b>
              </div>
              <div v-if="currentItem.attributes.stratum" class="col-span-2 md:col-span-1 m-1">
                <b>Estrato:</b> {{ currentItem.attributes.stratum }}
              </div>
              <div v-if="currentItem.attributes.administration_price" class="col-span-2 md:col-span-1 m-1">
                <b>Precio Adminitración:</b> {{ currentItem.attributes.administration_price | formatMoney }}
              </div>
              <div v-if="currentItem.attributes.bathroom.length > 0" class="col-span-2 md:col-span-1 m-1">
                <b>Número de baños:</b> {{ currentItem.attributes.bathroom[0] }}
              </div>
              <div v-if="currentItem.attributes.bedroom.length > 0" class="col-span-2 md:col-span-1 m-1">
                <b>Número de habitaciones:</b> {{ currentItem.attributes.bedroom[0] }}
              </div>
              <div v-if="currentItem.attributes.parking_lots_units.length > 0" class="col-span-2 md:col-span-1 m-1">
                <b>Número de unidades de estacionamiento:</b> {{ currentItem.attributes.parking_lots_units[0] }}
              </div>
              <div v-if="currentItem.attributes.parking_lots > 0" class="col-span-2 md:col-span-1 m-1">
                <b>Número de estacionamientos:</b> {{ currentItem.attributes.parking_lots[0] }}
              </div>
              <div v-if="currentItem.attributes.year_built > 0" class="col-span-2 md:col-span-1 m-1">
                <b>Año de construcción:</b> {{ currentItem.attributes.year_built }}
              </div>
              <div v-if="currentItem.attributes.reservation_fee" class="col-span-2 md:col-span-1 m-1">
                <b>Tarifa de reserva:</b> {{ currentItem.attributes.reservation_fee | formatMoney }}
              </div>
              <div v-if="currentItem.attributes.reservation_fee_measure_unit" class="col-span-2 md:col-span-1 m-1">
                <b>Unidad de medida de tarifa de reserva:</b> {{ currentItem.attributes.reservation_fee_measure_unit }}
              </div>
              <div v-if="currentItem.attributes.builder" class="col-span-2 md:col-span-1 m-1">
                <b>Construtora:</b> {{ currentItem.attributes.builder }}
              </div>
              <div v-if="currentItem.attributes.fiduciary" class="col-span-2 md:col-span-1 m-1">
                <b>Fiduciaria:</b> {{ currentItem.attributes.fiduciary }}
              </div>
              <div v-if="currentItem.attributes.delivered_at" class="col-span-2 md:col-span-1 m-1">
                <b>Entregado:</b> {{ currentItem.attributes.delivered_at | formatDate }}
              </div>
              <div v-if="currentItem.attributes.price_per_square_meter" class="col-span-2 md:col-span-1 m-1">
                <b>Precio por metro cuadrado:</b> {{ currentItem.attributes.price_per_square_meter | formatMoney }}
              </div>
              <div v-if="currentItem.attributes.amenities.length > 0" class="col-span-2 md:col-span-1 m-1">
                <b>Comodidades:</b>
                <div v-for="(elem, i) in currentItem.attributes.amenities" :key="i" class="ml-3">
                  {{ elem }}
                </div>
              </div>
            </div>
          </v-card-text>
          <v-divider />
          <v-card-text>
            <div class="grid grid-cols-2 text-lh-jungle-green">
              <div v-if="currentItem.attributes.country" class="col-span-2 md:col-span-1 m-1 text-lh-jungle-green">
                <b>País:</b> {{ currentItem.attributes.country }}
              </div>
              <div v-if="currentItem.attributes.city" class="col-span-2 md:col-span-1 m-1">
                <b>Ciudad:</b> {{ currentItem.attributes.city }}
              </div>
              <div v-if="currentItem.attributes.neighborhood" class="col-span-2 md:col-span-1 m-1">
                <b>Barrio:</b> {{ currentItem.attributes.neighborhood }}
              </div>
            </div>
            <googleMap :center="{lat: currentItem.attributes.latitude, lng: currentItem.attributes.longitude}" />
          </v-card-text>
        </div>
      </div>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          text
          @click="closeDialog()"
        >
          salir
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import googleMap from '~/components/googleMaps.vue'

export default {
  components: {
    googleMap
  },
  props: {
    // the currently selected step
    currentItem: {
      type: Object,
      default () {
        return { attributes: { } }
      },
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    closeDialog () {
      this.$emit('action', false)
    }
  }
}
</script>
