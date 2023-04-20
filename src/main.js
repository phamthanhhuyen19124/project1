import Vue from 'vue'
import App from './App.vue'
// import axios from "axios";
// import router from './routers'
import './assets/css/style.css';
// import "./modules/axios";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./routers";
import './assets/css/Theme.css'
import './assets/css/vendor.css'

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
