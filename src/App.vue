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
  <div class="select_header">
    <RouterLink exact-active-class="button_shop_active" class="button_shop" to="/shopping">首页</RouterLink>
    <RouterLink exact-active-class="button_chat_active" class="button_chat" to="/chatpage">进入聊天页面</RouterLink>
    
  </div>
  <div class="user">
    <div class="user_image"></div>
    <div class="user_select">
      <div class="user_name">用户名</div>
      <div class="user_id">用户ID</div>
      <RouterLink class="button_login" to="/login">进入登录页面</RouterLink>
    </div>
  </div>
  <div class="full" style="height: 60px;"></div>
  <div :class="routerClass">
    <router-view class="router"></router-view>
  </div>
  
  
</template>

<style scoped>
  .select_header{
    width: 100vw;
    height: 60px;
    background: rgb(255, 135, 82);
    position: absolute;
    left: 0;
    top: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .button_chat{
      width: 20vw;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgb(255, 135, 82);
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    }
    .button_chat_active{
      background-color: rgb(255, 185, 175);
    }
    .button_shop{
      height: 100%;
      width: 20vw;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgb(255, 135, 82);
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
      
    }
    .button_shop_active{
      background-color: rgb(255, 185, 175);
    }
  }
  
  .user{
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    background-size: cover;
    overflow: hidden;
    z-index: 1001;
    .user_select{
      width: 100px;
      height: 75px;
      
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .user_name{
        font-size: 16px;
        font-weight: bold;
        color: white;
      }
      .user_id{
        font-size: 16px;
        color: white;
      } 
      .botton_login{
        font-size: 16px;
        color: white;
      }
    }
    .user_image{
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    
  }
  .user:hover{
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
    height: 135px;
    width: 100px;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(12px);
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
