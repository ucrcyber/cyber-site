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
          name: "Justin Lee",
          image: require("~/assets/officers/justin.jpeg"),
          position: "President",
          email: "jlee1442@ucr.edu",
          description: `Justin is the Vice President for Cyber@UCR. His duty is to ensure that all club-related activities are ethical and conducted without malicious intent, as well as to manage any liabilities that may result from unethical activities. He will help Cyber better organize and maintain its vital documents. He is primarily focused on Unix Systems and Networks.`,
        },
        {
          name: "Joshua Hsu",
          image: require("~/assets/officers/joshua.png"),
          position: "Vice President",
          email: "jhsu094@ucr.edu",
          description: `Joshua serves as the Secretary for Cyber@UCR. His duty is helping maintain the club's official standing as well as organizing the club's official documents. Majoring in Computer Science, Joshua is primarily interested in game development, software engineering, cybersecurity, and the intertwining of the different fields.`,
        },
        {
          name: "Kareem Shehada",
          image: require("~/assets/officers/kareem.jpg"),
          position: "Secretary",
          email: "ksheh002@ucr.edu",
          description: `Kareem is the Secretary for Cyber@UCR. He is responsible for record keeping and maintaining documents. He also oversees and assists with administrative tasks to ensure smooth operation. Kareem primarily focuses on Unix Systems, Virtualization, and Networks.`,
        },
        {
          name: "Anphu Dung",
          image: require("~/assets/officers/anphu.jpg"),
          position: "Outreach Director",
          email: "adung003@ucr.edu",
          description: `Anphu is the Outreach Director for Cyber@UCR. As outreach director, his role is to conduct outreach for the club, manage social media platforms for the club, and ensure that there is proper communication amongst members. Majoring in Computer Science, he is looking to further expand his knowledge for cybersecurity to use in his future careers in the software industry.`,
        },
        {
          name: "Thomas Li",
          image: require("~/assets/officers/thomas.jpg"),
          position: "Ethics Director",
          email: "tli186@ucr.edu",
          description: `The General Project Lead for Cyber@UCR is responsible for overseeing the overall direction and management of the club's projects and initiatives related to cybersecurity at the University of California, Riverside. They collaborate with other club leaders and members to ensure the successful execution of activities, events, and campaigns that promote cybersecurity awareness and education on campus.`,
        },
        {
          name: "Mark Ghebrial",
          image: require("~/assets/officers/mark.jpg"),
          position: "Treasurer",
          email: "mgheb003@ucr.edu",
          description: `Mark is the Treasurer for Cyber@UCR BLANK_SPACE`,
        },
        {
          name: "Chloe Au",
          image: require("~/assets/officers/chloe.jpg"),
          position: "Project Lead",
          email: "cau009@ucr.edu",
          description: `The Project Leads for Cyber@UCR are responsible for overseeing the overall direction and management of the club's projects and initiatives related to cybersecurity at the University of California, Riverside. They collaborate with other club leaders and members to ensure the successful execution of activities, events, and campaigns that promote cybersecurity awareness and education on campus.`,
        },
        {
          name: "Gryphon Kumfert",
          image: require("~/assets/officers/gryphon.jpeg"),
          position: "CTF Infra Project Lead",
          email: "gkumf001@ucr.edu",
          description: `The CTF Infra Project Lead for the club Cyber@UCR is responsible for leading the development and maintenance of the infrastructure required for the club's Capture the Flag (CTF) competitions. This includes designing and configuring servers, networks, and security systems to ensure the competitions run smoothly and securely.`,
        },
        {
          name: "Danny Topete",
          image: require("~/assets/officers/danny.jpg"),
          position: "Social Media Project Lead",
          email: "dtope004@ucr.edu",
          description: `The Social Media Project Lead for Cyber@ucr is responsible for overseeing the club's social media presence and managing content creation and distribution across various platforms. They are also responsible for developing and implementing strategies to increase engagement, grow the club's online community, and promote events and initiatives.`,
        },
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
