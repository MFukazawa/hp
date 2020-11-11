<template>
  <div class="antialiased leading-normal flex flex-col min-h-screen">
    <header class="w-full fixed">
      <nav class="p-4 mx-auto flex flex-wrap justify-between items-center">
        <div>
          <a href="/">
            <div
              id="logo"
              class="h-16 w-16 rounded font-bold text-white flex items-center justify-center tracking-wide transition ease-in-out duration-1000"
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

  #logo {
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

  /* body {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    margin:0;
    padding:0;
    line-height: 1;
    font-size: 1.6rem
  }

  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
    outline: none;
      -webkit-tap-highlight-color: transparent;
    cursor: pointer;
  }

  .layout {
    margin: 0 auto;
    color: #5d5d5d;
  }

  .nav {
    position: relative;
    padding: 1em 0;
    align-items: center;
    z-index: 10;
  }

  .container {
    display: flex;
    flex-flow: row wrap;
    width: 90%;
    align-items: center;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }

  .nav__logo {
    flex: 1 1 0;
    align-self: flex-start;
    height: 120px;
  }

  .nav__logo img {
    max-width: 150px;
    transition: all .2s ease-in-out;
  }

  .nav__logo-link {
    margin-top: 10px;
    width: 150px;
    display: flex;
    align-content: center;
    align-items: center;
  }

  .nav__logo-link img:hover {
    transform: translateY(-3px);
    opacity: .9;
  }

  .nav__list {
    flex: 1 1 0;
    margin: 0;
    padding: 0;
    text-align: right;
    height: 110px;
    padding-top: 10px;
  }

  .nav__list-item {
    text-decoration: none;
    display: inline-block;
    padding: .3em 1em;
    letter-spacing: .5px;
    font-size: .8em;
    transition: color .25s ease;
  }

  .nav__list-item:hover {
    color: cornflowerblue;
  }

  .footer {
    padding: 4em 0 6em;
  }

  .footer__header {
    display: -ms-flexbox;
    display: flex;
    flex: 1 1 100%;
      -ms-flex: 1 1 100%;
    margin-bottom: .5em;
    letter-spacing: -1px;
    font-size: 2rem;
    font-weight: 400;
  }

  .footer__link {
    display: block;
    padding: 15px 0;
    font-size: 2rem;
    font-weight: 300;
    color: cornflowerblue;
    transition: color .25s ease;
  }

  .footer__link:hover {
    color: #5d5d5d;
  }

  .social-list {
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
  }

  .social-list__item {
    display: block;
    margin: 2em 0;
    list-style: none;
    transition: color .25s ease;
    cursor: pointer;
  }

  .social-list__item:hover {
    color: cornflowerblue;
  }

  @media screen and (min-width: 768px) {
    .nav__list {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-top: 0;
    }

    .footer__header {
      flex: 0 0 auto;
      margin-bottom: 0;
      margin-block-start: 0;
      font-size: 3rem;
    }

    .footer__link {
      display: inline-block;
      padding: 0;
      font-size: 3rem;
      margin-left: 15px;
      font-weight: 500;
    }

    .social-list__item {
      display: inline-block;
      margin: 40px 40px 0 0;
    }
  } */
</style>
