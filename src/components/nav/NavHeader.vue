<template>
  <header class="fixed w-screen">
    <nav class="p-4 mx-auto flex flex-wrap justify-between items-center">
      <div id="logo" class="cursor-pointer" @click="scrollToTop()">
        MSF
      </div>
      <ul class="flex items-center mt-8 lg:mt-0">
        <li class="mr-8 mb-6 lg:mb-0">

        <g-link class="slider blur" to="/" @click.native="scrollToTop()">
          Home
        </g-link>
        </li>
        <li class="mr-8 mb-6 lg:mb-0">
          <a href="#about" class="slider blur">About</a>
        </li>
        <li class="mr-8 mb-6 lg:mb-0">
          <a href="https://forms.gle/EQxHCGsdg9buMBm26" target="_blank" class="slider blur">
            Contact
          </a>
        </li>
        <!-- <li class="mr-8 mb-6 lg:mb-0">
          <a href="#blog" class="slider">Blog</a>
        </li> -->
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    methods: {
      scrollToTop() {
        window.scrollTo(0,0)
      }
    }
  };
</script>

<style scoped>
header {
  top: 0;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

#logo {
  @apply h-16 w-16 rounded font-bold flex items-center justify-center tracking-wide transition ease-in-out duration-150 z-50;

  color: goldenrod;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
  background-color: #000;
}

#logo::before {
  content: '';
  bottom: 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  filter: blur(6px);
  height: 94%;
  left: 3%;
  position: absolute;
  width: 94%;
  z-index: -1;
}

#logo:hover {
  transform: translateY(-5px);
  box-shadow: 10px 5px 5px slategray;
}
</style>
