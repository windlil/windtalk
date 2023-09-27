<script setup lang="ts">
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import HomeRight from './components/HomeRight/index.vue'

const route = useRoute()
const currentPage = ref()

watch(() => route.path, () => {
  currentPage.value = route.path
})
</script>

<template>
  <div class="right">
    <HomeRight v-if="currentPage === '/main/home'" />
  </div>
</template>

<style scoped lang="less">

</style>
