<template>
<div>
  <!--Page Contents-->
  <div class="pusher">
    <!-- Header -->
    <div class="ui inverted vertical masthead center aligned segment">
      <div class="ui container">
        <div class="ui large secondary inverted pointing menu">
          <a class="toc item"><i class="sidebar icon"></i></a>

          <a href="/" active-class="active" class="header item"><img src="~/assets/logo.png" alt="Cyber@UCR Logo"></a>
          <nuxt-link to="/" active-class="active" class="item" exact>Home</nuxt-link>
          <nuxt-link to="/about" active-class="active" class="item">About</nuxt-link>
          <nuxt-link to="/officers" active-class="active" class="item">Officers</nuxt-link>
          <nuxt-link to="/partners" active-class="active" class="item">Partners</nuxt-link>
          <nuxt-link to="/calendar" active-class="active" class="item">Calendar</nuxt-link>

        </div>
      </div>
      <div class="ui text container">
        <h1 class="ui inverted header">
          {{$store.state.pageTitle}}
        </h1>
        <h2>
          {{$store.state.pageDescription}}
        </h2>
      </div>
    </div>

    <!-- Content -->
    <nuxt/>

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
            </div>
          </div>

          <div class="three wide column">
            <h4 class="ui inverted header"> Join the Community!</h4>
            <div class="ui inverted link list">
              <a class="item" href="https://www.facebook.com/groups/ucrcyber/"><i class="icon facebook"></i> Facebook</a>
              <a class="item" href="https://ucrcyber.slack.com"><i class="icon slack"></i> Slack</a>
            </div>
          </div>

          <div class="seven wide column">
            <h4 class="ui inverted header">
              Questions?
            </h4>
            <p>
              Email <a href="mailto:contact@ucrcyber.org">contact@ucrcyber.org</a> if you have any questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

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
    min-height: 350px;
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
