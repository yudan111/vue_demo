<template>
  <div class="by">
    <div>
      <div class="dh">
        <Nav />
      </div>
      <div class="con">
        <div class="con1">
          <el-tabs :tab-position="tabPosition" class="e-t">
            <el-tab-pane label="我的歌手" class="gs">
              <!-- 使用v-for指令循环渲染歌手列表项 -->
               <div class="hz">
              <div class="singer-item" v-for="(singer, index) in singerList" :key="index">
                <router-link to="/djgd"><img :src="singer.imagePath" alt="singer" class="singer-image" /></router-link>
                <p>{{ singer.name }}</p>
              </div>
            </div>
            </el-tab-pane>
            <el-tab-pane label="我的歌单" class="gs">
              <div class="hz">
              <div class="sg-item" v-for="(sg, index) in sgList" :key="index">
                <router-link to="/gd"><img :src="sg.imagePath" alt="Sg" class="gd-image" /></router-link>
                <p>{{ sg.name }}</p>
              </div>
            </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
   
  </div>
</template>
<script>
import nav from "@/components/nav.vue";
import tp1 from "@/assets/image/amyimg/周杰伦.jpg";
import tp2 from "@/assets/image/amyimg/林俊杰.jpg";
import tp3 from "@/assets/image/amyimg/陈奕迅.jpg";
import tp4 from "@/assets/image/amyimg/王菲.jpg";
import tp5 from "@/assets/image/amyimg/邓紫棋.jpg";
import tp6 from "@/assets/image/amyimg/孙燕姿.jpg";
import tp7 from "@/assets/image/amyimg/张碧晨.jpg";
import tp8 from "@/assets/image/amyimg/蔡健雅.jpg";
import tp9 from "@/assets/image/amyimg/薛之谦.jpg";
import footer from "@/components/footer.vue";
export default {
  components: {
    Nav: nav,
    Footer: footer,
  },
  data() {
    return {
      singerList: [
        {
          name: "周杰伦",
          imagePath: tp1,
        },
        {
          name: "林俊杰",
          imagePath: tp2,
        },
        {
          name: "陈奕迅",
          imagePath: tp3,
        },
        {
          name: "王菲",
          imagePath: tp4,
        },
        {
          name: "邓紫棋",
          imagePath: tp5,
        },
        {
          name: "孙燕姿",
          imagePath: tp6,
        },
        {
          name: "张碧晨",
          imagePath: tp7,
        },

        {
          name: "蔡健雅",
          imagePath: tp8,
        },

        {
          name: "薛之谦",
          imagePath: tp9,
        },


      ],
      sgList:[
        {
          name: "重返2010 | 从王菲开启2010经典之旅",
          imagePath: tp4,
        },
        {
          name: "邓紫棋",
          imagePath: tp5,
        },
        {
          name: "孙燕姿",
          imagePath: tp6,
        },
        {
          name: "张碧晨",
          imagePath: tp7,
        },

        {
          name: "薛之谦",
          imagePath: tp9,
        },
        {
          name: "陈奕迅",
          imagePath: tp3,
        },
        {
          name: "林俊杰",
          imagePath: tp2,
        },
        {
          name: "周杰伦",
          imagePath: tp1,
        },
        {
          name: "蔡健雅",
          imagePath: tp8,
        },

      ],
    };
  },
};
</script>

<style scoped>
.by {
  width: 100%;
  height: 100vh;
  border: 0;
}



.con1 {
  flex: 1;
  display: flex;
  justify-content: center;
}

.img {
  width: 30%;
  margin-top: 5%;
  margin-left: 5%;
  border-radius: 10px;
}

.gs {
  text-align: left;
  margin-left: 0;
  height: 100%;
  background-color: #fffefef8;
}

.p {
  display: inline-block;
}

.e-t {
  height: 300px;
  width: 50%;
}

.bt {
  height: 3%;
  width: 3%;
}

.singer-item {
 
  margin: 10px;
  text-align: center;


}

.singer-image {
  width: 200px;
  height: 200px;
  border-radius: 10%;
  object-fit: cover;
  transition: transform 0.7s ease;
  transform-style: preserve-3d; 
}
.singer-image:hover {
  transform: rotate3d(0, 1, 0, 180deg); 
}
.gd-image{
  width: 200px;
  height: 200px;
  border-radius: 10%;
  object-fit: cover;
}

.hz{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
p{
  width: 200px; 
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 
}
</style>