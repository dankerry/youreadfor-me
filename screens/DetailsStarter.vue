<template>
  <!-- copyright offense -->
  <div id='copyright-offense' class="container">
    <div id="container">
      <!-- start section -->
      <section class="section">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-8-mobile is-10-tablet">
              <h5 class="is-size-7 subtitle">Relevant deed: Sandbox</h5>
              <h3 class="is-size-7-mobile is-size-5-desktop has-text-weight-normal title">Copyright - Overview and Status</h3>
            </div>
            <div class="pt-2 column is-4-mobile is-2-tablet has-text-right">
              <i class="mdi mdi-comment-alert"></i>
              <i class="la la-question-circle"></i>
              <i class="la la-times"></i>
            </div>
          </div>
          <div class="columns mt-2">
            <div class="column is-size-12">
              <h5 class="is-size-7 subtitle">The visibility of your content has been limited. There will be no further actions taken towards your account</h5>
            </div>
          </div>
        </div>
      </section>
      <!-- end section -->
      <!-- start section -->
      <section class="section action-section">
        <div class="container">
          <div class="columns is-8 is-variable is-tablet">
            <div class="column is-4">
              <h3 class="is-size-7 title">Actions to your account</h3>
              <div class="card">
                <div class="card-content is-flex is-flex-direction-column">
                  <div class="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
                    <p class="is-size-7-mobile is-size-5-desktop has-text-weight-normal title is-uppercase mb-0">{{ action }}</p>
                    <img :src="action_image">
                  </div>
                  <p class="has-text-weight-light mt-2 is-size-7">The content ID-claim which has been imposed on your content does not result in further actions</p>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <h3 class="is-size-7 title">Visibility</h3>
              <div class="card">
                <div class="card-content is-flex is-flex-direction-column">
                  <div class="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
                    <p class="is-size-7-mobile is-size-5-desktop has-text-weight-normal title is-uppercase mb-0">{{ visibility }}</p>
                    <img :src="visibility_image">
                  </div>
                  <p class="has-text-weight-light mt-2 is-size-7">Users are not able to see this content because of one or several copyright complaints</p>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <h3 class="is-size-7 title">Salability</h3>
              <div class="card">
                <div class="card-content is-flex is-flex-direction-column">
                  <div class="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
                    <p class="is-size-7-mobile is-size-5-desktop has-text-weight-normal title is-uppercase mb-0">{{ salability }}</p>
                    <img :src="salability_image">
                  </div>
                  <p class="has-text-weight-light mt-2 is-size-7">Users are not able to see this content because of one or several copyright complaints</p>
                </div>
              </div>
            </div>
          </div>
          <div class="columns mt-4">
            <div class="column is-size-12">
              <h5 class="is-size-7 subtitle">Below you see the topic relevant content with details and your options</h5>
            </div>
          </div>
        </div>
      </section>
      <!-- end section -->
    </div>
    <!-- Only show on mobile -->
    <!-- start section -->
    <section class="section is-hidden-tablet is-hidden-desktop">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column is-4">
            <h3 class="is-size-7 title">Used content</h3>
            <p class="is-size-7">Sandbox</p>
          </div>
          <div class="column is-4">
            <h3 class="is-size-7 title">Content ID</h3>
            <p class="is-size-7">AB-A000011</p>
          </div>
          <div class="column is-4">
            <h3 class="is-size-7 title">Content type</h3>
            <p class="is-size-7">Audiobook</p>
          </div>
        </div>
      </div>
    </section>
    <!-- end section -->
    <!-- end mobile view -->
    <!-- only show on desktop -->
    <!-- start section -->
    <section class="section is-hidden-mobile">
      <div class="container is-centered">
        <div class="content-grid">
          <div class="item-1 is-hidden-mobile">
            <i @click="displayTerm" :class="{'fas': true, 'fa-angle-up': showTerm, 'fa-angle-down': !showTerm}"></i>
          </div>
          <div class="item-2">
            <h3 class="is-size-7 title">Used content</h3>
            <p class="is-size-7">Sandbox</p>
          </div>
          <div class="item-3">
            <h3 class="is-size-7 title">Content ID</h3>
            <p class="is-size-7">AB-A000011</p>
          </div>
          <div class="item-4">
            <h3 class="is-size-7 title">Content type</h3>
            <p class="is-size-7">Audiobook</p>
          </div>
          <div class="item-5 content-col is-hidden-mobile">
            <img :src="action_content_image()" class="flex-item-1 pr-4" style="height: 26px; margin-top: 28px;">
            <span class="flex-item-2">
              <h3 class="is-size-7 title">Actions relevant to the content</h3>
              <p :class="{'is-size-7': true, 'has-text-danger': action_content_blocked, 'has-text-success': action_content_blocked}">{{ action_content }}</p>
            </span>
          </div>
          <div class="item-6 is-hidden-mobile">
            <h3 class="is-size-7 title">Options</h3>
            <div id="dropdown" class="dropdown">
              <div class="dropdown-trigger">
                <span @click="showDropDown" class="is-white pl-0 pt-0" aria-haspopup="true" aria-controls="dropdown-menu">
                  <span class="is-uppercase option has-text-left">Choose Option</span>
                  <span class="icon is-small">
                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item is-size-7">
                    Accept decision
                  </a>
                  <a class="dropdown-item is-size-7">
                    Lodge an appeal
                  </a>
                  <a href="#" class="dropdown-item is-size-7">
                    Start civil legal case
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="item-7 item is-flex-direction-row is-hidden-mobile">
            <img class="privacy-img" src="~assets/images/privacy-img.svg">
          </div>
          <div class="item-8 item is-hidden-mobile">
            <h3 class="is-size-7 title">Terms of the Copyright Owner</h3>
            <span class="is-flex is-flex-direction-row">
              <p class="is-size-7">{{ block_location }}</p>
              <img :src="location_image" class="pl-3">
            </span>
            <p class="is-size-7 mt-4">Details</p>
          </div>
          <div class="item-9 item is-hidden-mobile">
            <h3 class=" is-size-7 title">Copyright Owner</h3>
            <p class="is-size-7">Spotify Media Group</p>
          </div>
        </div>
      </div>
    </section>
    <!-- end section -->
    <!-- end desktop view -->
    <!-- only show on mobile -->
    <!-- start section -->
    <section class="section is-hidden-tablet is-hidden-desktop">
      <div class="container">
        <div class="columns">
          <div class="column is-12">
            <img src="~assets/images/privacy-img.svg">
          </div>
        </div>
      </div>
    </section>
    <!-- end section -->
    <!-- start section -->
    <section class="section is-hidden-tablet is-hidden-desktop">
      <div class="container">
        <div class="columns">
          <div class="column is-12-mobile">
            <h3 class="is-size-7 title">Terms of the Copyright Owner</h3>
            <span class="is-flex is-flex-direction-row">
              <p class="is-size-7">Block in all locations</p>
              <img src="~assets/images/globe.svg" class="pl-3">
            </span>
            <p class="is-size-7 mt-4">Details</p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-12-mobile">
            <h3 class="is-size-7 title">Copyright Owner</h3>
            <span>
              <p class="is-size-7">Spotify Media Group</p>
              <p class="is-size-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.</p>
            </span>
          </div>
        </div>
      </div>
    </section>
    <!-- end section  -->
    <!-- start section -->
    <section id="sect" class="section is-hidden-tablet is-hidden-desktop">
      <div class="container">
        <div class="columns is-mobile">
          <div class="column is-half">
            <div class="content-col">
              <img :src="action_content_image()" class="flex-item-1 pr-4" style="height: 62px; margin-top: 28px;">
              <span class="flex-item-2">
                <h3 class="is-size-7 title">Actions relevant to the content</h3>
                <p :class="{'is-size-7': true, 'has-text-danger': action_content_blocked, 'has-text-success': action_content_blocked}">{{ action_content }}</p>
              </span>
            </div>
          </div>
          <div class="column is-half">
            <h3 class="is-size-7 mb-option title">Options</h3>
            <div id="dropdown2" class="dropdown">
              <div class="dropdown-trigger">
                <span @click="showDropDown2" class="is-white pl-0 pt-0" aria-haspopup="true" aria-controls="dropdown-menu">
                  <span class="is-size-7 is-uppercase option has-text-left">Choose Option</span>
                  <span class="icon is-small">
                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item is-size-7">
                    Accept decision
                  </a>
                  <a class="dropdown-item is-size-7">
                    Lodge an appeal
                  </a>
                  <a href="#" class="dropdown-item is-size-7">
                    Start civil legal case
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end mobile view -->
    <!-- end section -->
  </div>
  <!-- end copyright offense -->
