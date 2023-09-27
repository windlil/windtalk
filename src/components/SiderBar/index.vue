<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import useStorage from '@/utils/storage'

interface Item {
  name: string
  link: string
  icon: string
}

const router = useRouter()
const currentIndex = ref(useStorage.get('windtalk:index') ?? 0)

const siderBar = reactive<Item[]>([
  {
    name: '首页',
    link: '/main/home',
    icon: 'fluent-mdl2:home-solid',
  },
  {
    name: '消息',
    link: '/main/message',
    icon: 'uiw:message',
  },
  {
    name: '话题',
    link: '/main/explore',
    icon: 'iconamoon:search-bold',
  },
])

function clickItem(item: Item, index: number) {
  useStorage.set('windtalk:index', index)
  currentIndex.value = index
  router.push(item.link)
}
</script>

<template>
  <div class="sider-bar">
    <div v-for="(item, index) in siderBar" :key="item.name" :class="{ active: currentIndex === index }" class="sider-bar-item" @click="clickItem(item, index)">
      <Icon class="icon" :icon="item.icon" />
      <span class="item-name">
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="less">
.sider-bar {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  .sider-bar-item {
    display: flex;
    align-items: center;
    height: 38px;
    margin: 10px 0;
    padding-left: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;

    .icon {
      margin: 0 20px;
      margin-right: 15px;
    }

    &:hover {
      background-color: #232323;
    }
  }
}

.active {
  background-color: #232323;
}
</style>
