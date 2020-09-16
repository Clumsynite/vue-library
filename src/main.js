import Vue from "vue";
import App from "./App.vue";
import { template } from "./crud/write.js";

Vue.config.productionTip = false;

export const serverBus = new Vue();

template();

new Vue({
  render: h => h(App)
}).$mount("#app");
