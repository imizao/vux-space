<template>
  <div>
    <a-header :name="name"></a-header>
    <div class="p10"></div>
    <flexbox :gutter="5" v-for="(item,index) in data" :key="index">
      <flexbox-item v-for="(item,index) in item.data" :key="index">
        <div class="gift-box">
          <img :src="'static/img/'+item.img" alt="">
          <div class="text-box">
            {{item.num}}
            <span class="a-text">积分</span>
            <router-link :to="item.url"><i class="right-icon"></i></router-link>
          </div>
        </div>
      </flexbox-item>
    </flexbox>

    <div class="p10"></div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
import aHeader from '@/components/mini/header'

const aData = [
  {
    'data': [
      {
        'num': 2800,
        'img': 'gift1.jpg',
        'url': '/index'
      },
      {
        'num': 2800,
        'img': 'gift1.jpg',
        'url': '/index'
      }
    ]
  },
  {
    'data': [
      {
        'num': 2800,
        'img': 'gift1.jpg',
        'url': '/index'
      },
      {
        'num': 2800,
        'img': 'gift1.jpg',
        'url': '/index'
      }
    ]
  },
  {
    'data': [
      {
        'num': 2800,
        'img': 'gift1.jpg',
        'url': '/index'
      },
      {
        'num': 2800,
        'img': 'gift1.jpg',
        'url': '/index'
      }
    ]
  },
  {
    'data': [
      {
        'num': 2800,
        'img': 'gift1.jpg',
        'url': '/index'
      },
      {
        'num': 2800,
        'img': 'gift1.jpg',
        'url': '/index'
      }
    ]
  }
]
export default {
  components: {
    Flexbox,
    FlexboxItem,
    aHeader
  },
  data () {
    return {
      name: '兑换商品',
      data: aData,
      showHideOnBlur: false
    }
  }
}
</script>

<style scoped>

.dialog-demo .weui-dialog{
    border-radius: 8px;
    padding-bottom: 8px;
  }
.dialog-demo .dialog-title {
    line-height: 30px;
    color: #666;
  }
.dialog-demo   .img-box {
    height: 350px;
    overflow: hidden;
  }
.dialog-demo .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }

.p10 {
  width: 100%;
  height: 10px;
}
.gift-box img {
  width: 100%;
  display: block;
}
.a-text{
  font-size: 12px;
}
.text-box{
  position: relative;
  width: 100%;
  height: 34px;
  margin-bottom: 5px;
  line-height: 34px;
  text-indent: 10px;
  color: #333;
  font-size: 17px;
  background: #fff;
}
.right-icon{
  position: absolute;
  right: 10px;
  top: 5px;
  width: 22px;
  height: 22px;
  background: url('../../../static/img/right-icon.png') no-repeat;
  background-size: 100%;
}
</style>
