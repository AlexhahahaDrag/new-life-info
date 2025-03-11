<template>
  <div class="menu-management">
    <a-card>
      <template #title>菜单管理</template>
      <template #extra>
        <a-button type="primary">新增菜单</a-button>
      </template>
      <a-table :columns="columns" :data-source="data" :pagination="false">
        <template #bodyCell="{ column }">
          <template v-if="column.key === 'action'">
            <a-space>
              <a-button type="link">编辑</a-button>
              <a-button type="link">添加子菜单</a-button>
              <a-button type="link" danger>删除</a-button>
            </a-space>
          </template>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script setup lang="ts">
interface MenuItem {
  key: string;
  name: string;
  icon?: string;
  path: string;
  sort: number;
  children?: MenuItem[];
}

interface TableColumn {
  title: string;
  dataIndex?: string;
  key: string;
}

const columns = ref<any[]>([
  { title: '菜单名称', dataIndex: 'name', key: 'name' },
  { title: '图标', dataIndex: 'icon', key: 'icon' },
  { title: '路由路径', dataIndex: 'path', key: 'path' },
  { title: '排序', dataIndex: 'sort', key: 'sort' },
  { title: '操作', key: 'action' },
]);

const data: MenuItem[] = [
  {
    key: '1',
    name: '仪表盘',
    icon: 'DashboardOutlined',
    path: '/dashboard',
    sort: 1,
  },
  {
    key: '2',
    name: '系统管理',
    icon: 'SettingOutlined',
    path: '/system',
    sort: 2,
    children: [
      {
        key: '2-1',
        name: '用户管理',
        path: '/system/user',
        sort: 1,
      },
    ],
  },
];
</script>
