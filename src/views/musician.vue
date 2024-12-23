<template>
  <div>
    <Nav />
    <div class="con">
      <img src="@/assets/image/amyimg/yyr.png" alt="yyr" @click="openModal">
    </div>
    <h2>60W+音乐人已加入</h2>
    <div class="tp">
      <Tp />
    </div>
    <!-- 个人信息收集弹窗 -->
    <transition name="modal">
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <h3>个人信息收集</h3>
          <label for="name">姓名：</label><input type="text" id="name" v-model="formData.name" required />
          <label for="phone">电话：</label><input type="text" id="phone" v-model="formData.phone" required />
          <label for="email">邮箱：</label><input type="email" id="email" v-model="formData.email" required />
          <label for="gender">性别：</label>
          <select id="gender" v-model="formData.gender" required>
            <option value="male">男</option>
            <option value="female">女</option>
            <option value="other">其他</option>
          </select>
          <label for="age">年龄：</label><input type="number" id="age" v-model="formData.age" required />
          <label for="musicGenre">擅长音乐类型：</label>
          <select id="musicGenre" v-model="formData.musicGenre" multiple required>
            <option value="pop">流行</option>
            <option value="rock">摇滚</option>
            <option value="jazz">爵士</option>
            <option value="classical">古典</option>
            <option value="electronic">电子</option>
          </select>
          <label for="experience">音乐经历：</label>
          <textarea id="experience" v-model="formData.experience" rows="4" cols="50" required></textarea>
          <!-- 头像上传 -->
          <label for="avatar">头像：</label>
          <input type="file" id="avatar" @change="handleAvatarUpload" accept="image/*">
          <img v-if="formData.avatar" :src="formData.avatar" alt="Avatar" class="avatar-preview">
          <button @click="submitForm">提交</button>
        </div>
      </div>
    </transition>
    <!-- 用来显示个人报名表信息 -->
    <div v-if="personalInfo" class="personal-info">
      <h3 class="personal-info-title">个人报名表</h3>
      <img v-if="personalInfo.avatar" :src="personalInfo.avatar" alt="Avatar" class="avatar-preview">
      <p>姓名：{{ personalInfo.name }}</p>
      <p>电话：{{ personalInfo.phone }}</p>
      <p>邮箱：{{ personalInfo.email }}</p>
      <p>性别：{{ personalInfo.gender }}</p>
      <p>年龄：{{ personalInfo.age }}</p>
      <p>擅长音乐类型：{{ personalInfo.musicGenre.join(', ') }}</p>
      <p>音乐经历：{{ personalInfo.experience }}</p>
      <button @click="editPersonalInfo">修改</button>
    </div>
  </div>
</template>

<script>
import nav from '@/components/nav.vue';
import tp from '@/components/tp.vue';

export default {
  components: {
    Nav: nav,
    Tp: tp
  },
  data() {
    return {
      showModal: false,
      personalInfo: null,
      formData: {
        name: '',
        phone: '',
        email: '',
        gender: '',
        age: '',
        musicGenre: [],
        experience: '',
        avatar: null
      }
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    submitForm() {
      // 这里可以添加实际的提交逻辑，比如发送数据到后端等
      console.log('提交表单数据：', this.formData);
      // 假设提交成功后通知父组件更新显示个人报名表信息
      this.personalInfo = {...this.formData };
      // 关闭弹窗
      this.closeModal();
    },
    editPersonalInfo() {
      // 重新打开弹窗，可进行修改再提交
      this.openModal();
    },
    handleAvatarUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.formData.avatar = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }
};
</script>

<style scoped>
Nav {
  background-color: #333;
  color: white;
  padding: 10px;
}

.con {
  text-align: center;
  margin: 20px auto;
  max-width: 80%;
}

.con img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}
h2 {
  font-size: 60px;
  margin: 30px;
}
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
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 40%;
  position: relative;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
.personal-info {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.personal-info-title {
  margin-top: 0;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}
.avatar-preview {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 10px;
  object-fit: cover;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>