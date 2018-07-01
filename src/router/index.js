import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import { HomeView } from '../views';

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/', component: HomeView },
    { path: '*', redirect: '/' }
  ]
});
