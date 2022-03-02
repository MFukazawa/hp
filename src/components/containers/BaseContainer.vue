<template>
  <div class="container w-full mx-auto pt-12 md:pt-20 md:mt-8 mb-16">
    <div class="w-full px-4 md:px-0 text-gray-800 leading-normal">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}

@media screen and (min-width: 768px) {
  .container {
    max-width: 768px
  }
}

@media screen and (min-width: 1024px) {
  .container {
    max-width: 1024px
  }
}

@media screen and (min-width: 1280px) {
  .container {
    max-width: 1280px
  }
}
</style>