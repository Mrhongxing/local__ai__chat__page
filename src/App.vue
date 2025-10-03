<script setup lang="ts">
  import { computed } from 'vue';
import { useRoute,RouterLink } from 'vue-router';
  const router = useRoute();
  const routerClass=computed(()=>{
    const routerName=router.name?.toString()||'default';
    return `router-${routerName}`;
  });
</script>

<template>
  <RouterLink class="select_router" to="/login">进入登录页面</RouterLink>
  <RouterLink class="select_router" to="/chatpage">进入聊天页面</RouterLink>
  <div :class="routerClass">
    <router-view class="router"></router-view>
  </div>
  
  
</template>

<style scoped>
  .select_router{
    font-size: 20px;
    margin-left: 20px;
    color: blue;
    text-decoration: underline;
  }
  .router-login{
    width: 100vw;
    height: 100vh;
    background: #f0f0f0;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
  }
  body,html{
    margin: 0;
    padding: 0;
  }
</style>
