<template>
  <div>
    <h2>产品</h2>
    <ul>
      <li v-for="item in production" :key="item.id">
        <div>{{ item.name }}</div>
        <div><button @click="addShopCar(item)">加入购物车</button></div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default class App extends Vue {
  get production() {
    return this.$store.state.production;
  }
  addShopCar(pro: any) {
    console.log("pro", pro);
  }
}
</script>

<style lang="less" scoped></style>
