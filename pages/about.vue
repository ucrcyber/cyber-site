<template>
<div>
  <sui-segment vertical class="stripe">
    <div class="ui text container">
      <h3 class="ui header">
        About
      </h3>
      <p>
        Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.
      </p>
      <a class="ui large button">Read More</a>
      <h4 class="ui horizontal header divider">
        <a href="#"> Case Studies</a>
      </h4>
      <h3 class="ui header">
        Did We Tell You About Our Bananas?
      </h3>
      <p>
        Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
      </p>
      <a class="ui large button">I'm Still Quite Interested</a>
    </div>
  </sui-segment>

  <sui-segment vertical class="stripe">
    <div class="ui middle aligned stackable grid container">
      <div class="row">
        <div class="eight wide column">
          <h3 class="ui header">
            We Help Companies and Companions
          </h3>
          <p>
            We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.
          </p>
          <h3 class="ui header">
            We Make Bananas That Can Dance
          </h3>
          <p>
            Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
          </p>
        </div>
        <div class="six wide right floated column">
          <img class="ui large bordered rounded image" src="/static/images/templates/semantic-ui/wireframe/white-image.png" />
        </div>
      </div>
      <div class="row">
        <div class="center aligned column">
          <a class="ui huge button">Check Them Out</a>
        </div>
      </div>
    </div>
  </sui-segment>

  <sui-segment vertical class="stripe quote">
    <div class="ui equal width stackable internally celled grid">
      <div class="center aligned row">
        <div class="column">
          <h3>
            "What a Company"
          </h3>
          <p>
            That is what they all say about us
          </p>
        </div>
        <div class="column">
          <h3>
            "I shouldn't have gone with their competitor."
          </h3>
          <p>
            <img class="ui avatar image" src="/static/images/templates/semantic-ui/avatar/nan.jpg" /><b>Nan</b>Chief Fun Officer Acme Toys
          </p>
        </div>
      </div>
    </div>
  </sui-segment>

</div>
  
</template>

<script>
export default {
  data() {
    return {
      title: 'About',
      description: 'About Cyber@UCR'
    }
  },
   head () {
    return {
      title: this.title
    }
  },
  mounted () {
    this.$store.commit('SET_PAGE_TITLE', this.title)
    this.$store.commit('SET_PAGE_DESCRIPTION', this.description)
  }
};
</script>

<style>

</style>
