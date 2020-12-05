<template>
  <Layout>
    <top-section />
    <about-section />
    <blog-section />
  </Layout>
</template>

<script>
  import TopSection from '~/components/sections/TopSection';
  import AboutSection from '~/components/sections/AboutSection';
  import BlogSection from '~/components/sections/BlogSection';

  export default {
    metaInfo: {
      title: 'Micah Fukazawa | Front End Developer',
      titleTemplate: '%s',
    },
    components: {
      TopSection,
      AboutSection,
      BlogSection
    },
  };
</script>

<page-query>
query Posts {
  posts: allContentfulBlogPost {
    edges {
      node {
        id,
        title,
        path
      }
    }
  }
}
</page-query>