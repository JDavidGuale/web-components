import Vue from "vue";
import App from "./App.vue";
import vuetify from './plugins/vuetify'
import './variables.css'

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount("#app");


import wrap from "@vue/web-component-wrapper";
const wrappedElement = wrap(Vue, App);
window.customElements.define("form-llamada", wrappedElement);
