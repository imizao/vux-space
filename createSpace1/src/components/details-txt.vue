<template>
  <div class="details-txt">
    <flexbox :gutter="0">
      <flexbox-item :span="9.7">
        <span class="text">木奇灵2·圣天灵种</span>
      </flexbox-item>
      <flexbox-item :span="1.3">
        <span class="details-icon1"></span>
      </flexbox-item>
      <flexbox-item :span="1">
        <span class="details-icon2"></span>
      </flexbox-item>
    </flexbox>
   <p class="text1">简介：《木奇灵2圣天灵种》是大型成长、奇幻、冒险题材系列动画片。故事以洛飞、灵希和植物精灵的奇幻历险为主线，讲述…</p>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'

export default {
  components: {
    Flexbox,
    FlexboxItem
  }
}
</script>

<style scoped>
.details-txt{
  padding: 0 10px 10px;
  line-height: 44px;
  background: #fff;
}
.text{
  font-size: 17px;
  color: #333;
}
.text1{
  font-size: 14px;
  color: #999;
  line-height: 22px;
}
.details-icon1{
  display: block;
  width: 22px;
  height: 22px;
  background: url('../../static/img/colecte1.png') no-repeat;
  background-size: 100%;
}
.details-icon2{
  display: block;
  width: 22px;
  height: 22px;
  background: url('../../static/img/share.png') no-repeat;
  background-size: 100%;
}
</style>
