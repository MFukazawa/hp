<template>
  <layout>
    <div class="container">
      <div class="project-hero">
        <header class="hero-header">
          <h1 class="project-label">Miyazaki Jazz Organization</h1>
          <h2 class="project-title">
            A custom website for 宮崎ジャズ協会, the Miyazaki Jazz Organization.
          </h2>
        </header>
      </div>
    </div>
  </layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Miyazaki Jazz Organization'
  }
}
</script>

<style scoped>
  .project-hero {
    display: flex;
    align-content: center;
    justify-content: center;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    margin-bottom: 3em;
  }

  .project-label {
    margin-bottom: 1em;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 300;
  }

  .project-title {
    letter-spacing: -1px;
    line-height: 1.7;
    font-size: 1.8rem;
    font-weight: 400;
  }
</style>