<template>
<div>
  <sui-segment vertical class="stripe">
    <div class="ui middle aligned stackable grid container">
      <div class="row">
        <div class="eight wide left column">
          <h3 class="ui header">Meetings: Summer 2020</h3>
          <!-- <p> General meetings cover announcements, defensive/offensive demos, tech-talks, and guest speakers. We also host weekly practices for Defensive and Offensive competitions! Anyone is free to join. Email <b> cyberucr@gmail.com </b> for more info. </p>  -->
          <p> This summer we're hosting biweekly practices for Defensive and Offensive competitions and participating in Capture-the-Flag competitions. Anyone at UCR is free to join! Email <b> cyberucr@gmail.com </b> for more info. </p> 
          <p>General Meetings: TBA</p>
          <p>CCDC Meetings: Saturday Biweekly 10am-12pm</p>
          <p>CPTC Meetings: Saturday Biweekly 1-2pm</p>	
          <p>CTF: Check Calendar</p>	
        </div>

        <div class="eight wide right floated column">
          <iframe src="https://calendar.google.com/calendar/embed?src=cyberucr%40gmail.com&ctz=America%2FLos_Angeles" style="border: 0" width="600" height="400" frameborder="0" scrolling="no"></iframe>
        </div>
      </div>
    </div>
  </sui-segment>

  <sui-segment vertical class="stripe">
    <div class="ui text container">
      
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
