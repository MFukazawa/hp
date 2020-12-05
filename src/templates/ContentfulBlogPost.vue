<template>
  <Layout>
    <div class="contents blog-top">
      <!-- <g-image class="hero-image" :src="$page.post.heroImage.file.url" /> -->
      <h1>{{$page.post.title}}</h1>
      <div v-html="body" />
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: contentfulBlogPost (path: $path) {
    title,
    body
  }
}
</page-query>

<script>
  import Layout from '~/layouts/Blog.vue'
  import MarkdownIt from "markdown-it";

  export default {
    components: {
      Layout
    },
    computed: {
      body() {
        const md = new MarkdownIt();

        return md.render(this.$page.post.body);
      }
    }
  };
</script>

<style scoped>
  .hero-image {
    width: 100%;
  }

  .blog-top {
    padding: 150px 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>