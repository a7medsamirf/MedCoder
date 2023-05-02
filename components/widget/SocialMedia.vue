<template>
    <div class="SocialMedia text-center my-5">
      <ul class="pa-0">

        <v-tooltip
                v-for="(social, index) in SocialIcon"
                :key="index"
                :to="social.to"
                class="mx-1"
                router
                icon
                exact
              >
              <template v-slot:activator="{ on, attrs }">
        <div class="pa-0">

          <li class="Social-icon" v-bind="attrs" v-on="on"><a class="text-color-default" href="https://www.facebook.com/a7med.samir.93/" target="_blank" title="social.title" >
            <v-icon   class="white--text" v-text="social.icon"></v-icon>
          </a></li>
</div>

      </template>
      <span> {{social.title}}</span>

          
              </v-tooltip>






<!-- 
        <v-tooltip left  color="#3a37eb">
      <template v-slot:activator="{ on, attrs }">
        <div class="pa-0">

          <li class="Social-icon" v-bind="attrs" v-on="on"><a class="text-color-default" href="https://www.facebook.com/a7med.samir.93/" target="_blank" title="social.title" ><i class="social.Icon"></i></a></li>
</div>

      </template>
      <span>Facebook</span>
    </v-tooltip>




    <v-tooltip left  color="#3a37eb">
      <template v-slot:activator="{ on, attrs }">
        <div class="pa-0">



          <li class="Social-icon" v-bind="attrs" v-on="on"><a class="text-color-default" href="" target="_blank" title="Twitter"><i class="fa-brands fa-twitter"></i></a></li>
</div>

      </template>
      <span>Twitter</span>
    </v-tooltip>





          <li class="Social-icon"><a class="text-color-default" href="" target="_blank" title="Instagram"><i class="fa-brands fa-instagram"></i></a></li>
          <li class="Social-icon"><a class="text-color-default" href="https://www.linkedin.com/in/a7med-samir-f/" target="_blank" title="linkedin"><i class="fa-brands fa-linkedin"></i></a></li>
          <li class="Social-icon"><a class="text-color-default" href="https://github.com/a7medsamirf" target="_blank" title="Github"><i class="fa-brands fa-github"></i></a></li> -->


      </ul>
    </div>
  </template>
  <script>
    export default {
  
      name: "SocialMedia",
      data() {
        return {
          SocialIcon: [
                { Icon: "fa-brands fa-facebook-f", title: 'Facebook', to: '#'},

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
          border: 1px solid rgba(255, 255, 255, 0.08);
          width: 40px;
          height: 40px;
          text-align: center;
          font-size: 17px;
          line-height: 20px;
          transition: all 0.5s ease-in-out;
          &:hover{
              background: var(--maincolor);
              border-radius: 50% ;
              a{
            color: #fff !important;
        }
          }
        }
      
        }
      }
    }
  
  </style>