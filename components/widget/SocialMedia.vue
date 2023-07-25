<template>
  <div class="SocialMedia text-center my-5">
    <ul class="pa-0">
      <li class="Social-icon rounded-lg" v-for="(social, index) in SocialIcon" :key="index">
        <a class="text-color-default" :href="social.to" target="_blank" :title="social.title">
          <v-icon small>{{ social.Icon }}</v-icon>
        </a>
      </li>


    </ul>
  </div>
</template>
<script>
  export default {

    name: "SocialMedia",
    data() {
      return {
        SocialIcon: [
              { Icon: "fa-brands fa-facebook-f", title: 'Facebook', to: 'https://www.facebook.com/a7med.samir.93/'},
              { Icon: "fa-brands fa-instagram", title: 'instagram', to: '#'},
              { Icon: "fa-brands fa-linkedin", title: 'linkedin', to: 'https://www.linkedin.com/in/a7med-samir-f/'},
              { Icon: "fa-brands fa-instagram", title: 'Instagram', to: '#'},
              { Icon: "fa-brands fa-github", title: 'Github', to: 'https://github.com/a7medsamirf'},

      ]
      }
    }
  }

</script>
<style lang="scss" scoped>
  .SocialMedia {
    position: relative;
    &:before{
      content: '';
          position: absolute;
          top: -100px;
          width: 1px;
          height: 80px;
          left: 50%;
          background: rgba(255, 255, 255, 0.08);
    }
    ul {
      li{
        display: inline-block;
        &.Social-icon {
          padding: 10px;
          margin: 5px;
          cursor: pointer;
          @include border-color;
          width: 35px;
          height: 35px;
          text-align: center;
          font-size: 16px;
          line-height: 15px;
          transition: $transition;
        &:hover{
            background: var(--maincolor);
            border-radius: 50% ;
            a ,i{
             color: #fff !important;
      }
        }
      }

      }
    }
  }

</style>
