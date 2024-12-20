<template>
  <div class="song-list">
    <div class="header">
      <h1>重返2010|从王菲开启2010经典之旅</h1>
      <div class="hz">
        <img class="tp" src="../assets/image/amyimg/王菲.jpg">
        <p>云音乐经典专区 2021 - 07 - 06创建 (1)</p><br>
        <p class="description">介绍：2010年经典歌曲精选</p>
      </div>
      <div class="buttons">
        <button @click="playMusic">播放</button>
        <button>收藏(3546)</button>
        <button @click="toggleCommentSection">评论</button>
        <button>下载</button>
      </div>
    </div>
    <!-- 歌曲列表区域 -->
    <div class="song-list-container">
      <h2>歌曲列表</h2>
      <p>103首歌</p>
      <table>
        <thead>
          <tr>
            <th>歌曲标题</th>
            <th>时长</th>
            <th>歌手</th>
            <th>专辑</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(song, index) in songs" :key="index">
            <td><router-link to="yygd">{{ song.title }}</router-link></td>
            <td>{{ song.duration }}</td>
            <td>{{ song.singer }}</td>
            <td>{{ song.album }}</td>
          </tr>
        </tbody>
      </table>
    </div>
        <!-- 评论区 -->
        <div v-if="isCommentSectionVisible" class="comment-section">
      <h3>评论区</h3>
      <div v-for="(comment, index) in comments" :key="index" class="comment-item">
        <p>用户：{{ comment.content }}</p>
        <button @click="deleteComment(index)">删除</button>
      </div>
      <input type="text" placeholder="输入你的评论" v-model="newComment" />
      <button @click="addComment">提交评论</button>
    </div>
    <div class="yy">
          <!-- 音频播放区域 -->
    <audio class="yc" ref="audioPlayer" controls>
      <source :src="musicUrl" type="audio/mpeg">
    </audio>
    </div>
  </div>
</template>

<script>
import nav from './nav.vue'
export default {
  components: {
    Nav: nav
  },
  data() {
    return {
      songs: [
        {
          title: '传奇',
          duration: '04:56',
          singer: '王菲',
          album: '传奇'
        },
        {
          title: '爱笑的眼睛 - (Smiling Eyes)',
          duration: '04:13',
          singer: '林俊杰',
          album: '她说 概念自选辑'
        },
        {
          title: '记得 - (Remember)',
          duration: '04:47',
          singer: '林俊杰',
          album: '她说 概念自选辑'
        }
      ],
      musicUrl: require('@/assets/music/Study and Relax.mp3'),
      comments: [],
      isCommentSectionVisible: false,
      newComment: ''
    }
  },
  methods: {
    playMusic() {
      this.$refs.audioPlayer.play();
    },
    toggleCommentSection() {
      this.isCommentSectionVisible =!this.isCommentSectionVisible;
    },
    addComment() {
      if (this.newComment.trim()!== '') {
        const comment = {
          content: this.newComment
        }
        this.comments.push(comment);
        this.newComment = '';
      }
    },
    deleteComment(index) {
      this.comments.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.header {
  widows: 100%;
  height: 20%;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ccc;
  padding: 5px;
}

.tp {
  widows: 200px;
  height: 200px;
  border-radius: 10%;
}

button {
  margin: 5px;
}

.comment-section {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.comment-item {
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
}

.comment-item button {
  margin-left: 5px;
}
/* .yy{ */
  /* position: fixed; */
  /* z-index: 3; */
/* } */
</style>