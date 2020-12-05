<template>
  <header class="w-full fixed">
    <nav class="p-4 mx-auto flex flex-wrap justify-between items-center">
      <a href="/">
        <div id="logo">
          MSF
        </div>
      </a>
      <ul class="flex items-center mt-8 lg:mt-0">
        <li class="mr-8 mb-6 lg:mb-0">
          <a href="#about" class="slider">About</a>
        </li>
        <li class="mr-8 mb-6 lg:mb-0">
          <g-link class="slider" to="/work">
            Work
          </g-link>
        </li>
        <li class="mr-8 mb-6 lg:mb-0">
          <g-link class="slider" to="/contact">
            Contact
          </g-link>
        </li>
        <li class="mr-8 mb-6 lg:mb-0">
          <g-link class="slider" to="/blog">
            Blog
          </g-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {};
</script>

<style scoped>
#logo {
  @apply h-16 w-16 rounded font-bold flex items-center justify-center tracking-wide transition ease-in-out duration-1000 z-50;

  color: goldenrod;
  background-color: #000;
}

#logo:hover {
  transform: rotateY(1080deg);
}
</style>
