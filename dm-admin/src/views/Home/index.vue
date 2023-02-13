<template>
  <div class="home">
    <h2 class="indexPage1">
      首页
    </h2>

    <h3 class="indexPage">
      title
    </h3>
    <el-button
      type="primary"
      @click="jumpTo"
    >
      默认按钮
    </el-button>
  </div>
</template>

<script src>
export default {
  components: {},
  data() {
    return {
      // hh: 'kkk'
    };
  },
  methods: {
    jumpTo() {
      this.$router.push('/layout');
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  color: pink;
  .indexPage {
    color: blue;
    font-size: 24px;
  }
}
</style>
