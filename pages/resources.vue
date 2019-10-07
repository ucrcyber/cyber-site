<template>
<div>  
    <sui-segment vertical class="ui stripe">
      <div is="sui-container">
        <sui-card-group :items-per-row="isMobile ? 1 : 3">
          <sui-card v-for="resource in resources" :key="resource.name">
            <sui-image v-bind:src="resource.image" class="resource-image" />
            <sui-card-content>
              <sui-card-header>{{resource.name}}</sui-card-header>
              <sui-card-meta>{{resource.position}}</sui-card-meta>
              <sui-card-description>{{resource.description}}</sui-card-description>
            </sui-card-content>
            <sui-card-content extra>
              <!-- <sui-icon name="envelope" /> <a :href="'mailto:' +member.email">{{member.email}}</a> -->
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
      title: 'Learning Resources',
      description: 'General links to get started if you have not already',
      resources: [
        {
          name: 'Networks',
          position: 'OSI, IPv4/6, DNS,...',
          description: "https://docs.paloaltonetworks.com/pan-os/7-1/pan-os-admin.html https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/ https://www.cloudflare.com/learning/"
        },
        {
          name: 'GNU/Linux',
          position: `Unix Design/BSD, file systems, permissions,...`,
          description: `https://linux-audit.com/\n\nhttps://linuxjourney.com\n\nhttps://overthewire.org/wargames/bandit/\n\nhttps://guide.bash.academy/\n\nhttps://linuxconfig.org/\n\nhttps://www.cyberciti.biz/`
        },
        {
          name: 'Incident Response',
          position: `LOGS LOGS AND MORE LOGS!`,
          description: `https://www.splunk.com/en_us/training.html\nhttps://www.elastic.co/guide/index.html`
        },
        {
          name: 'Windows',
          position: `Not Linux`,
          description: `https://adsecurity.org\n\nhttps://docs.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite\n\nhttps://ittutorials.net/microsoft/windows-server-2016/active-directory/`
        },
        {
          name: 'Web',
          position: `Reverse Proxy, fowarding proxy, Databases,...`,
          description: `http://manual-snort-org.s3-website-us-east-1.amazonaws.com/\n\nhttps://www.digitalocean.com/community/tutorials/how-to-set-up-mod_security-with-apache-on-debian-ubuntu\n\nhttps://www.owasp.org/index.php/Main_Page`
        },
        {
          name: 'CTF',
          position: 'Capture-The-Flag & other fun red-teaming stuff',
          description: `https://overthewire.org/wargames/bandit/\n\nhttps://picoctf.com\n\nhttps://crackmes.one\n\nhttps://pwnable.kr\n\nhttps://hackthebox.eu\n\nhttps://www.malwaretech.com/beginner-malware-reversing-challenges\n\nhttps://kali.training/downloads/Kali-Linux-Revealed-1st-edition.pdf`
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
