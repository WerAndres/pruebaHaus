<template>
  <div id="menu">
    <v-card
      name="card"
      flat
      tile
      class="bg-white"
      heigth="60"
    >
      <v-toolbar
        flat
      >
        <v-toolbar-title>
          <div class="block md:hidden float-left">
            <MenuAlt2Icon @click.stop="drawer = !drawer" />
            <div class="h-2 w-2 rounded-full float-right -ml-2 bg-lh-caribbean-green relative -top-6" />
          </div>
          <div class="md:ml-12 ml-3 md:mt-0 mt-1 float-left">
            <a href="/">
              <img
                height="24px"
                width="24px"
                src="~/static/logo.svg"
                class="float-left"
              >
              <img src="~/static/LaHaus.svg" class="float-left ml-3 mt-1 md:block hidden">
            </a>
          </div>
        </v-toolbar-title>
        <v-spacer />
        <div v-for="elem in itemsMenu" :key="elem.name" class="float-right">
          <div v-if="elem.subItems === undefined" class="float-left md:block hidden">
            <a :href="elem.href" class="ml-10">
              {{ elem.name }}
            </a>
          </div>

          <div v-else class="float-right ml-12 mr-7 md:block hidden">
            <v-menu
              offset-y
              class="bg-white"
            >
              <template #activator="{ on, attrs }">
                <div
                  v-bind="attrs"
                  :id="elem.id"
                  class="h-5 w-30"
                  v-on="on"
                >
                  <b class="float-left">{{ elem.name }}</b>
                  <ChevronDownIcon />
                  <div class="h-2 w-2 rounded-full float-right -ml-2 bg-lh-caribbean-green relative -top-6" />
                </div>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in elem.subItems"
                  :key="i"
                >
                  <a :id="item.id" :href="item.href" class="text-black">
                    <span class="ml-1 text-black">
                      {{ item.name }}
                    </span>
                  </a>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </v-toolbar>
    </v-card>
    <v-divider class="bg-lh-bg-gray" />
    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
      class="z-100"
    >
      <div class="w-full inline-flex justify-center py-5">
        <a href="/">
          <img
            height="24px"
            width="24px"
            src="~/static/logo.svg"
            class="float-left"
          >
          <img src="~/static/LaHaus.svg" class="float-left ml-3 mt-1">
        </a>
      </div>
      <v-list
        nav
        dense
      >
        <v-container v-for="elem in itemsMenu" :key="elem.name">
          <v-list-item v-if="elem.subItems === undefined">
            <v-list-item-title>
              <a :href="elem.href">{{ elem.name }}</a>
            </v-list-item-title>
          </v-list-item>

          <v-list-group
            v-else
          >
            <template #activator>
              <v-list-item-title>{{ elem.name }}</v-list-item-title>
            </template>

            <v-list-item
              v-for="subElem in elem.subItems"
              :key="subElem.name"
              link
            >
              <v-list-item-title>
                <a :href="subElem.href">{{ subElem.name }}</a>
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-container>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { MenuAlt2Icon, ChevronDownIcon } from '@vue-hero-icons/outline'

export default {
  components: {
    MenuAlt2Icon, ChevronDownIcon
  },
  data () {
    return {
      itemsMenu: [
        { name: 'Cundinamarca', href: '#Cundinamarca' },
        { name: 'Antioquia', href: '#Antioquia' },
        { name: 'Recursos', href: '#Recursos' },
        {
          name: 'Mi perfil',
          subItems: [
            { name: 'Ir a mi perfil', href: 'profile', id: 'profileButton' },
            { name: 'Cerrar sesión', href: '#logOut' }
          ],
          id: 'profileMenu'
        }
      ],
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline']
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete']
      ],
      drawer: false,
      group: null
    }
  },
  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>

<style lang="scss">
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
