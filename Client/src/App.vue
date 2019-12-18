<template>
  <div id="app">
    <h1>Todos</h1>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './views/AllTodos.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "scss/main";

#app {
  margin: 2rem;
}
</style>
