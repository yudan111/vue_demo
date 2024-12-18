<template>
  <div class="carousel-container">
    <el-carousel :interval="4000" type="card" height="200px"  indicator-position="none">
      <el-carousel-item v-for="(item, index) in imageList" :key="index">
        <img :src="item" alt="轮播图片" style="width: 100%; height: 100%; object-fit: cover;">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import lu1 from '@/assets/lunbotu/lu1.jpg';
import lu2 from '@/assets/lunbotu/lu2.jpg';
import lu3 from '@/assets/lunbotu/lu3.jpg';
import lu4 from '@/assets/lunbotu/lu4.jpg';
export default {
  data() {
    return {
      imageList: [
        lu1,
        lu2,
        lu3,
        lu4
      ]
    };
  }
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  /* indicator-position: none; */
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.carousel-container {
  width: 100%;
  margin: 0 auto;
}
</style>