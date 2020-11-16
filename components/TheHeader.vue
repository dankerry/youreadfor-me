<template>
  <!-- Header -->
  <nav class="navbar is-align-items-center has-shadow">
    <!-- logo / brand -->
    <div class="navbar-brand is-flex is flex-direction-row is-align-items-center">
      <div class="mr-3 mt-2">
        <i id="sidebarCollapsed" class="fa fa-align-justify"></i>
      </div>
      <a href="#" class="navbar-item">
        <img class="mr-1" src="~assets/images/logo.png" alt="site logo">
        <span class="logo-txt">Youreadfor.me</span>
      </a>
    </div>
    <form class="is-centered is-hidden-mobile">
      <div class="field">
        <div id="search-bar" class="control has-icons-left">
          <input id="search-field" class="input is-rounded" type="text" name="">
          <span class="search-icon-parent icon is-small is-left">
            <i class="search-icon fa fa-search"></i>
          </span>
        </div>
      </div>
    </form>
    <div>
      <i id="sidebarCollapsed" class="search-icon fa fa-search is-hidden-tablet is-hidden-desktop"></i>
    </div>
    <a href="#" class="navbar-item px-0-mobile px-6-desktop">
      <img src="~assets/images/mic.svg" alt="mic">
    </a>
    <a href="#" class="navbar-item px-0-mobile px-6-desktop">
      <i class="la la-bell la-2x">
        <small id="noty-count">2</small>
      </i>
    </a>
    <a href="#" class="navbar-item px-0-mobile px-6-desktop">
      <img src="~assets/images/grid.svg" alt="grid">
    </a>
    <a href="#" class="navbar-item px-0-mobile px-6-desktop">
      <img style="border-radius: 50%;" class="is-rounded" src="~assets/images/avatar.jpeg">
    </a>
  </nav>
</template>
<style scoped>
@import "~/assets/css/style.css";
#noty-count {
  background: red;
  padding: 0.5px 3px;
  font-size: 10px;
  border-radius: 20px;
  font-weight: 600;
  color: #fff;
  border: solid #000 1px;
  box-shadow: 0 0 0 3px #fff;
  position: absolute;
  margin-left: -13px;
  margin-top: 2px;
  font-family: Arial, Helvetica, sans-serif;
}

.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between !important;
  padding-top: .6rem;
  padding-bottom: .6rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.navbar-item {
  padding: 0 !important;
}

.navbar-item:hover {
  color: inherit;
}

.navbar-item:active {
  color: inherit;
}

.navbar-item:focus {
  color: inherit;
}
.search-icon {
  color: #d0d0d0;
  font-size: 1.7rem;
}

#search-bar {
  width: 450px;
}

@media only screen and (max-width: 1440px) {
  .navbar {
    padding: 1rem;
  }
}

@media only screen and (max-width: 848px) {
  #search-bar {
    width: 300px;
  }
}

@media only screen and (max-width: 768px) {
  .logo-txt {
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
  }

  .navbar {
    padding: 0 0.5rem;
  }
}

@media only screen and (max-width: 320px) {
  .logo-txt {
    font-size: 15px;
  }
}

</style>
