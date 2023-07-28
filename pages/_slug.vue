<!-- pages/_slug.vue -->
<template>
  <div class="my-20">
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const { data } = await $axios.get(`/api/posts/${params.slug}`);
    return { post: data };
  },
};
</script>
