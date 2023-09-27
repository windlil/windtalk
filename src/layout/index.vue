<template>
  <div class="layout">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="center">
      <slot name="center" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped lang="less">
.layout {
  display: flex;
  width: 90%;
  height: 95%;
  border-radius: 15px;
  background-color: #0f0f0f;
  box-shadow: 0 0 5px 2px #2a2a2a;

  .left {
    height: 100%;
    width: 250px;
    border-right: 1px solid #2e2e2e;
  }

  .center {
    box-sizing: border-box;
    height: 100%;
    flex: 1;
    padding: 20px;
  }

  .right {
    box-sizing: border-box;
    height: 100%;
    width: 350px;
    padding: 20px;
    padding-left: 0;
  }
}
</style>
