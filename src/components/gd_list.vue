<template>
  <div class="gd_list">
    <div class="gd_list_top">
      <img src="../assets/image/amyimg/林俊杰.jpg" alt="">
      <div>
        <h4>
          民谣小酒馆：民谣太穷，一把吉他走遍天下
        </h4>
      </div>
    </div>
    <div class="playlist">
      <h1>{{ playlistName }}</h1>
      <ul class="song-list">
        <li v-for="(song, index) in songs" :key="index" class="song-item">
          <!-- 歌曲封面 -->
          <img :src="song.coverImage" alt="封面" class="song-cover" />

          <!-- 歌曲名称 -->
          <span class="song-title">{{ song.title }}</span>

          <!-- 歌手名字 -->
          <span class="song-artist">{{ song.artist }}</span>

          <!-- 播放按钮 -->
          <button ><a href="../音乐播放器/index.html"><img src="../assets/image/amyimg/播放.svg" alt=""></a></button>

          <!-- 删除按钮 -->
          <button @click="deleteSong(index)" class="delete-btn"><img src="../assets/image/amyimg/删除.svg" alt=""></button>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import w1 from '../assets/image/amyimg/热门推荐1.jpg';
import w2 from '../assets/image/amyimg/热门推荐2.jpg';
import w3 from '../assets/image/amyimg/热门推荐3.jpg';
import w4 from '../assets/image/amyimg/热门推荐4.jpg';
import w5 from '../assets/image/amyimg/热门推荐5.jpg';
import w6 from '../assets/image/amyimg/热门推荐6.jpg';
import w7 from '../assets/image/amyimg/热门推荐7.jpg';
import w8 from '../assets/image/amyimg/热门推荐8.jpg';
export default {
  data() {
    return {
      playlistName: '民谣',
      songs: [
        { title: '平凡之路', artist: '朴树', coverImage: w1 },
        { title: '岁月神偷', artist: '金玟岐', coverImage: w2},
        { title: '成全', artist: '林忆莲', coverImage:w3 },
        { title: '突然好想你', artist: '五月天', coverImage: w4 },
        { title: '演员', artist: '薛之谦', coverImage: w5 },
        { title: '平凡之路', artist: '朴树', coverImage: w6 },
        { title: '岁月神偷', artist: '金玟岐', coverImage: w7 },
        { title: '成全', artist: '林忆莲', coverImage: w8 },
        { title: '突然好想你', artist: '五月天', coverImage: w1 },
        { title: '演员', artist: '薛之谦', coverImage: w3}
      ]
    };
  },
  methods: {
    goToMusicPlayer() {
        window.location.href = '../src/音乐播放器/index.html';
    },
    playSong(song) {
      console.log(`播放歌曲: ${song.title} - ${song.artist}`);
      // 这里可以添加播放歌曲的逻辑
    },
    deleteSong(index) {
      this.songs.splice(index, 1); // 删除指定索引的歌曲
      console.log(`删除歌曲: ${this.songs[index].title}`);
    }
  }
};
</script>

<style scoped>
.playlist {
  font-family: 'Arial', sans-serif;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  /* background-color: #f9f9f9; */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.gd_list_top{
  /* background-color: #f9f9f9; */
  /* max-width: 600px; */
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin-top: 20px;
  /* background-color: #d50000; */

}

.gd_list_top img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  /* border-radius: 50%; */
  margin-right: 20px;
}
.gd_list_top button {
  border: none;
}
.gd_list_top button img{
  width: 60px;
  height: 60px;
}
h1 {
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.song-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.song-list li:nth-child(2n) {
  background-color: #f5f4f4;
  }
  .song-list :nth-child(2n+1) {
  background-color: #ffffff;
}
.song-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  /* border-bottom: 1px solid #e0e0e0; */
}
.song-item:hover {
  background-color: #d2cbcb;
}

.song-item:last-child {
  border-bottom: none;
}

.song-cover {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 15px;
}

.song-title {
  font-weight: bold;
  flex: 1;
  color: #333;
}

.song-artist {
  /* color: #777; */
  margin-right: 15px;
}

.play-btn,
.delete-btn {
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-size: 14px;
}


</style>