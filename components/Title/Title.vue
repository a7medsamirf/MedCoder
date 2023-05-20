<template>
       <!----- Start Section Title ----->
  <section id="section-title">
    <v-container>
      <div class="section-title py-5">
        <h2 class="pb-5">My Clients and <span class="custom-text-color">Testimonials</span></h2>
        <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam
          suscipit commodo gravida. </p>
      </div>
      <div class="section-subtitle rellax" v-rellax="rellax" data-rellax-percentage="0.5" data-rellax-speed="2"
        data-rellax-xs-speed="-4" data-rellax-mobile-speed="3" data-rellax-tablet-speed="-8"
        data-rellax-desktop-speed="1" style="font-size: 150px; transform: translateZ(0px) translateY(77.1037px);">
        {{SectionTitle}}<span>//</span></div>
    </v-container>

  </section>
       <!----- End Section Title ----->
</template>
<script>
  export default {
    name: "Title",
    props: {
      SectionTitle: {
        type: String,
        required: true
      },

    },
    data() {
      return {
        rellax: {
          speed: -2
        }
      }
    },
    methods: {
      destroyRellax() {
        this.rellax = false
      }
    }
  }

</script>

<style lang="scss" scoped>
  #section-title {
    .section-title {
      @include padding-left(50px);
      margin-bottom: 50px;
      @include text-align(left);
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        @include left(-2px);
        width: 4px;
        height: 100%;
        background: var(--custom-text-color);
      }
      h3 {
        position: relative;
        padding-bottom: 30px;
        @include text-align(left);
        font-weight: 600;
        font-size: 14px;
        position: relative;
        color: #999;
        &:before {
          content: '';
          position: absolute;
          bottom: 12px;
          @include left(0px);
          width: 50px;
          height: 1px;
          border-bottom: 1px dotted #666;
        }
      }
      h2 {
        font-size: 40px;
        font-weight: 800;
        position: relative;
      }
      p {
        font-size: 12px;
        line-height: 24px;
        padding-bottom: 10px;
        font-weight: 500;
        color: #878C9F;
        max-width: 550px;
      }
    }
    .section-subtitle {
        position: absolute;
        text-transform: uppercase;
        font-weight: 900;
        @include left(150px);
        color: #ccc;
        opacity: 0.1;
        @include text-align(left);
        top: 0;
        span {
          color: #3a37eb;
          opacity: 0.8;
        }
      }
  }

</style>
