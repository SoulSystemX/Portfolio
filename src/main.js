// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// import * as firebase from 'firebase/app';
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import './firebase';

import Vue from 'vue';
import App from './App';
// import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Lightbox from 'vue-easy-lightbox';

Vue.use(Lightbox)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})
