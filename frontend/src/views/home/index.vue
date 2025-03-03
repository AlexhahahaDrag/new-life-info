<template>
  <div class="page-header">
    <div class="welcome-text">
      <a-avatar :src="userAvatar" />
      <span>早安，{{ userName }}，今天又是充满活力的一天！</span>
      <span class="weather">今日多云转晴，20℃ - 25℃</span>
    </div>
    <div class="page-stats">
      <span>项目数 25</span>
      <a-divider type="vertical" />
      <span>待办 4/16</span>
      <a-divider type="vertical" />
      <span>消息 12</span>
    </div>
  </div>

  <a-row :gutter="[16, 16]">
    <a-col :span="6">
      <a-card class="stat-card pink">
        <div class="stat-content">
          <div class="stat-title">访问量</div>
          <div class="stat-value">9,725</div>
        </div>
      </a-card>
    </a-col>
    <a-col :span="6">
      <a-card class="stat-card purple">
        <div class="stat-content">
          <div class="stat-title">成交额</div>
          <div class="stat-value">$1,026</div>
        </div>
      </a-card>
    </a-col>
    <a-col :span="6">
      <a-card class="stat-card blue">
        <div class="stat-content">
          <div class="stat-title">下载量</div>
          <div class="stat-value">970,925</div>
        </div>
      </a-card>
    </a-col>
    <a-col :span="6">
      <a-card class="stat-card orange">
        <div class="stat-content">
          <div class="stat-title">成交量</div>
          <div class="stat-value">9,527</div>
        </div>
      </a-card>
    </a-col>
  </a-row>

  <a-row :gutter="[16, 16]" style="margin-top: 16px">
    <a-col :span="16">
      <a-card>
        <div ref="chartRef" style="height: 300px"></div>
      </a-card>
    </a-col>
    <a-col :span="8">
      <a-card>
        <div ref="pieChartRef" style="height: 300px"></div>
      </a-card>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import * as echarts from 'echarts';
// Component logic will be added here

const userAvatar = ref('https://api.dicebear.com/7.x/avataaars/svg?seed=admin');
const chartRef = ref<HTMLElement>();
const pieChartRef = ref<HTMLElement>();
const userName = ref('Admin');
onMounted(() => {
  if (chartRef.value) {
    const chart = echarts.init(chartRef.value);
    chart.setOption({
      tooltip: { trigger: 'axis' },
      legend: { data: ['下载量', '注册量'] },
      xAxis: {
        type: 'category',
        data: [
          '06:00',
          '08:00',
          '10:00',
          '12:00',
          '14:00',
          '16:00',
          '18:00',
          '20:00',
          '22:00',
          '24:00',
        ],
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: '下载量',
          type: 'line',
          smooth: true,
          areaStyle: {},
          data: [5000, 6000, 6500, 6000, 2000, 3000, 3500, 4000, 4000, 4500],
        },
        {
          name: '注册量',
          type: 'line',
          smooth: true,
          areaStyle: {},
          data: [7000, 8000, 10000, 11000, 6000, 5000, 5000, 6000, 6500, 5000],
        },
      ],
    });
  }

  if (pieChartRef.value) {
    const pieChart = echarts.init(pieChartRef.value);
    pieChart.setOption({
      tooltip: { trigger: 'item' },
      legend: { orient: 'horizontal', bottom: 0 },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          data: [
            { value: 30, name: '学习' },
            { value: 20, name: '娱乐' },
            { value: 25, name: '工作' },
            { value: 25, name: '休息' },
          ],
        },
      ],
    });
  }
});
</script>

<style scoped>
.home {
  padding: 24px;
}
</style>
