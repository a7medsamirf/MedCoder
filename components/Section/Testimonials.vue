<template>
    <section id="Testimonials" class="ReviewCard pt-16">
        <Title :SectionTitle="$t('SectionTitle.Testimonials')" />
            <slick ref="slick" :options="slickOptions">
            <div class="review text-center"
            v-for="(review, index) in reviews" :key="index">
              <div class="person-block">
                <v-avatar class="photo" width="80" height="80">
                  <v-img
                  v-if="review.image"
                  :src="require(`~/static/images/avatars/${review.image}`)"
                  :alt="review.alt"
                  contain
                ></v-img>
            </v-avatar>
          
                <v-list-item-title class="use-text-title5 text-color-default mb-1 mt-3">
                  {{ review.name }}
                </v-list-item-title>
              </div>
            <div class="comment-block">
              <v-card
                class="mx-auto pa-5"
                outlined
              >
    
                <v-list-item >
                  <v-list-item-content>
                    <div class="text-overline">
                  <v-rating
                    readonly
                    half-increments
                    color="yellow darken-3"
                    background-color="grey lighten-1"
                    :value="review.ratings"
                    dense
                    size="20"
                  ></v-rating>

                </div>
                    <v-list-item-subtitle class="use-text-paragraph" v-text="review.comment"/>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </div>
    
    
    
    
            </div>
    
      </slick>
    

    </section>
</template>

<script>

import Title from '../Title/Title.vue';
import common from "~/api/common";
export default {
  name: "Testimonials",
  components: { 
    Slick: () => import('vue-slick'),
    Title 
  },
  data(){
        return {
          reviews :common.review,
          slickOptions: {
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

<style lang="scss" scoped>
    .ReviewCard {
      .comment-block {
        position: relative;
        margin-bottom: 35px;
        padding: 0 5px;
      }
      .slick-slide.slick-active
      {
        .comment-block{
          &:before
          {
            font-style: italic;
            position: absolute;
            top: 0;
            left: 15px;
            line-height: 0;
            z-index: 2;
            transition: .4s ease-in-out;
            transition-delay: 0s;
            transform: translateY(-30px);
            opacity: 0;
            font-size: 55px;
            color: $palette-common-primary;
            content: " ;; ";
            font-family: "Monoton", cursive;
          }
          &:after
          {
            font-style: italic;
            position: absolute;
            bottom: 0;
            right: 30px;
            transition: .4s ease-in-out;
            transition-delay: 0s;
            transform: translateY(30px);
            opacity: 0;
            z-index: 2;
            line-height: 0;
            font-size: 55px;
            color: $palette-common-primary;
            content: " ;; ";
            font-family: "Monoton", cursive;
          }
        }
    
      }
      .slick-slide.slick-current.slick-active.slick-center
      {
        cursor: pointer;
        .comment-block{
          &:before{
            opacity: 1;
            transition-delay: .4s;
            transform: translateY(0);
          }
          &:after{
            opacity: 1;
            transition-delay: .4s;
            transform: translateY(0);
          }
        }
    
      }
    }

</style>