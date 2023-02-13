/**
 * 在ts文件中无法引用vue组件， ts文件中是无法识别vue文件的
 * import会报ts类型错误 找不到模块 @xx/xx.vue
 * 所以需要在项目根目录添加此文件，添加以下代码，来让ts识别vue文件
 * !shims-vue.d.ts中 vue的import 要放到declare模块中
 * !注意同时需要在tsconfig.json中配置include:[..., "./*.d.ts"]
 * https://juejin.cn/post/6968364365237993479
 */
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
