import Vue from 'vue';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/pt-br'

import App from './App.vue';

Vue.use(ElementUI, { locale });
Vue.use(VueResource);

Vue.http.options.root  = 'http://localhost:5000';

new Vue({
  el: '#app',
  render: h => h(App)
});
