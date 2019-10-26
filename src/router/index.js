import vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'

vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/login',
    component: Login
  }]
})

export default router
