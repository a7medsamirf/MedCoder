<template>
  <section class="ProjectsCard  py-20" id="Projects" ref="bottom">
    <Title 
    :SectionTitle="$t('SectionTitle.Testimonials')"
    />
    
    <v-container fluid>
      <div class="Projects-title">
    <div class="Projects-title-item">
        <h2 class="white-text-bg-dark use-text-title2 my-3">  {{ $t('Portfolio.title') }}</h2>
        <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida.</p>
      <button-v-1 />
    </div>
</div>

    <slick ref="slick" :options="slickOptions" dir="rtl">
      <div class="Project text-center" v-for="(Project, index) in ProjectsData" :key="index">
        <div class="Project-block">

                  <v-img
                    class="photo"
                    v-if="Project.img"
                    :src="require(`~/static/images/Projects/${Project.img}`)"
                    :alt="Project.title"
                    contain
                    height="100%" 
                  >
                  </v-img>
                  
        <NuxtLink class="box-media default rounded-0 elevation-0 mt-0 pt-0" :to="Project.link" router target="_blank">
     
            <i class="fa-duotone fa-magnifying-glass fa-lg"></i>
          </NuxtLink>

        </div>
        <div class="comment-block">
     
          <v-list-item-title class="Project-title use-text-title5 white-text-bg-dark default mb-1">
            {{ Project.title }}
          </v-list-item-title>

        </div>
      </div>

    </slick>

    </v-container>

  </section>
</template>

<script>
import common from "~/api/common";
import ButtonV1 from '../buttons/button-V1.vue'
import Title from '../Title/Title.vue'
import CoolLightBox from "vue-cool-lightbox";
  export default {
    name: "Projects",
    components: {
        Slick: () => import('vue-slick'),
        ButtonV1,
        Title,
        CoolLightBox,
    },
    data() {
      return {
        ProjectsData :common.Project,
        slickOptions: {
          slidesToShow: 4,
          centerMode: true,
          arrows: true,
          dots: true,
          infinite: true,
          speed: 800,
          autoplaySpeed: 3000,
          autoplay: false,
          responsive: [
          {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        }

      }
    },

  }

</script>

