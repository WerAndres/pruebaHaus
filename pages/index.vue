<template>
  <div>
    <div class="text-2xl md:text-3xl text-center md:mx-16 mx-8 md:mt-16 mt-8 mb-16  font-semibold text-lh-jungle-green">
      Listas de favoritos
    </div>
    <div v-if="!isError" class="w-full mr-auto ml-auto text-center flex justify-center">
      <div v-if="isLoading" class="md:mt-10 max-w-7xl row">
        <div v-for="h in 6" :key="h" class="col grid mb-14 md:ml-8 max-w-xs mr-auto ml-auto justify-center">
          <div class="w-72 h-52">
            <v-skeleton-loader
              class="mx-auto"
              max-width="300"
              type="card"
            />
          </div>
        </div>
      </div>
      <div v-if="!isLoading" class="md:mt-10 max-w-screen-2xl row">
        <div v-for="item in data" :key="item.id" class="col grid mb-14 md:ml-8 max-w-xs mr-auto ml-auto justify-center">
          <div class="w-72 h-52">
            <div v-if="item.attributes.real_estate_ids.length === 0" class="absolute z-30">
              <v-img
                class="rounded-lg border-2 border-solid border-white"
                height="200px"
                width="290px"
                :src="searchInfo(item.attributes.real_estate_ids[0]).attributes.gallery_urls[0]"
              />
            </div>
            <div v-if="item.attributes.real_estate_ids.length > 0" class="absolute z-30">
              <v-img
                class="rounded-lg border-2 border-solid border-white"
                height="200px"
                :width="item.attributes.real_estate_ids.length === 1 ? '290px' : '150px'"
                :src="searchInfo(item.attributes.real_estate_ids[0]).attributes.gallery_urls[0]"
              />
            </div>
            <div v-if="item.attributes.real_estate_ids.length > 2" class="absolute z-20 ml-20">
              <v-img
                class="rounded-lg border-2 border-solid border-white"
                height="200px"
                width="150px"
                :src="searchInfo(item.attributes.real_estate_ids[1]).attributes.gallery_urls[0]"
              />
            </div>
            <div
              v-if="item.attributes.real_estate_ids.length > 1"
              :class="`absolute z-10 ${ item.attributes.real_estate_ids.length === 2 ? 'ml-24' : 'ml-36'}`"
            >
              <v-img
                class="rounded-lg border-2 border-solid border-white "
                height="200px"
                :width="item.attributes.real_estate_ids.length === 2 ? '200px' : '150px'"
                :src="item.attributes.real_estate_ids.length > 2 ? searchInfo(item.attributes.real_estate_ids[2]).attributes.gallery_urls[0] : searchInfo(item.attributes.real_estate_ids[1]).attributes.gallery_urls[0]"
              />
              <img
                v-if="item.attributes.real_estate_ids.length > 2"
                class="rounded-lg border-2 border-solid border-white absolute top-0 opacity-70 bg-lh-jungle-green"
                height="202px"
                width="150px"
              >
              <div v-if="item.attributes.real_estate_ids.length > 2" class="absolute top-2/4 right-4 mr-2 -mt-4 text-white text-lg font-semibold">
                +{{ item.attributes.real_estate_ids.length - 2 }}
              </div>
            </div>
          </div>
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <div
                v-bind="attrs"
                class="text-lg font-semibold mt-5 text-lh-jungle-green leading-4 text-left whitespace-nowrap overflow-ellipsis overflow-hidden"
                v-on="on"
              >
                {{ item.attributes.name }}
              </div>
            </template>
            <span>{{ item.attributes.name }}</span>
          </v-tooltip>
          <div class="text-sm text-gray-400 mt-3 leading-6 text-left">
            {{ item.attributes.real_estate_ids.length }} propiedades guardadas
          </div>
        </div>
        <div class="col grid mb-14 md:ml-8 max-w-xs mr-auto ml-auto justify-center">
          <div class="w-72 h-52 rounded-lg border-2 border-solid border-white bg-lh-md-blue text-center py-20 px-28">
            <v-img
              src="/plus.svg"
              class="ml-2"
              height="40px"
              width="40px"
            />
          </div>
          <div class="text-lg font-medium mt-5 text-lh-sky-blue text-center leading-3">
            Crear una nueva lista
          </div>
        </div>
      </div>
    </div>
    <div v-if="isError" class="text-center w-full">
      <v-alert
        prominent
        type="error"
        class="max-w-xl ml-auto mr-auto"
      >
        <v-row align="center">
          <v-col class="grow">
            {{ errorMsg }}
          </v-col>
        </v-row>
      </v-alert>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import getListRealEstates from '../services/realEstatesService'

export default Vue.extend({
  layout: 'default',
  data () {
    return {
      data: [],
      included: [],
      isLoading: true,
      isError: false,
      errorMsg: ''
    }
  },
  mounted () {
    this.getRealEstates()
  },
  methods: {
    async getRealEstates () {
      try {
        this.isLoading = true
        const result = await getListRealEstates(this)
        this.data = result.data
        this.included = result.included
        this.isLoading = false
      } catch (e) {
        this.isLoading = false
        this.isError = true
        this.errorMsg = e.message
      }
    },
    searchInfo (id: any) {
      if (id) {
        return this.included.find((elem: any) => elem.id === id.toString()) || { attributes: { gallery_urls: ['defaultHouse.png'] } }
      } else {
        return { attributes: { gallery_urls: ['/defaultHouse.png'] } }
      }
    }
  }

})
</script>
