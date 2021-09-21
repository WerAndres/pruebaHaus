<template>
  <div>
    <gmap-map
      :zoom="14"
      :center="center"
      style="width:100%;  height: 400px;"
    />
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  props: {
    // the currently selected step
    center: {
      type: Object,
      default () {
        return {
          lat: 0,
          lng: 0
        }
      }
    }
  },
  data () {
    return {}
  },

  mounted () {
  }
}
</script>
