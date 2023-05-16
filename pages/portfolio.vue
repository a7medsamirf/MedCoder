<template>
   <div class="gallery-wrap" id="portfolio_horizontal_container">
    <div id="portfolio">
      <v-container fluid>
        <div class="breadcrumb">
      <div class="col-full">
        <h1 class="breadcrumb-heading"> {{PageTitle}}</h1>
        <nav class="woocommerce-breadcrumb">
          <nuxt-link to="/">Home</nuxt-link>
          <span class="breadcrumb-separator"> / {{PageTitle}}</span>
        </nav>
      </div>
    </div>

    <v-row>


<v-col md="4" cols="12" class="pa-1" v-for="(Project, index) in ProjectsData" :key="index">
        <div class="portfolio_item houses design" >
                                <div class="grid-item-holder">
                   <v-img
                    class="photo"
                    v-if="Project.img"
                    :src="require(`~/static/images/Projects/${Project.img}`)"
                    :alt="Project.title"
                    contain
                    height="100%" 
                  >
                  </v-img>
                                    <div class="grid-det">
                                        <div class="grid-det_category"><a href="#">Architecture</a> <a href="#">Design</a></div>
                                        <div class="grid-det-item">
                                            <a href="portfolio-single.html" class="ajax grid-det_link"> {{ Project.title }}<i class="fal fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="pr-bg"></div>
                            </div>


</v-col>

    </v-row>
              
      </v-container>










              <CoolLightBox
              :items="images"
              :index="index"
              :fullScreen="true"
              @close="index = null">
            </CoolLightBox>

            <div class="images-wrapper">
              <v-row>
                <v-col md="4" cols="12"
                class="image"
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                :effect="'fade'"
                @click="index = imageIndex"
                :style="{ backgroundImage: 'url(' + image + ')' }">
                </v-col>
              </v-row>

            </div>



  </div>
   </div>

</template>

<script>
import common from "~/api/common";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
export default {
  components: {CoolLightBox, },
  name : 'Portfolio',
  data() {
    return {
      ProjectsData :common.Project,
      PageTitle: 'portfolio',
      images: [
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "https://static.toiimg.com/photo/72975551.cms",
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",

      ],
      index: null,
    }
  },
  head() {
    return {
      title: this.PageTitle,
    }
  }
}
</script>

<style lang="scss">
.gallery-wrap
{
.image {
  height: 300px;
  cursor: pointer;
}
}
.grid-item-holder {
	width: 100%;
	height: auto;
	position: relative;
	overflow: hidden;
}
.spad .gallery-item {
	padding: 6px;
}
.min-pad .gallery-item {
	padding: 2px;
}
.hid-port-info .grid-item-holder {
	overflow: hidden;
}
.grid-big-pad .gallery-item {
	padding: 12px;
}
.gallery-item,
.grid-sizer {
	width: 33.3%;
	position: relative;
	float: left;
	overflow: hidden;
}
.gallery-item-second,
.grid-sizer-second {
	width: 66.6%;
}
.four-column .gallery-item {
	width: 25%;
}
.four-column .gallery-item.gallery-item-second   , .two-column .gallery-item{
	width: 50%;
}
.gallery-item img,
.grid-sizer img {
	width: 100%;
	height: auto;
	position: relative;
	z-index: 1;
	background: #292929;
	-webkit-transition: all 2000ms cubic-bezier(.19,1,.22,1) 0ms;
	-webkit-transform: translateZ(0);
    transform: translateZ(0);
  	transition: all 2000ms cubic-bezier(.19,1,.22,1) 0ms;
}
.gallery-item:hover img {
	opacity: 0.7;
	-webkit-transform: scale(1.15);
	transform: scale(1.15);
}
.grid-det {
	position:absolute;
	left:20px;
	bottom:20px;
	top:20px;
	right:100%;
	z-index:10;
	overflow:hidden;
  background: rgba(45,45,50,0.81);
}
.grid-item-holder:hover .grid-det  {
	right:20px;
 	-webkit-transition: all 200ms ease-in-out;
    transition: all 200ms ease-in-out;
}
.grid-det-item  , .grid-det_category {
	position:absolute;
	bottom:20px;
	left:0;
	width:100%;
	padding:10px 30px;
	z-index:10;
	opacity:0;
	margin-top:-10px;
}
.grid-item-holder:hover  .grid-det-item , .grid-item-holder:hover  .grid-det_category{
	opacity:1;
	margin-top:0;
 	-webkit-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
	transition-delay: 0.4s;
}
.grid-det_link {
	color:#fff !important;
	display:block;
	text-transform:uppercase;
	font-size:11px;
	letter-spacing:3px;
	text-align:left;
	position:relative;
}
.grid-det_link:before {
	content:'';
	position:absolute;
	left:0;
	bottom:-10px;
	width:20px;
	height:1px;
  background: var(--custom-text-color)
}
.grid-det_link i {
	padding-left:10px;
 	-webkit-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
    color: var(--custom-text-color);
}
.grid-det_link:hover i {
	padding-left:20px;
}
.grid-det_category {
	bottom:inherit;
	top:20px;
}
.grid-det_category a {
	float:left;
	margin-right:12px;
	text-transform:uppercase;
	font-size:9px;
	letter-spacing:2px;
	text-align:left;
  color: var(--custom-text-color);

}
.fet_pr-carousel-box-media-zoom , .box-media-zoom {
	position: absolute;
	top: 0;
	right: -70px;
	width: 70px;
	height: 60px;
	line-height: 60px;
	color: #fff;
	background: #35353A;
	z-index: 5;
	-webkit-transition: all 200ms linear;
	transition: all 200ms linear;
}
.gallery-item:hover .fet_pr-carousel-box-media-zoom , .hov_zoom:hover .box-media-zoom  {
	right: 0;
}
.portfolio_item img {
	 width:auto;
	position:relative;
	z-index:1;
	-webkit-transition: all 2000ms cubic-bezier(.19,1,.22,1) 0ms;
	-webkit-transform: translateZ(0);
    transform: translateZ(0);
  	transition: all 2000ms cubic-bezier(.19,1,.22,1) 0ms;
}

.portfolio_item:hover img {
	opacity: 0.7;
	-webkit-transform: scale(1.15);
	transform: scale(1.15);
}


.portfolio_item {
    width: auto;
    height: 100%;
    overflow: hidden;
    position: relative;
    z-index: 1;
}

.portfolio_item .grid-item-holder {
    width: auto;
    height: 100%;
}
</style>