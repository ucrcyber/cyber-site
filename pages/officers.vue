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
      description: "Cyber@UCR 2025-2026 Board",
      officers: [
        {
          name: "Kiana Hosseinzadeh",
          image: require("~/assets/officers/kiana.png"),
          position: "President",
          email: "khoss010@ucr.edu",
          description: ` Hi! I’m the President of Cyber@UCR and a Computer Science with Business Applications student. I enjoy organizing events and helping grow the club, while creating opportunities for members to get involved. I’m especially interested in Windows systems and cybersecurity, and I’m always looking to expand my knowledge and bring more hands-on projects into the club. Feel free to reach out if you have any questions or want to get involved!`,
        },
        {
          name: "Siddharth Chillarige",
          image: require("~/assets/officers/siddharth.jpg"),
          position: "Vice President",
          email: "Schil024@ucr.edu",
          description: `Hello! I’m Siddharth, a second-year electrical engineering major at UCR and vice president of Cyber. I like playing with computers and technology. Usually, I’m on the Linux subteam during competitions. If you ever wanna chat, you can probably find me through the Cyber Discord server!`,
        },
        {
          name: "Felicia Ong",
          image: require("~/assets/officers/felicia.jpg"),
          position: "Secretary",
          email: "fong002@ucr.edu",
          description: `Nice to meet you! As the secretary of Cyber@UCR, I hope you have a great experience being a part of this club. Most of the time, I take care of administrative tasks and club documents, but feel free to reach out for anything. Let’s make this a great experience for all! ᕦ(ò_óˇ)ᕤ`,
        },
        {
          name: "Shantel Bermudez Tellez",
          image: require("~/assets/officers/shantel.png"),
          position: "Ethics Director",
          email: "sberm029@ucr.edu",
          description: `Hii, I'm super excited to be the new Ethics Director! I’m a Computer Science student who loves cybersecurity and ethical leadership. I’m excited to serve you all and help the club grow in a responsible, ethical way...hope to see you at cyber club events!  Feel free to reach out to me if you have any questions or concerns about ethics in our club or cybersecurity in general!`,
        },
        {
          name: "Jacob Kantor",
          image: require("~/assets/officers/jacob.jpg"),
          position: "Treasurer",
          email: "jkant006@ucr.edu",
          description: `Hi, I'm Jacob! I am a third year Computer Science major and the treasurer for cyber@ucr. I  manage the funds for our social events, and merch. If you have any questions about the club, reach out to me on Instagram!`,

        },
        {
          name: "Celso Lopez",
          image: require("~/assets/officers/celso.png"),
          position: "Outreach Director",
          email: "clope375@ucr.edu",
          description: `Hello, my name is Celso Lopez. I am a second year computer science major. I specialize in Linux systems and am currently interested in Cloud Security. Feel free out to reach out to me on Discord @compscilopez!`,
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
