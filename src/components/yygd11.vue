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
     <div>
         下一首
     </div>
    </div>
  </div>
  </div>
</template>

<script>
import nav from "@/components/nav.vue";
    export default {
        components:{
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
[03:07.00]总有一天我的谜底会揭开`
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