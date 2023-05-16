<template>
  <v-app :dir="$dir()">
  


  <TheHeader />

  <v-main id="wrapper" class="pa-sm-0 pa-lg-16">

<Nuxt />

</v-main>


    <bottom-navigation />
    <TheFooter />
    <on-scroll />


    <div :class="[ 'g-cursor', { 'g-cursor_hover': hover }, {'g-cursor_hide': hideCursor} ]">
    <div :style="cursorCircle" class="g-cursor__circle"></div>
    <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
  </div>

  </v-app>
</template>

<script>
import ThemeSwitcher from "~/components/Header/ThemeSwitcher";
import Settings from "~/components/Header/Settings";
import TheFooter from "~/components/Footer/TheFooter";
import TheHeader from "~/components/Header/TheHeader";
import BottomNavigation from '~/components/Header/bottom-navigation.vue';
import OnScroll from '~/components/widget/onScroll.vue';

export default {
name: 'DefaultLayout',
transition: 'slide-bottom',
components: {TheHeader, TheFooter, Settings, ThemeSwitcher, BottomNavigation, OnScroll},
data() {
      return {
        xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      hover: false,
      hideCursor: true
      }
    },

  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`
    },
    cursorPoint() {
      return `transform: translateX(${this.xChild - 3}px) translateY(${this.yChild - 3}px) translateZ(0) translate3d(0, 0, 0);`
    }
  },
  methods: {
    moveCursor(e) {
      this.xChild = e.clientX;
      this.yChild = e.clientY;
      setTimeout(() => {
        this.xParent = e.clientX - 15;
        this.yParent = e.clientY - 15;
      }, 100);
    }
  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener('mouseleave', e => {
      this.hideCursor = true;
    });
    document.addEventListener('mouseenter', e => {
      this.hideCursor = false;
    });
    
  }
}
</script>

<style lang="scss" scoped>

.g-cursor {
    &_hide {
      opacity: 0;
      transition: width .6s ease,
        height .6s ease,
        opacity .6s ease;
    }

    &__circle {
      pointer-events: none;
      user-select: none;
      top: 0;
      left: 0;
      position: fixed;
      width: 30px;
      height: 30px;
      border: 2px solid var(--custom-text-color);
      border-radius: 100%;
      z-index: 5555;
      backface-visibility: hidden;
      transition: opacity .6s ease;
    }

    &__point {
      top: 0;
      left: 0;
      position: fixed;
      width: 10px;
      height: 10px;
      pointer-events: none;
      user-select: none;
      border-radius: 100%;
      background: var(--custom-text-color);
      z-index: 55555555;
      backface-visibility: hidden;
      will-change: transform;
    }

    &_hover {
      .g-cursor__circle {
        opacity: 0;
        transition: width .6s ease,
          height .6s ease,
          opacity .6s ease;
      }
    }
  }

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}
#wrapper {
    position: relative;
    @include padding-left(100px);
    bottom: 0;
    z-index: 3;
}

</style>
