import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import shou from '@/components/shou'
// import city from '@/components/city'
// import msite from '@/components/msite'

const city=()=>import('@/components/city')
const shou=()=>import('@/components/shou')
const msite=()=>import('@/components/msite')
const search=()=>import('@/components/search')
const order=()=>import('@/components/order')
const profile=()=>import('@/components/profile')
const shop=()=>import('@/components/shop')
const food=()=>import('@/components/food')



// const cc=()=>import('@/components/cc')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shou',
      component: shou
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/msite',
      name: 'msite',
      component: msite,
      children:[
        {
          path: 'search',
          name: 'search',
          component: search
        },
        {
          path: 'order',
          name: 'order',
          component: order
        },
        {
          path: 'profile',
          name: 'profile',
          component: profile
        },
      ]
    },
     {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/food',
      name: 'food',
      component: food
    }
  ]
})
