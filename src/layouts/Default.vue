<template>
  <div class="layout">
    <nav class="nav">
      <div class="container">
        <div class="nav__logo">
          <g-link class="nav__logo-link" to="/">
            <img class="nav__img" src="../assets/logo.jpg">
          </g-link>
        </div>
        <div class="nav__list">
          <g-link class="nav__list-item" to="/about">About</g-link>
          <g-link class="nav__list-item" to="/work/">Work</g-link>
          <g-link class="nav__list-item" to="/contact/">Contact</g-link>
        </div>
      </div>
    </nav>
    <slot/>
    <footer class="footer">
      <div class="container">
        <h2 class="footer__header">Starting a project?</h2>
        <a class="footer__link" href="https://forms.gle/EQxHCGsdg9buMBm26">Let's talk.</a>
      </div>
      <div class="container">
        <ul class="social-list">
          <li class="social-list__item">
            <a href="https://github.com/MFukazawa" target="_blank">
              Github
            </a>
          </li>
          <li class="social-list__item">
            <a href="https://www.linkedin.com/in/micah-fukazawa-99735a52/" target="_blank">
              Linkedin
            </a>
          </li>
          <li class="social-list__item">
            <a href="https://forms.gle/EQxHCGsdg9buMBm26">
              Contact
            </a>
          </li>
        </ul>
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
  body {
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
  }

  .nav__logo-link {
    margin-top: 10px;
    display: flex;
    align-content: center;
    align-items: center;
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

  /* footer */
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

  }

</style>
