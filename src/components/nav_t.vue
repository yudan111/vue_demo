<template>
    <div class="navbar">
      <div class="nav-item" v-for="item in navItems" :key="item">{{ item }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: "NavigationBar",
    data() {
      return {
        navItems: ["推荐", "排行榜", "歌单", "主播电台", "歌手", "新碟上架"]
      };
    }
  };
  </script>
  
  <style scoped>
  .navbar {
      height: 34px;
      background-color: rgb(180, 14, 14);
      display: flex;
      align-items: center;
      justify-content:center;
   }
  .nav-item {
      /* display: block; */
      font-size: 60%;
      color: rgb(255, 255, 255);
      margin-left: 40px;
      padding: 6px;
      border-radius: 15px;
   }
  .nav-item:hover {
    /* border: 0px solid #fff; */
      background-color:rgba(28, 27, 27, 0.6);
   }
    </style>