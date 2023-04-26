<template>
  <div>
    <hero />

    <projects />

    <testimonials />
  </div>
</template>

<script>
import Hero from '~/components/Section/hero.vue'
import Projects from '~/components/Section/Projects.vue'
import Testimonials from '~/components/Section/Testimonials.vue'
export default {
  name: 'Home',
  components: {Hero, Projects, Testimonials},
}
</script>
