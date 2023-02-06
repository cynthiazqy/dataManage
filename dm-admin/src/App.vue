<template>
  <div id="app">
    <h1>vue2项目</h1>
    <Hello />
  </div>
</template>

<script>
import Hello from './pages/hello/index.vue';

export default {
  name: 'App',
  components: {
    Hello

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
