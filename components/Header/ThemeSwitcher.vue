<template>
    <v-fade-transition mode="out-in">
      <v-tooltip v-if="!$vuetify.theme.dark" bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" fab @click="toggle_dark_mode">
         
            <i class="fa-duotone fa-moon-stars fa-xl bg-purple-darken-2"></i>
            
          </v-btn>
        </template>
        <span>{{ $t('common.Dark-Mode') }}</span>
      </v-tooltip>
  
      <v-tooltip v-else bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on"  fab @click="toggle_dark_mode">
            <i class="fa-solid fa-sun-bright fa-xl warning--text"></i>

          </v-btn>
        </template>
        <span>{{ $t('common.Dark-Mode') }}</span>
      </v-tooltip>
  
    </v-fade-transition>
  </template>
  
  <script>
  export default {
    name: "ThemeSwitcher",
    data () {
      return {
  
      }
    },
    methods: {
      toggle_dark_mode: function() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
      }
    },
    mounted() {
      const theme = localStorage.getItem("dark_theme");
      if (theme) {
        this.$vuetify.theme.dark = theme === "true";
      }
    },
  }
  </script>