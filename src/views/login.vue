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
                <div class="login-link"><br>
                    <router-link class="aa" to="/register">没有帐户？立即注册</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import avatarImg from '@/assets/image/amyimg/邓紫棋.jpg';
import $ from 'jquery';

export default {
    name: 'Login',
    data() {
        return {
            currentTime: '',
            loginUsername: '',
            loginPassword: '',
            avatarSrc: avatarImg
        };
    },
    mounted() {
        this.updateTime();
        setInterval(this.updateTime, 1000);

        // 以下鼠标相关事件绑定与原注册功能类似，保持交互效果一致
        $(document).on('mouseenter', 'input', (e) => {
            $(e.currentTarget).css({
                'transform': 'scale(1.1)',
                'transition': 'all 0.3s ease'
            });
        }).on('mouseleave', 'input', (e) => {
            $(e.currentTarget).css({
                'transform': 'scale(1)',
                'transition': 'all 0.3s ease'
            });
        });

        $(document).on('mouseenter', 'a', (e) => {
            $(e.currentTarget).addClass("underline");
        }).on('mouseleave', 'a', (e) => {
            $(e.currentTarget).removeClass("underline");
        });

        $('#tx').click((e) => {
            $(e.currentTarget).animate({
                top: '-=20px'
            }, 100).animate({
                top: '+=40px'
            }, 100).animate({
                top: '-=20px'
            }, 100).animate({
                left: '-=20px'
            }, 100).animate({
                left: '+=40px'
            }, 100).animate({
                left: '-=20px'
            }, 100);
        });
    },
    methods: {
        updateTime() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            this.currentTime = `${hours}:${minutes}:${seconds}`;
        },
        login() {
            // 从localStorage获取已注册用户信息
            const registeredUserStr = localStorage.getItem('registeredUsers');
            let registeredUsers = null;
            if (registeredUserStr) {
                registeredUsers = JSON.parse(registeredUserStr);
            }
            // 验证用户名和密码是否匹配
            if (registeredUsers) {
                const isMatch = registeredUsers.some(user => user.username === this.loginUsername && user.password === this.loginPassword);
                if (isMatch) {
                    // 以下是新增的存储用户信息到localStorage的代码部分
                    const userInfo = {
                        username: this.loginUsername
                        // 这里可以按需添加更多要存储的用户信息字段，比如用户ID等
                    };
                    // 先从localStorage获取已有的存储用户信息的数组（如果不存在则初始化为空数组）
                    const storedUserInfosStr = localStorage.getItem('storedUserInfos');
                    let storedUserInfos = [];
                    if (storedUserInfosStr) {
                        storedUserInfos = JSON.parse(storedUserInfosStr);
                    }
                    // 将当前登录成功的用户信息添加到数组中
                    storedUserInfos.push(userInfo);
                    // 再将更新后的数组存回localStorage，记得转换为JSON字符串格式
                    localStorage.setItem('storedUserInfos', JSON.stringify(storedUserInfos));

                    alert('登录成功');
                    this.$router.push('/');
                    return;
                }
            }
            alert('用户名或密码错误，请重新输入');
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