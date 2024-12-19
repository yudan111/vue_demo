<template>
    <div class="content">
        <div class="contenter">
            <div class="contenter_left">
                <div class="con_title">
                    <div class="con_title_left">
                        <img src="../assets/image/amyimg/默认.svg" alt="">
                        <h5>热门推荐</h5>
                        <p>华语 | 流行 | 摇滚 | 电子</p>
                    </div>
                    <div class="con_title_right">
                        更多<img src="../assets/image/icon1.svg" alt="">
                    </div>
                </div>
                <el-divider><img src="../assets/image/amyimg/网易云音乐-copy.png" alt="">网易云音乐</el-divider>
                <div class="recommendation-list">
                    <div class="recommendation-item" v-for="item in musicItems" :key="item.id">
                        <router-link to="djgd"><img :src="item.image" alt="音乐封面"></router-link>
                        <div class="recommendation-details">
                            <p class="title">{{ item.title }}</p>
                            <p class="description">{{ item.description }}</p>
                            <p class="play-count">{{ item.playCount }}</p>
                        </div>
                    </div>
                </div>
                <div class="con_title">
                    <div class="con_title_left">
                        <img src="../assets/image/amyimg/默认.svg" alt="">
                        <h5>个性化推荐</h5>
                    </div>
                    <div class="con_title_right">
                        更多<img src="../assets/image/icon1.svg" alt="">
                    </div>
                </div>
                <el-divider><img src="../assets/image/amyimg/网易云音乐-copy.png" alt="">网易云音乐</el-divider>
                <div class="recommendation-list">
                    <div class="recommendation-item" v-for="item in musicItems.slice(4)" :key="item.id">
                        <router-link to="/djgd"><img :src="item.image" alt="音乐封面"></router-link>
                        <div class="recommendation-details">
                            <p class="title">{{ item.title }}</p>
                            <p class="description" font-size:10px>{{ item.description }}</p>
                            <p class="play-count">{{ item.playCount }}</p>
                        </div>
                    </div>
                </div>
                <div class="con_title">
                    <div class="con_title_left">
                        <img src="../assets/image/amyimg/默认.svg" alt="">
                        <h5>排行榜</h5>
                    </div>
                    <div class="con_title_right">
                        更多<img src="../assets/image/icon1.svg" alt="">
                    </div>
                </div>
                <el-divider><img src="../assets/image/amyimg/网易云音乐-copy.png" alt="">网易云音乐</el-divider>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th v-for="(chart, index) in charts" :key="index">{{ chart.name }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="i in 5">
                                <td v-for="(chart, index) in charts" :key="`${index}-${i}`">
                                    {{ chart.songs[i - 1] }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="contenter_right">
                <div class="contenter_right_top">
                    <img src="../assets/lunbotu/download.png" alt="">
                </div>
                <div class="contenter_right_bottom">
                    <h6>入驻歌手</h6>
                    <p>更多<img src="../assets/image/amyimg/更多.svg" alt=""></p>
                </div>
                <el-divider content-position="left"></el-divider>
                <div class="singer-list">
                    <div v-for="(singer, index) in singers" :key="index" class="singer-item">
                        <img :src="singer.image" alt="singer.name">
                        <h3>{{ singer.name }}</h3>
                        <p>{{ singer.description }}</p>
                    </div>
                    <button>申请成为网易音乐人</button>
                </div>
            </div>
        </div>
    </div>

</template>
<style scoped>
.content {
    width: 100%;
    height: 160%;
    display: flex;
    justify-content: center;
    /* align-items: center; */
}

.contenter {
    border-left: 1px solid #7b7171;
    border-right: 1px solid #7b7171;
    width: 50%;
    /* height: 100px; */
    display: flex;
    /* justify-content: center; */
    justify-content: space-between;

    /* align-items: center; */
}

.contenter_left {
    border-right: 1px solid #a19f9f;
    width: 70%;
    /* height: 100%; */
    /* background-color: #f00; */
}

.contenter_right {
    width: 30%;
    /* height: 100%; */
    /* background-color: #0f0; */
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

.recommendation-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.recommendation-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    margin: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    overflow: hidden;
}

.recommendation-item img {
    width: 100px;
    height: 100px;
}

.recommendation-details {
    text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
  width: 100%/3; /* 假设是三列，将每列宽度设置为总宽度的1/3 */
}

.contenter_right_top {
    width: 100%;
    height: 230px;
    /* background-color: #f00; */
    overflow: hidden;
}

.contenter_right_top img {
    width: 100%;
    /* height: 100%; */
}

.contenter_right_bottom {
    /* margin-bottom: -10px; */
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

.singer-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
}

.singer-item img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

button {
    margin-top: 20px;
    padding: 10px 20px;
}
</style>
<script>
import yu1 from '@/assets/image/amyimg/热门推荐1.jpg';
import yu2 from '@/assets/image/amyimg/热门推荐2.jpg';
import yu3 from '@/assets/image/amyimg/热门推荐3.jpg';
import yu4 from '@/assets/image/amyimg/热门推荐4.jpg';
import yu5 from '@/assets/image/amyimg/热门推荐5.jpg';
import yu6 from '@/assets/image/amyimg/热门推荐6.jpg';
import yu7 from '@/assets/image/amyimg/热门推荐7.jpg';
import yu8 from '@/assets/image/amyimg/热门推荐8.jpg';
import yu9 from '@/assets/image/amyimg/singer1.jpg';
import yu10 from '@/assets/image/amyimg/singer2.jpg';
import yu11 from '@/assets/image/amyimg/singer3.jpg';
import yu12 from '@/assets/image/amyimg/singer4.jpg';
import yu13 from '@/assets/image/amyimg/singer5.jpg';

export default {
    data() {
        return {
            musicItems: [
                {
                    id: 1,
                    image: yu1,
                    title: '华语速爆新歌 | 石凯',
                    description: '翻越云海 奔向海阔天空'
                },
                {
                    id: 2,
                    image: yu2,
                    title: '华语速爆新歌 | 石凯',
                    description: '赶走阴霾 来一首欢快的欧美小调'
                },
                {
                    id: 3,
                    image: yu3,
                    title: '华语速爆新歌 | 石凯',
                    description: '【R&B】在璀璨星河下微醺 喝杯小酒吧！'
                },
                {
                    id: 4,
                    image: yu4,
                    title: '华语速爆新歌 | 鱼蛋',
                    description: '玄幻：简化功法，从喽啰开始成霸主｜轻松升... '
                },
                {
                    id: 5,
                    image: yu5,
                    title: '小情歌 | 鱼蛋',
                    description: '你曾经有多认真的喜欢一个人'
                },
                {
                    id: 6,
                    image: yu6,
                    title: '华语速爆新歌 | 石凯',
                    description: ' 你的名字是世界瞒着我最大的事情（王源）'
                },
                {
                    id: 7,
                    image: yu7,
                    title: '华语速爆新歌 | 石凯',
                    description: '翻越云海 奔向海阔天空'
                },
                {
                    id: 8,
                    image: yu8,
                    title: '英文超燃热评 | yudan ',
                    description: '不得了！这些英文歌的热评信息量好大…'
                },
                // 其他音乐项数据
            ],
            charts: [
                {
                    name: "飙升榜",
                    songs: [
                        "消费对白",
                        "Baby, Don't Cry",
                        "Anyone",
                        "只为你着迷",
                        "遇见·事"
                    ]
                },
                {
                    name: "新歌榜",
                    songs: [
                        "消费对白",
                        "樱花开了",
                        "十二月的奇迹",
                        "你的 (Live版)",
                        "租购"
                    ]
                },
                {
                    name: "原创榜",
                    songs: [
                        "雪霁",
                        "云海在唱歌",
                        "僵",
                        "永远不变",
                        "2HIII"
                    ]
                }
            ],
            singers: [
                {
                    name: '张惠妹aMEI',
                    description: '台湾歌手张惠妹',
                    image: yu9,
                },
                {
                    name: '吴莫愁Momo',
                    description: '《中国好声音》选手',
                    image: yu10,
                },
                {
                    name: '孙楠',
                    description: '歌手孙楠，代表作《...',
                    image: yu11,
                },
                {
                    name: '麦田老狼',
                    description: '歌手，音乐人。代表作...',
                    image: yu12,
                },
                {
                    name: '陈楚生',
                    description: '创作歌手',
                    image: yu13,
                }
            ]
        };
    },
    name: "MusicCharts"
};
</script>
