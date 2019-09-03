import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HelloWorld from './components/HelloWorld'
import test from './components/test'

const router = new Router({
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
        title: '测试首页'
      },
      {
        path: '/test',
        name: 'test',
        component: test,
        title: 'test'
      }
    ]  
}) 

export default router