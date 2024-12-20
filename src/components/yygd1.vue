<template>
  <div style="width:100vw;height:100vh;background-color: #000000;overflow: auto;text-align: center;color:#666;">
      <audio style="margin:30px auto;width:420px" controls src="../assets/music/遇见+-+周深.mp3"></audio>
      <div class="container">
          <ul></ul>
      </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                indexPars: null,
                clientHeight: null,
                maxOffset: null,
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
[03:10.48]END`
            }
        },
        mounted() {
            //先处理歌词，变成数组形式，便于操作
            let listMusic = this.lrc.split('\n');
            listMusic.map(res => {
                let str = res;
                let parts = str.split(']');
                let timeStr = parts[0].substring(1);
                let obj = {
                    time: this.partsTime(timeStr),
                    words: parts[1]
                };
                this.result.push(obj);
            });
            this.dome = {
                audio: document.querySelector("audio"),
                ul: document.querySelector(".container ul"),
                contain: document.querySelector(".container")
            };
            this.createDataElements();

            this.dome.audio.addEventListener("timeupdate", this.setOffset);
        },
        methods: {
            /**
             * 创建歌词元素li
             */
            createDataElements() {
                let frag = document.createDocumentFragment();//文档片段
                for (let i = 0; i < this.result.length; i++) {
                    let li = document.createElement("li");
                    //创建li标签
                    li.textContent = this.result[i].words;
                    frag.appendChild(li);
                }
                this.dome.ul.appendChild(frag);
                this.clientHeight = this.dome.contain.clientHeight;//获取contain的高度
                this.liHeight = this.dome.ul.children[0].clientHeight//获取li标签的高度
                this.maxOffset = this.dome.ul.clientHeight - this.clientHeight //最大值的时候
            },

            /**
             * 将时间字符串解析成数字（秒）
             * @param timeStr
             * @returns {number}
            */
            partsTime(timeStr) {
                let parts = timeStr.split(':');
                return +parts[0] * 60 + +parts[1];
            },
            /**
             * 计算出当前播放器播放到第几秒的情况下
             * 数组中歌词那一句应该高亮显示（取下标）
             * 若没有任何依据歌词要显示则返回-1
             */
            findInde() {
                let time = this.dome.audio.currentTime;
                for (let i = 0; i < this.result.length; i++) {
                    if (time < this.result[i].time) {
                        return i === 0? 0 : i - 1;
                    }
                }
                return this.result.length - 1;
            },
            /**
             * 设置ul的的偏移量
             */
            setOffset() {
                let index = this.findInde();
                let offset = this.liHeight * index + this.liHeight / 2 - this.clientHeight / 2;
                //注意刚开始的时候相减为负和最大值的时候数所以要做边界判断
                //刚开始播放的时候的边界
                if (offset < 0) {
                    offset = 0;
                }
                //播放完了之后的边界
                if (offset > this.maxOffset) {
                    offset = this.maxOffset;
                }
                //偏移
                this.dome.ul.style.transform = `translateY(-${offset}px)`;

                // 改变当前播放歌词的颜色，先将所有歌词颜色恢复默认
                let lis = this.dome.ul.querySelectorAll('li');
                lis.forEach(li => li.style.color = '#666');

                // 给当前播放歌词对应的li设置指定颜色（这里设置为白色，可根据需求调整）
                if (index >= 0 && index < lis.length) {
                    lis[index].style.color = '#fff';
                }
            }
        }
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
 .container {
    height: 420px;
    overflow: hidden;
     /*border: 2px solid #fff;*/
  }
 .container ul{
  list-style: none;
  /*过度效果*/
  transition: 0.6s;
}
.container li{
    height: 30px;
    line-height: 30px;
    transition: 0.2s;
  }
</style>