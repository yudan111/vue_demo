<template>
  <div id="app">
   <router-view />
   <!-- <div class="player"> -->
      <!-- <Play/> -->
   </div>
  

</template>
<script>
export default{
  // components: {
  //   Play,
  //   }
  
  
  
  
}
</script>
<style>
#app {
  /* width: 111%; */
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.player {
  position: fixed;
  bottom: 0;        /* 将组件固定在底部 */
  left: 0;          /* 从左侧开始 */
  width: 100%;      /* 宽度填满整个屏幕 */
  background-color: #333; /* 背景色 */
  color: white;     /* 文本颜色 */
  text-align: center; /* 内容居中 */
  padding: 10px 0;   /* 上下内边距 */
  z-index: 1000;   
}
</style>
<!-- <script>
import Play from './components/play.vue'
  export default {
    components: {
      Play,
      }
      }
</script> -->
