import Vue from 'vue';
const VueRouter = require('vue-router');
// import VueRouter from 'vue-router';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter); // 实现插件
Vue.use(ElementUI);

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/Home/index.vue')
    // meta: { title: '首页' }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
    meta: { title: '登录' }
  }
];

const router = new VueRouter({
  routes
});

// todo使用钩子函数对路由进行权限跳转
// router.beforeEach((to: any, from: any, next: any) => {
//   document.title = `${to.meta.title} || 数据管理平台`;
//   const role = localStorage.getItem('user_data');

//   if (!role && to.path !== '/login') {
//     next('/login');
//   } else {
//     next();
//   }
// });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// router.afterEach((to: any, from: any, next: any) => {
//   document.querySelector('.el-scrollbar__wrap')?.scrollTo(0, 0);
// });

export default router;
