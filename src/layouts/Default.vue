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

  @media screen and (max-width: 360px) {
    .nav__logo img {
      max-width: 150px;
    }
  }

</style>
