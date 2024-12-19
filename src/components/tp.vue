<template>
    <div class="image-wall-container">
      <div class="image-slider" :style="{ transform: `translateX(${currentTranslateX}px)` }">
        <img v-for="(image, index) in extendedImages" :key="index" :src="image" alt="图片" class="slider-image">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          require('@/assets/image/amyimg/tp1.webp'),
          require('@/assets/image/amyimg/tp1.webp'),
          require('@/assets/image/amyimg/tp1.webp'),
          require('@/assets/image/amyimg/tp1.webp'),
          require('@/assets/image/amyimg/tp1.webp'),
          require('@/assets/image/amyimg/tp1.webp'),
          require('@/assets/image/amyimg/tp1.webp'),
          
          // 添加更多图片路径...
        ],
        currentTranslateX: 0,
        imageWidth: 200, // 每张图片宽度，根据实际情况调整
        containerWidth: 600, // 容器宽度，与样式中的宽度保持一致
        intervalId: null
      };
    },
    computed: {
      // 创建一个扩展的图片数组，包含原始图片两次以实现循环效果
      extendedImages() {
        return [...this.images, ...this.images];
      }
    },
    mounted() {
      this.startAutoScroll();
    },
    beforeDestroy() {
      this.stopAutoScroll();
    },
    methods: {
      startAutoScroll() {
        this.intervalId = setInterval(() => {
          const totalImagesWidth = this.imageWidth * this.extendedImages.length;
          this.currentTranslateX -= 10; // 向左移动
          
          // 如果当前位移使得第一张图片完全离开视窗，则进行重置操作
          if (Math.abs(this.currentTranslateX) >= this.imageWidth * this.images.length) {
            this.currentTranslateX = -this.imageWidth * this.images.length + this.imageWidth;
            // 立即应用新的位移值，不触发过渡动画
            this.$nextTick(() => {
              this.currentTranslateX = 0;
            });
          }
  
          // 当滚动到最后一张图片开始部分时，悄悄地将所有图片复制到前面
          if (-this.currentTranslateX >= totalImagesWidth - this.containerWidth) {
            this.currentTranslateX += this.imageWidth * this.images.length;
          }
        }, 50); // 每50毫秒移动一次，控制滚动频率
      },
      stopAutoScroll() {
        clearInterval(this.intervalId);
      }
    }
  };
  </script>
  
  <style scoped>
  .image-wall-container {
    width: 600px; /* 根据实际需求调整 */
    overflow: hidden;
    margin: 0 auto;
  }
  .image-slider {
    display: flex;
    transition: transform 0.3s ease-in-out; /* 动画过渡效果 */
  }
  .slider-image {
    width: 200px; /* 图片宽度 */
    height: auto;
    margin-right: 10px;
  }
  </style>