<template>
  <section class="hero section-bg-img" id="hero">
    <v-container fluid>
    <div class="hero-wrap">
      <div class="inner d-flex align-center justify-center">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" class="px-0">
              <div class="box">

          <div class="title2">
              <span class="block"></span>
              <h1 class="text-color-default hero-title ">{{ $t('HeroSection.title') }}<span></span></h1>
          </div>

          <div class="role">
              <div class="block"></div>
              <p class="use-text-subtitle hero-subtitle">{{ $t('HeroSection.subtitle') }}</p>
          </div>

          </div>
              <button-v-1 />

    <!--           <div class="text box">
                <div class="title">
                  <h1 class="ma-5 text-color-default hero-title ">{{ $t('HeroSection.title') }}<span></span></h1>
                </div>
                <div class="role">
            <div class="block"></div>
            <p class="use-text-subtitle ma-5 hero-subtitle">{{ $t('HeroSection.subtitle') }}</p>
        </div>
 
                <button  href="#" title="تواصل معنا" class="btn default ma-5 pa-5"> {{ $t('common.discuss') }}</button>
                <button href="#" title="تواصل معنا" class="btn outline">{{ $t('common.Learn-more') }}</button>
              </div>
 -->


            </v-col>
            <v-col cols="12" md="6" class="px-0 mt-16">
              <div class="img-box hidden-sm-and-down">
                <v-img
                height="90%"
                  class="rocket-img"
                  alt="rocket"
                  :lazy-src="require('static/images/hero/hero_banner_image_1.png')"
                  :src="require('static/images/hero/hero_banner_image_1.png')"
                >
                </v-img>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    </v-container>
  </section>

</template>

<script>
import buttonV1 from '../buttons/button-V1.vue'
export default {
  components: { buttonV1 },
  name: "Hero"
}
</script>

