<template>
  <div class="by">
    <div id="con">
      <img id="tx" :src="avatarSrc" alt="用户头像">
      <div id="left">
        <h2>登录用户</h2>
        <div id="time">{{ currentTime }}</div>
      </div>
      <div id="right">
        <form @submit.prevent="login">
          <input type="text" v-model="loginUsername" placeholder="用户名" required autocomplete="username"><br><br>
          <input type="password" v-model="loginPassword" placeholder="密码" required autocomplete="current-password"><br><br>
          <input id="tj" type="submit" value="登录">
        </form>
        <div class="login-link">
          <router-link class="aa" to="/register">没有帐户？立即注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import avatarImg from '@/assets/image/amyimg/邓紫棋.jpg';
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      currentTime: '',
      loginUsername: '',
      loginPassword: '',
      avatarSrc: avatarImg,
    };
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.currentTime = now.toTimeString().slice(0, 8);
    },
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/api/login', {
          username: this.loginUsername,
          password: this.loginPassword
        });

        if (response.data.success) {
          const userInfo = {
            username: this.loginUsername,
            sessionId: Date.now().toString(),
            isAdmin: response.data.isAdmin,
          };

          localStorage.setItem('currentSession', JSON.stringify(userInfo));

          if (response.data.isAdmin) {
            this.$router.push('/admin');
            alert('管理员登录成功');
          } else {
            this.$router.push('/');
            alert('登录成功');
          }
        } else {
          alert('用户名或密码错误，请重新输入');
        }
      } catch (error) {
        alert(error.response?.data?.message || '登录失败，请稍后再试');
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

/* 设置头像（位置和颜色，大小 */
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

/* 去掉 a的下划线和改变颜色*/
.aa {
    text-decoration: none;
    color: #0055ff;
}

/* 设置时间的位置 */
#time {
    text-align: center;
    margin-top: 120px;
}

/* 去掉添加按钮边框 */
#tj {
    border: none;
}

/* 设置提交按钮样式 */
input[type="submit"] {
    color: #ffffff;
    background-color: #007BFF;
    height: 20px;
    border-radius: 20px;
}

/* 定义一个名为underline的类，用于给文本添加下划线装饰和添加颜色 */
.underline {
    text-decoration: underline;
    color: #00FFFF;
}
</style>