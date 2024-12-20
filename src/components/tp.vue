<template>
  <div class="photo-wall-container">
    <div class="photo-wall" ref="photoWall">
      <img v-for="(photo, index) in visiblePhotos" :key="index" :src="photo.src" class="photo-item">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allPhotos: [
        { src: require('@/assets/image/amyimg/tp1.webp') },
        { src: require('@/assets/image/amyimg/tp2.webp') },
        { src: require('@/assets/image/amyimg/tp3.webp') },
        { src: require('@/assets/image/amyimg/tp4.webp') },
        { src: require('@/assets/image/amyimg/tp5.webp') },
        { src: require('@/assets/image/amyimg/tp6.webp') },
        { src: require('@/assets/image/amyimg/tp7.webp') },
        { src: require('@/assets/image/amyimg/tp8.webp') },
        { src: require('@/assets/image/amyimg/tp9.webp') },
      ],
      visiblePhotos: [],
      step: 1,  // 每次滚动的像素步长
      containerWidth: 0,
      photoWidth: 0
    };
  },
  mounted() {
    this.initPhotos();
    this.startAutoScroll();
  },
  beforeDestroy() {
    this.stopAutoScroll();
  },
  methods: {
    initPhotos() {
      // 初始化时先把所有照片添加到可见照片数组
      this.visiblePhotos = [...this.allPhotos];
      const photoWall = this.$refs.photoWall;
      const firstPhoto = photoWall.querySelector('.photo-item');
      if (firstPhoto) {
        this.photoWidth = firstPhoto.offsetWidth;
        this.containerWidth = photoWall.offsetWidth;
      }
    },
    startAutoScroll() {
      const photoWall = this.$refs.photoWall;
      setInterval(() => {
        photoWall.scrollLeft += this.step;
        if (photoWall.scrollLeft >= this.visiblePhotos.length * this.photoWidth - this.containerWidth) {
          // 当滚动到快超出范围时
          const lastPhoto = this.visiblePhotos.pop();
          this.visiblePhotos.unshift(lastPhoto);
          photoWall.scrollLeft = 0;
        }
      }, 600);  // 滚动间隔时间
    },
    stopAutoScroll() {
      clearInterval(this.timer);
    }
  }
};
</script>

<style scoped>
.photo-wall-container {
  width: 100%;  
  overflow: hidden;
  margin: 0 auto;
}
.photo-wall {
  display: flex;
  width: max-content;
}
.photo-item {
  width: 200px;  
  height: 200px; 
  margin: 20px;
  border-radius: 50%;  
  overflow: hidden;  
}
</style>