<template>
  <div>
    <sui-segment vertical class="ui stripe">
      <div is="sui-container">
        <sui-card-group :items-per-row="isMobile ? 1 : 3">
          <sui-card v-for="resource in resources" :key="resource.name">
            <sui-card-content>
              <sui-card-header>{{resource.name}}</sui-card-header>
              <sui-card-meta>{{resource.position}}</sui-card-meta>
              <sui-card-description>
                <span v-html="resource.description"></span>
                <ul>
                  <li v-for="link in resource.links" v-bind:key="link">
                    <a v-bind:href="link">{{link}}</a>
                  </li>
                </ul>
              </sui-card-description>
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
      title: 'Learning Resources',
      description: 'General links to get started if you have not already',
      resources: [
        {
          name: 'Networks',
          position: 'OSI, IPv4/6, DNS,...',
          description: '',
          links: [
            'https://docs.paloaltonetworks.com/pan-os/7-1/pan-os-admin.html',
            'https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/',
            'https://www.cloudflare.com/learning/'
          ]
        },
        {
          name: 'GNU/Linux',
          position: 'Unix Design/BSD, file systems, permissions...',
          description: '',
          links: [
            'https://linux-audit.com/',
            'https://linuxjourney.com',
            'https://overthewire.org/wargames/bandit/',
            'https://guide.bash.academy/',
            'https://linuxconfig.org/',
            'https://www.cyberciti.biz/'
          ]
        },
        {
          name: 'Incident Response',
          position: 'LOGS LOGS AND MORE LOGS!',
          description: '',
          links: [
            'https://www.splunk.com/en_us/training.html',
            'https://www.elastic.co/guide/index.html'
          ]
        },
        {
          name: 'Windows',
          position: 'Not Linux',
          description: '',
          links: [
            'https://adsecurity.org',
            'https://docs.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite',
            'https://ittutorials.net/microsoft/windows-server-2016/active-directory/'
          ]
        },
        {
          name: 'Web',
          position: 'Reverse Proxy, fowarding proxy, databases...',
          description: '',
          links: [
            'http://manual-snort-org.s3-website-us-east-1.amazonaws.com/',
            'https://www.digitalocean.com/community/tutorials/how-to-set-up-mod_security-with-apache-on-debian-ubuntu',
            'https://www.owasp.org/index.php/Main_Page'
          ]
        },
        {
          name: 'CTF',
          position: 'Capture-The-Flag & other fun red-teaming stuff',
          description: '',
          links: [
            'https://overthewire.org/wargames/bandit/',
            'https://picoctf.com',
            'https://crackmes.one',
            'https://pwnable.kr',
            'https://hackthebox.eu',
            'https://www.malwaretech.com/beginner-malware-reversing-challenges',
            'https://kali.training/downloads/Kali-Linux-Revealed-1st-edition.pdf'
          ]
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
    this.isMobile = isMobile(window);
  }
};
</script>

<style>
</style>
