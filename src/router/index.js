import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/Book'
    },
    {
      path: '/Book',
      name: 'Hello',
      component: Main
    }
  ]
})
