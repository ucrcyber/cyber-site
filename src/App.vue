<template>
  <div id="app">
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import { HomeView } from './views'

export default {
  name: 'app',
  components: {
    HomeView
  }
}
</script>

<style>
</style>
