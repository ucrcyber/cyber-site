Notepad:
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
          name: 'Nathan Melwani',
          image: require('~/assets/officers/nathan.jpg'),
          position: 'President',
          email: 'nmelw002@ucr.edu',
          description: `Nathan is the President of Cyber@UCR. He serves as the captain of the CPTC Team, Networks/Linux Admin of the CCDC team, captain of the CTF team, and captain of teams that are formed to play in smaller competitions. Majoring in CS, he primarily focuses on web application security and network security.`
        },
        {
          name: 'Adil Mohiuddin',
          image: require('~/assets/officers/adil.jpg'),
          position: 'Vice President',
          email: 'amohi010@ucr.edu',
          description: `Adil is the Vice-President for Cyber@UCR. His role is to assist the president in their role. He also serves as one of the Linux admins on our CCDC team. As a second-year majoring in computer engineering, he primarily enjoys creating secure open source software.  Correspondingly, he hopes to make something useful someday. He has a slight obsession with the arch distribution.`
        },
        {
          name: 'Justin Lee',
          image: require('~/assets/officers/justin.jpeg'),
          position: 'Ethics Director',
          email: 'jlee1442@ucr.edu',
          description: `Justin is the Ethics Director for Cyber@UCR. His duty is to ensure that all club-related activities are ethical and conducted without malicious intent, as well as to manage any liabilities that may result from unethical activities. He will help Cyber better organize and maintain its vital documents. He is primarily focused on Unix Systems and Networks.`
        },
        {
          name: 'Minsoo Kim',
          image: require('~/assets/officers/minsoo.jpg'),
          position: 'Treasurer',
          email: 'mkim410@ucr.edu',
          description: `Minsoo is the treasurer for Cyber@UCR. His duties involve activating a club account, creating and proposing the club budget to ASUCR, creating and proposing a match fund budget, ordering club materials, maintaining a balance sheet of club transactions, and ordering food for club meetings. He hopes to increase fundings and efficiently manage all the finance of the club to ensure none of the activities or events are limited by any matters regarding finance, giving the best experience for all of Cyber’s members. Majoring in Computer Science, he is very interested in software engineering and cybersecurity. He hopes to further expand his knowledge in such fields in the upcoming year.`
        },
        {
          name: 'Siddharta Dutta',
          image: require('~/assets/officers/sid.jpg'),
          position: 'Secretary',
          email: 'sdutt017@ucr.edu',
          description: `Siddharta serves as the Secretary for Cyber@UCR. His duty is helping maintain the club's official standing as well as organizing the club's official documents. Majoring in Computer Science, Siddharta is primarily interested in learning about artificial intelligence and machine learning, embedded systems, real-time control systems, cybersecurity, and the intertwining of the different fields.`
        },
        {
          name: 'Ricardo Galeano',
          image: require('~/assets/officers/ricardo.jpg'),
          position: 'Outreach Director',
          email: 'rgale008@ucr.edu',
          description: `Ricardo is the Outreach Director for Cyber@UCR. As outreach director, his role is to conduct outreach for the club, manage social media platforms for the club, and ensure that there is proper communication amongst members. Majoring in Computer Science, he is looking to further expand his knowledge for cybersecurity to use in his future careers in the software industry.`
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

