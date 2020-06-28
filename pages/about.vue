<template>
<div>
  <sui-segment vertical class="stripe">
    <div class="ui text container">
      <h3 class="ui header">Origins</h3>
      <p>Cyber@UCR was founded in 2016 when a group of hackers when @squelch came to UCR and saw a gap in the security education, but there was no shortage of hackers.
        He brought a group together to compete in Western Regionals Collegiate Cyber Defense Competition.
        This team placed 3rd in Defense and earned Cyber@UCR a place in the college of engineering! Cyber has grown in size and skill every year.</p>

      <div class="ui divider"></div>

      <h3 class="ui header">Goals</h3>
      <p>Since our humble beginning, we hope to attract more members and grow our competition rankings. </p>

      <h2 class="ui header">Some topics we practice</h2>
      <ul>
        <li><p>Secure System Administration</p></li>
        <li><p>Web Application Security</p></li>
        <li><p>Secure Software Development</p></li>
        <li><p>Offensive Security</p></li>
        <li><p>Incident Response</p></li>
        <li><p>Security Awareness Training</p></li>
        <li><p>Locksport</p></li>
        <li><p>Ethical Disclosure Practices</p></li>
      </ul> 

      <h2 class="ui header">Some competitions we participate in</h2>
      <ul>
        <li><p>Collegiate Cyber Defense Competition</p></li>
        <li><p>Collegiate Penetration Testing Competition</p></li>
      </ul> 

      <h2 class="ui header">Check out our practice groups</h2>
      <ul>
        <li><a href="https://www.hackthebox.eu/home/universities/profile/350">HackTheBox</a></li>
        <li><a href="https://ctftime.org/team/109680">CTFtime</a></li>
      </ul> 
    </div>
  </sui-segment>

  <sui-segment vertical class="stripe">
    <div class="ui middle aligned stackable grid container">
      <div class="row">
        <div class="center aligned column">      
          <a class="ui huge button" href="https://ucrcyber.slack.com">Interested in Competing?</a>
        </div>
      </div>
      <div class="row">
        <div class="eight wide column">
          <h3 class="ui header">
            2020 Regionals CCDC Team
          </h3>
          <p>
            The come back! Cyber placed 3rd in the defense category. We're seeking to improve our methods by expanding our scripts, getting hands-on with archived machines, and looking for new recruits.
          </p>
        </div>
        <div class="six wide right floated column">
          <img class="ui large bordered rounded image" src="~/assets/competitions/ccdcTeam2020.jpeg" />
        </div>
      </div>
      <div class="row">
        <div class="eight wide column">
          <h3 class="ui header">
            2019 Regionals CPTC Team
          </h3>
          <p>
            Cyber's first offensive security competition @Stanford! We did not place and are hoping to expand our team and skills for 2020. 
          </p>
        </div>
        <div class="six wide right floated column">
          <img class="ui large bordered rounded image" src="~/assets/competitions/cptcTeam2019.jpeg" />
        </div>
      </div>
      <div class="row">
        <div class="eight wide column">
          <h3 class="ui header">
            2019 Invitationals CCDC Team
          </h3>
          <p>
            Cyber did not qualify but watch for our come back next year!
          </p>
        </div>
        <div class="six wide right floated column">
          <img class="ui large bordered rounded image" src="~/assets/competitions/ccdcTeam2019.jpeg" />
        </div>
      </div>
      <div class="row">
        <div class="eight wide column">
          <h3 class="ui header">
            2018 Regionals CCDC Team
          </h3>
          <p>
            Cyber placed 3rd overall and 1st in the defense category!
          </p>
        </div>
        <div class="six wide right floated column">
          <img class="ui large bordered rounded image" src="~/assets/competitions/ccdcTeam2018.jpg" />
        </div>
      </div>
      <div class="row">
        <div class="eight wide column">
          <h3 class="ui header">
            2017 Regionals CCDC Team
          </h3>
          <p>
            Cyber placed 5th overall. 
          </p>
        </div>
        <div class="six wide right floated column">
          <img class="ui large bordered rounded image" src="~/assets/competitions/ccdcTeam2017.jpg" />
        </div>
      </div>
       <div class="row">
        <div class="eight wide column">
          <h3 class="ui header">
            2016 Regionals CCDC Team
          </h3>
          <p>
            Cyber placed 1st in defense! Thank you to UCR's Chief Information Security Officer, Nicholas Turley, and the Computer Science department's Manager of Technical Operations, Victor Hill, for coaching us our starting year. 
          </p>
        </div>
        <div class="six wide right floated column">
          <img class="ui large bordered rounded image" src="~/assets/competitions/ccdcTeam2016.jpg" />
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
