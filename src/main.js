import Vue from 'vue'
import App from './App.vue'
import { router } from './router/router.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import axios from 'axios'
import { domain } from './js/api';


Vue.config.productionTip = false
Vue.use(MintUI)

//配置默认域名，这样请求的时候就不用再url里每次手动加域名了
axios.defaults.baseURL = domain;
//因为我们调用的接口跨域了，默认情况下接口给我设置cookie无效，为了让它有效，我们必须
axios.defaults.withCredentials = true;
//为了方便，把axios和api添加到Vue原型，将来vue组件就可以直接使用
Vue.prototype.$http = axios;
Vue.prototype.$api = api;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
