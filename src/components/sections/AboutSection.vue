<template>
  <section id="about" class="min-h-screen overflow-hidden">
    <base-container>
      <div class="contents leading-loose" v-scroll-reveal.reset="{ delay: 300, distance: '50px', origin: 'left' }">
        <h2 class="text-5xl font-bold my-8">About</h2>
        <p class="text-xl">
          Hi, I'm Micah. I work remotely as a Frontend Developer at <a href="https://www.zeals.co.jp" class="text-yellow-600 blur" target="_blank">Zeals</a> from
          Miyazaki, Japan. I speak English and Japanese. I've built
          <a
            class="text-yellow-600 blur"
            href="https://www.miyazakijazz.org"
            target="_blank"
            >Miyazaki Jazz Organization</a
          >
          and
          <a
            class="text-yellow-600 blur"
            href="https://www.nomadori.com"
            target="_blank"
            >Nomadori</a
          >, along with a number of private projects.
        </p>

        <ul class="text-xl mt-5">
          <label>Some of my favorite tools:</label>
          <li v-for="(tool, index) in tools" :key="index" class="list-inside pl-4">
            <span class="text-sm mr-4">
              <font-awesome :icon="['fas', 'terminal']" />
            </span>
            {{ tool }}
          </li>
        </ul>
      </div>
    </base-container>
  </section>
</template>

<script>
  import BaseContainer from '~/components/containers/BaseContainer';

  export default {
    components: {
      BaseContainer,
    },
    data() {
      return {
        tools: [
          'JavaScript (vanilla, Vue.js, etc.)',
          'Nuxt.js',
          'TailwindCSS',
          'Netlify',
          'Github',
          'VSCode'
        ]
      }
    }
  };
</script>
