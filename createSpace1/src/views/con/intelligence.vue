<template>
  <div class="comic">
    <div v-for="(item,index) in data" :key="index">
      <group>
        <cell :title="item.title" value="更多" :is-link="true"></cell>
        <i class="icon3"></i>
      </group>
      <flexbox :gutter="5" v-for="(item1,index) in item.data" :key="index">
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
      data: ''
    }
  },
  beforeCreate () {
    this.$http.get('/scientific')
    .then(response => {
      this.data = response.data.data
      console.log(this.data)
    })
    .catch(function (code) {
      console.log(code)
    })
  },
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
.comic .icon3{
  position: absolute;
  left: 10px;
  top: 12px;
  width: 30px;
  height: 17px;
  background: url('../../../static/img/decoration3.png') no-repeat;
  background-size: 100%;
}
.p10{
  width: 100%;
  height: 10px;
  background: #f0f3f7;
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
