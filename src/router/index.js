import * as VueRouter from 'vue-router';

import Index from '@/page/index.vue';
import Hello from '@/components/HelloWorld.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/hello', component: Hello },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
