<template>
  <div class="comic">
    <div v-for="(item,index) in aData" :key="index">
      <group>
        <cell :title="item.title" value="更多" :is-link="true" :link="'/column'+item.url"></cell>
        <i class="icon2"></i>
      </group>
      <flexbox :gutter="5" v-for="(item1,index) in item.data" :key="index" style="margin-bottom:10px;overflow: hidden;">
        <flexbox-item :span="6" v-for="(item2, index) in item1.data" :key="index">
          <b-content :data="item2"></b-content>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="p10"></div>
  </div>
</template>

<script>
import { Group, Cell, Flexbox, FlexboxItem } from 'vux'
import bContent from '@/components/bcontent'

const aData = [
    {
      'title': '热播动漫1',
      'url': '/p1',
      'data': [
        {
          'data': [
            {
              'img': 'program9.png',
              'name': '闯堂兔',
              'url': '/details'
            },
            {
              'img': 'program10.png',
              'name': '闯堂兔1',
              'url': '/details'
            }
          ]
        },
        {
          'data': [
            {
              'img': 'program6.png',
              'name': '闯堂兔2',
              'url': '/details'
            },
            {
              'img': 'program7.png',
              'name': '闯堂兔3',
              'url': '/details'
            }
          ]
        }
      ]
    },
    {
      'title': '热播动漫2',
      'url': '/p2',
      'data': [
        {
          'data': [
            {
              'img': 'program9.png',
              'name': '闯堂兔4',
              'url': '/details'
            },
            {
              'img': 'program10.png',
              'name': '闯堂兔5',
              'url': '/details'
            }
          ]
        },
        {
          'data': [
            {
              'img': 'program11.png',
              'name': '闯堂兔6',
              'url': '/details'
            },
            {
              'img': 'program12.png',
              'name': '闯堂兔7',
              'url': '/details'
            }
          ]
        }
      ]
    },
    {
      'title': '热播动漫3',
      'url': '/p3',
      'data': [
        {
          'data': [
            {
              'img': 'program13.png',
              'name': '闯堂兔8',
              'url': '/details'
            },
            {
              'img': 'program14.png',
              'name': '闯堂兔9',
              'url': '/details'
            }
          ]
        },
        {
          'data': [
            {
              'img': 'program15.png',
              'name': '闯堂兔1',
              'url': '/details'
            },
            {
              'img': 'program16.png',
              'name': '闯堂兔1',
              'url': '/details'
            }
          ]
        }
      ]
    }
  ]

export default {
  components: {
    Group,
    Cell,
    Flexbox,
    FlexboxItem,
    bContent
  },
  data () {
    return {
      data: '',
      aData: aData
    }
  },
  beforeCreate () {
    this.$http.get('/scientific')
    .then(response => {
      this.data = response.data.data
    })
    .catch(function (code) {
      console.log(code)
    })
  },
  created: function () {
    sessionStorage.setItem('tab', 2)
    this.$store.state.count = sessionStorage.getItem('tab')
  }
}
</script>

<style>
.comic .weui-cell{
  padding: 0;
}
.comic .weui-cells{
  position: relative;
  padding: 0px 10px 0 45px;
  margin-top: 10px;
  height: 40px;
  line-height: 40px;
}
.comic .weui-cell_access .weui-cell__ft{
  font-size: 12px;
}
.comic .icon2{
  position: absolute;
  left: 10px;
  top: 12px;
  width: 30px;
  height: 17px;
  background: url('../../../static/img/decoration2.png') no-repeat;
  background-size: 100%;
}

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
