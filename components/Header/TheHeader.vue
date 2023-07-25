<template>
  <div>
    <!---------- Start Navigation Drawer ---------->
      <v-navigation-drawer
          class="hidden-md-and-down"
          mini-variant
          mini-variant-width="70"
         fixed
         :right="$vuetify.rtl"
         app

      >
      <v-list-item class="py-4 px-1 logo-box">
        <div class="logo">
          <NuxtLink :to="localePath('/')" >
          <v-img v-if="!$vuetify.theme.dark" width="50" :src="require('static/logo2.png')" ></v-img>
          <v-img v-else width="50" :src="require('static/logo2.png')" ></v-img>
        </NuxtLink>

        </div>
        <v-spacer></v-spacer>
        <v-btn class="close-icon" icon @click="drawer = !drawer"> <v-icon>mdi-close</v-icon></v-btn>
      </v-list-item>
      <v-divider></v-divider>

      <v-list>
        <v-list-item>
        <v-app-bar-nav-icon  @click.stop="drawer = !drawer" />

        </v-list-item>
      </v-list>




   <template v-slot:append>

      <social-media />

      <v-tooltip top  color="#3a37eb">
    <template v-slot:activator="{ on, attrs }">
      <div class="pa-0">

<v-btn :to="localePath('/contacts')" v-bind="attrs" v-on="on"  class="pa-0 ma-0 btn default rounded-0 white-text-bg-dark"  height="72" min-width="100%">
<i class="fa-duotone fa-envelope fa-lg"></i> </v-btn>
</div>

    </template>
    <span>Get in Touch</span>
  </v-tooltip>
    </template>

    </v-navigation-drawer>

    <v-navigation-drawer
    :right="$vuetify.rtl"
      v-model="drawer"
      temporary
      width="600px"
      fixed
      class="nav-main"
    >
    <v-list-item class="pa-5">
        <div class="logo">
          <NuxtLink :to="localePath('/')" >
          <v-img v-if="!$vuetify.theme.dark" width="170px" :src="require('static/sidebar-dark.png')" ></v-img>
          <v-img v-else width="170px" :src="require('static/sidebar-white.png')" ></v-img>
        </NuxtLink>

        </div>
        <v-spacer></v-spacer>
        <v-btn class="close-icon" icon @click="drawer = !drawer"> <v-icon>mdi-close</v-icon></v-btn>
      </v-list-item>
        <v-divider class="white--text"></v-divider>
        <ul class="menu pa-10" >
              <li class="menu-item" v-for="(link, i) in links" :key="i">
                <NuxtLink  class="menu-link"
                v-if="!link.subLinks"
                :to="localePath(link.to)"
                active-class="primary--text"
                exact
                >
                  <sup>{{ link.number }}</sup>
                  <div class="item-label">{{ $t(link.title) }}</div>
                </NuxtLink>
              </li>


            </ul>


<!--
    <v-list  dense class="menu pa-16">
        <div class="menu-item" v-for="(link, i) in links" :key="i">
          <v-list-item
            v-if="!link.subLinks"
            :to="localePath(link.to)"
            active-class="primary--text"
            class="menu-link v-list-item"
            exact
          >
          <sup>{{ link.number }}</sup>
            <v-list-item-title class="item-label" v-text="$t(link.title)" />
          </v-list-item>
        </div>

      </v-list>

 -->

<template v-slot:append>
  <v-divider class="white--text"></v-divider>
  <v-list-item class="pa-5">

        <v-badge bottom color="error" overlap offset-x="25" offset-y="30">
        <v-icon class="mr-3">mdi-shopping-outline</v-icon>
        </v-badge>
        <h5>Items</h5>
        <v-spacer></v-spacer>
        <v-btn class="close-icon" icon ><v-icon>mdi-close</v-icon></v-btn>
        </v-list-item>
        <v-divider class="white--text"></v-divider>


          </template>

    </v-navigation-drawer>
    <!---------- End Navigation Drawer ---------->





    <!---------- Start App Bar ---------->
    <v-app-bar app height="85px" fixed  elevation="0" >
      <v-container class="pa-0 fill-height">
<!--          <v-app-bar-nav-icon class="hidden-md-and-up"  @click.stop="drawer = !drawer" /> -->
        <v-app-bar-nav-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer" />
          <div class="logo hidden-lg-and-up">
        <NuxtLink :to="localePath('/')" >
          <v-img v-if="!$vuetify.theme.dark" width="50" :src="require('static/logo2.png')" ></v-img>
          <v-img v-else width="50" :src="require('static/logo2.png')" ></v-img>
        </NuxtLink>
      </div>
        <v-spacer />

<!--
        <v-toolbar-items class="hidden-md-and-down DesktopNav scrollactive-item" v-for="(item, i) in items" :key="i">
          <v-btn text
                 v-if="!item.subitems"
                 exact
                 :to="localePath(item.to)" router>
                 {{$t(item.title)}}
          </v-btn>

        </v-toolbar-items>
 -->


    <Settings />
        <ThemeSwitcher/>

      </v-container>
    </v-app-bar>
    <!---------- End App Bar ---------->

  </div>
</template>

<script>

import Settings from "~/components/Header/Settings";
import ThemeSwitcher from "~/components/Header/ThemeSwitcher";
import SocialMedia from '../widget/SocialMedia.vue';

export default {
  components: {ThemeSwitcher, Settings, SocialMedia},
  name: "TheHeader",
  data () {
    return {
      navOffset: 100,
      mini: true,
      drawer: null,
      Lang : '',
      links: [
        {title: 'nav.Home', to: '/', number: '01'},
        {title: 'nav.Projects', to: '/portfolio', number: '02'},
        {title: 'nav.Services', to: '/test', number: '03'},
        {title: 'nav.about-Us', to: '', number: '04'},
        {title: 'nav.Feedback', to: '', number: '05'},
        {title: 'nav.contacts', to: '/contacts', number: '06'},
      ],

    }
  },
  methods: {
  setOffset: function(offset) {
    this.navOffset = offset
  }
},
}
</script>

<style scoped>
.logo-box{
background-color: var(--v-default-base) !important;
height: 5.3125rem;
}

.theme--dark .v-toolbar.v-app-bar{
border-bottom: 1px solid #ffffff1f !important
}

.theme--light .v-toolbar.v-app-bar{
border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important;
}
.v-navigation-drawer {
transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}


.v-overlay {
  align-items: center;
  border-radius: inherit;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  transition: 0.5s cubic-bezier(0.25, 0.8, 0.5, 1), z-index 1ms !important;

}

.v-overlay__scrim{
  position: fixed;
  background: rgba(0,0,0,.5);
  width: 100%;
  height: 100%;
  z-index: 99;
  right: 100%;
  top: 0;
  transition: right .5s ease;
}
.v-overlay__scrim{
  right: 0!important;
  transition: right .5s ease!important;
}


</style>