</template>
<script>
export default {
  data () {
    return {
      action: 'no action',
      visibility: 'blocked',
      salability: 'not suitable',
      // terms of the copyright owner
      block_location: 'Block in all locations',
      // actions relevant to the content
      action_content: 'Content has been blocked and cannot be sold',
      action_content_blocked: true,
      // value that toggles 'terms of the copyright owner' display
      showTerm: true
    }
  },

  methods: {
    showDropDown () {
      console.log('this works')
      const dropdown = document.querySelector('#dropdown')
      dropdown.classList.toggle('is-active')
    },

    showDropDown2 () {
      console.log('this works2')
      const dropdown = document.querySelector('#dropdown2')
      dropdown.classList.toggle('is-active')
    },

    displayTerm () {
      this.showTerm = !this.showTerm
      const item7 = document.querySelector('.item-7')
      const item8 = document.querySelector('.item-8')
      const item9 = document.querySelector('.item-9')
      if (item7.style.visibility === 'hidden') {
        item7.style.visibility = 'visible'
      } else {
        item7.style.visibility = 'hidden'
      }
      if (item8.style.visibility === 'hidden') {
        item8.style.visibility = 'visible'
      } else {
        item8.style.visibility = 'hidden'
      }
      if (item9.style.visibility === 'hidden') {
        item9.style.visibility = 'visible'
      } else {
        item9.style.visibility = 'hidden'
      }
    },

    // actions relevant to the content
    action_content_image () {
      let image
      switch (this.action_content) {
        case 'Content has been blocked and cannot be sold':
          this.action_content_blocked = true
          image = require('~/assets/images/lock.svg')
          break
        case 'Content is accessible but cannot be sold':
          this.action_content_blocked = true
          image = require('~/assets/images/lock-green.svg')
          break
        default:
          this.action_content_blocked = false
          image = require('~/assets/images/circle-check.svg')
          break
      }
      return image
    }

  },

  computed: {
    action_image () {
      if (this.action === 'no action') {
        return require('~/assets/images/circle-check.svg')
      } else if (this.action === 'striked') {
        return require('~/assets/images/striked.svg')
      } else {
        return require('~/assets/images/locked.svg')
      }
    },

    visibility_image () {
      let imgvalue
      if (this.visibility === 'blocked') {
        imgvalue = require('~/assets/images/eye-cross.svg')
      } else if (this.visibility === 'limited') {
        imgvalue = require('~/assets/images/limited.svg')
      } else {
        imgvalue = require('~/assets/images/eye-green.svg')
      }

      return imgvalue
    },

    salability_image () {
      let imgvalue
      if (this.salability === 'not suitable') {
        imgvalue = require('~/assets/images/piggy-cross.svg')
      } else if (this.salability === 'suitable') {
        imgvalue = require('~/assets/images/suitable.svg')
      }
      return imgvalue
    },

    // terms of the copyright owner
    location_image () {
      let imgvalue
      if (this.block_location === 'Block in all locations') {
        imgvalue = require('~/assets/images/globe.svg')
      } else if (this.block_location === 'Block in origin location') {
        imgvalue = require('~/assets/images/globe-location.svg')
      } else if (this.block_location === 'Removal') {
        imgvalue = require('~/assets/images/trash.svg')
      } else if (this.block_location === 'Integration') {
        imgvalue = require('~/assets/images/integration.svg')
      } else if (this.block_location === 'Strip') {
        imgvalue = require('~/assets/images/cheque.svg')
      } else if (this.block_location === 'Contact') {
        imgvalue = require('~/assets/images/contact.svg')
      } else if (this.block_location === 'Share') {
        imgvalue = require('~/assets/images/share.svg')
      }
      return imgvalue
    }
  }
}

