<template>
    <section id="Testimonials" class=" pt-16">

   
        <Title
              :SectionTitle="$t('SectionTitle.Testimonials')"
       
            />

        <testimonials-card />





    </section>
</template>

<script>
import TestimonialsCard from '../Cards/TestimonialsCard.vue'
import Settings from '../Header/Settings.vue'
import Title from '../Title/Title.vue'
export default {
  components: { Settings, TestimonialsCard, Title },
    name: "Testimonials",
}
</script>

<style lang="scss">

</style>