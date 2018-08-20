<template>
  <div>
    <a-header :name="name"></a-header>
    <div class="address-box">
      <div class="name">张三 123123123</div>
      <div class="address">广东省深圳市南山区xxxxxx</div>
      <i class="address-icon"></i>
      <p class="add-text">去编辑</p>
      <i class="right-icon1"></i>
      <i class="address-l"></i>
      <i class="address-r"></i>
    </div>
    <div class="p10"></div>
    <div class="p10"></div>
    <div class="p10"></div>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import aHeader from '@/components/mini/header'
export default {
  components: {
    Group,
    Cell,
    aHeader
  },
  data () {
    return {
      name: '礼品兑换记录'
    }
  }
}
</script>

<style scoped>
.address-box{
  position: relative;
  width: 100%;
  height: 64px;
  background: #fff;
  margin-top: 10px;
}
.name{
  position: absolute;
  left: 37px;
  top: 10px;
  font-size: 17px;
  color: #333;
}
.address{
  position: absolute;
  left: 37px;
  bottom: 10px;
  font-size: 14px;
  color: #666;
}
.address-icon{
  position: absolute;
  left: 10px;
  bottom: 10px;
  width: 22px;
  height: 22px;
  background: url('../../../static/img/address.png') no-repeat;
  background-size: 100%;
}
.add-text{
  position: absolute;
  right: 5px;
  top: 4px;
  font-size: 12px;
  padding: 20px;
  color: #666;
}
.address-l{
  position: absolute;
  right: 10px;
  top: 29px;
  width: 9px;
  height: 1px;
  border-top: 1px solid #666;
  transform: rotate(45deg);
  border-radius: 2px;
  background-color: #666666;
}
.address-r{
  position: absolute;
  right: 10px;
  top: 35px;
  width: 9px;
  height: 1px;
  border-top: 1px solid #666;
  transform: rotate(135deg);
  border-radius: 2px;
  background-color: #666666;
}
</style>
