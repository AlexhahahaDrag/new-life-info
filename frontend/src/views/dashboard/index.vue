<template>
  <div class="dashboard">
    <a-row :gutter="[16, 16]">
      <a-col :span="6" v-for="card in cards" :key="card.title">
        <a-card>
          <template #title>{{ card.title }}</template>
          <h2>{{ card.value }}</h2>
          <p>{{ card.description }}</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
const cards = [
  { title: '总用户数', value: '1,234', description: '较昨日 +12' },
  { title: '活跃用户', value: '891', description: '较昨日 +5' },
  { title: '系统消息', value: '56', description: '本周新增 23' },
  { title: '系统状态', value: '正常', description: '运行时间 7天' },
];
</script>

<style scoped>
.dashboard {
  padding: 24px;
}
</style>
