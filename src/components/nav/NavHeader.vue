<template>
  <header class="fixed w-screen">
    <nav class="p-4 mx-auto flex flex-wrap justify-between items-center">
      <a href="/">
        <div id="logo">
          MSF
        </div>
      </a>
      <ul class="flex items-center mt-8 lg:mt-0">
        <li class="mr-8 mb-6 lg:mb-0">

        <g-link class="slider" to="/">
          Home
        </g-link>
        </li>
        <li class="mr-8 mb-6 lg:mb-0">
          <a href="#about" class="slider">About</a>
        </li>
        <li class="mr-8 mb-6 lg:mb-0">
          <a href="https://forms.gle/EQxHCGsdg9buMBm26" target="_blank" class="slider">
            Contact
          </a>
        </li>
        <li class="mr-8 mb-6 lg:mb-0">
          <a href="#blog" class="slider">Blog</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {};
</script>

<style scoped>
header {
  top: 0;
  transform: translate3d(0,0,0);
  -webkit-backface-visibility: hidden;
}

#logo {
  @apply h-16 w-16 rounded font-bold flex items-center justify-center tracking-wide transition ease-in-out duration-1000 z-50;

  color: goldenrod;
  background-color: #000;
}

#logo:hover {
  transform: rotateY(1080deg);
}
</style>
