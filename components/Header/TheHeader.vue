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
            <div class="nav-button but-hol cmenu">
                    <span class="ncs"></span>
                    <span class="nos"></span>
                    <span class="nbs"></span>
                    <div class="menu-button-text">Menu</div>
                </div>
</v-list-item>
        </v-list>
     
    
        <v-list>
          <v-list-item>
   
            <button  @click.stop="drawer = !drawer" class="menu" onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))" aria-label="Main Menu">
      <svg width="50" height="50" viewBox="0 0 100 100">
        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path class="line line2" d="M 20,50 H 80" />
        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>
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
      <v-app-bar app height="85px" fixed  elevation="0" :clipped-left="clipped">
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

.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
}
.line {
  fill: none;
  stroke: black;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}



.nav-button {
	float:right;
	width: 28px;
	height: 50px;
	margin-right:50px;
	cursor: pointer;
	position: relative;
	top: 22px;
}
.nav-button span {
	width: 100%;
	float: left;
	margin-bottom: 6px;
	height: 2px;
	background: #fff;
	position: relative;
	overflow:hidden;
	z-index:2;
 	transition: all 0.3s ease-in;
	transform: rotate(0deg);
	top:0;
	left:0;
}
.nav-button:hover span:before {
	width:100%;
}
.nav-button .ncs , .nav-button .nbs {
	width: 60%;
	 transition: all 0.2s ease-in;
}
.nav-button .ncs {
	float:right;

}
.nav-button.cmenu .nbs {
	transform: rotate(-45deg);
	top:-3px;
	left:1px;
	transition-delay:0.1s;
}
.nav-button.cmenu .ncs {
	transform: rotate(-45deg);
	top:4px;
	left:-2px;
	transition-delay:0.1s;
}
.nav-button.cmenu .nos   {
	transform: rotate(45deg);
}
.nav-button:hover .menu-button-text {
	color: #fff;
}
.menu-button-text {
	position: absolute;
	left: 0;
	width: 100%;
	bottom: 6px;
	color: rgba(255, 255, 255, 0.41);
	font-size: 10px;
	font-weight: 400;
	text-transform: uppercase;
	letter-spacing: 2px;
}
.nav-button.cmenu .menu-button-text {
	margin-top: 16px;
}
</style>