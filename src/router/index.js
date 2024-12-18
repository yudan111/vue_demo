import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import mymusic from '../components/mymusic.vue'
import shopping from '../views/shopping.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: home },
  { path: '/mymusic', component: mymusic },
  { path: '/store', component: shopping }
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