</script>
<style scoped>
#sect {
  margin-bottom: 50px;
}
.mb-option {
  margin-bottom: 2rem !important;
}
.item {
  visibility: visible;
}
.action-section {
  padding: 1.5rem 1.5rem;
}

.card {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
  border: 1px solid #9A9A9A;
  box-sizing: border-box;
}

.title {
  color: #5f5f5f !important;
}

#dropdown {
  cursor: pointer;
}

.dropdown-content {
  border: 1px solid #9A9A9A;
  box-sizing: border-box;
}

.fa-angle-up, .fa-angle-down {
	color: #4a4a4a;
}

@media (min-width: 770px) {
  #container {
    padding-left: 38px;
    padding-right: 38px;
  }

  .card {
    height: 211.04px;
  }
}

@media (min-width: 803px) {
  .card {
    height: 180px;
  }
}

@media (min-width: 888px) {
  .card {
    height: 160px;
  }
}

@media (min-width: 940px) {
  .card {
    height: initial;
  }
}

@media (min-width: 1025px) {
  #container {
    padding-left: 46px;
    padding-right: 46px;
  }
}

@media (min-width: 1216px) {
  #container {
    padding-left: 73px;
    padding-right: 73px;
  }
}

@media (min-width: 1440px) {
  #container {
    padding-left: 105px;
    padding-right: 105px;
  }
}

