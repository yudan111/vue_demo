import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import mymusic from '../views/mymusic.vue'
import shopping from '../views/shopping.vue'
import gd from '../views/gd.vue'
import login from '@/views/login.vue'
import register from '@/views//register.vue'
import follow from '@/views/follow.vue'
import downloadclient from '../views/downloadclient.vue'
import creatorcenter from '../views/creatorcenter.vue'
import musician from '../views/musician.vue'
import djgd from '@/components/djgd.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: home },
  { path: '/mymusic', component: mymusic },
  { path: '/store', component: shopping },
  { path: '/gd', component: gd },
  { path: '/login', component: login },
  { path: '/register', component: register },
  { path: '/follow', component: follow },
  { path: '/downloadclient', component: downloadclient },
  { path: '/creatorcenter', component: creatorcenter },
  { path: '/musician', component: musician },
  { path: '/djgd', component: djgd }
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


