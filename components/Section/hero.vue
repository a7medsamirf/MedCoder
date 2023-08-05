<template>
  <section class="hero section-bg-img" id="hero">
    <v-container fluid>
    <div class="hero-wrap">
      <div class="inner d-flex align-center justify-center">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" class="px-0">
              <div class="box half-hero-wrap">
      
                <div class="title2">
                    <div class="block"> </div>
                    <h1 class="text-color-default hero-title mb-5">{{ $t('HeroSection.hello') }} <br>
                      <span class="">{{ $t('HeroSection.im') }} <span class="custom-text-color">{{ $t('HeroSection.ahmed') }} </span></span>
                      <br> 
                      <span class="job-title">
                        <div class="stack" style="--stacks: 3;">
                            <span style="--index: 0;">{{ $t('HeroSection.FrontEnd') }}</span>
                            <span style="--index: 1;">{{ $t('HeroSection.FrontEnd') }}</span>
                            <span style="--index: 2;">{{ $t('HeroSection.FrontEnd') }}</span>
                    </div>
                        
                        </span>
                      <div class="dot"></div>
                    
                    </h1>
                </div>
                  <div class="role">
                      <div class="block"></div>
                      <h4 class="use-text-subtitle hero-subtitle">I create web and graphic design</h4>
                  </div>

                  <download-button />

                  <button class="my-btn my-btn-class-12">Download CV <i class="fa-duotone fa-file-pdf fa-lg"></i></button>


     <!--              <div class="scroll-down_btn">
                                        <a id="scrollDown" class="axil-scrollbown smoth-animation" href="#Projects"><span></span></a>
                                    </div> -->


            </div>

       

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
import DownloadButton from '../buttons/DownloadButton.vue'
import Stack from '../text/stack.vue'
export default {
  components: { DownloadButton, Stack },
  name: "Hero"
}
</script>



<style lang="scss" scoped>
 .theme--light {
  .axil-scrollbown{
   border: 1px solid rgba(0, 0, 0, 0.21);
   span{
    background-color: rgba(0, 0, 0, 0.21);
   }
 }
 }

 .theme--dark {
  .axil-scrollbown{
   border: 1px solid rgba(255, 255, 255, 0.08);
   span{
    background-color: rgba(255,255,255,0.12157);
   }
 }
}


.box.half-hero-wrap{
  position: relative;
}
.scroll-down_btn {
    position: absolute;
    @include left(0);

    top: 124%;
    .axil-scrollbown {
        display: inline-block;
        box-sizing: border-box;
        height: 60px;
        width: 39px;
        border-radius: 19.5px;
        position: relative;
        span {
            height: 15px;
            width: 8px;
            border-radius: 4px;
            display: block;
            position: absolute;
            left: 50%;
            margin-top: 17px;
            -webkit-animation-name: scrollDown;
            animation-name: scrollDown;
            -webkit-animation-duration: 2.2s;
            animation-duration: 2.2s;
            -webkit-animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
            animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
            -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
            margin-left: -4px;
        }
    }
}

@keyframes scrollDown {
    0% {
        opacity: 0;
    }

    10% {
        transform: translateY(0);
        opacity: 1;
    }

    100% {
        transform: translateY(10px);
        opacity: 0;
    }
}


.hero-wrap{
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  align-items: center;
  position: relative;
  display: block;
  height: 100vh;
  .hero-title {
    text-transform: capitalize;
    font-size: 7vmin !important;
    font-weight: 900;

  }
  .inner {
    height: 100%;
    .img-box {
      position: relative;
      text-align: center;
      .rocket-img {
        position: relative;
        z-index: 1;
        animation: myAnim 3s ease-out 0s infinite alternate forwards;
      }
      .rocket-bg {
        position: absolute;

      }
    }
  }

}
@keyframes myAnim {
	0% {
		transform: translateY(0);
	}

	100% {
		transform: translateY(-50px);
	}
}

