<template>
    <div>
      <audio class="yc" ref="audioPlayer" controls>
        <source :src="musicUrl" type="audio/mpeg">
        
      </audio>
      <!-- <button @click="playPauseMusic">播放/暂停</button> -->
    </div>
  </template>
  
  <script>
  export default {
    // name:bofan,
    data() {
      return {
        musicUrl: require('@/assets/music/Study and Relax.mp3') 
      };
    },
    
    
    
    
    
    
    
    
    
    
  };
  </script>
  
  <style scoped>
 /* .yc {
  display: none;
  float: bottom;
} */
  </style>