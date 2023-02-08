import Vue from 'vue';
const VueRouter = require('vue-router');
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter); // 实现插件
Vue.use(ElementUI);

const routes = [
  {
    path: '/',
    name: 'Home',
    // todo此处若该文件名为.ts，import会报ts类型错误 '@/views/Home/index.vue'
    component: () => import('@/views/Home/index.vue')
    // meta: { hidden: true }
  }
];

const router = new Vue({
  routes
});

export default router;
