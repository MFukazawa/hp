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

