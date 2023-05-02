<template>
    <div>
      <!---------- Start Navigation Drawer ---------->
  <!--     <v-navigation-drawer class="hidden-md-and-up" v-model="drawer"  fixed :right="$vuetify.rtl"> -->
    

<!--     <v-row
          class="fill-height"
          no-gutters
        >
          <v-navigation-drawer
            dark
            mini-variant
            mini-variant-width="56"
            permanent
          >
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/women/75.jpg"></v-img>
              </v-list-item-avatar>
            </v-list-item>
            
            
            <v-divider></v-divider>
  
            <v-list
              dense
              nav
            >
              <v-list-item
                v-for="item in items"
                :key="item.title"
              >
                <v-list-item-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
  
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            
              <v-app-bar-nav-icon  @click.stop="drawer = !drawer" />
            
     
            
          </v-navigation-drawer>
  
                <v-navigation-drawer
        v-model="drawer"
       
        temporary
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
          
          
          
          
        </v-row>
   -->
        

        <v-navigation-drawer  
          class="hidden-md-and-down"
            mini-variant
            mini-variant-width="70"
            permanent
           fixed :right="$vuetify.rtl"    

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
        v-model="drawer"
        absolute
        temporary
      >
        <sidebar />
      </v-navigation-drawer>
      <!---------- End Navigation Drawer ---------->
  



      
      <!---------- Start App Bar ---------->
      <v-app-bar app height="85px" fixed  elevation="0">
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
          {title: 'nav.Services', to: ''},
          {title: 'nav.about-Us', to: ''},
          {title: 'nav.Feedback', to: ''},
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
</style>