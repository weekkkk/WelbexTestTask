<script setup lang="ts"></script>

<template>
  <div class="layout">
    <header>
      <div class="container">WelbexTestTask</div>
    </header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped>
.layout {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: var(--wtt-layout-px);
  background-color: var(--wtt-dark-bg);
  padding-top: calc(56px + var(--wtt-layout-py));
  header {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--wtt-bg);
    padding: 0 var(--wtt-header-px);
    .container {
      padding: var(--wtt-header-py) 0;
    }
  }
  .container {
    width: 100%;
    padding: var(--wtt-layout-px);
    max-width: var(--wtt-layout-mw);
    background-color: var(--wtt-bg);
  }
}
</style>
