<template>
  <div>
    <sui-segment vertical class="stripe">
      <div class="ui text container">
        <h3 class="ui header">UC Riverside's Cybersecurity Club</h3>
        <p>
          Dedicated to advancing computer security knowledge through competition
          and experimentation. We go by the name, Cyber@UCR!
        </p>
        <a class="ui large button" href="/about">Read More</a>

        <div class="ui divider"></div>

        <h3 class="ui header">What do we do?</h3>
        <p>
          We seek to educate people about everything security related. We better
          these through educational workshops, practices, and most importantly,
          competitions.
        </p>
        <img class="ui image" src="~/assets/wheel.png" />

        <div class="ui divider"></div>

        <h3 class="ui header">Join the Community</h3>
        <a class="item" href="https://discord.ucrcyber.org"
          ><i class="icon discord"></i> Discord</a
        >
        <p>Connect and chat with fellow hackers!</p>
        <a class="item" href="https://linkedin.com/company/cyberucr"
          ><i class="icon linkedin"></i> LinkedIn</a
        >
        <p>
          Join our professional network and view our history of events and
          accomplishments.
        </p>
        <a class="item" href="https://www.instagram.com/cyber_ucr/"
          ><i class="icon instagram"></i> Instagram</a
        >
        <p>
          Meet the board, check out some member spotlights, and ask us
          questions.
        </p>
        <a class="item" href="https://www.facebook.com/groups/ucrcyber/"
          ><i class="icon facebook"></i> Facebook</a
        >
        <p>Stay up to date with our ongoing events.</p>
        <a class="item" href="http://eepurl.com/dIyKwH"
          ><i class="icon mail"></i> Mailing List</a
        >
        <p>Sign up for weekly newsletters curated by our Outreach Director.</p>
      </div>
    </sui-segment>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Cybersecurity at UCR",
      description: "Cyber@UCR",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
  mounted() {
    this.$store.commit("SET_PAGE_TITLE", this.title);
    this.$store.commit("SET_PAGE_DESCRIPTION", this.description);
  },
};
</script>

<style></style>
