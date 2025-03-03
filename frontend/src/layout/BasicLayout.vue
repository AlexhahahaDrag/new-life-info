<template>
  <a-layout class="layout">
    <LayoutSider class="top-menu" :collapsed="collapsed" />
    <a-layout>
      <a-layout-content class="main-content">
        <LayoutHeader v-model:collapsed="collapsed" />
        <TabBar />
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LayoutHeader from '@/components/layout/Header.vue';
import LayoutSider from '@/components/layout/Sider.vue';
import TabBar from '@/components/layout/TabBar.vue';

const collapsed = ref(false);
</script>

<style scoped>
.layout {
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.main-content {
  padding: 0;
  background: #f0f2f5;
}

.content-wrapper {
  padding: 24px;
}

.top-menu {
  width: 100% !important;
  height: auto;
}
</style>
