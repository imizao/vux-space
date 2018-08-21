<template>
  <div>
    <flexbox :gutter="5" v-for="(item, index) in data" :key="index">
      <flexbox-item :span="6" v-for="(m, n) in item.data" :key="n">
        <b-content :data="m"></b-content>
      </flexbox-item>
    </flexbox>
    <div class="p10"></div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
import bContent from '@/components/bcontent'

const aData = {
  "data": [
    {
      "data": [
        {
          "img": "program13.png",
          "name": "教学作品",
          "url": "/details"
        },
        {
          "img": "program12.png",
          "name": "吃饭睡觉打豆豆",
          "url": "/details"
        }
      ]
    },
    {
      "data": [
        {
          "img": "program5.png",
          "name": "闯堂兔",
          "url": "/details"
        },
        {
          "img": "program6.png",
          "name": "玩具总动员",
          "url": "/details"
        }
      ]
    },
    {
      "data": [
        {
          "img": "program11.png",
          "name": "东南特卫队",
          "url": "/details"
        },
        {
          "img": "program10.png",
          "name": "天天成长记",
          "url": "/details"
        }
      ]
    },
    {
      "data": [
        {
          "img": "program7.png",
          "name": "东南特卫队",
          "url": "/details"
        },
        {
          "img": "program8.png",
          "name": "吃饭睡觉打豆豆",
          "url": "/details"
        }
      ]
    },
    {
      "data": [
        {
          "img": "program15.png",
          "name": "欢乐之城",
          "url": "/details"
        },
        {
          "img": "program14.png",
          "name": "吃饭睡觉打豆豆",
          "url": "/details"
        }
      ]
    },

    {
      "data": [
        {
          "img": "program17.png",
          "name": "少年师爷",
          "url": "/details"
        },
        {
          "img": "program18.png",
          "name": "蛋计划",
          "url": "/details"
        }
      ]
    },
    {
      "data": [
        {
          "img": "program16.png",
          "name": "东南特卫队",
          "url": "/details"
        },
        {
          "img": "program15.png",
          "name": "欢乐之城",
          "url": "/details"
        }
      ]
    }
  ]
}

export default {
  components: {
    Flexbox,
    FlexboxItem,
    bContent
  },
  data () {
    return {
      data: aData.data
    }
  }
}
</script>

<style scoped>
.p10{
  width: 100%;
  height: 10px;
  background: #f0f3f7;
}
</style>
