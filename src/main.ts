import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import elementUI from "element-ui";
import "./mock/index";
import "element-ui/lib/theme-chalk/index.css";
import moment from "moment";
import "./common/pubFunction/index";
import router from "./router/index";

Vue.use(elementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
