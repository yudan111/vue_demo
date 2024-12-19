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
                <pinglun/>
            </div>
            <div class="comtent_right"></div>
        </div>
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
    height: 100%;
    background-color: #ffffff;
    border-left: 1px solid #8a8686;
    border-right: 1px solid #aeabab;
}

.comtent_right {
    width: 30%;
    /* height: 100%; */
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
</style>
<script>
    import Pinglun from './pinglun.vue';
    export default {
        components: {
            Pinglun,
        },
                };

</script>
