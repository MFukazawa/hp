<template>
  <Layout>
    <top-section />
    <about-section />
  </Layout>
</template>

<script>
  import TopSection from '~/components/sections/TopSection';
  import AboutSection from '~/components/sections/AboutSection';

  export default {
    metaInfo: {
      title: 'Micah Fukazawa | Front End Developer',
      titleTemplate: '%s',
    },
    components: {
      TopSection,
      AboutSection
    },
  };
</script>