<template>

<div>
   <Nav /> 
   <Shoppinglunbo />
   <Shopping_t />
</div>
</template>

<script>
import Shopping_t from '@/components/shopping_t.vue';
import nav from '../components/nav';
import Shoppinglunbo from '../components/shoppinglunbo';
export default {
    components: {
       Nav: nav,
    Shoppinglunbo: Shoppinglunbo,
    Shopping_t: Shopping_t,
 }
}
</script>

<style>
</style>