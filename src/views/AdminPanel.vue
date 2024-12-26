<template>
  <div class="admin-panel">
    <h2>管理员面板 - 用户管理</h2>
    <!-- 返回首页按钮，点击时触发goToHome方法跳转到首页 -->
    <button @click="goToHome" class="btn-home">返回首页</button>
    
    <table class="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>用户名</th>
          <th>密码</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" :class="{ 'highlight': user.id === newUser.id }">
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.password }}</td>
          <td>
            <button @click="editUser(user)" class="btn-edit">编辑</button>
            <button @click="deleteUser(user.id)" class="btn-delete">删除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 添加用户表单，用于输入新用户信息并提交添加 -->
    <form @submit.prevent class="user-form">
      <div class="form-group">
        <!-- 监听输入事件 -->
        <input
          type="text"
          v-model="newUser.username"
          placeholder="用户名"
          required
          class="form-control"
          @input="checkUsernameExistence"  
        />
      </div>
      <div class="form-group password-field">
        <input
          :type="showPassword ? 'text' : 'password'"
          v-model="newUser.password"
          placeholder="密码"
          required
          class="form-control"
        />
        <label>
          <input type="checkbox" v-model="showPassword" />显示密码
        </label>
      </div><!-- 使用 isUsernameExist 控制按钮状态 -->
      <button 
        @click="addUser" 
        :disabled="isUsernameExist || !isNewUser"  
        class="btn-submit add-btn"
      >
        添加
      </button>
      <button 
        @click="saveEditedUser" 
        :disabled="isNewUser" 
        class="btn-submit save-btn"
      >
        保存
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      newUser: { id: null, username: '', password: '' },
      isNewUser: true,
      showPassword: false,
      isEditingPassword: false,
      editingPassword: '',
      activeTab: 'userManagement'
    };
  },
  computed: {
    // 更新计算属性，使其仅在添加新用户时检查用户名存在性
    isUsernameExist() {
      if (this.isNewUser) {  // 只有在添加新用户时才进行检查
        return this.users.some(user => user.username === this.newUser.username);
      }
      return false;
    }
  },
  created() {
    this.loadUsers();
  },
  methods: {
    async loadUsers() {
      try {
        const response = await axios.get('http://localhost:3000/api/users');
        this.users = response.data;
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    },
    async addUser() {
      if (this.isUsernameExist) {
        alert('该用户已存在，请重新输入用户名');
        return;
      }
      await this.saveUser();
    },
    async saveEditedUser() {
      await this.saveUser();
    },
    async saveUser() {
      try {
        if (this.isNewUser) {
          await axios.post('http://localhost:3000/api/register', this.newUser);
        } else {
          await axios.put(`http://localhost:3000/api/users/${this.newUser.id}`, this.newUser);
        }
        await this.loadUsers();
        this.resetForm();
      } catch (error) {
        console.error('Failed to save user:', error);
      }
    },
    editUser(user) {
      this.newUser = { ...user };
      this.isNewUser = false;
      this.editingPassword = user.password;
      this.isEditingPassword = true;
    },
    async deleteUser(id) {
      try {
        await axios.delete(`http://localhost:3000/api/users/${id}`);
        await this.loadUsers();
      } catch (error) {
        console.error('Failed to delete user:', error);
      }
    },
    resetForm() {
      this.newUser = { id: null, username: '', password: '' };
      this.isNewUser = true;
      this.showPassword = false;
      this.isEditingPassword = false;
      this.editingPassword = '';
    },
    goToHome() {
      this.$router.push('/');
    },
    checkUsernameExistence() {
      // 这里可以调用任何额外的验证逻辑，比如发送请求到服务器检查用户名唯一性
      // 对于即时反馈，我们可以直接使用计算属性 isUsernameExist
    }
  }
};
</script>

<style scoped>
.admin-panel {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.user-table th,
.user-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.user-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.user-table.highlight {
  background-color: #e6ffed;
}

.btn-edit,
.btn-delete,
.btn-home {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 4px;
}

.btn-edit {
  color: #28a745;
}

.btn-delete {
  color: #dc3545;
}

.btn-home {
  color: #007bff;
  display: block;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  position: relative;
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

.password-field label {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.add-btn {
  background-color: #28a745; /* 绿色 */
  color: white;
  margin: 10px;
}

.save-btn {
  background-color: #007bff; /* 蓝色 */
  color: white;
}

.add-btn:hover,
.save-btn:hover {
  opacity: 0.9;
}

.user-form .btn-submit {
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>