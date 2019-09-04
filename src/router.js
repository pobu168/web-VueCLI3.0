import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const router = new Router({
    routes: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/components/index'),
        title: '测试首页'
      },
      {
        path: '/test',
        name: 'test',
        component: () => import('@/components/test'),
        title: 'test'
      }
    ]  
}) 

export default router