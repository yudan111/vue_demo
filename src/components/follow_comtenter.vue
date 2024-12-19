<template>
    <div class="follow">
        <div class="comtent">
            <div class="comtent_left">
                <div class="comtent_left_top">
                    <h2>动态</h2>
                    <div>
                        <button><img src="../assets/image/amyimg/fabu.svg" alt="">发动态</button>
                        <button><img src="../assets/image/amyimg/shipinbofang.svg" alt="">发视频</button>
                    </div>
                </div>
                <hr class="red_line">
                <pinglun />
            </div>
            <div class="comtent_right">
                <div class="comtent_right_top">
                    <img src="../assets/image/amyimg/林俊杰.jpg" alt="">
                    <p>yudan</p>
                </div>
                <div class="comtent_right_bottom">
                    <div>
                        <p>12</p>
                        <h5>关注</h5>
                    </div>
                    <div>
                        <p>12</p>
                        <h5>粉丝</h5>
                    </div>
                    <div>
                        <p>12</p>
                        <h5>动态</h5>
                    </div>
                </div>
                <div class="comtent_right_footer">
                    <div>
                        <h6>我的关注</h6>
                        <div v-for="(singer, index) in singers" key="index" class="myAtention">
                            <img :src="singer.img" alt="">
                            <div>
                                <h6>{{ singer.name }}</h6>
                                <p>作品：{{ singer.introduce }}</p>
                            </div>

                        </div>
                    </div>
                    <div class="myFans">
                        <p>我的粉丝</p>
                        <div class="myFans_t">
                            <div v-for="(singer, index) in singers" key="index">
                                <img :src="singer.img" alt="">
                            </div>
                        </div>

                    </div>
                    <div>
                        <p>我的动态</p>
                    </div>
                </div>
                <!-- <footer></footer> -->
            </div>
        </div>
        <footer />
    </div>
</template>
<style>
.follow {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: #f5f5f5;
}

.comtent {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    width: 60%;
    height: 100%;
}

.comtent_left {
    width: 70%;
    /* height: 100%; */
    background-color: #ffffff;
    border-left: 1px solid #8a8686;
    border-right: 1px solid #aeabab;
}

.comtent_right {
    width: 30%;
    /* height: 100%; */
    border-right: 1px solid #2f2f2f;
    background-color: #9f2c2c;
    /* padding: 10px; */
}

.comtent_left_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* height: 50px; */
    /* padding: 0 20px; */
    /* background-color: #f5f5f5; */
}

.comtent_left_top h2 {
    font-weight: bold;
    font-size: 20px;
    margin-left: 10px;
    margin-top: 6px;
    /* color: #333333; */
}

.comtent_left_top button {
    background-color: #ffffff;

    margin-right: 10px;

    /* border: none; */
    padding: 2px;
    border-radius: 10px;
    cursor: pointer;
}

.comtent_left_top button img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

.red_line {
    /* width: 90%; */
    margin: 10px;
    margin-top: 10px;
    border-radius: 1px;
    border: 2px solid #b90000;
    background-color: #ff0000;
}

.comtent_right_top {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    /* background-color: #f5f5f5; */
}

.comtent_right_top img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 10px;
}

.comtent_right_top p {
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
}

.comtent_right_bottom {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    padding: 20px;

}

.comtent_right_bottom div {
    width: 100px;
    /* height: 50px; */
    /* background-color: #ffffff; */
}

.comtent_right_bottom div:not(:nth-child(3)) {
    border-right: 1px solid #000;
}

.comtent_right_bottom div p {
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 5px;
}

.comtent_right_bottom div h5 {
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
}

.comtent_right_bottom :hover h5,
p {
    color: #000000;
}

.myAtention {
    width: 100%;
    height: 80px;
    display: flex;
    border-bottom: 1px solid #000;
    /* justify-content: space-between; */
    align-items: center;
    background-color: #ffffff;
}

.myAtention img {
    width: 50px;
    margin: 20px;
    height: 50px;
    border-radius: 10%;
    margin-right: 10px;
}

.myAtention div {
    margin-top: 10px;
    margin-left: 10px;
}

.myAtention div p {
    font-size: 12px;
    color: #333333;
}

.myFans_t {
    width: 100%;
    /* height: 80px; */
    display: flex;
    flex-wrap: wrap;

}

.myFans p {
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    margin-top: 20px;
    margin-left: 20px;
}

.myFans img {
    width: 50px;
    margin: 20px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
}
</style>
<script>
import Footer from './footer.vue';
import Pinglun from './pinglun.vue';
// 图片路径 
import q1 from '../assets/image/amyimg/林俊杰.jpg';
import q2 from '../assets/image/amyimg/周杰伦.jpg';
import q3 from '../assets/image/amyimg/陈奕迅.jpg';
import q4 from '../assets/image/amyimg/邓紫棋.jpg';
import q5 from '../assets/image/amyimg/王菲.jpg';
import q6 from '../assets/image/amyimg/孙燕姿.jpg';
export default {
    data() {
        return {
            singers: [
                {
                    img: q1,
                    name: "林俊杰",
                    introduce: "《交换余生》，《关键词》，《美人鱼》..."
                },
                {
                    img: q2,
                    name: "周杰伦",
                    introduce: "《晴天》，《反方向的钟》..."
                },
                {
                    img: q3,
                    name: "陈奕迅",
                    introduce: "《十年》，《富士山下》，《最佳损友》..."
                },
                {
                    img: q4,
                    name: "邓紫棋",
                    introduce: "《喜欢你》，《泡沫》，《多远都要在一起》..."
                },
                {
                    img: q5,
                    name: "王菲",
                    introduce: "《匆匆那年》，《容易受伤的女人》..."
                },
                {
                    img: q6,
                    name: "孙燕姿",
                    introduce: "《遇见》，《我怀念的》，《逆光》..."
                }
            ]
        };
    },
    components: {
        Pinglun,
        Footer
    },
};

</script>
