<template>
<div class="by">
    <div>
        <div><Nav /></div>
        <div class="con" >
            <div class="con1"> 
                <!-- <div class="lf">
                    <h4><a href="#">我的歌手</a></h4><br>
                    <h4><a href="#">歌单</a></h4><br>
                </div>
                <div class="rg">
                    <div class="tb">
                        <img src="../assets/image/amyimg/热门推荐6.jpg" style="border: 2px solid black;">
                    </div>
                </div> -->
                <el-tabs :tab-position="tabPosition" class="e-t" >
                <el-tab-pane label="我的歌手" class="gs" >
                    <img class="img" src="../assets/image/amyimg/歌单1.jpg" >
                    <p class="p">『心向原野』人生不是轨道，而是一片</p>
                    <el-row class="row"> 
                        <el-button type="primary">播放</el-button>
                        <el-button type="primary">主要按钮</el-button>
                        <el-button type="primary">分享</el-button>

                    </el-row>
                    <div>
                        <el-table
                            :data="tableData"
                             border
                            style="width: 100%">
                        <el-table-column
                            prop="date"
                            label=""
                             width="30">
                        </el-table-column>
                        <el-table-column
                            
                            label="播放"
                             width="50">
                        </el-table-column>
                        <el-table-column
                            prop="gqname"
                            label="歌曲标题"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="歌手">
                        </el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="我的歌单" class="gs">配置管理</el-tab-pane>
                 </el-tabs>
            </div>
            
        </div>
    </div>
</div>

</template>
<script>
import nav from './nav.vue'
export default {
    components: {
        Nav: nav,
  },
   data() {
      return {
        tableData: [{
          date: '1',
          gqname: 'Stay Alive',
          name: 'José González'
        }, {
          date: '2',
          gqname: 'Purple',
          name: 'Hollow Coves'
        }, {
          date: '3',
          gqname: 'magic',
          name: 'Sød Ven'
        }, {
          date: '4',
          gqname: 'Same Star',
          name: 'Joshua Radin'
        }]
      }
    }
}
</script>
<style >
.by{
    width: 100%;
    height: 100vh; 
    border: 0;
    

} */
.con{
    /* flex: 1;  */

    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 

    height: 100%;
    background-color: #f5f5f5f8; height: 100%;
    border: 0;
    
}

.con1 {
    flex: 1;
    display: flex;
    justify-content: center; /* 让内部的.lf元素水平居中 */
    
}
/* .lf {
    background-color: #d4d1d1; 
    height: 100%;
    width: 15%;
    border-left: 500px;
}
.rg{
    width: 40%;
    height: 100%;
} */
/* el-tabs{
    width: 70%;
} */
.img{
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
.p{

 
    display: inline-block;
}
/* .bt{
    width: 10px;
    display: inline-block;
} */
.e-t{
    height: 300px; width: 50%;
}
.bt{
    height: 3%; width: 3%; 
}
</style>