<template>
<div>
  <sui-segment vertical class="stripe">
    <div class="ui text container">
      <iframe src="https://calendar.google.com/calendar/embed?src=cyberucr%40gmail.com&ctz=America%2FLos_Angeles" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    </div>
  </sui-segment>

</div>
  
</template>

<script>
export default {
  data() {
    return {
      title: 'Calendar',
      description: 'Cyber@UCR\'s Upcoming Events'
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