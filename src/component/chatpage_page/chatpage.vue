<template>
    <div class="chat-room">
        <div class="messages">
            <div v-for="(msg, idx) in messages" :key="idx" class="message">
                <span class="user">{{ msg.user }}:</span>
                <span class="text">{{ msg.text }}</span>
            </div>
        </div>
        <div class="input-area">
            <input v-model="input" @keyup.enter="send" placeholder="输入消息..." />
            <button @click="send">发送</button>
        </div>
    </div>
</template>

<script setup lang="ts" name="chatpage">
import { ref } from 'vue'
import axios from 'axios';
const messages = ref([
    { user: 'AI', text: '你好，有什么可以帮您？' }
])
const input = ref('')
function send() {
    const messageText = input.value.trim();
    
    if (messageText) {
        // 1. 保存用户消息
        messages.value.push({ user: '你', text: messageText });
        
        // 2. 清空输入框
        input.value = '';
        
        // 3. 发送请求（使用保存的 messageText，不是清空后的 input.value）
        axios.get(`http://127.0.0.1:8000/items/${encodeURIComponent(messageText)}`)
            .then(function (response) {
                console.log("success");
                console.log(response.data);
                
                // 4. 将服务器回复添加到消息列表
                messages.value.push({ 
                    user: 'AI', 
                    text: response.data.item_id
                });
            })
            .catch(function (error) {
                console.error(error);
                messages.value.push({ 
                    user: '系统', 
                    text: '请求失败: ' + error.message 
                });
            });
    }
}
</script>

<style scoped>
.chat-room {
    background: #fff;
    border-radius: 8px;
    padding: 16px;
    /*max-width: 600px;
    margin: 0 auto;*/
    box-sizing: border-box;
    border: rgb(255, 135, 82) solid 2px;
    /*height: calc(100vh - 60px);
    width: 100%;*/
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 600px;
    height: 300px;
}
.messages {
    min-height: 200px;
    margin-bottom: 12px;
}
.message {
    margin-bottom: 8px;
}
.user {
    font-weight: bold;
    margin-right: 4px;
}
.input-area {
    display: flex;
    gap: 8px;
}
input {
    flex: 1;
    padding: 6px 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
}
button {
    padding: 6px 16px;
    border: none;
    background: rgb(255, 185, 175);
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
}
</style>