<template>
  <div class="hero antialiased leading-normal flex flex-col min-h-screen">
    <header class="w-full fixed">
      <nav class="p-4 mx-auto flex flex-wrap justify-between items-center">
        <div>
          <a href="/">
            <div
              id="logo"
            >
              MSF
            </div>
          </a>
        </div>
        <ul class="flex items-center mt-8 lg:mt-0">
          <li class="mr-8 mb-6 lg:mb-0">
            <g-link
              class="slider"
              to="/about"
            >
              About
            </g-link>
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <g-link
              class="slider"
              to="/work"
            >
              Work
            </g-link>
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <g-link
              class="slider"
              to="/contact"
            >
              Contact
            </g-link>
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <g-link
              class="slider"
              to="/blog"
            >
              Blog
            </g-link>
          </li>
        </ul>
      </nav>
    </header>

    <slot />

    <footer class="border-b-4 border-black w-full bg-white">
      <div class="p-2 mx-auto flex flex-wrap justify-center items-center">
        <a
          target="_blank"
          href="https://forms.gle/EQxHCGsdg9buMBm26"
          class="font-bold text-4xl tracking-wide"
        >
          Let's talk.
        </a>
      </div>
      <div class="p-2 mx-auto">
        <ul class="flex justify-center items-center p-4">
          <li class="mx-4 text-2xl">
            <a href="https://gitlab.com/MFukazawa" target="_blank">
              <font-awesome :icon="['fab', 'gitlab']" />
            </a>
          </li>
          <li class="mx-4 text-2xl">
            <a href="https://github.com/MFukazawa" target="_blank">
              <font-awesome :icon="['fab', 'github']" />
            </a>
          </li>
          <li class="mx-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/micah-fukazawa-99735a52/"
              target="_blank"
            >
              <font-awesome :icon="['fab', 'linkedin']" />
            </a>
          </li>
          <li class="mx-4 text-2xl">
            <a href="https://www.twitter.com/MicahFukazawa">
              <font-awesome :icon="['fab', 'twitter']" />
            </a>
          </li>
        </ul>
        <div class="text-center text-xs">Copyright Micah Fukazawa © 2020</div>
        <div class="text-center pt-2 unsplash">
          <span>Photo by <a href="https://unsplash.com/@kahika?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Kahika</a> on <a href="https://unsplash.com/s/photos/black-and-white-japan?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
  @font-face {
    font-family: 'Kongtext';
    src: url('../fonts/kongtext.ttf');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Lunch DS';
    src: url('../fonts/lunchds.ttf');
    font-weight: normal;
  }

  html {
    /* font-family: 'Kongtext'; */

    /* font-family: 'Lunch DS'; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: calc(12px + 6 * ((100vw - 320px) / 680));
    scroll-behavior: smooth;
  }

  .container {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    .container {
      max-width: 768px
    }
  }

  @media screen and (min-width: 1024px) {
    html {
      font-size: 16px
    }

    .container {
      max-width: 1024px
    }
  }

  @media screen and (min-width: 1280px) {
    .container {
      max-width: 1280px
    }
  }

  .hero::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-image: url('../assets/kahika-Q6jxxKOmL4s-unsplash.jpg');
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
    filter: contrast(0.7);
  }

  #logo {
    @apply h-16 w-16 rounded font-bold flex items-center justify-center tracking-wide transition ease-in-out duration-1000;

    color: goldenrod;
    background-color: #000;
  }

  #logo:hover {
    transform: rotateY(1080deg);
  }

  .slider::after {
    display: block;
    content: '';
    border-bottom: solid 1px #000;
    transform: scaleX(0);
    transition: transform 100ms ease-in-out;
  }

  .slider:hover::after {
    transform: scaleX(1);
  }

  .unsplash {
    font-size: 10px;
  }

</style>
