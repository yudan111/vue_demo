<template>
    <el-carousel :interval="5000" arrow="always" height="480px">
        <el-carousel-item v-for="(item, index) in imageList" :key="index">
            <img :src="item" alt="轮播图片" style=" object-fit: cover;">
      </el-carousel-item>
    </el-carousel>
  </template>
  
  <style>
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  </style>
  <script>
import lu1 from '../assets/image/amyimg/shoppinglu6.jpg';
import lu2 from '../assets/image/amyimg/shoppinglu3.jpg';
import lu3 from '../assets/image/amyimg/shoppinglu4.jpg';
import lu4 from '../assets/image/amyimg/shoppinglu2.jpg';
    export default {
        data() {
            return {
                imageList: [
        lu1,
        lu2,
        lu3,
        lu4
      ]
                
            }
        },
        methods: {
        }
    }

</script>