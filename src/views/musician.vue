<template>
    <div>
      <Nav />
      <div class="con">
          <img src="@/assets/image/amyimg/yyr.png" alt="yyr">
      </div>
      <h2>60W+音乐人已加入</h2>
      <div class="tp">
          <Tp />
      </div>
      
    </div>
</template>
  
<script>
  import nav from '@/components/nav.vue'
  import tp from '@/components/tp.vue'
 
  export default {
      components: {
          Nav:nav,
          Tp:tp,
          
      }
  }
</script>
  
<style scoped>
/* 整体页面背景色设置为淡灰色，可按需修改颜色值 */
body {
     background-color: #f4f4f4;
}
/* 导航栏样式设置示例，这里简单设置下背景色和文字颜色等，可根据实际的Nav组件样式需求调整 */
Nav {
  background-color: #333;
  color: white;
  padding: 10px;
}
/* 图片容器的样式 */
.con {
  text-align: center; /* 让图片在容器中居中显示 */
  margin: 20px auto; /* 上下外边距20px，左右自动居中 */
  max-width: 80%; /* 图片容器最大宽度占父元素的80%，可根据需求调整 */
}
/* 图片样式 */
.con img {
  max-width: 100%; /* 图片最大宽度为容器宽度，保证自适应不超出 */
  height: auto; /* 高度根据宽度等比例自适应 */
  border-radius: 5px; /* 图片添加圆角效果，可调整圆角半径数值 */
}
h2{
    font-size: 60px;
    margin: 30px;
}
</style>