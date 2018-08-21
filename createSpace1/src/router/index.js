import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/main/index'
import ColumnPage from '@/components/main/column-page'
import DetailsPage from '@/components/main/details-page'
import Mine from '@/components/main/mine'
import mContent from '@/views/con/mcontent'
import Comic from '@/views/con/comic'
import Interest from '@/views/con/interest'
import Scientific from '@/views/con/scientific'
import Intelligence from '@/views/con/intelligence'
import PageOne from '@/views/column/page-one'
import PageTwo from '@/views/column/page-two'
import PageThree from '@/views/column/page-three'
import aHistory from '@/views/mine/history'
import aGift from '@/views/mine/gift'
import Exchange from '@/views/mine/exchange'
import Address from '@/views/mine/address'

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
      component: ColumnPage,
      redirect: '/column/p1',
      children: [
        {
          path: 'p1',
          name: 'p1',
          component: PageOne
        },
        {
          path: 'p2',
          name: 'p2',
          component: PageTwo
        },
        {
          path: 'p3',
          name: 'p3',
          component: PageThree
        }
      ]
    },
    {
      path: '/history',
      name: 'history',
      component: aHistory
    },
    {
      path: '/gift',
      name: 'gift',
      component: aGift
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: Exchange
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    },
    {
      path: '/details',
      name: 'details',
      component: DetailsPage
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/column/index',
      redirect: '/index',
    },
    {
      path: '/column/mine',
      redirect: '/mine',
    }
  ]
})
