<template>
  <div>
    <v-container>
      <div class="section-title">
                                <h3>Reviews</h3>
                                <h2>My Clients and <span>Testimonials</span></h2>
                                <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida.  </p>
                            </div>
            <div class="section-subtitle rellax" 
                      v-rellax="rellax"
                      data-rellax-percentage="0.5"
                      data-rellax-speed="7"
                      data-rellax-xs-speed="-4"
                      data-rellax-mobile-speed="3"
                      data-rellax-tablet-speed="-8"
                      data-rellax-desktop-speed="1"
                      style="font-size: 150px; transform: translateZ(0px) translateY(77.1037px);"
                >
                {{SectionTitle}}<span>//</span></div>
    </v-container>
  
  </div>
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
/*   data() {
    return {
      rellax: {
        speed: -2
      }
    }
  }, */
  methods: {
    destroyRellax() {
      this.rellax = false
    }
  }
}
</script>

<style lang="scss">
 .section-subtitle {
    position: absolute;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    font-weight: 900;
    @include right(100px);
    color: #ccc;
    right: 0;
    opacity: 0.15;
    text-align: left;
    top: 0;
    span{
        color: #3a37eb;
        opacity: 1;
    }
}

.section-title h3 {
    position: relative;
    padding-bottom: 30px;
    text-align: left;
    font-weight: 600;
    font-size: 14px;
    position: relative;
    color: #999;
}

.section-title h2 {
    font-size: 40px;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    font-weight: 800;
    color: rgb(50, 58, 69);
    position: relative;
    padding-bottom: 30px;
}

.section-title p {
    font-size: 11px;
    line-height: 24px;
    padding-bottom: 10px;
    font-weight: 500;
    color: #878C9F;
    font-family: 'Poppins', sans-serif;
    max-width: 550px;
}

.section-title {
    padding: 20px 0 20px 50px;
    margin-bottom: 50px;
    text-align: left;
    position: relative;
}

.section-title:before {
    content: '';
    position: absolute;
    top: 0;
    left: -2px;
    width: 4px;
    height: 100%;
    background: #FAC921;
}

.section-title h3:before {
    content: '';
    position: absolute;
    bottom: 12px;
    left: 0;
    width: 50px;
    height: 1px;
    border-bottom: 1px dotted #666;
}


</style>
