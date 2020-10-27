<template>
  <section id="about" class="h-screen bg-green-200">
    <base-container>
      <div class="contents">
        <h2 class="text-4xl font-bold my-8">About</h2>
        <p>
          Hi, I'm Micah.  I work remotely as a Frontend Developer at Nomadori in Miyazaki, Japan.
          I was born and raised in the USA.
          I've built
          <a href="https://www.miyazakijazz.org">Miyazaki Jazz Organization</a> and
          <a href="https://www.nomadori.com">Nomadori</a>,
          along with a number of private projects.
        </p>

        <ul>
          <label>Some of my favorite tools:</label>
          <li class="list-disc list-inside pl-4">Nuxt.js</li>
          <li class="list-disc list-inside pl-4">Vue.js</li>
          <li class="list-disc list-inside pl-4">JavaScript</li>
          <li class="list-disc list-inside pl-4">TailwindCSS</li>
        </ul>
      </div>
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