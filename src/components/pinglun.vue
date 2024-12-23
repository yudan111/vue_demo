<template>
  <div class="app-container">
    <!-- 发布动态按钮 -->
    <button @click="openModal" class="btn primary-btn">发布动态</button>

    <!-- 弹窗 -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-container">
        <span @click="closeModal" class="close-btn">&times;</span>
        <h2 class="modal-title">发布动态</h2>

        <!-- 动态发布表单 -->
        <div class="modal-form">
          <div class="form-group">
            <label for="username">用户名：</label>
            <input v-model="username" type="text" placeholder="请输入用户名" class="input-field" />
          </div>

          <div class="form-group">
            <label for="content">动态内容：</label>
            <textarea v-model="content" rows="4" placeholder="请输入动态内容" class="input-field"></textarea>
          </div>

          <div class="form-group">
            <label for="avatar">头像上传：</label>
            <input type="file" @change="handleAvatarChange" accept="image/*" class="file-input" />
            <div v-if="avatar" class="avatar-preview">
              <img :src="avatar" alt="头像" class="avatar-img" />
            </div>
          </div>

          <div class="form-group">
            <label for="image">图片上传：</label>
            <input type="file" @change="handleImageChange" accept="image/*" class="file-input" />
            <div v-if="imagePreview" class="image-preview">
              <img :src="imagePreview" alt="上传图片" class="uploaded-img" />
            </div>
          </div>

          <button @click="publishPost" class="btn submit-btn">发布</button>
        </div>
      </div>
    </div>

    <!-- 动态列表 -->
    <div id="postList" class="post-list">
      <div class="post-item">
        <div class="post-header">
          <img src="../assets/image/amyimg/周杰伦.jpg" class="avatar" />
          <strong>黄思哲爱赖志权</strong>
        </div>
        <div class="post-content">我i喜欢下雨天，这样就看不到我流泪。</div>
        <div class="post-image">
          <img src="../assets/image/amyimg/bgA.png" alt="动态图片" />
          <hr>
        </div>
      </div>
      <div v-for="(post, index) in posts" :key="index" class="post-item">
        <div class="post-header">
          <img :src="post.avatar" alt="头像" class="avatar" />
          <strong>{{ post.username }}</strong>
        </div>
        <div class="post-content">{{ post.content }}</div>
        <div v-if="post.image" class="post-image">
          <img :src="post.image" alt="动态图片" />
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,  // 控制弹窗显示与否
      username: '',      // 用户名
      content: '',       // 动态内容
      avatar: '',        // 头像图片
      imagePreview: '',  // 动态图片预览
      posts: []          // 动态列表
    };
  },
  methods: {
    // 打开弹窗
    openModal() {
      this.showModal = true;
    },

    // 关闭弹窗
    closeModal() {
      this.showModal = false;
    },

    // 处理头像文件上传
    handleAvatarChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.avatar = e.target.result; // 设置头像预览
        };
        reader.readAsDataURL(file);
      }
    },

    // 处理动态图片上传
    handleImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result; // 设置动态图片预览
        };
        reader.readAsDataURL(file);
      }
    },

    // 发布动态
    publishPost() {
      if (this.username && this.content && this.avatar) {
        const newPost = {
          username: this.username,
          content: this.content,
          avatar: this.avatar,
          image: this.imagePreview ? this.imagePreview : null
        };

        // 将新动态添加到动态列表
        this.posts.unshift(newPost);

        // 清空表单数据
        this.username = '';
        this.content = '';
        this.avatar = '';
        this.imagePreview = '';
        this.showModal = false;
      } else {
        alert('请填写用户名、动态内容和头像！');
      }
    }
  }
};
</script>

<style scoped>
/* 主容器样式 */
.app-container {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f4f4f4;
}

/* 发布按钮样式 */
.btn {
  padding: 12px 24px;
  font-size: 16px;
  margin: 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.primary-btn {
  background-color: #4CAF50;
  color: white;
}

.primary-btn:hover {
  background-color: #45a049;
}

.submit-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  width: 100%;
}

.submit-btn:hover {
  background-color: #45a049;
}

/* 弹窗样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  width: 400px;
  max-height: 80%;
  /* 限制弹窗最大高度 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  overflow-y: auto;
  /* 启用滚动条 */
}

.modal-title {
  margin: 0;
  font-size: 24px;
  margin-bottom: 20px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

/* 表单部分滚动 */
.modal-form {
  max-height: 400px;
  /* 限制表单最大高度 */
  overflow-y: auto;
  /* 启用垂直滚动条 */
  margin-bottom: 20px;
}

/* 表单字段样式 */
.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.input-field {
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-top: 8px;
  font-size: 14px;
}

.file-input {
  margin-top: 8px;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 5px;
  width: 100%;
}

/* 头像预览样式 */
.avatar-preview {
  margin-top: 10px;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f0f0f0;
  margin-bottom: 15px;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 动态图片预览样式 */
.image-preview {
  margin-top: 10px;
  height: 200px;
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 5px;
  overflow: hidden;
}

.uploaded-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 动态列表样式 */
.post-list {
  margin: 20px 0;
}

.post-item {
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.smallimg img {
  width: 5px;
  height: 5px;
}

.post-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.post-header img.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.post-content {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

/* 图片样式 */
.post-image img {
  width: 40%;
  height: auto;
  border-radius: 8px;
  margin-top: 10px;
}
</style>
