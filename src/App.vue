<script setup lang="ts">
  import { createRouter,createWebHistory, RouterLink } from 'vue-router';
</script>

<template>
  <RouterLink class="select_router" to="/chatpage">进入聊天页面</RouterLink>
  <router-view></router-view>
  
</template>

<style scoped>
  .select_router{
    font-size: 20px;
    margin-left: 20px;
    color: blue;
    text-decoration: underline;
  }
</style>
