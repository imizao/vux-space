<template>
  <div>
    <div >
      <div class="p10"></div>
      <flexbox :gutter="5" v-for="(item, index) in aData" :key="index" style="margin-bottom:10px;overflow: hidden;">
        <flexbox-item :span="6" v-for="(m, n) in item.data" :key="n">
          <b-content :data="m"></b-content>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="p10"></div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, cookie } from 'vux'
import bContent from '@/components/bcontent'

const aData =[
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
          "img": "program9.png",
          "name": "教学视频",
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
          "img": "program11.png",
          "name": "闯堂兔",
          "url": "/details"
        },
        {
          "img": "program12.png",
          "name": "闯堂兔",
          "url": "/details"
        }
      ]
    }
  ]

export default {
  components: {
    Flexbox,
    FlexboxItem,
    bContent
  },
  data () {
    return {
      data: '',
      aData: aData,
      aLength: 0
    }
  },
  beforeCreate () {
    this.$http.get('/index')
    .then(response => {
      this.data = response.data.data
      console.log(this.data)
      this.aLength = this.data.length / 2
      console.log(this.data.length)
    })
    .catch(function (code) {
      console.log(code)
    })
  },
   created: function () {
    cookie.set('tab', 0)
    console.log(cookie.get('tab'))
  },
  methods: {

  }
}
</script>

<style scoped>

.con-img img{
  width: 100%;
}
.con-p{
  height: 23px;
  line-height: 19px;
  font-size: 14px;
  text-indent: 10px;
  color: #333;
}
.vux-flex-row{
  overflow-x: hidden;
  background: #fff;
}

</style>
