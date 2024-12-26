<template>
    <div class="navbar">
        <ul class="nav-links">
            <span><img src="../assets/image/amyimg/topbar.png" alt=""></span>
            <li :class="{ 'active': isActive('/') }"><span><router-link to="/">发现音乐</router-link></span></li>
            <li :class="{ 'active': isActive('/mymusic') }"><span><router-link to="/mymusic">我的音乐</router-link></span></li>
            <li :class="{ 'active': isActive('/follow') }"><span><router-link to="/follow">关注</router-link></span></li>
            <li :class="{ 'active': isActive('/store') }"><span><router-link to="/store">商城</router-link></span></li>
            <li :class="{ 'active': isActive('/musician') }"><span><router-link to="/musician">音乐人</router-link></span></li>

            <!-- 下载客户端 下拉菜单 -->
            <li class="dropdown">
                <span>下载客户端</span>
                <ul class="dropdown-menu">
                    <li><router-link to="/download/windows">Windows 版</router-link></li>
                    <li><router-link to="/download/mac">Mac 版</router-link></li>
                    <li><router-link to="/download/linux">Linux 版</router-link></li>
                </ul>
            </li>

            <li><span><input type="text" placeholder="音频/歌单/MV/歌词"></span></li>
            <li v-if="isAdmin" :class="{ 'active': isActive('/admin') }"><span><router-link to="/admin">管理中心</router-link></span></li>
            <li v-if="!isLoggedIn"><span><router-link to="/login">登录</router-link></span></li>
            <li v-else class="user-dropdown" @mouseenter="showDropdown = true" @mouseleave="hideDropdown">
                <span>
                    <img :src="avatarSrc" alt="用户头像" style="width: 30px; height: 30px; border-radius: 50%; margin-right: 5px;">
                    <span>账号：{{ username }}</span>
                </span>
                <ul class="user-dropdown-menu" @mouseenter.stop="stopHideDropdown" @mouseleave="hideDropdown" v-if="showDropdown">
                    <li><a href="#" @click.prevent="logout">退出登录</a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import avatarImg from '@/assets/image/amyimg/张碧晨.jpg';

export default {
    data() {
        return {
            isLoggedIn: false,
            isAdmin: false, // 管理员状态
            username: '',
            avatarSrc: avatarImg,
            showDropdown: false // 控制用户头像下拉菜单的显示状态
        };
    },
    mounted() {
        this.checkUserStatus();
    },
    methods: {
        checkUserStatus() {
            const currentSessionStr = localStorage.getItem('currentSession');
            if (currentSessionStr) {
                const currentSession = JSON.parse(currentSessionStr);
                this.username = currentSession.username;
                this.isLoggedIn = true;
                this.isAdmin = currentSession.isAdmin || false;
            }
        },
        logout() {
            localStorage.removeItem('currentSession');
            this.isLoggedIn = false;
            this.isAdmin = false;
            this.username = '';
            this.avatarSrc = '';
            window.location.reload(); // 强制刷新页面以确保状态同步
        },
        hideDropdown() {
            this.showDropdown = false;
        },
        stopHideDropdown() {
            // 阻止 hideDropdown 被触发
        },
        isActive(path) {
            return this.$route.path === path;
        }
    },
    watch: {
        // 监听路由变化，确保用户状态是最新的
        '$route': 'checkUserStatus'
    }
};
</script>

<style scoped>
.navbar {
    font-size: 90%;
    height: 70px;
    background-color: #292828;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0;
}

.nav-links {
    display: flex;
    align-items: center;
    text-align: center;
    list-style: none;
    padding: 0;
    margin: 0 auto;
}

.nav-links span {
    display: flex;
    align-items: center;
}

.nav-links li {
    display: inline-flex;
    align-items: center;
    padding: 0 10px;
    height: 70px;
    position: relative;
}

/* Hover effect for the regular menu items */
.nav-links li:hover:not(:nth-child(8)):not(:nth-child(10)):not(:nth-child(9)) {
    color: #fff;
    background-color: #000000;
}

.nav-links li:hover a {
    color: #fff;
}

.nav-links a {
    color: #b6b0b0;
    text-decoration: none;
}

.nav-links input {
    background-color: #ffffff;
    border: 1px solid #b6b0b0;
    height: 30px;
    border-radius: 50px;
}

.active {
    color: #fefcfc;
    background-color: #000000;
}

.active a {
    color: #fff;
}

/* 下拉菜单样式 */
.nav-links .dropdown {
    position: relative;
}

.nav-links .dropdown-menu {
    display: none;
    position: absolute;
    top: 70px;
    left: 0;
    background-color: #292828;
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.nav-links .dropdown-menu li {
    padding: 10px 15px;
    height: 40px;
}

.nav-links .dropdown-menu li:hover {
    background-color: #333;
}

.nav-links .dropdown-menu a {
    color: #b6b0b0;
    text-decoration: none;
}

/* Show dropdown menu on hover */
.nav-links .dropdown:hover .dropdown-menu {
    display: block;
}

.user-dropdown {
    position: relative;
}

.user-dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #292828;
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.user-dropdown-menu li {
    padding: 10px 15px;
}

.user-dropdown-menu li:hover {
    background-color: #333;
}

.user-dropdown-menu a {
    color: #b6b0b0;
    text-decoration: none;
}

.user-dropdown:hover .user-dropdown-menu,
.user-dropdown-menu:hover {
    display: block;
}
</style>