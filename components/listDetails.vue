<template>
  <div id="componentListItem">
    <v-card class="overflow-hidden">
      <v-card-title class="text-h5 grey lighten-2">
        {{ currentItem.attributes.name }}
      </v-card-title>
      <v-divider />
      <v-card-text v-if="currentListItem.length > 0" class="overflow-auto">
        <v-list three-line class="max-h-96">
          <div class="max-h-96">
            <template v-for="(item, index) in currentListItem">
              <v-list-item :key="item.id">
                <v-list-item-content>
                  <div class="grid grid-cols-6">
                    <div class="col-span-6 md:col-span-1 mt-4 cursor-pointer" @click="clickDetail(item)">
                      <v-img v-if="item.attributes.gallery_urls" class="rounded-md md:w-20 w-full " height="80px" :src="item.attributes.gallery_urls[0]" />
                      <v-img v-else :src="'/defaultHouse.png'" class="rounded-md md:w-20 w-full " height="80px" />
                    </div>
                    <div class="col-span-5 mt-1">
                      <v-list-item-title class="md:text-sm text-xs font-semibold cursor-pointer hover:text-lh-caribbean-green" @click="clickDetail(item)">
                        {{ item.attributes.name }}
                        <div v-if="item.attributes.is_new" class="text-xs text-white relative float-right bg-lh-caribbean-green p-1 rounded-md">
                          new
                        </div>
                      </v-list-item-title>
                      <v-list-item-subtitle class="mt-2 mb-2">
                        {{ item.attributes.description }}
                      </v-list-item-subtitle>
                      <div class="grid mb-1">
                        <div class="md:col-span-1 col-span-6">
                          <b>{{ item.attributes.neighborhood }}, {{ item.attributes.city }}, {{ item.attributes.country }}</b>
                        </div>
                      </div>
                      <div class="grid grid-cols-3">
                        <div class="md:col-span-1 col-span-3">
                          <b>Area:</b> {{ item.attributes.min_area }} Mts2
                        </div>
                        <div class="md:col-span-1 col-span-3">
                          <b>Estrato:</b> {{ item.attributes.stratum }}
                        </div>
                        <div class="md:col-span-1 col-span-3">
                          <b>Precio:</b> {{ item.attributes.min_price | formatMoney }} {{ item.attributes.max_price ? `- ${item.attributes.max_price}`: '' }}
                        </div>
                      </div>
                    </div>
                  </div>
                </v-list-item-content>
                <div />
              </v-list-item>
              <v-divider
                :key="index"
                inset
                class="ml-28"
              />
            </template>
          </div>
        </v-list>
      </v-card-text>
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
    <v-dialog
      v-model="dialogDetail"
      width="900"
    >
      <detailsItem :current-item="currentSelect" @action="stateDialog" />
    </v-dialog>
  </div>
</template>
<script>

import detailsItem from '../components/detailsItem.vue'

export default {
  components: {
    detailsItem
  },
  props: {
    // the currently selected step
    currentItem: {
      type: Object,
      default () {
        return { attributes: { } }
      },
      required: true
    },
    currentListItem: {
      type: Array,
      default () {
        return []
      },
      required: true
    }
  },
  data () {
    return {
      dialogDetail: false,
      currentSelect: {}
    }
  },
  methods: {
    closeDialog () {
      this.$emit('action', false)
    },
    clickDetail (item) {
      this.dialogDetail = true
      // add multiple images
      /* item.attributes.gallery_urls.push('https://www.xtrafondos.com/descargar.php?id=3963&resolucion=2560x1440')
      item.attributes.gallery_urls.push('https://fondosmil.com/fondo/32718.jpg')
      item.attributes.gallery_urls.push('https://images.unsplash.com/photo-1615572766543-06c21416eb05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVsbCUyMGhkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80')
      item.attributes.gallery_urls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSCtPHWuF_jk2pTNyiU8HvtPzlgHYJHwM9w&usqp=CAU') */
      this.currentSelect = item
    },
    stateDialog (action) {
      this.dialogDetail = action
    }
  }
}
</script>
