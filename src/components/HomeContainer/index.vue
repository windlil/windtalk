<script setup lang="ts">
import { Icon } from '@iconify/vue'
import Box from '../Box/index.vue'
</script>

<template>
  <div class="home-container scrollbar">
    <Box v-for="_ in 10" class="box">
      <template #header>
        <div class="header">
          <div class="avatar">
            <img src="/vite.svg" alt="">
          </div>
          <div class="info">
            <div class="username">
              Vite
            </div>
            <div class="date">
              2023年09月26日 23:47
            </div>
          </div>
        </div>
      </template>
      <template #center>
        <div>
          江湖救急 有没有沧州和淄博的小伙伴，明天求一根macbook pro的电脑充电线， M1max，型号是A2485，求借用or推荐哪里可以买到, 出门忘带电脑充电线了
        </div>
      </template>
      <template #footer>
        <div class="footer">
          <div class="IconSpan comment">
            <Icon icon="uil:comment" />
            <span>
              5
            </span>
          </div>
          <div class="IconSpan like">
            <Icon icon="ci:heart-01" />
            <span>
              5
            </span>
          </div>
        </div>
      </template>
    </Box>
  </div>
</template>

<style scoped lang="less">
.scrollbar {
  &::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(94, 94, 94, 0.2);
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: rgba(0, 0, 0, 0.1);
  }
}

.home-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;

  .box {
    margin-bottom: 20px;
    margin-right: 15px;
  }

  .header {
    display: flex;

    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;
      background-color: #fbfbfb;
    }

    .info {
      margin-left: 16px;

      .date {
        font-size: 12px;
        color: #787878;
      }
    }
  }

  .footer {
    display: flex;
    font-size: 20px;

    .IconSpan {
      display: flex;
      align-items: center;
      width: 40px;
      cursor: pointer;
      margin-right: 50px;
      color: #808080;

      span {
        margin-left: 2px;
        font-size: 12px;
      }
    }
  }
}
</style>
