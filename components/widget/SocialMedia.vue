<template>
    <div class="SocialMedia text-center my-5">
      <ul class="pa-0">
          <li class="Social-icon"><a class="text-color-default" href="" title="Facebook" ><i class="fa-brands fa-facebook-f"></i></a></li>
          <li class="Social-icon"><a class="text-color-default" href="" title="Twitter"><i class="fa-brands fa-twitter"></i></a></li>
          <li class="Social-icon"><a class="text-color-default" href="" title="Instagram"><i class="fa-brands fa-instagram"></i></a></li>
          <li class="Social-icon"><a class="text-color-default" href="" title="linkedin"><i class="fa-brands fa-linkedin"></i></a></li>
          <li class="Social-icon"><a class="text-color-default" href="" title="Github"><i class="fa-brands fa-github"></i></a></li>
      </ul>
    </div>
  </template>
  <script>
    export default {
  
      name: "SocialMedia",
      data() {
        return {
          SocialIcon: []
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