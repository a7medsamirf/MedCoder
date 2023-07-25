<template>
   <div class="gallery-wrap" id="portfolio_horizontal_container">
    <div id="portfolio">
      <v-container >
        <Title
    :SectionTitle="$t('SectionTitle.contacts-Us')"
    />

    <v-row>


<v-col lg="4" md="6" cols="12" class="pa-1" v-for="(Project, index) in ProjectsData" :key="index">
        <div class="portfolio_item houses design" >
                                <div class="grid-item-holder">
                   <v-img
                    class="photo"
                    v-if="Project.image"
                    :src="require(`~/static/images/Projects/${Project.image}`)"
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





  </div>
   </div>

</template>

<script>
import common from "~/api/common";
export default {
  name : 'Portfolio',
  data() {
    return {
      ProjectsData :common.Project,
      PageTitle: 'portfolio',
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
  background: rgb(11 13 57 / 80%);
}
.grid-item-holder:hover .grid-det  {
	right:20px;
  transition: $transition;
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
  color: var(--custom-text-color) !important;

}
</style>
