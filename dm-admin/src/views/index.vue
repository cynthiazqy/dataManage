<template>
  <el-scrollbar
    class="el-scrollbar__wrap-new"
    style="height: 100%"
  >
    <div class="home-container">
      <!-- 公共头部 -->
      <xHeader></xHeader>
      <!-- 内容板块 -->
      <router-view class="router-warp"></router-view>
      <!-- 公共footer -->
      <xFooter></xFooter>
      <el-backtop target="#app .el-scrollbar__wrap"></el-backtop>
    </div>
  </el-scrollbar>
</template>

<script>
import xHeader from '@/components/Header.vue';
import xFooter from '@/components/Footer.vue';
export default {
  name: '',
  components: { xHeader, xFooter },
  data() {
    return {};
  },
  computed: {
    url() {
      return this.$route.path;
    }
  },
  created() {
    console.log('created');
  },
  methods: {}
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.home-container {
  width: 100%;
  height: 100%;
  background-color: #f4f7fa;
  .router-warp {
    min-height: calc(100vh - 203px);
  }
}
</style>
