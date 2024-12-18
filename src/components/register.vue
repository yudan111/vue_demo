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
                    <a href="login.html">已经有帐户？立即登录</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import avatarImg from '@/assets/image/amyimg/邓紫棋.jpg';

// 确保正确引入jQuery，这里假设使用npm安装的方式，根据实际情况调整引入路径
import $ from 'jquery';
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

        // 绑定鼠标进入和离开input元素的事件
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

        // 绑定鼠标进入和离开a元素的事件
        $(document).on('mouseenter', 'a', (e) => {
            $(e.currentTarget).addClass("underline");
        }).on('mouseleave', 'a', (e) => {
            $(e.currentTarget).removeClass("underline");
        });

        // 绑定头像点击事件
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
        register() {
            // 简单验证，这里可以添加更严格的验证逻辑
            if (!this.username ||!this.password) {
                alert('用户名和密码不能为空');
                return;
            }
            // 将注册数据存储到localStorage
            localStorage.setItem('registeredUser', JSON.stringify({
                username: this.username,
                password: this.password
            }));
            alert('注册成功');
            // 可以在这里进行页面跳转等其他后续操作
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
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
}

/* 去掉 a的下划线和改变颜色*/
a {
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