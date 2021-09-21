<template>
  <div id="profile">
    <div class="text-2xl md:text-3xl text-center md:mx-16 mx-8 md:mt-16 mt-8 mb-16  font-semibold text-lh-jungle-green">
      {{ profile.name }}
    </div>
    <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
    >
      <v-img :src="profile.picture" height="250" class="justify-center mx-auto mb-4 w-full" />

      <div class=" my-3 justify-center mx-8">
        <div>
          <b>Nombre: </b> {{ profile.name }}
        </div>
        <div>
          <b>Edad: </b> {{ profile.age }}
        </div>
        <div>
          <b>Dirección: </b> {{ profile.address }}
        </div>
        <div>
          <b>Teléfono: </b> {{ profile.phone }}
        </div>
        <div>
          <b>Fecha de creación: </b> {{ profile.createdAt | formatDate }}
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>

import getProfile from '../services/profileService'

export default {

  data () {
    return {
      profile: {}
    }
  },
  mounted () {
    this.getProfileUser()
  },
  methods: {
    async getProfileUser () {
      try {
        this.isLoading = true
        this.profile = await getProfile(this, 1)
        this.isLoading = false
      } catch (e) {
        this.isLoading = false
        this.isError = true
        this.errorMsg = e.message
      }
    }
  }

}
</script>
