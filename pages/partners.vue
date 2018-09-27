<template>
<div>
  <sui-segment vertical class="stripe">
    <div class="ui text container">
      <h3 class="ui header">
        Partners
      </h3>
      <p>
        Cyber is able to compete and do well throughout the year due to our amazing sponsors and partners. They help us with funding, recruitment, and by sharing the awesome work that they do!
      </p>

      <img src="/cresp.png" alt="UCR CRESP Logo">

      <p>
        Want to join these awesome folks? Send us an email at <a href="mailto:contact@ucrcyber.org">contact@ucrcyber.org</a>.
      </p>
    </div>
  </sui-segment>

</div>
  
</template>

<script>
export default {
  data() {
    return {
      title: 'Partners',
      description: 'Cyber@UCR Sponsors & Partners'
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
  img {
    max-width: 300px;
    margin: 1em;
  }
</style>