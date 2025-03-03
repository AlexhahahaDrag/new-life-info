<template>
  <div class="not-found">
    <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
      <template #extra>
        <a-button type="primary" @click="router.push('/')"> Back Home </a-button>
      </template>
    </a-result>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
