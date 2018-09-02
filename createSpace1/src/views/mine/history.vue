<template>
  <div class="history">
    <a-header :name="name"></a-header>
    <div class="p10"></div>
    <flexbox :gutter="5" wrap="wrap" class="bg-white">
        <flexbox-item v-for="(item, index) in items.data"  :key="index" :span="3.8" >
          <b-content :data="item"></b-content>
        </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
import bContent from '@/components/bcontent'
import aHeader from '@/components/mini/header'

const aData = {
  'data': [
    {
      'img': 'program5.png',
      'name': '闯堂兔',
      'url': '/details'
    },
    {
      'img': 'program5.png',
      'name': '闯堂兔',
      'url': '/details'
    },
    {
      'img': 'program5.png',
      'name': '闯堂兔',
      'url': '/details'
    },
    {
      'img': 'program5.png',
      'name': '闯堂兔',
      'url': '/details'
    },
    {
      'img': 'program5.png',
      'name': '闯堂兔',
      'url': '/details'
    },
    {
      'img': 'program5.png',
      'name': '闯堂兔',
      'url': '/details'
    },
    {
      'img': 'program6.png',
      'name': '玩具总动员',
      'url': '/details'
    }
  ]
}
export default {
  components: {
    Flexbox,
    FlexboxItem,
    aHeader,
    bContent
  },
  data () {
    return {
      items: aData,
      name: '历史记录',
      isActive: false
    }
  },
  created () {
  },
  methods: {
    Active () {
      let index = target.getAttribute("data-index")
      if ( index % 3 === 0) {
        return this.isActive = true
      } else {
        return this.isActive = false
      }
    }
  }
}
</script>

<style >
.p10 {
  width: 100%;
  height: 10px;
}
.history .vux-flexbox .vux-flexbox-item:first-child {
    margin-left: 5px!important;
    margin-top: 0!important;
}
.bg-white{
  background: white;
}
</style>
