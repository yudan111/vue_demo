<template>
  <div id="app">
  <Nav />
  <NavT />
  <Lunbo />
  <Contenter />

  <!-- <div>组件组成</div> -->
  </div>
</template>
<script>
import nav from './components/nav.vue'
import nav_t from './components/nav_t.vue'
import lunbo from './components/lunbo.vue'
import contenter from './components/contenter.vue';
// import'./assets/style/reset.css'

export default{
  components: {
    Nav: nav,
    NavT: nav_t,
     Lunbo: lunbo,
    Contenter: contenter
  }
}
</script>
<style>
#app {
  /* width: 111%; */
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
