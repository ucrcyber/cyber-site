<template>
<div>  
    <sui-segment vertical class="ui stripe">
      <div is="sui-container">
        <sui-card-group :items-per-row="isMobile ? 1 : 3">
          <sui-card v-for="officer in officers" :key="officer.name">
            <sui-image v-bind:src="officer.image" class="user-image" />
            <sui-card-content>
              <sui-card-header>{{officer.name}}</sui-card-header>
              <sui-card-meta>{{officer.position}}</sui-card-meta>
              <sui-card-description>{{officer.description}}</sui-card-description>
            </sui-card-content>
            <sui-card-content extra>
              <sui-icon name="envelope" /> <a :href="'mailto:' +officer.email">{{officer.email}}</a>
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
      title: 'Officers',
      description: 'Cyber@UCR 2021-2022 Board',
      officers: [
        {
          name: 'Anthony Hallak',
          image: require('~/assets/officers/anthony.jpg'),
          position: 'President',
          email: 'ahall012@ucr.edu',
          description: `Anthony serves as both the President and the Linux Admin of our CCDC team for Cyber@UCR. He served as both the Treasurer and Linux Admin for the WRCCDC competition as well as the 2019-2020 Vice President and Co Captain of Cyber@UCR's CPTC team in 2019. Majoring in CSBA, he hopes to apply computer science to the business world as well as integrate security into the workplace to best the efforts of malicious actors in an increasing world of cyber chaos.`
        },
        {
          name: 'Nathan Melwani',
          image: require('~/assets/officers/nathan.jpg'),
          position: 'Vice President',
          email: 'nmelw002@ucr.edu',
          description: `Nathan is the Vice President of Cyber@UCR. He serves as the captain of the CPTC Team, Networks/Linux Admin of the CCDC team, captain of the CTF team, and captain of teams that are formed to play in smaller competitions. Majoring in CS, he primarily focuses on web application security, network security, and binary exploitation.`
        },
        {
          name: 'Kunal Mittal',
          image: require('~/assets/officers/kunal.jpeg'),
          position: 'Ethics Director',
          email: 'kmitt006@ucr.edu',
          description: `Kunal is the Ethics Director for Cyber@UCR. His duty is to ensure that all club-related activities are ethical and conducted without malicious intent, as well as to manage any liabilities that may result from unethical activities. He will help Cyber better organize and maintain its vital documents. He is primarily focused on Big Data and Front-end development, but he enjoys working in cybersecurity and dabbling in other fields.`
        },
        {
          name: 'Jino Sirivatanarat',
          image: require('~/assets/officers/jino.jpg'),
          position: 'Secretary',
          email: 'jsiri007@ucr.edu',
          description: `Jino serves as both the Secretary and the Windows Admin of our CCDC team for Cyber@UCR. As a Secretary, he will be helping with maintaining the club's official standing with the club as well as organizing the club's official documents. Majoring in Neuroscience, he hopes to join the science field with the technology field. He hopes to be able help others that aren't in the computer science field with a passion for cybersecurity or technology.`
        },
        {
          name: 'Aramis Masarati',
          image: require('~/assets/officers/aramis.jpg'),
          position: 'Treasurer',
          email: 'amasa004@ucr.edu',
          description: `Aramis is the treasurer for Cyber@UCR. His duties involve activating a club account, creating and proposing the club budget to ASUCR, creating and proposing a match fund budget, ordering club materials, maintaining a balance sheet of club transactions, and ordering food for club meetings. He hopes to increase the fundings and efficiently manage the ordering of materials for the club. As a third year computer science with business applications major, Aramis is mainly interested in learning about game development, front-end app development, data management, and cybersecurity. Overall, he is excited to learn new things and is always willing to help out others.`
        },
        {
          name: 'Kanin Liang',
          image: require('~/assets/officers/kanin.jpg'),
          position: 'Outreach Director',
          email: 'klian038@ucr.edu',
          description: `Kanin is the Outreach Director for Cyber@UCR. As outreach director, her role is to conduct outreach for the club, manage social media platforms for the club, and ensure that there is proper communication amongst members. Majoring in Computer Engineering, she is primarily focused on Software Engineering. However, she hopes to integrate more cybersecurity into software development than what is already seen, better securing the technology in our world.`
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
  width: auto;
  height: auto;
}
</style>
