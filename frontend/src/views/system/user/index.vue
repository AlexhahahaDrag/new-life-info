<template>
  <div class="user-management">
    <a-card>
      <template #title>用户管理</template>
      <template #extra>
        <a-button type="primary">新增用户</a-button>
      </template>
      <a-table :columns="columns" :data-source="data" :pagination="{ pageSize: 10 }">
        <template #bodyCell="{ column }">
          <template v-if="column.key === 'action'">
            <a-space>
              <a-button type="link">编辑</a-button>
              <a-button type="link" danger>删除</a-button>
            </a-space>
          </template>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script setup lang="ts">
const columns = [
  { title: '用户名', dataIndex: 'username', key: 'username' },
  { title: '昵称', dataIndex: 'nickname', key: 'nickname' },
  { title: '角色', dataIndex: 'role', key: 'role' },
  { title: '状态', dataIndex: 'status', key: 'status' },
  { title: '操作', key: 'action' },
];

const data = [
  { key: '1', username: 'admin', nickname: '管理员', role: '超级管理员', status: '启用' },
  { key: '2', username: 'test', nickname: '测试用户', role: '普通用户', status: '启用' },
];
</script>
