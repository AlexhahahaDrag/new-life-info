<template>
  <svg class="icon" aria-hidden="true">
    <use :href="symbolId" :fill="props.color" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  name: string;
  color?: string;
  prefix?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'currentColor',
  prefix: '#icon',
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
