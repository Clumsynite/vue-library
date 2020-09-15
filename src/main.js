import Vue from "vue";
import App from "./App.vue";

import { template } from "./crud/write.js";

Vue.config.productionTip = false;

template();

new Vue({
  render: h => h(App)
}).$mount("#app");
