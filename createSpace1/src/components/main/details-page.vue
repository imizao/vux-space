<template>
  <div class="detail-box">
    <a-header></a-header>
    <a-video></a-video>
    <details-txt></details-txt>
    <details-con></details-con>
    <div class="p10"></div>
    <group>
      <cell title="相关推荐" ></cell>
      <i class="icon1"></i>
    </group>
    <flexbox :gutter="5" v-for="(item, index) in data" :key="index">
      <flexbox-item :span="6" v-for="(m, n) in item.data" :key="n">
        <b-content :data="m"></b-content>
      </flexbox-item>
    </flexbox>
    <div class="p10"></div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Group, Cell } from 'vux'
import aHeader from '@/components/header'
import aVideo from '@/components/video'
import DetailsTxt from '@/components/details-txt'
import DetailsCon from '@/components/details-con'
import bContent from '@/components/bcontent'

const aData = {
  'data': [
    {
      'data': [
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
    },
    {
      'data': [
        {
          'img': 'program7.png',
          'name': '东南特卫队',
          'url': '/details'
        },
        {
          'img': 'program8.png',
          'name': '吃饭睡觉打豆豆',
          'url': '/details'
        }
      ]
    }
  ]
}

export default {
  components: {
    Flexbox,
    FlexboxItem,
    Group,
    Cell,
    aHeader,
    aVideo,
    DetailsTxt,
    DetailsCon,
    bContent
  },
  data () {
    return {
      data: aData.data
    }
  },
  created () {
    console.log(this.data)
  },
}
</script>

<style>
.p10{
  width: 100%;
  height: 10px;
  background: #f0f3f7;
}
.detail-box .weui-cells{
  position: relative;
  margin-top: 0;
  height: 40px;
  line-height: 40px;
  color: #333;
}
.detail-box .weui-cell{
  padding: 0 10px;
}
</style>