.option,
.fa-caret-down {
  color: #2196F3;
}

.privacy-img {
  object-fit: cover;
  float: left;
}

.content-col {
  display: flex;
  flex-direction: row;
}

.item-1 i {
  cursor: pointer;
}

.item-1 {
  grid-area: caret;
}

.item-2 {
  grid-area: usedContent;
}

.item-3 {
  grid-area: contentId;
}

.item-4 {
  grid-area: contentType;
}

.item-5 {
  grid-area: action;
}

.item-6 {
  grid-area: options;
}

.item-7 {
  grid-area: bigImage;
}

.item-8 {
  grid-area: terms;
  max-width: 100%;
  margin-left: 37px;
}

.item-9 {
  grid-area: copyrightOwner;
  max-width: 100%;
}

.content-grid {
  display: grid;
  grid-template-areas:
    'caret usedContent contentId contentType action options'
    '. bigImage bigImage bigImage terms copyrightOwner';
  grid-column-gap: 20px;
  grid-row-gap: 40px;
}
@media (max-width: 768px) {
  .is-size-7-mobile {
    font-size: 0.99rem !important;
  }
}

@media (max-width: 480px) {
  .content-grid {
    display: grid;
    padding: 18px;
    grid-template-areas:
      'usedContent contentId contentType';
    grid-column-gap: 10px;
    grid-row-gap: 40px;
  }

  .item-1 {
    visibility: hidden;
  }

  .item-8 {
    margin-left: 0;
  }

  .item-8 .mb-5 {
    margin-bottom: 0 !important;
  }

  .flex-item-1 {
    order: 2;
    padding-right: 0 !important;
    margin-left: 5px;
  }

  .flex-item-2 {
    order: 1;
  }

  .item-6 {
    margin-left: 10px;
  }

  footer {
    border-top: 2px solid rgba(0, 0, 0, .1);
    padding: 10px;
  }

  footer .col-12 {
    max-width: 76%;
    margin: 0 auto;
  }

  .footer-content {
    max-width: 250px;
  }

  .footer-img {
    object-fit: cover;
    float: left;
    width: 20px;
    margin-right: 6px;
    margin-top: 1px;
  }
}

@media (max-width: 375px) {
  .is-size-7-mobile {
    font-size: 0.88rem !important;
  }
}

</style>