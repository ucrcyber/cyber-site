Notepad:
<template>
  <div>
    <sui-segment vertical class="ui stripe">
      <div is="sui-container">
        <sui-card-group :items-per-row="isMobile ? 1 : 3">
          <sui-card v-for="officer in officers" :key="officer.name">
            <sui-image v-bind:src="officer.image" class="user-image" />
            <sui-card-content>
              <sui-card-header>{{ officer.name }}</sui-card-header>
              <sui-card-meta>{{ officer.position }}</sui-card-meta>
              <sui-card-description>{{
                officer.description
              }}</sui-card-description>
            </sui-card-content>
            <sui-card-content extra>
              <sui-icon name="envelope" />
              <a :href="'mailto:' + officer.email">{{ officer.email }}</a>
              <!-- <span slot="right">Joined in 2013</span> -->
            </sui-card-content>
          </sui-card>
        </sui-card-group>
      </div>
    </sui-segment>
  </div>
</template>

<script>
import { isMobile } from "../lib/Utilities";
export default {
  data() {
    return {
      title: "Officers",
      description: "Cyber@UCR 2024-2025 Board",
      officers: [
        {
          name: "Nolan Vernon",
          image: require("~/assets/officers/nolan.png"),
          position: "President",
          email: "nvern003@ucr.edu",
          description: `Nolan is the President for Cyber@UCR. He is in charge of nominating captains for cybersecurity competitions, acting as the club spokesperson, being the principal organizer for conferences and meetings, tiebreaking votes, and other administrative and ethical tasks. He is primarily focused on Windows Systems, with an interest in system and network forensics.`,
        },
        {
          name: "Mario Cuaya",
          image: require("~/assets/officers/mario.jpg"),
          position: "Vice President",
          email: "mcuay001@ucr.edu",
          description: `Mario serves as the Vice President for Cyber@UCR. His duty is helping maintain the club's official standing, organizing the club's official documents, and assisting in administrative tasks. Majoring in Computer Science, he is looking to further expand his knowledge of cybersecurity to use in his future careers in the software industry.`,
        },
        {
          name: "Danny Topete",
          image: require("~/assets/officers/danny.png"),
          position: "Secretary",
          email: "dtope004@ucr.edu",
          description: `Danny is the Secretary for Cyber@UCR. He is responsible for record keeping and maintaining documents. He also assists with administrative tasks to ensure smooth operation. He is also in charge of the clubs social media, growing the clubs online presence, and promoting events.`,
        },
        {
          name: "Liam Regina",
          image: require("~/assets/officers/liam.jpg"),
          position: "Ethics Director",
          email: "lregi001@ucr.edu",
          description: `Liam is the Ethics Director for Cyber@UCR. He verifies that the club is complying with UCR ethics and core values during all activities and events. He is also responsible for collecting Ethics Forms from new members and handling ethical violations.`,
        },
        {
          name: "Derrick Mao",
          image: require("~/assets/officers/derrick.jpg"),
          position: "Treasurer",
          email: "dmao008@ucr.edu",
          description: `Derrick is the Treasurer for Cyber@UCR. His duties involve activating the club account, managing Cyber's ASUCR and Cyber's BCOE budget, ordering club materials, maintaining a balance sheet of club transactions, and ordering food for club meetings. Additionally, he may fundraise to ensure finances do not limit club activities and events.`,
        },
        //        {
        //          name: "Chloe Au",
        //          image: require("~/assets/officers/chloe.jpg"),
        //          position: "Project Lead",
        //          email: "cau009@ucr.edu",
        //          description: `The Project Leads for Cyber@UCR are responsible for overseeing the overall direction and management of the club's projects and initiatives related to cybersecurity at the University of California, Riverside. They collaborate with other club leaders and members to ensure the successful execution of activities, events, and campaigns that promote cybersecurity awareness and education on campus.`,
        //        },
        //        {
        //          name: "Gryphon Kumfert",
        //          image: require("~/assets/officers/gryphon.jpeg"),
        //          position: "CTF Infra Project Lead",
        //          email: "gkumf001@ucr.edu",
        //          description: `The CTF Infra Project Lead for the club Cyber@UCR is responsible for leading the development and maintenance of the infrastructure required for the club's Capture the Flag (CTF) competitions. This includes designing and configuring servers, networks, and security systems to ensure the competitions run smoothly and securely.`,
        //        },
        // {
        //   name: 'TBD',
        //   image: require('~/assets/officers/placeholder-350x350.png'),
        //   position: 'Treasurer',
        //   email: 'xxxxx000@ucr.edu',
        //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        //   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        // }
      ],
      isMobile: false,
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
    this.isMobile = isMobile(window);
  },
};
</script>

<style>
.user-image {
  width: auto;
  height: auto;
}
</style>
