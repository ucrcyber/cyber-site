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
      description: 'Cyber@UCR 2020-2021 Board',
      officers: [
        {
          name: 'Anthony Hallak',
          image: require('~/assets/officers/anthony.jpg'),
          position: 'President',
          email: 'ahall012@ucr.edu',
          description: `Anthony serves as both the President and the Linux Admin of our CCDC team for Cyber@UCR. He served as both the Treasurer and Linux Admin for the WRCCDC competition as well as the 2019-2020 Vice President and Co Captain of Cyber@UCR's CPTC team in 2019. Majoring in CSBA, he hopes to apply computer science to the business world as well as integrate security into the workplace to best the efforts of malicious actors in an increasing world of cyber chaos.`
        },
        {
          name: 'Elise Lin',
          image: require('~/assets/officers/elise.jpg'),
          position: 'Vice President',
          email: 'elin019@ucr.edu',
          description: `Elise is the Vice President and Networks Admin of our CCDC team for Cyber@UCR. As VP, she manages the website and fills in where she's needed! As this year's VP, she hopes to increase club reputation and security awareness by promoting our competitions and newsletters. She interned at NASA JPL Summer 2019 as a Space Networks Intern and will be interning at Aon Summer 2020 as a Cyber Summer Associate.`
        },
        {
          name: 'Alexis Arroyo',
          image: require('~/assets/officers/alexis.jpg'),
          position: 'Outreach Director',
          email: 'aarro029@ucr.edu',
          description: `Alexis is the Marketing/Outreach Director of Cyber@UCR. His role encompasses on increasing Cyber’s presence as a student organization, both on campus and on social media, and increasing member attendance. As a Business Information Systems major, Alexis’ greatest endeavor is to be the catalyst in building the bridge so that more students in other majors join Cyber. As an aspiring cybersecurity professional, Alexis holds ethics as his highest regard. If you would like to learn more about Cyber, feel free to email him for more information.`
        },
        {
          name: 'Zubair Qazi',
          image: require('~/assets/officers/zubair.jpg'),
          position: 'Ethics Director',
          email: 'zqazi004@ucr.edu',
          description: `Zubair is the Ethics Director for Cyber@UCR. His duty is to ensure that all club-related activities are ethical and conducted without malicious intent, as well as to manage any liabilities that may result from unethical activities. He will help Cyber better organize and maintain its vital documents. He is primarily focused on Data Science and Mobile App Development, but he enjoys dabbling in anything and everything.`
        },
        {
          name: 'Jino Sirivatanarat',
          image: require('~/assets/officers/jino.jpg'),
          position: 'Secretary',
          email: 'jsiri007@ucr.edu',
          description: `Jino serves as both the Secretary and the Windows Admin of our CCDC team for Cyber@UCR. As a Secretary, he will be helping with maintaining the club's official standing with the club as well as organizing the club's official documents. Majoring in Neuroscience, he hopes to join the science field with the technology field. He hopes to be able help others that aren't in the computer science field with a passion for cybersecurity or technology.`
        },
        {
          name: 'KJ Fields',
          image: require('~/assets/officers/kj.jpg'),
          position: 'Treasurer',
          email: 'kfiel009@ucr.edu',
          description: `KJ is the treasurer for Cyber@UCR. His duties involve activating a club account, creating and proposing the club budget to ASUCR, creating and proposing a dean's funding budget, searching for and ordering club materials, and maintaining a spreadsheet of all expenses. He hopes to both keep meticulous records of expenses and increase the efficiency of purchases for the club. As a first year computer science major, KJ is still deciding what specialties to focus on, but he is mainly interested in learning about neural networks, bioinformatics, and cybersecurity. Overall, he is eager to gather new information and help others do so as well.`
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
