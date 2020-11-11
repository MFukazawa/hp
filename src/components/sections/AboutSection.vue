<template>
  <section id="about" class="h-screen">
    <base-container>
      <div class="contents leading-loose">
        <h2 class="text-5xl font-bold my-8">About</h2>
        <p class="text-xl ">
          Hi, I'm Micah. I work remotely as a Frontend Developer at Nomadori in
          Miyazaki, Japan. I speak English and Japanese. I've built
          <a
            class="text-yellow-600 underline hover:text-yellow-800"
            href="https://www.miyazakijazz.org"
            >Miyazaki Jazz Organization</a
          >
          and
          <a
            class="text-yellow-600 underline hover:text-yellow-800"
            href="https://www.nomadori.com"
            >Nomadori</a
          >, along with a number of private projects.
        </p>

        <ul class="text-xl mt-5">
          <label>Some of my favorite tools:</label>
          <li class="list-inside pl-4">
            <span class="text-sm mr-4"
              ><font-awesome :icon="['fas', 'terminal']" /></span
            >Nuxt.js
          </li>
          <li class="list-inside pl-4">
            <span class="text-sm mr-4"
              ><font-awesome :icon="['fas', 'terminal']" /></span
            >Vue.js
          </li>
          <li class="list-inside pl-4">
            <span class="text-sm mr-4"
              ><font-awesome :icon="['fas', 'terminal']" /></span
            >ES6
          </li>
          <li class="list-inside pl-4">
            <span class="text-sm mr-4"
              ><font-awesome :icon="['fas', 'terminal']" /></span
            >TailwindCSS
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
  };
</script>
