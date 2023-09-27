<script setup lang="ts">

</script>

<template>
  <div class="box">
    <div class="header">
      <slot name="header" />
    </div>
    <div class="center">
      <slot name="center" />
    </div>
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped lang="less">
.box {
  box-sizing: border-box;
  padding: 15px;
  border-radius: 10px;
  background-color: #1a1b1b;

  .center {
    margin: 10px 0;
    padding-bottom: 20px;
    border-bottom: 1px solid #2b2b2b;
  }
}
</style>
