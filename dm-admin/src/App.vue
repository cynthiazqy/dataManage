<!-- eslint-disable prettier/prettier -->
<template>
  <div id="app">
    <!-- <Home /> -->
    <!-- 根级路由出口 -->
    <router-view />
  </div>
</template>

<script>
// import Home from '@/views/Home';

export default {
  name: 'App',
  components: {
    // Home
  },
  created() {
    if (this.$route.path !== '/login') this.$router.push('/login');
  }
};
</script>

<style>
body {
  overflow-x: hidden;
}
</style>
