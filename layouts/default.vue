<template>
<div>
  <!--Page Contents-->
  <div class="pusher">
    <!-- Mobile Sidebar -->
    <sui-sidebar animation="push" v-bind:visible="menuOpen" class="menu inverted vertical secondary" id="mobile-sidebar">
      <sui-menu-item>
        <img src="~/assets/logo.png" class="ui logo icon image" id="cyber-logo">
        <nuxt-link to="/">Cyber@UCR</nuxt-link>
      </sui-menu-item>

      <nuxt-link to="/" active-class="active" class="item" exact>Home</nuxt-link>
      <nuxt-link to="/about" active-class="active" class="item">About</nuxt-link>
      <nuxt-link to="/officers" active-class="active" class="item">Officers</nuxt-link>
      <nuxt-link to="/partners" active-class="active" class="item">Partners</nuxt-link>
      <nuxt-link to="/calendar" active-class="active" class="item">Calendar</nuxt-link>
      <nuxt-link to="/resources" active-class="active" class="item">Resources</nuxt-link>
      
      <sui-menu-item v-on:click="closeMenu()">
        Close <i class="close icon"></i>
      </sui-menu-item>
    </sui-sidebar>

    <!-- Header -->
    <sui-segment inverted vertical class="masthead center aligned" >
      <div is="sui-container">

        <sui-menu secondary inverted pointing class="large">
          <a class="toc item" v-on:click="openMenu()"><i class="sidebar icon"></i></a>

          <a href="/" active-class="active" class="header item">
            <img src="~/assets/logo.png" alt="Cyber@UCR Logo">
          </a>
          <nuxt-link to="/" active-class="active" class="item" exact>Home</nuxt-link>
          <nuxt-link to="/about" active-class="active" class="item">About</nuxt-link>
          <nuxt-link to="/officers" active-class="active" class="item">Officers</nuxt-link>
          <nuxt-link to="/partners" active-class="active" class="item">Partners</nuxt-link>
          <nuxt-link to="/calendar" active-class="active" class="item">Calendar</nuxt-link>
          <nuxt-link to="/resources" active-class="active" class="item">Resources</nuxt-link>

        </sui-menu>
      </div>

      <div is="sui-container" text v-on:click="closeMenu()">
        <h1 is="sui-header" class="inverted">
          {{$store.state.pageTitle}}
        </h1>
        <h2>
          {{$store.state.pageDescription}}
        </h2>
      </div>
    </sui-segment>

    <!-- Content -->
    <div v-on:click="closeMenu()">
      <nuxt/>
    </div>

    <!-- Footer -->
    <div class="ui inverted vertical footer segment">
      <div class="ui container">
        <div class="ui stackable inverted divided equal height stackable grid">

          <div class="three wide column">
            <h4 class="ui inverted header"> Navigation</h4>
            <div class="ui inverted link list">
              <nuxt-link to="/" class="item" exact> Home</nuxt-link>
              <nuxt-link to="/about" class="item"> About Us</nuxt-link>
              <nuxt-link to="/officers" class="item">Officers</nuxt-link>
              <nuxt-link to="/partners" class="item">Partners</nuxt-link>
              <nuxt-link to="/calendar" class="item">Calendar</nuxt-link>
              <nuxt-link to="/resources" class="item">Resources</nuxt-link>
            </div>
          </div>

          <div class="three wide column">
            <h4 class="ui inverted header"> Join the Community!</h4>
            <div class="ui inverted link list">
              <a class="item" href="https://ucrcyber.slack.com"><i class="icon slack"></i> Slack</a>
              <a class="item" href="https://linkedin.com/company/cyberucr"><i class="icon linkedin"></i> LinkedIn</a>
              <a class="item" href="https://www.facebook.com/groups/ucrcyber/"><i class="icon facebook"></i> Facebook</a>
              <a class="item" href="http://eepurl.com/dIyKwH"><i class="icon mail"></i> Mailing List</a>
            </div>
          </div>

          <div class="seven wide column">
            <h4 class="ui inverted header">
              Questions?
            </h4>
            <p>
              Email <a href="mailto:cyberucr@gmail.com">cyberucr@gmail.com</a> if you have any questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// from jQuery import $

export default {
  data () {
    return {
      menuOpen: false
    }
  },

  methods: {
    closeMenu() {
      this.menuOpen = false
    },

    openMenu() {
      this.menuOpen = true
    }
  },

  watch: {
    $route (to, from) {
      this.menuOpen = false
    }
  } 
}
</script>


<style>
.hidden.menu {
  display: none;
}

.masthead.segment {
  min-height: 300px;
  padding: 1em 0em;
}
.masthead .logo.item img {
  margin-right: 1em;
}
.masthead .ui.menu .ui.button {
  margin-left: 0.5em;
}
.masthead h1.ui.header {
  margin-top: 1em;
  margin-bottom: 0em;
  font-size: 4em;
  font-weight: normal;
}
.masthead h2 {
  font-size: 1.7em;
  font-weight: normal;
}

.ui.vertical.stripe {
  padding: 6em 0em;
}
.ui.vertical.stripe h3 {
  font-size: 2em;
}
.ui.vertical.stripe .button + h3,
.ui.vertical.stripe p + h3 {
  margin-top: 3em;
}
.ui.vertical.stripe .floated.image {
  clear: both;
}
.ui.vertical.stripe p {
  font-size: 1.33em;
}
.ui.vertical.stripe .horizontal.divider {
  margin: 3em 0em;
}

.quote.stripe.segment {
  padding: 0em;
}
.quote.stripe.segment .grid .column {
  padding-top: 5em;
  padding-bottom: 5em;
}

.footer.segment {
  padding: 3em 0em;
}

.secondary.pointing.menu .toc.item {
  display: none;
}

@media only screen and (max-width: 700px) {
  #mobile-sidebar {
    background: rgb(27, 28, 29);
  }

  img#cyber-logo {
    max-width: 50px;
    margin-right: 1em;
    display: inline-block;
  }

  .ui.fixed.menu {
    display: none !important;
  }

  .secondary.pointing.menu .item,
  .secondary.pointing.menu .menu {
    display: none;
  }

  .secondary.pointing.menu .toc.item {
    display: block;
  }

  .masthead.segment {
    min-height: 250px;
  }

  .masthead h1.ui.header {
    font-size: 2em;
    margin-top: 1.5em;
  }

  .masthead h2 {
    margin-top: 0.5em;
    font-size: 1.5em;
  }
}
</style>
