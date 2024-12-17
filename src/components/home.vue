<template>
  <div class="home">
   <Nav />
  <NavT />
  <Lunbo />
  <Contenter />
  </div>
</template>

<script>
import nav from './nav.vue'
import nav_t from './nav_t.vue'
import lunbo from './lunbo.vue'
import contenter from './contenter.vue';


export default {
  // name: 'HomeView',
    components: {
    Nav: nav,
    NavT: nav_t,
    Lunbo: lunbo,
    Contenter: contenter
  }

}
</script>
