<template>
  <Layout>
    <base-container>
      <div id="main" class="flex-grow">
        <div class="px-4 py-12 mx-auto">
          <flip-card>
            <template v-slot:front>
              <h1 class="text-6xl font-extrabold">Micah</h1>
            </template>
            <template v-slot:back>
              <h1 class="text-6xl font-extrabold">マイカ</h1>
            </template>
          </flip-card>
          <flip-card>
            <template v-slot:front>
              <h1 class="text-6xl font-extrabold">Fukazawa</h1>
            </template>
            <template v-slot:back>
              <h1 class="text-6xl font-extrabold">深澤</h1>
            </template>
          </flip-card>
          <flip-card>
            <template v-slot:front>
              <h2 class="text-2xl font-extrabold">Frontend Developer</h2>
            </template>
            <template v-slot:back>
              <h2 class="text-2xl font-extrabold">
                フロントエンドディベロッパー
              </h2>
            </template>
          </flip-card>
          <p class="text-lg mb-6">
            Transform your designs into beautiful web apps
          </p>
          <div class="flex items-center justify-center">
            <button class="px-8 py-3 rounded bg-red-400 text-white">
              Contact
            </button>
          </div>
        </div>
      </div>
    </base-container>
  </Layout>
</template>

<script>
import BaseContainer from "~/components/containers/BaseContainer";
import FlipCard from "~/components/FlipCard";

export default {
  metaInfo: {
    title: "Micah Fukazawa | Front End Developer",
    titleTemplate: "%s",
  },
  components: {
    BaseContainer,
    FlipCard,
  },
};
</script>

<style scoped>
/* .main {
  background-image: url('../assets/triangle.png');
  height: 100vh;
  background-position: center;
  background-size: cover;
} */
</style>

