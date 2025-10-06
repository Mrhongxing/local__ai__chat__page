<template>
    <div class="main">
        <div class="picture">
            <img src="../pictures/1.png" alt="login_bg">
        </div>
        <div class="title">
            <div class="text">天枢·趣物集市</div>
            <div class="back_ground">
                
            </div>
        </div>
        <div class="login_box title">
            <div class="text">
                <div class="login_form">
                    
                    <input type="text" id="username" required v-model="loginForm.username" placeholder="用户名" />
                    <input type="password" id="password" required v-model="loginForm.password" placeholder="密码" />
                    <button @click="login">登录</button>
                </div>
                
            </div>
            <div class="back_ground">
                
            </div>
            
        </div>
    </div>
</template>
<script setup name="login" lang="ts">
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import {ref , reactive} from 'vue';
    interface LoginForm {
        username: string;
        password: string;
        rememberMe: boolean;
    }
    const loginForm = reactive<LoginForm>({
        username: '',
        password: '',
        rememberMe: false,
    });
    async function login() {

        /*if (loginForm.username === 'user' && loginForm.password === 'password') {
            alert('登录成功！');
            router.push('/chatpage');
        } else {
            alert('用户名或密码错误，请重试。');
        }*/
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: loginForm.username,
                    password: loginForm.password,
                }),
            });
            if (response.ok) {
                const data = await response.json();
                alert('登录成功！');
                // 假设返回的数据中包含一个 token 字段
                localStorage.setItem('token', data.token);
                router.push('/shopping');
            } else {
                const errorData = await response.json();
                alert('登录失败: ' + errorData.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('登录请求失败，请稍后重试。');
        }
    }
    const router = useRouter();
    onMounted(() => {
        document.title = "登录 - 天枢·趣物集市";
    });

</script>
<style scoped>
    .main{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background-color: rgb(255, 185, 175);
    }
    .title{
        width: 400px;
        height: 100%;
        line-height: 60px;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        color: #333;
        background: transparent;
        position: absolute;
        left: calc(70vw - 380px);
        top: 0;
        z-index: 1;
        box-sizing: border-box;
        
    }
    .back_ground{
        height: 100%;
        width: 100%;
        transform-style: preserve-3d;
        perspective: 600px;
        transform: skewX(-20deg);
        background-color: rgba(254,241,224);
        position: absolute;
        z-index: -1;
        left: 0;
        top: 0;
        box-shadow: 0 2px 64px rgba(0,0,0,0.9);
    }
    .text{
        height: 50px;
        width: 100%;
        line-height: 50px;
        text-align: center;
        position: absolute;
        top:calc(50% - 25px);
        z-index: 2;
    }
    .login_box{
        left: 70vw;
        z-index: 2;
        .back_ground{
            background-color: rgb(255, 135, 82);
        }
    }
    .picture{
        width: 70vw;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit:contain;
        object-position: left;
    }
    .login_form{
        position: relative;
        left: -20px;
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        input{
            width: 100%;
            height: 40px;
            border-radius: 20px;
            border: none;
            padding: 0 20px;
            font-size: 16px;
            box-sizing: border-box;
        }
        button{
            width: 100%;
            height: 40px;
            border-radius: 20px;
            border: none;
            background-color: rgb(255, 185, 175);
            color: #fff;
            font-size: 16px;
            cursor: pointer;
        }
    }
</style>