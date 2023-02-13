<template>
  <div class="container">
    <h1>hello layout</h1>
    <el-button
      type="primary"
      @click="goBack"
    >
      {{ btnName }}
    </el-button>
    <router-view />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      btnName: 'go back'
    };
  },
  methods: {
    goBack() {
      this.$router.go('-1');
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  .main {
    width: 1440px;
    margin: 0 auto;
    padding-top: var(--navHeight);
  }
}
</style>
