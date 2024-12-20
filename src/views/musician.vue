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


Nav {
  background-color: #333;
  color: white;
  padding: 10px;
}

.con {
  text-align: center; 
  margin: 20px auto; 
  max-width: 80%; 
}

.con img {
  max-width: 100%;
  height: auto;
  border-radius: 5px; 
}
h2{
    font-size: 60px;
    margin: 30px;
}
</style>