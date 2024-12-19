<template>
    <div>
         <Nav/>
     <Follow_comtenter/>
        <Footer/>
    </div>
</template>

<script>
import Follow_comtenter from '@/components/follow_comtenter.vue';
import Footer from '@/components/footer.vue';
import Nav from '@/components/nav.vue';

export default {
  components: {
    Nav,
    Follow_comtenter,
    Footer
  },
}
</script>

<style>

</style>