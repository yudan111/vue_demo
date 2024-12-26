<template>
    <div class="by">
        <div id="con">
            <img id="tx" :src="avatarSrc" alt="用户头像">
            <div id="left">
                <h2>注册用户</h2>
                <div id="time">{{ currentTime }}</div>
            </div>
            <div id="right">
                <form @submit.prevent="register">
                    <input type="text" v-model="username" placeholder="用户名" required autocomplete="username"><br><br>
                    <input type="password" v-model="password" placeholder="密码" required autocomplete="current-password"><br><br>
                    <input id="tj" type="submit" value="注册">
                </form>
                <div class="login-link"><br>
                    <router-link class="aa" to="/login">已经有帐户？立即登录</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import avatarImg from '@/assets/image/amyimg/邓紫棋.jpg';
import axios from 'axios'; // 引入 axios

export default {
    name: 'Register',
    data() {
        return {
            currentTime: '',
            username: '',
            password: '',
            avatarSrc: avatarImg
        };
    },
    mounted() {
        this.updateTime();
        setInterval(this.updateTime, 1000);
    },
    methods: {
        updateTime() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            this.currentTime = `${hours}:${minutes}:${seconds}`;
        },
        async register() {
            try {
                // 验证用户名和密码是否为空
                if (!this.username || !this.password) {
                    alert('用户名和密码不能为空');
                    return;
                }

                // 发送请求给后端API进行用户注册
                await axios.post('http://localhost:3000/api/register', {
                    username: this.username,
                    password: this.password
                });

                alert('注册成功');
                // 注册成功后跳转到登录页面
                this.$router.push('/login');
            } catch (error) {
                if (error.response) {
                    // 如果有响应，则显示从服务器返回的消息
                    alert(error.response.data.message);
                } else {
                    // 对于网络错误等没有响应的情况
                    alert('注册失败，请稍后再试');
                }
            }
        }
    }
};
</script>

<style scoped>
html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.by {
    background-image: url('~@/assets/image/amyimg/bgA.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}

#con {
    width: 500px;
    display: flex;
    height: 200px;
    margin: 0;
    padding: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    z-index: 1;
}

#left {
    margin: 0;
    padding: 0;
    width: 50%;
    height: 100%;
    opacity: 0.7;
}

#right {
    margin: 0;
    padding: 0;
    width: 50%;
    height: 100%;
    background-color: #ffffff;
}

h2,
form,
.login-link {
    text-align: center;
}

form {
    margin-top: 35px;
}

input {
    width: 200px;
    height: 20px;
}

#tx {
    position: absolute;
    border-radius: 50%;
    right: 65%;
    top: 31%;
    width: 100px;
    height: 100px;
    z-index: 6;
    opacity: 0.8;
}

a {
    text-decoration: none;
    color: #0055ff;
}

#time {
    text-align: center;
    margin-top: 120px;
}

#tj {
    border: none;
}

input[type="submit"] {
    color: #ffffff;
    background-color: #007BFF;
    height: 20px;
    border-radius: 20px;
}

.underline {
    text-decoration: underline;
    color: #00FFFF;
}
</style>