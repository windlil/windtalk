<script setup lang="ts">
import { Icon } from '@iconify/vue'
import Box from '@/components/Box/index.vue'
</script>

<template>
  <div class="home-right">
    <Box>
      <template #header>
        <div class="header">
          <Icon icon="ph:fire" />
          <span>
            推荐
          </span>
        </div>
      </template>
      <template #center>
        <div class="list">
          <div v-for="_ in 10" class="list-item">
            求借用or推荐哪里可以买到, 出门忘带电脑充电线了
          </div>
        </div>
      </template>
    </Box>
    <div class="submit">
      发布
    </div>
  </div>
</template>

<style scoped lang="less">
.home-right {
  .header {
    display: flex;
    align-items: center;
  }
  .list {
    .list-item {
      box-sizing: border-box;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
      white-space: nowrap;
      padding: 10px 5px;
      font-size: 14px;
      color: #6c6c6c;
      cursor: pointer;
      border-radius: 10px;
      transition: all 0.2s;

      &:hover {
        background-color: rgb(39, 39, 39);
      }
    }
  }

  .submit {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-top: 40px;
    border-radius: 25px;
    font-weight: bold;
    background-color: #484b5a;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: #3c3f4c;
    }
  }
}
</style>
