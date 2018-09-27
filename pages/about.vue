<template>
<div>
  <sui-segment vertical class="stripe">
    <div class="ui text container">
      <h3 class="ui header">
        Origin Story...
      </h3>
      <p>
        Cyber@UCR was founded in 2016 when a group of hackers when @squelch came to UCR and saw a gap in the security education, but there was no shortage of hackers. He brought a group together to compete in Western Regionals Collegiate Cyber Defense Competition. This team placed 3rd in Defense and earned Cyber@UCR a place in the college of engineering! Cyber has grown in size and skill every year.
      </p>
      <h4 class="ui horizontal header divider">
        <a href="#"> Case Studies</a>
      </h4>
      <h3 class="ui header">
        What do we do now?
      </h3>
      <p>
        We seek to educate people about everything security related, some of our focuses are listed below. We better these through educational workshops, tech-talks, and most importantly <i>COMPETITIONS</i>!
        <ul>
          <li>Secure System Administration</li>
          <li>Web Application Security</li>
          <li>Secure Software Development</li>
          <li>Offensive Security</li>
          <li>Incident Response</li>
          <li>Security Awareness training</li>
          <li>Locksport</li>
          <li>Ethical Disclosure Practices</li>
        </ul> 
      </p>
    </div>
  </sui-segment>

  <sui-segment vertical class="stripe">
    <div class="ui middle aligned stackable grid container">
      <div class="row">
        <div class="eight wide column">
          <h3 class="ui header">
            Last Years Team
          </h3>
          <p>
            During our CCDC competition last year Cyber placed 3rd overall and 1st in the defense category! Coming back for 1st place next year...
          </p>
        </div>
        <div class="six wide right floated column">
          <img class="ui large bordered rounded image" src="/ccdcTeam2017.jpg" />
        </div>
      </div>
      <div class="row">
        <div class="center aligned column">
          <a class="ui huge button">Interested in Competing?</a>
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