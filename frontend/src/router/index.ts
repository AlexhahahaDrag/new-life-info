import { createRouter, createWebHashHistory } from 'vue-router';
import BasicLayout from '@/layout/BasicLayout.vue';

const routes = [
  {
    path: '/',
    meta: {
      title: '',
      hidden: true,
    },
    component: BasicLayout,
    redirect: '/home',
    children: [],
  },
  {
    path: '/home',
    meta: {
      title: '首页',
      hidden: false,
      icon: 'home',
    },
    component: BasicLayout,
    children: [
      {
        meta: {
          title: '首页',
          hidden: true,
        },
        path: '',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
  {
    path: '/system',
    name: 'System',
    meta: {
      title: '系统管理',
      hidden: false,
      icon: 'system',
    },
    component: BasicLayout,
    children: [
      {
        path: '/system/user',
        name: 'UserManagement',
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'user',
        },
        component: () => import('@/views/system/user/index.vue'),
      },
      {
        path: '/system/role',
        name: 'RoleManagement',
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'role',
        },
        component: () => import('@/views/system/role/index.vue'),
      },
      {
        path: '/system/menu',
        name: 'MenuManagement',
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: 'menu',
        },
        component: () => import('@/views/system/menu/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
