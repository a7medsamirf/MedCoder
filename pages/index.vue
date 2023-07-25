<template>
  <div>
    <hero />

    <projects />

    <testimonials />
    <customer />
  </div>
</template>

<script>
import Hero from '~/components/Section/hero.vue'
import Projects from '~/components/Section/Projects.vue'
import Testimonials from '~/components/Section/Testimonials.vue'
import Customer from '~/components/Section/Customer.vue'
export default {
  name: 'Home',
  components: {Hero, Projects, Testimonials, Customer},
  data() {
    return {
      title: this.$t('nav.Home'),
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
