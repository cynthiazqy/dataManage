/**
 * 在ts文件中无法引用vue组件， ts文件中是无法识别vue文件的
 * 所以需要在项目根目录添加此文件，添加以下代码，来让ts识别vue文件
 */

// declare module '*.vue' {
//   import Vue from 'vue';
//   export default Vue;
// }
