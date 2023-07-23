<template>
  <!----- Start Section Title ----->
<section id="section-title">
<v-container>
 <div class="section-title">
   <p class="mb-0">{{ SectioDesc  }}</p>
   <h2  class="pb-3">{{ SectionHead }} <span class="custom-text-color">{{SectionTitle}}</span></h2>
 </div>
 <div class="section-subtitle rellax" v-rellax="rellax" data-rellax-percentage="0.5" data-rellax-speed="2"
   data-rellax-xs-speed="-4" data-rellax-mobile-speed="3" data-rellax-tablet-speed="-8"
   data-rellax-desktop-speed="1">
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
SectionHead: {
 type: String,
 required: true
},
SectioDesc: {
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
 z-index: 2;
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
   font-size: 6vmin;
   font-weight: 800;
   position: relative;
 }
 p {
   font-size: 18px;
   line-height: 24px;
   font-weight: 500;
   color: #ddd;
   max-width: 550px;
 }
}
.section-subtitle {
   position: absolute;
   text-transform: uppercase;
   font-weight: 900;
   font-size: 17vmin;
   transform: translateZ(0px) translateY(77.1037px);
/*         @include left(150px); */
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
