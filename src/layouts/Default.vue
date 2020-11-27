<template>
  <div class="hero antialiased leading-normal flex flex-col min-h-screen">
    <nav-header />

    <slot />

    <nav-footer />
  </div>
</template>

<script>
import NavHeader from "~/components/nav/NavHeader"
import NavFooter from "~/components/nav/NavFooter"

export default {
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
  .hero::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-image: url('../assets/kahika-Q6jxxKOmL4s-unsplash.jpg');
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
    filter: contrast(0.7);
  }
</style>
