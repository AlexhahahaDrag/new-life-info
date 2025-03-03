<template>
  <a-layout-sider width="200" class="sider" :collapsed="props.collapsed" :trigger="null">
    <div class="logo" @click="goHome">
      <img
        style="width: 40px; height: 40px; margin-right: 8px"
        :src="logoSvg"
        alt="New Life Info Logo"
      />
      <span v-if="!props.collapsed">New Life Info</span>
    </div>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      v-model:openKeys="openKeys"
      mode="inline"
      :items="menuItems"
      @click="handleMenuClick"
    ></a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { ref, h } from 'vue';
import { useRouter, type RouteRecordRaw } from 'vue-router';
import logoSvg from '@/assets/logo/logo.png';
import MySvgIcon from '@/components/common/MySvgIcon.vue';

const props = defineProps<{
  collapsed: boolean;
}>();

const router = useRouter();
const selectedKeys = ref<string[]>(['/home']);
const openKeys = ref<string[]>(['sub1']);

const generateMenuItems = (routes: Readonly<RouteRecordRaw[]>) => {
  return routes
    .filter((item) => !item.meta?.hidden)
    .map((item, index) => {
      const menuItem: any = {
        key: item.path || `menu-${index}`,
        label: item?.meta?.title || item.name,
        path: item.path,
      };

      if (item?.meta?.icon && typeof item.meta.icon === 'string') {
        menuItem.icon = () => h(MySvgIcon, { name: item.meta.icon });
      }

      if (item.children && item.children.length > 0) {
        const childItems = generateMenuItems(item.children);
        if (childItems.length > 0) {
          menuItem.children = childItems;
        }
      }
      return menuItem;
    });
};

const menuItems = generateMenuItems(router.options.routes || []);

const handleMenuClick = (menuInfo: any) => {
  const findMenuPath = (items: any[]): string | undefined => {
    for (const item of items) {
      if (item.key === menuInfo.key) return item.path;
      if (item.children) {
        const path = findMenuPath(item.children);
        if (path) return path;
      }
    }
  };

  const path = findMenuPath(menuItems);
  if (path) {
    router.push(path);
  }
};

// 返回首页
const goHome = () => {
  selectedKeys.value = ['/home'];
  openKeys.value = [];
  router.push({ path: '/home' });
};
</script>

<style scoped>
.sider {
  background: #fff;
}

.logo {
  height: 64px;
  padding: 16px;
  color: #1890ff;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #f0f0f0;
  cursor: pointer;
}
</style>
