<template>
  <a-layout-header class="header">
    <div class="header-left">
      <div class="menu-collapse" @click="toggleCollapsed">
        <MenuFoldOutlined v-if="collapsed" />
        <MenuUnfoldOutlined v-else />
      </div>
      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item>{{ currentRoute }}</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="header-right">
      <a-space>
        <a-badge :count="5">
          <a-button type="text">
            <template #icon><BellOutlined /></template>
          </a-button>
        </a-badge>
        <a-dropdown>
          <a-button type="text">
            <a-space>
              <a-avatar size="small" :src="userAvatar" />
              {{ userName }}
              <DownOutlined />
            </a-space>
          </a-button>
          <template #overlay>
            <a-menu>
              <a-menu-item key="profile">个人信息</a-menu-item>
              <a-menu-item key="settings">系统设置</a-menu-item>
              <a-menu-divider />
              <a-menu-item key="logout">退出登录</a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-space>
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import {
  BellOutlined,
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons-vue';

const userName = ref('Admin');
const userAvatar = ref('https://api.dicebear.com/7.x/avataaars/svg?seed=admin');
const collapsed = ref(false);
const route = useRoute();

const currentRoute = computed(() => {
  return route.meta.title || route.name || '当前页面';
});

const toggleCollapsed = () => {
  collapsed.value = !collapsed.value;
  emit('update:collapsed', collapsed.value);
};

const emit = defineEmits(['update:collapsed']);
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;

  .menu-collapse {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 30px;
    border-radius: 4px;
  }
  .menu-collapse:hover {
    background-color: #f2f2f2;
  }
}

.header-right {
  display: flex;
  align-items: center;
}
</style>
