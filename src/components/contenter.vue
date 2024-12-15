<template> 
<div class="content">
    <div class="contenter">
        <div class="contenter_left">
            <div class="con_title">
                <div class="con_title_left">
                <h5>热门推荐</h5>
                <p>华语 | 流行 | 摇滚 | 电子</p>
                </div>
                <div class="con_title_right">
                    更多<img src="../assets/image/icon1.svg" alt="">
                </div>
            </div>
            <el-divider><img src="../assets/image/amyimg/网易云音乐-copy.png" alt="">网易云音乐</el-divider>
        </div>
        <div class="contenter_right"></div>
    </div>
</div>
</template>
<style>
.content {
width: 100%;
height: 100%;
display: flex;
justify-content: center;
/* align-items: center; */
}
.contenter {
width: 50%;
/* height: 100px; */
display: flex;
justify-content: space-between;
/* align-items: center; */
}
.contenter_left {
width: 70%;
/* height: 100%; */
/* background-color: #f00; */
}
.contenter_right {
width: 30%;
/* height: 100%; */
background-color: #0f0;
}
.con_title {
    display: flex;
justify-content: space-between;
align-items: center;
}
.con_title_left {
    display: flex;
    align-items: center;
}
.con_title_left h5 {
    margin-right: 10px;
}
.con_title_left p {
    color: #999;
    line-height: 5px;
}
</style>
<script>
</script>
