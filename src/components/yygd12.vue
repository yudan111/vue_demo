<template>
    <div><Nav />
        <div class="con">
            <div class="page-container">
                <!-- 歌词展示区域 -->
                <div class="lyrics-container">
                    <ul class="lyrics-list"></ul>
                </div>
                <!-- 音频播放器区域 -->
                <div class="audio-container">
                    <audio style="width: 100%; margin-top: 20px" controls src="../assets/music/遇见+-+周深.mp3"></audio>
                </div>
                <div @click="switchToNextMusic">
                    下一首
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import nav from "@/components/nav.vue";
import musicFile from '@/assets/music/睡在风里+-+彭席彦.mp3'
export default {
    components: {
        Nav: nav,
    },
    data() {
        return {
            clientHeight: null,
            liHeight: null,
            dome: {},
            result: [],
            lrc: `[00:00.00]遇见 - 周深
[00:08.00]词：易家扬
[00:17.00]曲：林一峰
[00:26.00]听见冬天的离开
[00:31.00]我在某年某月醒过来
[00:36.00]我想我等我期待
[00:42.00]未来却不能因此安排
[00:55.00]阴天傍晚车窗外
[01:00.00]未来有一个人在等待
[01:06.00]向左向右向前看
[01:11.00]爱要拐几个弯才来
[01:16.00]我遇见谁会有怎样的对白
[01:21.00]我等的人他在多远的未来
[01:26.00]我听见风来自地铁和人海
[01:31.00]我排着队拿着爱的号码牌
[01:58.00]阴天傍晚车窗外
[02:03.00]未来有一个人在等待
[02:08.00]向左向右向前看
[02:14.00]爱要拐几个弯才来
[02:19.00]我遇见谁会有怎样的对白
[02:24.00]我等的人他在多远的未来
[02:29.00]我听见风来自地铁和人海
[02:34.00]我排着队拿着爱的号码牌
[02:45.00]我往前飞飞过一片时间海
[02:50.00]我们也曾在爱情里受伤害
[02:55.00]我看着路梦的入口有点窄
[03:00.00]我遇见你是最美丽的意外
[03:07.00]总有一天我的谜底会揭开
`,
            // 新增下一首歌曲信息
            nextMusicSrc: musicFile,
            nextLrc: `[00:00.00] 作词 : 金蜗牛/江珂
[00:00.91] 作曲 : OH JA HYUN/TARA NABAVI/LEE JEONG WON
[00:01.83] 制作人 : 石家豪
[00:02.75]想睡在风里 丢掉记忆
[00:06.96]要飘向哪里 不用太在意
[00:11.18]像颗蒲公英 没有目的的旅行
[00:19.92]我开始微笑结交新朋友
[00:24.06]为自己找个不加班的梦
[00:28.28]让耳朵躺在
[00:30.41]一首歌
[00:32.52]薄荷味的阳光轻和
[00:35.89]像第一次 拥有世界
[00:40.03]看着一切 陌生在眼前
[00:46.24]像 从没失落失望
[00:48.52]好奇着明天
[00:52.57]我可以 自在飞行
[00:54.59]听见风 闭上眼睛
[00:56.65]也可以 躲进雨里
[00:58.82]等寂寞经过
[01:01.87]带着我的 小小幸福 新鲜的念头
[01:07.50]已飞远走
[01:10.00]指尖 琥珀色的天际
[01:14.13]呼吸 浅浅的空气
[01:18.31]睡在 喜欢的全部里
[01:22.55]当风 下一次经过
[01:24.68]爱上了我
[01:28.70]我走过海滩 留下脚印
[01:33.25]我看到星空 离回忆很近
[01:37.48]我也会遇见 某个午后 心动的背影
[01:45.36]像第一次 爱上世界
[01:49.53]看着一切 浪漫的眼前
[01:55.62]像 从不后悔什么
[01:57.99]伸出我的手
[02:02.11]我可以 自在飞行
[02:04.00]听见风 闭上眼睛
[02:06.10]也可以 躲进雨里
[02:08.26]等寂寞经过
[02:11.38]带着我的 小小幸福 新鲜的念头
[02:16.95]已飞远走
[02:19.43]指尖 琥珀色的天际
[02:23.58]呼吸 浅浅的空气
[02:27.72]睡在 喜欢的全部里
[02:32.06]当风 下一次经过
[02:34.44]爱上了我
[02:37.11]等我醒来时 走回孤独的夜里
[02:42.12]迟到的温柔 还会不会来
[02:47.46]怎么哄好 现实的脾气
[02:52.67]我可以 自在飞行
[02:54.48]也相信 所有努力
[02:56.65]谁可以 给我鼓励
[02:58.97]赶去 困惑
[03:01.92]像个孩子 一样勇敢 坚定地追逐
[03:07.32]自由 远走
[03:10.11]指尖 琥珀色的天际
[03:13.71]呼吸 浅浅的空气
[03:18.31]睡在 喜欢的全部里
[03:22.57]当风 下一次经过
[03:25.05]爱上了我
[03:26.88]我想 飞越海洋极地
[03:31.01]拥抱 每一处风景
[03:35.21]在我 喜欢的全部里
[03:39.45]慢慢 遇见我自己
[03:41.51]敢爱的我
[03:43.42] 编曲：Lee Jeong Won (Jackson Lee)
[03:43.92] 录音：江浩廷
[03:44.42] 混音：石家豪
[03:44.92] 母带：石家豪
[03:45.42] 监制：尼克
[03:45.92] 出品：匠星娱乐
[03:46.42] 渠道统筹：赵节
[03:46.92] 本歌曲来自〖云上工作室〗`
        }
    },
    mounted() {
        // 处理歌词，变成数组形式
        let listMusic = this.lrc.split('\n');
        listMusic.forEach(res => {
            let parts = res.split(']');
            let timeStr = parts[0].substring(1);
            let obj = {
                time: this.parseTime(timeStr),
                words: parts[1]
            };
            this.result.push(obj);
        });
        this.dome = {
            audio: document.querySelector("audio"),
            ul: document.querySelector(".lyrics-list"),
            contain: document.querySelector(".lyrics-container")
        };
        this.createDataElements();
        this.dome.audio.addEventListener("timeupdate", this.setOffset);
    },
    methods: {
        createDataElements() {
            let frag = document.createDocumentFragment();
            this.result.forEach((item) => {
                let li = document.createElement("li");
                li.textContent = item.words;
                frag.appendChild(li);
            });
            this.dome.ul.appendChild(frag);
            this.clientHeight = this.dome.contain.clientHeight;
            this.liHeight = this.dome.ul.children[0].clientHeight;
        },
        parseTime(timeStr) {
            let parts = timeStr.split(':');
            return +parts[0] * 60 + +parts[1];
        },
        setOffset() {
            let index = this.findCurrentIndex();
            let offset = this.liHeight * index;
            offset = Math.min(offset, this.getMaxOffset());
            this.dome.ul.style.transform = `translateY(-${offset}px)`;
            this.updateLyricColor(index);
        },
        findCurrentIndex() {
            let time = this.dome.audio.currentTime;
            for (let i = 0; i < this.result.length; i++) {
                if (time < this.result[i].time) {
                    return i === 0? 0 : i - 1;
                }
            }
            return this.result.length - 1;
        },
        getMaxOffset() {
            return this.dome.ul.clientHeight - this.clientHeight;
        },
        updateLyricColor(index) {
            let lis = this.dome.ul.querySelectorAll('li');
            lis.forEach(li => li.style.color = '#ccc');
            if (index >= 0 && index < lis.length) {
                lis[index].style.color = '#fff';
            }
        },
        switchToNextMusic() {
            // 1. 停止当前音频播放
            this.dome.audio.pause();
            // 2. 更换音频源为下一首歌曲
            this.dome.audio.src = this.nextMusicSrc;
            // 3. 处理下一首歌曲的歌词，变成数组形式
            let nextListMusic = this.nextLrc.split('\n');
            this.result = [];
            nextListMusic.forEach(res => {
                let parts = res.split(']');
                let timeStr = parts[0].substring(1);
                let obj = {
                    time: this.parseTime(timeStr),
                    words: parts[1]
                };
                this.result.push(obj);
            });
            // 4. 清空原有歌词列表的DOM元素
            this.dome.ul.innerHTML = '';
            // 5. 根据新歌词数据重新创建DOM元素并添加到歌词列表
            this.createDataElements();
            // 6. 重新绑定音频播放进度更新事件，确保歌词同步功能正常
            this.dome.audio.addEventListener("timeupdate", this.setOffset);
            // 7. 播放下一首歌曲
            this.dome.audio.play();
        }
    }
}
</script>

<style scoped>
.con {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('~@/assets/image/amyimg/bgA.png');
    background-size: cover;
    background-position: center;
    color: #ccc;
}

.page-container {
    width: 80%;
    max-width: 600px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: rgba(34, 34, 34, 0.8);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.lyrics-container {
    height: 300px;
    overflow-y: auto;
    border: 1px solid #444;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 20px;
}

.lyrics-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.lyrics-list li {
    line-height: 25px;
    transition: color 0.3s ease;
}

.audio-container {
    width: 100%;
}
</style>