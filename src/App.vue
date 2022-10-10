<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <router-view></router-view>
</template>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    font-family: Ubuntu;
    font-size: 16px;
    line-height: 24px;
    color: var(--wtt-text);
  }
</style>
