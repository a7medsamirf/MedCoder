<template>
  <section id="Projects" class="ProjectsCard py-20">

    <Title
        :SectionTitle="$t('SectionTitle.Projects')"
        :SectionHead="$t('SectionHead.Projects-Head')"
        :SectioDesc="$t('SectioDesc.Projects-Desc')"
      />



    <slick ref="slick" :options="ProjectsOptions" >
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



  </section>
</template>

<script>
import common from "~/api/common";
import Title from '../Title/Title.vue'
  export default {
    name: "Projects",
    components: {
        Slick: () => import('vue-slick'),
        Title,
    },
    data() {
      return {
        ProjectsData :common.Project,
        ProjectsOptions: {
          slidesToShow: 3,
          centerMode: true,
          arrows: true,
          dots: true,
          infinite: true,
          speed: 800,
          autoplaySpeed: 3000,
          autoplay: false,
          responsive: [

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

