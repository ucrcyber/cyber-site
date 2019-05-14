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
              <sui-card-description>{{member.description}}</sui-card-description>
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
          name: 'Ji Houn Huh',
          image: require('~/assets/officers/edward.jpg'),
          position: 'President',
          email: 'juhu009@ucr.edu',
          description: `Ji Houn is the President of Cyber@UCR. He was the Ethics Director last year and served as the network admin in the 2019 WRCCDC competition and the new Captain for the upcoming WRCCDC competition.`
        },
        {
          name: 'Anthony Hallak',
          image: require('~/assets/officers/anthony.jpg'),
          position: 'Vice President',
          email: 'ahall012@ucr.edu',
          description: `Anthony serves as both the Vice-President and the Vice-Captain of our CCDC team for Cyber@UCR. He served as both the Treasurer and Linux Admin for the WRCCDC competition. Majoring in CSBA, he hopes to apply computer science to the business world as well as integrate security into the workplace.`
        },
        {
          name: 'Elise Lin',
          image: require('~/assets/officers/elise.jpg'),
          position: 'Outreach Director',
          email: 'elin019@ucr.edu',
          description: `Elise is the Outreach Director of Cyber@UCR. Her role entails promoting Cyber's resources and boosting member attendance. If you'd like to know anything about Cyber, she'd be more than happy to let you know! She is currently testing waters between incident response and networks for CCDC and will join JPL this summer as a Space Networking intern.`
        },
        {
          name: 'Luis Garcia',
          image: require('~/assets/officers/luis.jpg'),
          position: 'Ethics Director',
          email: 'lgarc038@ucr.edu',
          description: `Luis Garcia is the Ethics Director and a member of the CCDC team for Cyber@UCR. His role is to ensure that the president is kept in line and does not abuse their power, as well as enforcing the code of ethics. If there is an issue, contact the president or Ethics Director.`
        },
        {
          name: 'Alexander Zamora',
          image: require('~/assets/officers/alexander.jpg'),
          position: 'Secretary',
          email: 'bmun001@ucr.edu',
          description: `Alexander Zamora is the Secretary for Cyber@UCR. He participated in CyberPatriot and CCDC. He specializes in Windows Server but also has interests in Linux machines and firewalls.`
        },
        {
          name: 'Howard Chen',
          image: require('~/assets/officers/howard.jpg'),
          position: 'Treasurer',
          email: 'cchen277@ucr.edu',
          description: `Howard is the Treasurer of Cyber@UCR. His role is to provide accurate financial and budgeting information to help the club pursue it's goals and endeavors. He was an alternate for the CCDC team, and aims to be an integral part of the team for next year's competition.`
        }
        // {
        //   name: 'TBD',
        //   image: require('~/assets/officers/placeholder-350x350.png'),
        //   position: 'Treasurer',
        //   email: 'xxxxx000@ucr.edu',
        //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        //   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        // }
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
