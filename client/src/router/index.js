import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ItemDetail from '@/components/item-detail/ItemDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/item-detail',
      name: 'ItemDetail',
      component: ItemDetail
    }
  ]
})
