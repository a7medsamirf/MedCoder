<template>
    <section id="Testimonials">
        <v-container fluid>
            <div class="section-subtitle" data-scrollax="properties: { translateY: '-250px' }" style="font-size: 285.059px; transform: translateZ(0px) translateY(77.1037px);">Testimonials<span>//</span></div>

        </v-container>
    </section>
</template>

<script>
import Settings from '../Header/Settings.vue'
export default {
  components: { Settings },
    name: "Testimonials",
}
</script>

<style lang="scss">
#Testimonials{
 .section-subtitle {
    position: relative;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    font-weight: 900;
    top: 50px;
    color: #ccc;
    opacity: 0.15;
    text-align: center;
    span{
        color: #3a37eb;
        opacity: 1;
    }
}
}
</style>