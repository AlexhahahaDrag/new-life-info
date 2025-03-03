<template>
  <div class="role-management">
    <a-card>
      <template #title>角色管理</template>
      <template #extra>
        <a-button type="primary">新增角色</a-button>
      </template>
      <a-table :columns="columns" :data-source="data" :pagination="{ pageSize: 10 }">
        <template #bodyCell="{ column }">
          <template v-if="column.key === 'action'">
            <a-space>
              <a-button type="link">编辑</a-button>
              <a-button type="link">权限设置</a-button>
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
  { title: '角色名称', dataIndex: 'name', key: 'name' },
  { title: '角色编码', dataIndex: 'code', key: 'code' },
  { title: '描述', dataIndex: 'description', key: 'description' },
  { title: '操作', key: 'action' },
];

const data = [
  { key: '1', name: '超级管理员', code: 'SUPER_ADMIN', description: '系统最高权限' },
  { key: '2', name: '普通用户', code: 'USER', description: '基础功能权限' },
];
</script>
