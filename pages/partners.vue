<template>
<div>
  <sui-segment vertical class="stripe">
    <div class="ui text container">
      <p>Cyber@UCR is able to compete and do well throughout the year due to our amazing sponsors and partners.
        They help us with funding, recruitment, and by sharing the awesome work that they do!</p>

      <sui-segment vertical class="ui stripe">
        <div is="sui-container">
          <sui-card-group :items-per-row="isMobile ? 1 : 2">
            <sui-card v-for="sponsor in sponsors" :key="sponsor.name">
              <sui-image v-bind:src="sponsor.image" class="user-image" />
              <sui-card-content>
                <sui-card-header>{{sponsor.name}}</sui-card-header>
                <sui-card-description>
                  {{sponsor.description}}
                </sui-card-description>
              </sui-card-content>
              <sui-card-content extra>
                <sui-icon name="linkify" /> <a :href="sponsor.link">Website</a>
              </sui-card-content>
            </sui-card>
          </sui-card-group>
        </div>
      </sui-segment>

      <p>
        Want to join these awesome folks? Send us an email at <a href="mailto:cyberucr@gmail.com">cyberucr@gmail.com</a>.
      </p>
    </div>
  </sui-segment>

</div>
  
</template>

<script>
import { isMobile } from '~/lib/Utilities'

export default {
  data() {
    return {
      title: 'Partners',
      description: 'Cyber@UCR Sponsors & Partners',
      sponsors: [
        {
          name: 'UC Riverside CRESP',
          image: require('~/assets/sponsors/cresp.png'),
          description: `The UC Riverside Center for Research and Education in Cyber Security and Privacy.`,
          link: 'https://cresp.cs.ucr.edu/'
        }
      ],
      isMobile: false
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
    this.isMobile = isMobile(window)
  }
};
</script>

<style>
  img {
    max-width: 300px;
    margin: 1em;
  }
</style>
