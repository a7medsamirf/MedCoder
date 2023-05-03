<template>
    <v-fab-transition>
      <v-btn
        v-show="showFab"
        v-scroll="checkScroll"
        @click="goUp"
        fab
        fixed
        bottom
        :ripple="false" 
        icon 
        id="no-background-hover" 
        right
        class="progressbar"
      >
      <a href="#" id="scroll-top" class="active">
        <span class="text">Back to top</span>
        <span class="line"></span>
    </a>
      


      </v-btn>
    </v-fab-transition>
  </template>
  
  <script>
  export default {
     name: "onScroll",
    data() {
      return {
        showFab: false,
      };
    },
    methods: {
      checkScroll() {
        const h = window.scrollY;
        if (h > 300) {
          this.showFab = true;
        } else {
          this.showFab = false;
        }
      },
      goUp() {
        this.$vuetify.goTo(0, {
          duration: 100,
        });
      },
    },
  };
  </script>
  
  <style lang="scss">
.progressbar
  {
    bottom: 100px !important;
    background-color: transparent !important;
    box-shadow: none;
    position: fixed;
    height: 100px;
    width: 1px;
    @include right(-20px);
    background-color: rgba(0,0,0,.08);
    z-index: 10;
    transition: all .3s ease;
 .text {
    position: absolute;
    bottom: 100px;
    @include right(30px);
    font-size: 13px;
    transform: rotate(90deg);
    text-transform: uppercase;
    white-space: nowrap;
    color: #fff;
}
/* .line {
    position: absolute;
    width: 1px;
    height: 100px;
    background-color: rgb(255 255 255 / 40%);
    @include right(70px);
    bottom: -50px;
}
 */
  }
  
#no-background-hover::before {
   background-color: transparent !important; 
}


#scroll-top .text::after{
    top: 7px;
    left: 100px;
    width: 50px;
    height: 1px;
    content: "";
    position: absolute;
    background-color: rgb(255 255 255 / 40%);
}



  </style>
  