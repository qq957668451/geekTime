<template>
  <div>
    <div>hello</div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default class App extends Vue {
  msg = 123;
  mounted() {} //计算属性
  get computedMsg() {
    return "";
  } //方法
  greet() {}
}
</script>

<style lang="less" scoped></style>
