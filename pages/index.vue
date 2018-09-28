<template>
<div>

  <sui-segment vertical class="stripe">
    <div class="ui text container">
      <h3 class="ui header">
        Who are we?
      </h3>
      <p>
        Cyber@UCR is UCR's premiere organization for advancing knowledge of computer security related topics topics through competition and experimentation. We consist of undergraduate students with the support of the CS Department, graduate students, and our outside partners. Come hack with us at one of our  meetings and add to our knowledge pool!
      </p>
      <a class="ui large button" href="/about">Read More</a>

      <div class="ui divider"></div>

      <h3 class="ui header">
        What do we do?
      </h3>
      <p>
        Whether you're new to the field of cyber security or an experienced veteran, we strive to provide content and a community for developing your hacking skills and mentality. We'll help you cover the basics of operating systems, networking, penetration testing, reverse engineering, and more! 
      </p>
      <a class="ui large button" href="http://eepurl.com/dIyKwH" target="_blank">I want to join!</a>
    </div>
  </sui-segment>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      title: "Cyber@UCR",
      description: "Welcome to Cyber@UCR"
    };
  },
  head() {
    return {
      title: this.title
    };
  },
  mounted() {
    this.$store.commit("SET_PAGE_TITLE", this.title);
    this.$store.commit("SET_PAGE_DESCRIPTION", this.description);
  }
};
</script>

<style>
</style>