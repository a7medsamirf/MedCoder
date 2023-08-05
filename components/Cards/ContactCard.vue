<template>
      <v-card outlined class="About-card py-3 px-1">
              <v-list-item three-line >
                <v-list-item-avatar
                  tile
                  size="60"
                  color="primary"
                  class="rounded-circle"
                >
                  <img class="white--text filter-color" :src="avatar" :alt="title">
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="custom-text-color mb-2" v-text="$t('contacts.' + title)" />
                  <v-list-item-subtitle class="use-text-paragraph" v-text="$t(description)"/>
                </v-list-item-content>

              </v-list-item>
            </v-card>


  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      avatar: {
        type: String,
        required: true
      },
    }
  }
  </script>
  
  <style lang="scss">
  
  img.filter-color {
    width: 70% !important;
}
.filter-color {
    filter: invert(99%) sepia(1%) saturate(2644%) hue-rotate(223deg) brightness(120%) contrast(100%);
}
[dir=ltr] .About-card .overlay-title {
    right: 15px;
}
.About-card .overlay-title {
    font-family: "Monoton", cursive !important;
    font-size: 2rem !important;
    margin-bottom: 0;
    color: #07AEAF;
    z-index: -1;
    opacity: 0.2;
    position: absolute;
    top: 10px;
}
  </style>
  