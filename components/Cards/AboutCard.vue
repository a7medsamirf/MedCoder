<template>
    <v-card outlined class="About-card py-3 px-1 ">
              <v-list-item three-line >
                <v-list-item-avatar
                  tile
                  size="60"
                  color="primary"
                  class="rounded-circle"
                >
                  <img class="white--text filter-color" :src="avatar" :alt="title">
                </v-list-item-avatar>


                <v-list-item-content>
                    <v-list-item-title class="use-text-subtitle text-color-default mb-2" v-text="$t('about.' + title)" />
                  <v-list-item-subtitle class="use-text-paragraph" v-text="$t('common.' + description)"/>
                  <nuxt-link to="#" class="mt-2" target="_blank">{{ $t('common.ReadMore') }}</nuxt-link>

                </v-list-item-content>

              </v-list-item>
                <h2 class="overlay-title">{{ number }}</h2>
            </v-card>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
   description: {
      type: String,
      required: true
    },
     number: {
      type: String,
      required: true
    },

  }
}
</script>

<style lang="scss">


</style>
