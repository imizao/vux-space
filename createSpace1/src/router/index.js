import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/index'
import mContent from '@/views/con/mcontent'
import Comic from '@/views/con/comic'
import Interest from '@/views/con/interest'
import Scientific from '@/views/con/scientific'
import Intelligence from '@/views/con/intelligence'
import ColumnPage from '@/components/column-page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: 'index',
          name: 'index',
          component: mContent
        },
        {
          path: 'comic',
          name: 'comic',
          component: Comic
        },
        {
          path: 'interest',
          name: 'interest',
          component: Interest
        },
        {
          path: 'scientific',
          name: 'scientific',
          component: Scientific
        },
        {
          path: 'intelligence',
          name: 'intelligence',
          component: Intelligence
        }
      ]
    },
    {
      path: '/column',
      name: 'column',
      component: ColumnPage
    }
  ]
})
