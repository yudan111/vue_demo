<template>
    <div class="shopping">
        <!-- 顶部导航分类部分 -->
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
        <!-- 右侧图片展示部分 -->
        <div class="shopping_r">
            <div><img src="../assets/image/amyimg/shoppingA.jpg" alt=""></div>
            <div><img src="../assets/image/amyimg/shoppingB.jpg" alt=""></div>
        </div>
        <!-- 数字专辑等展示部分 -->
        <div class="shopping_e">
            <div>
                <div class="shopping_e_left_l">
                    <span><img src="../assets/image/amyimg/iconfont_光盘.svg" alt="">数字专辑</span>
                    <p>数字专辑</p>
                    <a href="">立即购买<img src="../assets/image/amyimg/箭头3.svg" alt=""></a>
                </div>
            </div>
            <div><img src="../assets/image/amyimg/shoppingC.png" alt=""></div>
        </div>
        <!-- 商品列表展示及添加购物车按钮部分 -->
        <div class="shopping_f">
            <div class="shopping_f_s">
                <div v-for="(Books, index) in Books" :key="index" class="shopping_f_top">
                    <img :src="Books.img" alt="">
                    <h4>{{ Books.name }}</h4>
                    <p>{{ Books.price }}</p>
                    <button @click="addToCart(Books)">添加到购物车</button> <!-- 添加按钮 -->
                </div>
            </div>
        </div>
        <!-- 购物车列表展示区域 -->
        <div class="shopping-cart">
            <h2>购物车</h2>
            <ul class="cart-list">
                <li v-for="(cartItem, cartIndex) in cartItems" :key="cartIndex" class="cart-item">
                    <img :src="cartItem.img" alt="">
                    <div class="cart-item-info">
                        <h4>{{ cartItem.name }}</h4>
                        <p>{{ cartItem.price }}</p>
                    </div>
                    <button @click="removeFromCart(cartIndex)">移除商品</button> <!-- 移除商品按钮 -->
                </li>
            </ul>
            <div class="cart-total">
                总价：<span>{{ totalPrice }}</span>
                <button @click="checkout">结算</button> <!-- 结算按钮 -->
            </div>
        </div>
    </div>
</template>
<style>
.shopping-t {
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    /* width: 1000px; */
    border-bottom: 1px solid #ccc;
}

.shopping-t div {
    justify-content: center;
    display: flex;
    align-items: center;
    width: 190px;
    margin-right: 40px;
}

.shopping-t h4 {
    margin-left: 10px;
}

.shopping-t div:not(:nth-child(4)) {
    border-right: 1px solid #ccc;
}

.shopping_r {

    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.shopping_r div {
    margin: 10px;
}

.shopping_e {
    /* width: 1100px; */
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.shopping_e div {
    position: relative;
    background-color: #f9f9f9;
}

.shopping_e_left_l {
    position: absolute;
    top: 40px;
}

.shopping_e div:nth-child(1) {
    width: 760px;
    /* margin-right: 20px; */
}

.shopping_e div:nth-child(1) span {
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
}

.shopping_e div:nth-child(1) a {
    font-size: 28px;
    color: #d40d0d;
    border-radius: 5px;
    margin-top: 20px;
}

.shopping_f {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: center;
}

.shopping_f_s {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* width: 80%; */
}

.shopping_f_top {
    background-color: #fff;
    /* margin: 5px; */

}

.shopping_f_top img {
    width: 80%;
    height: 80%;
}


.shopping_f_top h4 {
    font-size: 16px;
}

.shopping_f_top p {
    font-size: 18px;
    color: #d40d0d;
    margin-top: 10px;
}
.shopping-cart {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
}

h2 {
    text-align: center;
}

.cart-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.cart-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}

.cart-item-info {
    margin-left: 10px;
}

.cart-total {
    text-align: right;
    margin-top: 10px;
}
</style>
<script>
import long1 from '../assets/image/amyimg/books1.jpg';
import long2 from '../assets/image/amyimg/books2.jpg';
import long3 from '../assets/image/amyimg/books3.jpg';
import long4 from '../assets/image/amyimg/books4.jpg';
import long5 from '../assets/image/amyimg/books5.jpg';
import long6 from '../assets/image/amyimg/books26.jpg';
import long7 from '../assets/image/amyimg/books7.jpg';
import long8 from '../assets/image/amyimg/books8.jpg';

export default {
    data() {
        return {
            Books: [
                {
                    img: long1,
                    name: "邱胜翊（王子） Attention! 听好 1CD",
                    price: "¥69",
                },
                {
                    img: long2,
                    name: "《青云志》电视剧原声带 1CD",
                    price: "¥198",
                },
                {
                    img: long3,
                    name: "《老男孩》电视剧原声带 2CD",
                    price: "¥94",
                },
                {
                    img: long4,
                    name: "《南方有乔木》电视剧原声带 2CD",
                    price: "¥88",
                },
                {
                    img: long5,
                    name: "《杉杉来了》电视剧原声带",
                    price: "¥90",
                },
                {
                    img: long6,
                    name: " 《好先生》电视剧原声带",
                    price: "¥90",
                },
                {
                    img: long7,
                    name: "《择天记》电视剧原声带",
                    price: "¥90",
                },
                {
                    img: long8,
                    name: "《亲爱的翻译官》电视剧原声带",
                    price: "¥90",
                },
                {
                    img: long1,
                    name: "《一代宗师》",
                    price: "¥198.00",
                },
                {
                    img: long2,
                    name: "柯有伦《飞》",
                    price: "¥69",
                },
                {
                    img: long3,
                    name: "朴树《猎户星座》(版本二)",
                    price: "¥68",
                },
                {
                    img: long4,
                    name: "刘思涵《不特别得很特别》",
                    price: "¥69",
                },
                {
                    img: long5,
                    name: "林明祯《#Me 祯的我》",
                    price: "¥59",
                },
                {
                    img: long6,
                    name: "戴爱玲《为爱做的傻事》",
                    price: "¥198",
                },
            ],
            cartItems: [], // 用于存储购物车中的商品
            totalPrice: 0 // 购物车商品总价
        };
    },
    methods: {
        addToCart(item) {
            // 将商品添加到购物车
            this.cartItems.push(item);
            this.updateTotalPrice(); // 添加商品后更新总价
        },
        removeFromCart(index) {
            // 从购物车移除指定索引的商品
            this.cartItems.splice(index, 1);
            this.updateTotalPrice(); // 移除商品后更新总价
        },
        updateTotalPrice() {
            // 计算购物车商品总价
            let total = 0;
            this.cartItems.forEach(item => {
                const price = parseFloat(item.price.slice(1)); // 去除价格字符串中的¥符号并转换为数字
                total += price;
            });
            this.totalPrice = total;
        },
        checkout() {
            // 结算功能逻辑，这里可以添加跳转到支付页面、清空购物车等实际操作
            // 简单示例，先弹出提示框显示总价
            alert(`您需要支付的总价为：${this.totalPrice}元`);
            // 然后可以清空购物车
            this.cartItems = [];
            this.totalPrice = 0;
        }
    },
    mounted() {
        // 在组件挂载时可以进行一些初始化操作，比如计算初始总价等
        this.updateTotalPrice();
    }
};
</script>