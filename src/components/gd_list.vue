<template>
  <div class="gd_list">
    <div class="gd_list_top">
      <img src="../assets/image/amyimg/林俊杰.jpg" alt="">
      <div>
        <h4>
          民谣小酒馆：民谣太穷，一把吉他走遍天下
        </h4>
        <div>
          <button><img src="../assets/image/amyimg/播放.svg" alt=""></button>
          <button><img src="../assets/image/amyimg/收藏.svg" alt=""></button>
          <button><img src="../assets/image/amyimg/下载.svg" alt=""></button>
          <button><img src="../assets/image/amyimg/更多.svg" alt=""></button>
        </div>
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
          <button @click="playSong(song)" class="play-btn">播放</button>

          <!-- 删除按钮 -->
          <button @click="deleteSong(index)" class="delete-btn">删除</button>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      playlistName: '我的收藏',
      songs: [
        { title: '平凡之路', artist: '朴树', coverImage: 'https://via.placeholder.com/50' },
        { title: '岁月神偷', artist: '金玟岐', coverImage: 'https://via.placeholder.com/50' },
        { title: '成全', artist: '林忆莲', coverImage: 'https://via.placeholder.com/50' },
        { title: '突然好想你', artist: '五月天', coverImage: 'https://via.placeholder.com/50' },
        { title: '演员', artist: '薛之谦', coverImage: 'https://via.placeholder.com/50' },
        { title: '平凡之路', artist: '朴树', coverImage: 'https://via.placeholder.com/50' },
        { title: '岁月神偷', artist: '金玟岐', coverImage: 'https://via.placeholder.com/50' },
        { title: '成全', artist: '林忆莲', coverImage: 'https://via.placeholder.com/50' },
        { title: '突然好想你', artist: '五月天', coverImage: 'https://via.placeholder.com/50' },
        { title: '演员', artist: '薛之谦', coverImage: 'https://via.placeholder.com/50' }
      ]
    };
  },
  methods: {
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
  /* max-width: 600px; */
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

.song-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  /* border-bottom: 1px solid #e0e0e0; */
}
.song-item:hover {
  background-color: #a7a5a5;
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