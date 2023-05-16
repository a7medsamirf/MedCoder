<template>
    <div id="test">
        <v-container>
            <v-row>
                <v-col cols="12" md="3" v-for="post in posts" :key="post.id">
                    <v-card
    class="mx-auto"
    max-width="344"
  >
  <v-img
                  v-if="post.image"
                  :src="post.image"
                  :alt="post.name"
                  contain
                  height="200px"
                ></v-img>

    <v-card-title>
        {{ post.title }}
    </v-card-title>

    <v-card-subtitle>
     {{post.price}}
    </v-card-subtitle>
  </v-card>

                </v-col>




            </v-row>
        </v-container>



    </div>
</template>
<script>
  export default {
    data() {
      return {
        posts: []
      };
    },
    created() {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((posts) => {
          // store the posts in the reactive state
          this.posts = posts;
        });
    }
  };
</script>
<style lang="">
    
</style>