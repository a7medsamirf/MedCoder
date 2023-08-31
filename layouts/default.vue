<template>
  <v-app :dir="$dir()">

  <TheHeader />

  <v-main id="wrapper" class="pa-0">

<Nuxt />

</v-main>


    <bottom-navigation />
    <TheFooter />
    <on-scroll />


    <cursor-fx
     color="#cb2d3e80"
     color-hover="#fff"
     outside-size="75px"
     inside-size="25px"
     />


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
components: {TheHeader, TheFooter, Settings, ThemeSwitcher, BottomNavigation, OnScroll },
}
</script>

<style lang="scss" scoped>


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


header .v-btn:not(.v-btn--round).v-size--default {
  height: 36px;
  min-width: 64px !important;
  padding: 0;
  margin: 0px 10px;
  text-transform: capitalize;
}

.close-icon:hover .v-icon
{
  transition: 0.70s;
  transform: rotate(180deg);
}

.v-menu__content {
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%) !important;
}
.v-app-bar .v-list {
  background: #001e26 !important;
  color: #FFFFFF;
}
.v-toolbar
{
  .v-btn,
  .v-btn.v-btn--icon
  {
    color: #fff;
    letter-spacing: 0;
    font-weight: bold;
  }
  .DesktopNav .v-btn--active:hover::before,
  .DesktopNav .v-btn--active::before {
    opacity: 1 !important;
  }
  .DesktopNav .v-btn:before {
    background-color: transparent;
    border-radius: 3px;
    bottom: unset;
    color: inherit;
    content: "";
    left: 0px;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);

  }
}
.v-toolbar.v-app-bar--is-scrolled
{
  .v-btn,
  .v-btn.v-btn--icon
  {
    color: #0000008a;
    letter-spacing: 0;
    font-weight: bold;
    transition: $transition;
  }
}
.theme--dark.v-app-bar.v-toolbar.v-sheet
{
    background-color: transparent;
    box-shadow: none !important;
}

.theme--dark
{
  .v-toolbar.v-app-bar--is-scrolled
  {
    background-color: rgba(0, 30, 38, 0.8) !important;
    box-shadow: none !important;
    backdrop-filter: blur(12px);
    transition: $transition;
    .v-btn,
    .v-btn.v-btn--icon
    {
      color: #fff;
      letter-spacing: 0;
      font-weight: bold;
      transition: $transition;
    }
  }

}
.nav-menu {
  margin-top: 50px;
  contain: initial;
  overflow: visible;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    @include left(58px);
    transform: translateY(-100%);
    width: 10px;
    height: 13px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 13px solid #fff;
  }
}

.theme--dark .nav-menu::before {
  border-bottom: 13px solid $dark-surface !important;
}

.v-application.theme--dark .v-sheet.v-card,
.v-application.theme--dark .v-select-list,
.v-application.theme--dark .nav-menu .theme--dark.v-list
{

  box-shadow: none !important;
  backdrop-filter: blur(12px);
}

.theme--dark .nav-menu::before {
  border-bottom: 13px solid rgb(0 30 38 / 72%) !important;
}

</style>
