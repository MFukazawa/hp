<template>
  <section id="about" class="h-screen">
    <base-container>
      <h2 class="text-4xl font-bold my-8">About</h2>
      <p>
        Hi, I'm Micah.  I work remotely as a Frontend Developer at Nomadori in Miyazaki, Japan.
        I was born and raised in the United States of America.
        I've built
        <a href="https://www.miyazakijazz.org">Miyazaki Jazz Organization</a> and 
        <a href="https://www.nomadori.com">Nomadori</a>, 
        along with a number of private projects.
      </p>

      <ul>
        <label>Some of my favorite tools:</label>
        <li class="list-disc">Nuxt.js</li>
        <li class="list-disc">Vue.js</li>
        <li class="list-disc">JavaScript</li>
        <li class="list-disc">TailwindCSS</li>
      </ul>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '~/components/containers/BaseContainer';

export default {
  components: {
    BaseContainer
  }
}
</script>

<style scoped>
  #about {
    background-color: mediumseagreen;
  }
</style>