@include breakpoints-up(lg) {
  #hero
  {
    .box {
      .title2 {
        width: 100%;
        position: relative;
        height: 100%;
        div.block {
          width: 0%;
          height: inherit;
          background: var( --custom-text-color);
          position: absolute;
          animation: mainBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
          display: flex;
        }
  
        h1 {
          -webkit-animation: mainFadeIn 2s forwards;
          -o-animation: mainFadeIn 2s forwards;
          animation: mainFadeIn 2s forwards;
          animation-delay: 1.6s;
          opacity: 0;
       /*    display: flex; */
          align-items: baseline;
          position: relative;
          line-height: 1.3;
  
          div.dot {
            width:0px;
            height: 0px;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            background: var(--bg-color);
            -webkit-animation: load 0.6s cubic-bezier(.74, .06, .4, .92) forwards;
            animation: popIn 0.8s cubic-bezier(.74, .06, .4, .92) forwards;
            animation-delay: 2s;
            margin-left: 5px;
            margin-top: -10px;
            position: absolute;
            bottom: 13px;
            @include right(-12px);
  
          }
        }
      }
  
      .role {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;  
        div.block {
          width: 0%;
          height: inherit;
          background: var(--bg-color);
          position: absolute;
          animation: secBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
          animation-delay: 2s;
          display: flex;
        }
  
        h4 {
          animation: secFadeIn 2s forwards;
          animation-delay: 3.2s;
          opacity: 0;
        }
      }
    }
  }
  @keyframes mainBlock {
    0% {
      width: 0%;
      left: 0;
  
    }
    50% {
      width: 100%;
      left: 0;
  
    }
    100% {
      width: 0;
      left: 100%;
    }
  }
  
  @keyframes secBlock {
    0% {
      width: 0%;
      left: 0;
  
    }
    50% {
      width: 100%;
      left: 0;
  
    }
    100% {
      width: 0;
      left: 100%;
    }
  }
  
  @keyframes mainFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  
  @keyframes popIn {
    0% {
      width: 0px;
      height: 0px;
      background: #e9d856;
      border: 0px solid #ddd;
      opacity: 0;
    }
    50% {
      width: 10px;
      height: 10px;
      background: #e9d856;
      opacity: 1;
      bottom: 45px;
    }
     65% {
        width: 7px;
      height: 7px;
        bottom: 0px;
        width: 15px
     }
     80% {
        width: 10px;
      height: 10px;
        bottom: 20px
     }
    100% {
      width: 7px;
      height: 7px;
      background: #e9d856;
      border: 0px solid #222;
      bottom: 13px;
  
    }
  }
  
  @keyframes secFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

}

h4.hero-subtitle{
  padding: 15px 20px;
    background: rgba(0, 0, 0, 0.21);
    font-size: 11px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.71);
    letter-spacing: 5px;
    font-weight: 600;
}


.stack {
  display: grid;
  grid-template-columns: 1fr;
}

.stack span {
  font-weight: bold;
  grid-row-start: 1;
  grid-column-start: 1;
/*   font-size: 4rem; */
  --stack-height: calc(100% / var(--stacks) - 1px);
  --inverse-index: calc(calc(var(--stacks) - 1) - var(--index));
  --clip-top: calc(var(--stack-height) * var(--index));
  --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
  clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
  animation: stack 340ms cubic-bezier(.46,.29,0,1.24) 1 backwards calc(var(--index) * 120ms), glitch 2s ease infinite 2s alternate-reverse;
}

.stack span:nth-child(odd) { --glitch-translate: 8px; }
.stack span:nth-child(even) { --glitch-translate: -8px; }

@keyframes stack {
  0% {
    opacity: 0;
    transform: translateX(-50%);
    text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
  };
  60% {
    opacity: 0.5;
    transform: translateX(50%);
  }
  80% {
    transform: none;
    opacity: 1;
    text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
  }
  100% {
    text-shadow: none;
  }
}

@keyframes glitch {
  0% {
    text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
    transform: translate(var(--glitch-translate));
  }
  2% {
    text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
  }
  4%, 100% {  text-shadow: none; transform: none; }
}

</style>
