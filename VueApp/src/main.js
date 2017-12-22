/**
*@author zakaria
*@description it's a minified vue js app to post and retirive blogs from a cuson firebase
**/

import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './components/routes';

Vue.use(VueRouter);
const router = new VueRouter({
  routes : Routes
});

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App),
  router : router,
  linkActiveClass : 'is-active'
})
