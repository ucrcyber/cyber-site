<template>
<div>  
    <sui-segment vertical class="ui stripe">
      <div is="sui-container">
        <sui-card-group :items-per-row="isMobile ? 1 : 3">
          <sui-card v-for="member in members" :key="member.name">
            <sui-image v-bind:src="member.image" class="user-image" />
            <sui-card-content>
              <sui-card-header>{{member.name}}</sui-card-header>
              <sui-card-meta>{{member.position}}</sui-card-meta>
              <sui-card-description>
                {{member.description}}
              </sui-card-description>
            </sui-card-content>
            <sui-card-content extra>
              <sui-icon name="envelope" /> <a :href="'mailto:' +member.email">{{member.email}}</a>
              <!-- <span slot="right">Joined in 2013</span> -->
            </sui-card-content>
          </sui-card>
        </sui-card-group>
      </div>
    </sui-segment>
</div>
  
</template>

<script>
import { isMobile } from '../lib/Utilities'

export default {
  data() {
    return {
      title: 'Members',
      description: 'The officers of Cyber@UCR',
      members: [
        {
          name: 'William Shiao',
          image: require('~/assets/officers/william.jpg'),
          position: 'President',
          email: 'wshia002@ucr.edu',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        },
        {
          name: 'Daniel Stinson-Diess',
          image: require('~/assets/officers/daniel_stinson.jpg'),
          position: 'Vice President',
          email: 'dstin002@ucr.edu',
          description: `Daniel serves as both the Vice-President and the captain of our CCDC for Cyber. He has experience as a security developer, and doing work with incident response, forensics, and system administration. On our CCDC team last year he focused on our network security posture.`
        },
        {
          name: 'Mario Salazar',
          image: require('~/assets/officers/mario.jpg'),
          position: 'Outreach Director',
          email: 'msala027@ucr.edu',
          description: `Mario is the Outreach Director for Cyber. He has experience working with several security topics over two internships. He can also handle the business side with his Associate's Degree in Business Administration.`
        },
        {
          name: 'Ji Houn Huh',
          image: require('~/assets/officers/edward.jpg'),
          position: 'Ethics Director',
          email: 'juhu009@ucr.edu',
          description: `Ji Houn is the ethics director and a member of the CCDC team for cyber. His role is to enusre that the president is kept in check as well as enforcing the code of ethics. If there is an issue, contact the president or ethics director.`
        },
        {
          name: 'Brittney Mun',
          image: require('~/assets/officers/placeholder-350x350.png'),
          position: 'Secretary',
          email: 'dstin002@ucr.edu',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        },
        {
          name: 'Renee Pedvin',
          image: require('~/assets/officers/placeholder-350x350.png'),
          position: 'Treasurer',
          email: 'dstin002@ucr.edu',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        }
      ],
      isMobile: false
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
    this.isMobile = isMobile(window)
  }
};
</script>

<style>
.user-image {
  width: 100%;
  height: auto;
}
</style>
