<template>
  <main class="top">
    <div class="w-2/3 lg:w-1/2 mx-auto">
      <flip-card
        v-scroll-reveal.reset="{
          delay: 250,
          distance: '50px',
          origin: 'left',
        }"
      >
        <template v-slot:front>
          <h1 class="title">Micah</h1>
        </template>
        <template v-slot:back>
          <h1 class="title">マイカ</h1>
        </template>
      </flip-card>
      <flip-card
        v-scroll-reveal.reset="{
          delay: 350,
          distance: '50px',
          origin: 'right',
        }"
      >
        <template v-slot:front>
          <h1 class="title">Fukazawa</h1>
        </template>
        <template v-slot:back>
          <h1 class="title">深澤</h1>
        </template>
      </flip-card>
      <flip-card
        class="mt-10"
        v-scroll-reveal.reset="{
          delay: 450,
          distance: '50px',
          origin: 'left',
        }"
      >
        <template v-slot:front>
          <h2 class="subtitle subtitle-black">Frontend Developer</h2>
        </template>
        <template v-slot:back>
          <h2 class="subtitle subtitle-black">フロントエンドディベロッパー</h2>
        </template>
      </flip-card>
    </div>
    <ul
      class="text-lg text-center md:mb-12 text-gray-100 pointer-events-none facts"
      v-scroll-reveal.reset="{
        delay: 500,
        distance: '50px',
        origin: 'bottom',
      }"
    >
      <li>Cross-culture 🇺🇸🇯🇵</li>
      <li>Remote Work 🏡</li>
      <li>Dad life 👨‍👩‍👦‍👦</li>
    </ul>
  </main>
</template>

<script>
  import FlipCard from '~/components/FlipCard';

  export default {
    components: {
      FlipCard,
    },
  };
</script>

<style scoped>
  .top::after {
    content: '';
    position: absolute;
    inset: 0 auto;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-image: url('../../assets/kahika-Q6jxxKOmL4s-unsplash.jpg');
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
    filter: contrast(0.7);
  }

  .top {
    height: 100vh;
    padding-top: 7rem;
    @apply flex flex-col justify-between overflow-hidden;
  }

  @supports (-webkit-overflow-scrolling: touch) {
    /* CSS specific to iOS devices only */
    .top {
      height: -webkit-fill-available;
    }
  }

  .title {
    @apply text-6xl cursor-default font-extrabold;
  }

  .subtitle {
    @apply text-3xl cursor-default font-extrabold text-gray-100;
  }

  .subtitle-black {
    @apply text-gray-800;
  }

  .facts {
    padding-bottom: 2rem;
  }

  @screen sm {
    .subtitle-black {
      @apply text-gray-100;
    }
  }
</style>
