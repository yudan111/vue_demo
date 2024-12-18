<template>
    <div class="navbar">
        <ul class="nav-links">
            <span><img src="../assets/image/amyimg/topbar.png" alt=""></span>
            <li :class="{ 'active': $route.path === '/' }"> <span><router-link to="/">发现音乐</router-link></span></li>
            <li :class="{ 'active': $route.path === '/mymusic' }"><span><router-link to="/mymusic">我的音乐</router-link></span></li>
            <li> <span><router-link to="/follow">关注</router-link></span></li>
            <li> <span><router-link to="/store">商城</router-link></span></li>
            <li> <span><router-link to="/musician">音乐人</router-link></span></li>
            <li> <span><router-link to="/download-client">下载客户端</router-link></span></li>
            <li><span><input type="text" placeholder="音频/歌单/MV/歌词"></span></li>
            <li> <span><router-link to="/creator-center">创作者中心</router-link></span></li>
            <li><span><router-link to="/dlzc">登录</router-link></span></li>
        </ul>
    </div>
</template>


<script>
export default {
    name: "NavigationBar"
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
    /* justify-content: space - between; */
    padding: 0 ;
    /* margin: -5px; */
}
.nav-links {
    display: flex;
    align-items: center;
    text-align: center;
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0 auto;
}
.nav-links span{
    
    display: flex;
    align-items: center;
}

.nav-links li {
    display: inline-flex;
    align-items: center;
    /* line-height: 30px; */
    padding:0 10px;
    height: 70px;
    /* height: 70px; */
}
.nav-links li:hover:not(:nth-child(8)):not(:nth-child(10)):not(:nth-child(9)){
    color: #fff;
    background-color: #000000;
}
.nav-links li :hover:nth-child(8){
    border: 1px solid #f3f0f0;

}
.nav-links li:hover a{
    color: #fff;
    
}
.nav-links a {
    color: #b6b0b0;
    text-decoration: none;
}
.nav-links input {
    background-color: #ffffff;
    border:1px solid #b6b0b0;
    height: 30px;
    border-radius: 50px;
}
.active {
  color: #fefcfc; /* 文字颜色变为白色 */
  background-color: #000000; /* 背景色变为深灰色，可根据实际需求调整颜色值 */
}
.active a{
    color: #fff;
}
</style>