<template>
  <div id="app" data-app class="font-sans">
    <Menu />
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>
<script>
import Menu from '../components/Menu'

export default {
  components: { Menu }
}
</script>
