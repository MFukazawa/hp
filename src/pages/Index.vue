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
    <section class="work">
      <div class="container">
        <h2 class="secondary-header">Featured Work</h2>
      </div>
      <div class="featured-work-container">
        <a class="work-link" href="/mjo">
          <div class="work-link-wrapper">
            <img class="work-link-image" src="../assets/mjo2.png">
            <div class="work-link-content">
              <h3 class="link-content__header">Miyazaki Jazz Organization</h3>
            </div>
          </div>
        </a>
        <a class="work-link">
          <div class="work-link-wrapper">
            <img class="work-link-image" src="../assets/smartbrain.png">
            <div class="work-link-content">
              <h3 class="link-content__header">Smartbrain Facial Recognition App</h3>
            </div>
          </div>
        </a>
      </div>

    </section>


    <!-- <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p> -->

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Micah Fukazawa | Developer',
    titleTemplate: '%s'
  }
}
</script>

<style scoped>
  /* Hero */
  .container {
    display: flex;
    flex-flow: row wrap;
    width: 90%;
    align-items: center;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }

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
    margin: 5px 0 0 5px;
    transition: all .2s ease-in-out;

  }

  .hero__employer-img:hover {
    transform: translateY(-2px);
    opacity: .9;
  }

  .employer__label {
    margin-bottom: 1em;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 400;
    font-size: 1rem;
  }

  /* Work */
  .work {
    margin-top: 3em;
  }

  .secondary-header {
    display: flex;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    margin-bottom: 1em;
    letter-spacing: -1px;
    font-size: 2rem;
    font-weight: 400;
  }

  .featured-work-container {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    padding-bottom: 1em;
  }

  .work-link {
    flex: 1 1 100%;
    display: inline-block;
    padding: 15px;
    transition: all .2s ease;
    transform: translateY(0);
    background: transparent;
    box-shadow: 0 0 0 rgba(93,93,93,0)

  }

  .work-link:hover {
    transform: translateY(-2px);
    opacity: .9;
    box-shadow: 0 8px 14px rgba(93,93,93,.1)
  }


  .work-link-image {
    display: block;
    width: 100%;
    height: auto;
  }

  .work-link-content {
    position: relative;
    z-index: 10;
    border-radius: 4px;
    background: #fff;
    padding: 15px;
  }

  .link-content__header {
    text-align: center;
    width: 100%;
    margin-bottom: 0;
    color: #5d5d5d;
    letter-spacing: 0;
    line-height: 1.2;
    font-size: 1.3rem;
    font-weight: 400;
    transition: color .3s ease;
  }

  @media screen and (min-width: 768px) {
    .hero__title {
      font-size: 2.5rem;
    }

    .secondary-header {
      font-size: 2.5rem;
    }

    .link-content__header {
      font-size: 2rem;
    }

    .featured-work-container {
      padding: 0 15px 2em 15px;
      justify-content: center;
    }

    .work-link {
      flex: 0 0 45%;
    }

    .work-link-image {
      max-height: 146px;
    }
  }

  @media screen and (min-width: 1024px) {
    .work-link-image {
      max-height: 197px;
    }
  }

  @media screen and (min-width: 1440px) {
    .work-link {
      flex: 0 0 47%;
    }
    .work-link-image {
      max-height: none;
    }
  }

  @media screen and (min-width: 2560px) {
    .secondary-header {
      font-size: 2em;
    }

    .work-link {
      flex: 0 0 48%
    }

    .work-link-image {
      max-height: 501px;
      max-width: none;
      margin: 0 auto;
    }

    .link-content__header {
      font-size: 2em;
    }
  }


</style>

