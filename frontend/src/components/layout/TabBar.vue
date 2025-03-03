<template>
  <div class="tab-bar">
    <a-tabs
      v-model:activeKey="activeKey"
      type="editable-card"
      hide-add
      @edit="onEdit"
      @change="onChange"
    >
      <a-tab-pane
        v-for="tab in tabs"
        :key="tab.path"
        :tab="tab.title"
        :closable="tab.path !== '/home'"
      >
        <template #tab>
          <component :is="getIcon(tab.path)" v-if="getIcon(tab.path)" style="margin-right: 6px" />
          {{ tab.title }}
        </template>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
  TeamOutlined,
  MenuOutlined,
} from '@ant-design/icons-vue';

interface TabItem {
  title: string;
  path: string;
}

const iconMap: Record<string, any> = {
  home: HomeOutlined,
  system: SettingOutlined,
  user: UserOutlined,
  role: TeamOutlined,
  menu: MenuOutlined,
};

const route = useRoute();
const router = useRouter();
const tabs = ref<TabItem[]>([]);
const activeKey = ref<string>('/home');

// Initialize with home tab
tabs.value = [
  {
    title: '首页',
    path: '/home',
  },
];

// Get icon component based on route path
const getIcon = (path: string) => {
  const matchedRoute = router.getRoutes().find((route) => route.path === path);
  if (matchedRoute?.meta?.icon && iconMap[matchedRoute.meta.icon as string]) {
    return iconMap[matchedRoute.meta.icon as string];
  }
  return null;
};

// Watch route changes to update tabs
watch(
  () => route.path,
  (newPath) => {
    const title = (route.meta.title as string) || (route.name as string);
    if (!tabs.value.some((tab) => tab.path === newPath)) {
      tabs.value.push({
        title,
        path: newPath,
      });
    }
    activeKey.value = newPath;
  },
  { immediate: true },
);

// Handle tab change
const onChange = (key: string) => {
  router.push(key);
};

// Handle tab close
const onEdit = (targetKey: string | MouseEvent, action: 'add' | 'remove') => {
  if (action === 'remove' && typeof targetKey === 'string') {
    const targetIndex = tabs.value.findIndex((tab) => tab.path === targetKey);
    if (targetIndex === -1) return;

    tabs.value = tabs.value.filter((tab) => tab.path !== targetKey);

    // If the active tab is closed, switch to the previous tab
    if (activeKey.value === targetKey) {
      const newActiveKey = tabs.value[Math.max(0, targetIndex - 1)].path;
      activeKey.value = newActiveKey;
      router.push(newActiveKey);
    }
  }
};
</script>

<style scoped>
.tab-bar {
  background: #fff;
  padding: 6px 12px 0;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

:deep(.ant-tabs-nav) {
  margin-bottom: 0;
}
</style>
