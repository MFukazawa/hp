<template>
  <section id="blog" class="h-screen bg-green-200">
      <base-container>
        <div class="contents leading-loose" v-scroll-reveal.reset="{ delay: 300, distance: '50px', origin: 'left' }">
          <h2 class="text-5xl font-bold my-8">Blog</h2>
          <ul>
            <li v-for="{ node } in $page.posts.edges" :key="node.id">
              <g-link :to="node.path">{{ node.title }}</g-link>
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
    }
  }
</script>