<script setup lang="ts">
import Layout from '@/layout/index.vue'
import SiderBar from '@/components/SiderBar/index.vue'
import Right from '@/components/Right/index.vue'
</script>

<template>
  <div class="app">
    <Layout>
      <template #left>
        <SiderBar />
      </template>
      <template #center>
        <RouterView />
      </template>
      <template #right>
        <Right />
      </template>
    </Layout>
  </div>
</template>

<style scoped lang="less">
.app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3f3f3f;
}
</style>
