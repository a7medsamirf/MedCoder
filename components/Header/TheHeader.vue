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

<v-btn v-bind="attrs" v-on="on"  class="pa-0 ma-0 btn default rounded-0 white-text-bg-dark"  height="72" min-width="100%">
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
        absolute
        temporary
      >
      <v-list-item class="pa-3">
      <div class="logo">
        <NuxtLink :to="localePath('/')" >
            <v-img v-if="!$vuetify.theme.dark" width="50" :src="require('static/logo2.png')" ></v-img>
            <v-img v-else width="50" :src="require('static/logo2.png')" ></v-img>
          </NuxtLink>
      </div>
      <v-spacer></v-spacer>
      <v-btn class="close-icon" icon @click="drawer = !drawer"> <v-icon>mdi-close</v-icon></v-btn>
    </v-list-item>
        <sidebar />
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
  

          <v-toolbar-items class="hidden-md-and-down DesktopNav scrollactive-item" v-for="(item, i) in items" :key="i">
            <v-btn text
                   v-if="!item.subitems"
                   exact
                   :to="localePath(item.to)" router>
                   {{$t(item.title)}}
            </v-btn>

          </v-toolbar-items>



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
import Sidebar from './Sidebar.vue';
  export default {
    components: {ThemeSwitcher, Settings,Sidebar, SocialMedia},
    name: "TheHeader",
    data () {
      return {
        navOffset: 100,
        mini: true,
        drawer: null,
        Lang : '',
        items: [
          {title: 'nav.Home', to: '/'},
          {title: 'nav.Projects', to: ''},
          {title: 'nav.Services', to: '/test'},
          {title: 'nav.about-Us', to: ''},
          {title: 'nav.Feedback', to: ''},
          {title: 'nav.contacts', to: '/contacts'},
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
  transition: all 0.8s cubic-bezier(0.77, 0.2, 0.05, 1);
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





</style>