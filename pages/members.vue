<template>
<div>  
    <sui-segment vertical class="ui stripe">
      <div is="sui-container">
        <sui-card-group :items-per-row="3">
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
              <sui-icon name="envelope" /> {{member.email}}
              <!-- <span slot="right">Joined in 2013</span> -->
            </sui-card-content>
          </sui-card>
        </sui-card-group>
      </div>
    </sui-segment>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      title: "Members",
      description: "The officers of Cyber@UCR",
      members: [
        {
          name: 'William Shiao',
          image: require('~/assets/members/placeholder-350x350.png'),
          position: 'President',
          email: '--@--.com',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        },
        {
          name: 'Daniel Stinson-Diess',
          image: require('~/assets/members/placeholder-350x350.png'),
          position: 'Vice President',
          email: '--@--.com',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        },
        {
          name: 'Mario Salazar',
          image: require('~/assets/members/placeholder-350x350.png'),
          position: 'Outreach Director',
          email: '--@--.com',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        },
        {
          name: 'Edward Huh',
          image: require('~/assets/members/placeholder-350x350.png'),
          position: 'Ethics Director',
          email: '--@--.com',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        },
        {
          name: 'Brittney Mun',
          image: require('~/assets/members/placeholder-350x350.png'),
          position: 'Secretary',
          email: '--@--.com',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        },
        {
          name: 'Renee Pedvin',
          image: require('~/assets/members/placeholder-350x350.png'),
          position: 'Treasurer',
          email: '--@--.com',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        }
      ]
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
  }
};
</script>

<style>
.user-image {
  width: 100%;
  height: auto;
}
</style>
