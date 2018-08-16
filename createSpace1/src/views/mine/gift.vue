<template>
  <div>
    <a-header :name="name"></a-header>
    <div class="p10"></div>
    <flexbox :gutter="5" >
      <flexbox-item v-for="(item,index) in data" :key="index">
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
    <flexbox :gutter="5">
      <flexbox-item>
        <div class="gift-box">
          <img src="static/img/gift1.jpg" alt="">
          <div class="text-box">
            2800
            <span class="a-text">积分</span>
            <i class="right-icon"></i>
          </div>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="gift-box">
          <img src="static/img/gift1.jpg" alt="">
          <div class="text-box">
            2800
            <span class="a-text">积分</span>
            <i class="right-icon"></i>
          </div>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
import aHeader from '@/components/mini/header'

const aData = [
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
export default {
  components: {
    Flexbox,
    FlexboxItem,
    aHeader
  },
  data () {
    return {
      name: '积分兑好礼',
      data: aData
    }
  }
}
</script>

<style scoped>
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
