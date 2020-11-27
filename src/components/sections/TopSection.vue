<template>
  <base-container>
    <main>
      <section class="contents top">
        <div class="top-inner">
          <flip-card>
            <template v-slot:front>
              <h1 class="title">Micah</h1>
            </template>
            <template v-slot:back>
              <h1 class="title">マイカ</h1>
            </template>
          </flip-card>
          <flip-card>
            <template v-slot:front>
              <h1 class="title">Fukazawa</h1>
            </template>
            <template v-slot:back>
              <h1 class="title">深澤</h1>
            </template>
          </flip-card>
          <flip-card class="mt-10">
            <template v-slot:front>
              <h2 class="subtitle subtitle-black">Frontend Developer</h2>
            </template>
            <template v-slot:back>
              <h2 class="subtitle subtitle-black">
                フロントエンドディベロッパー
              </h2>
            </template>
          </flip-card>
        </div>
        <ul class="text-lg text-center mt-20 md:mb-12 text-gray-100">
          <li>Cross-culture 🇺🇸🇯🇵</li>
          <li>
            Remote Work 🏡
          </li>
          <li>Dad life 👨‍👩‍👦‍👦</li>
        </ul>
      </section>
    </main>
  </base-container>
</template>

<script>
import BaseContainer from '~/components/containers/BaseContainer';
import FlipCard from '~/components/FlipCard';

export default {
  components: {
    BaseContainer,
    FlipCard
  }
}
</script>

<style scoped>
.top {
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

@screen sm {
  .subtitle-black {
    @apply text-gray-100;
  }
}
</style>