<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const { data } = await $axios.get('/api/posts');
      return { posts: data.posts };
    } catch (error) {
      console.error('Error fetching posts:', error);
      return { posts: [] };
    }
  }
}
</script>
