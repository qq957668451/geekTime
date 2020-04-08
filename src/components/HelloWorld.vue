<template>
  <div class="hello">
    {{ con }}
    <br />
    {{ $store.getters.doublecont }}
    <div><button @click="$store.commit('increment', 2)">cont++</button></div>
    <!-- <div><button @click="$store.dispatch('increment', 2)">cont++</button></div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class App extends Vue {
  id: String = "false";
  // 计算属性computed
  get con() {
    return this.$store.state.cont;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
