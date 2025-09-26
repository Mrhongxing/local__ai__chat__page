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
const messages = ref([
    { user: 'AI', text: '你好，有什么可以帮您？' }
])
const input = ref('')
function send() {
    if (input.value.trim()) {
        messages.value.push({ user: '你', text: input.value })
        input.value = ''
    }
}
</script>

<style scoped>
.chat-room {
    background: #fff;
    border-radius: 8px;
    padding: 16px;
    max-width: 600px;
    margin: 0 auto;
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
    background: #409eff;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
}
</style>