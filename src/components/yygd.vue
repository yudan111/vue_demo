<template>
    <div>
      <audio ref="audioPlayer" :src="musicSrc" controls></audio>
      <input type="file" @change="handleFileSelect">
      <ul>
        <li v-for="(lyric, index) in lyrics" :key="index" :class="{ 'active': index === currentLyricIndex }">
          {{ lyric.content }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        musicSrc: './src/assets/music/Perfect Version Of Me - Vicky宣宣.flac',  // 修改后的音乐路径
        lyrics: [],  // 解析后的歌词数据
        currentLyricIndex: 0,  // 当前歌词索引
      };
    },
    methods: {
      readLocalFile(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = function (e) {
            resolve(e.target.result);
          };
          reader.onerror = function (error) {
            reject(error);
          };
          reader.readAsText(file);
        });
      },
      parseLrc(lrcText) {
        const lines = lrcText.split('\n');
        const lyrics = [];
        lines.forEach(line => {
          const timeMatch = line.match(/\[(\d{2}):(\d{2})\.(\d{2})\]/g);
          if (timeMatch) {
            const content = line.replace(/\[(\d{2}):(\d{2})\.(\d{2})\]/g, '').trim();
            timeMatch.forEach(time => {
              const minutes = parseInt(time.substr(1, 2));
              const seconds = parseInt(time.substr(4, 2));
              const milliseconds = parseInt(time.substr(7, 2));
              const totalMilliseconds = minutes * 60 * 1000 + seconds * 1000 + milliseconds;
              lyrics.push({ time: totalMilliseconds, content });
            });
          }
        });
        return lyrics.sort((a, b) => a.time - b.time);
      },
      updateLyrics() {
        const audio = this.$refs.audioPlayer;
        const currentTime = audio.currentTime * 1000;  // 转换为毫秒
        for (let i = 0; i < this.lyrics.length; i++) {
          if (currentTime < this.lyrics[i].time) {
            this.currentLyricIndex = i - 1;
            break;
          }
        }
      },
      handleFileSelect(event) {
        const file = event.target.files[0];
        if (file) {
          this.readLocalFile(file).then((text) => {
            const lrcText = text;
            this.lyrics = this.parseLrc(lrcText);
          }).catch((error) => {
            console.error('读取文件出错：', error);
          });
        }
      }
    },
    mounted() {
      const audio = this.$refs.audioPlayer;
      audio.addEventListener('timeupdate', this.updateLyrics);
    }
  };
  </script>
  
  <style>
  /* 定义突出显示当前歌词的样式，可根据喜好调整 */
  .active {
    color: red;
  }
  </style>