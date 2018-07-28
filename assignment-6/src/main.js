import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ServerContainer from './components/ServerContainer.vue'

Vue.component('Header', Header);
Vue.component('Footer', Footer);
Vue.component('ServerContainer', ServerContainer);

new Vue({
  el: '#app',
  render: h => h(App)
})
