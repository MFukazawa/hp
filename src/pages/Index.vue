<template>
  <Layout>
    <section class="hero">
      <div class="container">
        <h1 class="hero__title">
          I'm Micah Fukazawa, a
          <a href="https://github.com/MFukazawa/" target="_blank" class="hero__link">
            front-end developer
          </a> 
          living in Miyazaki, Japan, currently working for
          <a href="https://nomadori.com/" target="_blank">Nomadori</a>
          .
        </h1>
      </div>
      <div class="container">
        <div class="hero__employer">
          <h3 class="employer__label">Currently:</h3>
          <a target="_blank" href="https://nomadori.com/">
            <g-image class="hero__employer-img" src="~/assets/nomadori_logo.png"></g-image>
          </a>
        </div>
      </div>

    </section>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <div class="logo">
      MF
    </div>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style scoped>
  .hero__title {
    position: relative;
    max-width: 840px;
    margin-top: .5em;
    margin-bottom: 1.5em;
    letter-spacing: -1px;
    line-height: 1.8;
    font-size: 2rem;
    font-weight: 400;
  }

  .hero__link {
    color: cornflowerblue;
    transition: color .25s ease;
  }

  .hero__link:hover {
    color: #5d5d5d;
  }

  .hero__employer-img {
    margin-left: 5px;
  }

  .employer__label {
    margin-bottom: 1em;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 400;
    font-size: 1rem;
  }


</style>

