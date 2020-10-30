<script>
import "./AppHeader.styl";
const name = "AppHeader";

const components = {};

export default {
  name,
  components
};
</script>

<template>
  <nav
    id="app-header"
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="/headphones-mic02-favicon.png" height="32" />
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <NuxtLink to="/" class="navbar-item">FormStarter</NuxtLink>
        <NuxtLink to="/details" class="navbar-item">DetailsStarter</NuxtLink>
        <NuxtLink to="/help" class="navbar-item">Help</NuxtLink>
      </div>
    </div>
  </nav>
</template>
