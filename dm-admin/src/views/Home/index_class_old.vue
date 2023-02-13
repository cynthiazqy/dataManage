<!-- eslint-disable prettier/prettier -->
/** * vue类组件写法 */

<template>
  <div class="home">
    <h2 class="indexPage1">
      首页
    </h2>
    <h3 class="indexPage">
      title
    </h3>
    <el-button type="primary">
      默认按钮
    </el-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

type User = {
  name: string;
  age: number;
};
type Route = any;

@Component({
  // 在此处引入组件
  components: {
    // xxx1,
    // xxx2
  }
})
export default class Home extends Vue {
  // 以下3个变量相当于响应式数据data的旧写法
  msg = 'hello world';
  info: User = { name: 'Spirit', age: 18 };
  // 如果数据的值是undefined或者未赋初值,则不会成为响应式数据。解决方案：追加类型定义null
  // count: number | undefined;

  created() {
    console.log('created');
  }
  mounted() {
    console.log('mounted');
  }

  // computed定义
  get introduction() {
    return `姓名：${this.info.name}, 年龄: ${this.info.age}`;
  }

  // watch装饰器定义 第1个参数：响应式数据字符串(也可以定义为'a.b')
  // watch装饰器定义 第2个参数options成员[immediate, deep]分别对应的是原生的用法
  @Watch('$route', { immediate: true })
  changeRouter(val: Route, oldVal: Route) {
    console.log('$route watcher:', val, oldVal);
  }

  // 方法定义
  hello() {
    console.log('hello Spirit~~~~');
  }
}
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
