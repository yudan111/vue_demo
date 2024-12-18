import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import mymusic from '../views/mymusic.vue'
import shopping from '../components/shopping.vue'
import gd from '../views/gd.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: home },
  { path: '/mymusic', component: mymusic },
  { path: '/store', component: shopping },
  { path: '/gd', component: gd }
  ]


  const router = new VueRouter({
    // mode: 'history', 
    base: process.env.BASE_URL,
    routes
  })
  
  export default router


// const router = new VueRouter({
//   routes
// })


