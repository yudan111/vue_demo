<template>
    <div class="shopping-t">
        <div>
            <img src="../assets/image/shopping/gouwudai.svg" alt="">
            <h4>IP周边</h4>
        </div>
        <div>
            <img src="../assets/image/shopping/ruererji.svg" alt="">
            <h4>热销爆品</h4>
        </div>
        <div>
            <img src="../assets/image/shopping/tdpsecond-hand-.svg" alt="">
            <h4>数码影音</h4>
        </div>
        <div>
            <img src="../assets/image/shopping/shujuku.svg" alt="">
            <h4>云贝商城</h4>
        </div>
    </div>
</template>
<style>
.shopping-t{
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    /* width: 1000px; */
    border-bottom: 1px solid #ccc;
}
.shopping-t div{
    justify-content: center;
    display: flex;
    align-items: center;
    width: 190px;
    margin-right: 40px;
}
.shopping-t h4{
    margin-left: 10px;
    }
.shopping-t  div:not(:nth-child(4)){
    border-right: 1px solid #ccc;
}
</style>