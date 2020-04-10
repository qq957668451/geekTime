import Vue from "vue";
import VueRouter from "vue-router";
import page1 from "./pageFirRouter/index";

Vue.use(VueRouter);

let RouterList: any = [];
page1.map(item => {
  RouterList.push(item);
});
export default new VueRouter({
  routes: RouterList
});
