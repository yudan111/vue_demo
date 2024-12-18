<template>
    <div class="song - list">
      
      
      
      <div class="header">
        <h1>重返2010|从王菲开启2010经典之旅</h1>
        <div class="hz">
          <img class="tp" src="../assets/image/amyimg/王菲.jpg">
          <p>云音乐经典专区 2021 - 07 - 06创建 (1)</p><br>
          <p class="description">介绍：2010年经典歌曲精选</p>
        </div>
        
        
        
        <div class="buttons">
          <button>播放</button>
          <button>收藏(3546)</button>
          <button>评论</button>
          <button>下载</button>
        </div>
       
      </div>
      <div class="song-list-container">
        <h2>歌曲列表</h2>
        <p>103首歌</p>
        <table>
          <thead>
            <tr>
              <th>歌曲标题</th>
              <th>时长</th>
              <th>歌手</th>
              <th>专辑</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(song, index) in songs" :key="index">
              <td>{{ song.title }}</td>
              <td>{{ song.duration }}</td>
              <td>{{ song.singer }}</td>
              <td>{{ song.album }}</td>
            </tr>
          </tbody>
        </table>
        <div class="external-player">
          
          <p>播放：582656次</p>
        </div>
      </div>
    </div>
  </template>
  <script>
import nav from './nav.vue'
 export default {
   components: {
     Nav: nav
   },
   data() {
     return {
       songs: [
         {
           title: '传奇',
           duration: '04:56',
           singer: '王菲',
           album: '传奇'
         },
         {
           title: '爱笑的眼睛 - (Smiling Eyes)',
           duration: '04:13',
           singer: '林俊杰',
           album: '她说 概念自选辑'
         },
         {
           title: '记得 - (Remember)',
           duration: '04:47',
           singer: '林俊杰',
           album: '她说 概念自选辑'
         },
         
       ]
     };
   }
 };
 </script>
<style scoped>
.header{
  widows: 100%;
  height: 20%;
}
table {
width: 100%;
border-collapse: collapse;
}
th, td {
border: 1px solid #ccc;
padding: 5px;
}
.tp{
  widows: 200px;
  height: 200px;
  border-radius: 10%;

}
button{
  margin: 5px;
}


</style>