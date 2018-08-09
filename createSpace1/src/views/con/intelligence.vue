<template>
  <div class="comic">
    <group>
      <cell title="热播动画" value="更多" :is-link="true"></cell>
      <i class="icon1"></i>
    </group>
    <a-content></a-content>
    <a-content></a-content>
    <group>
      <cell title="热播动画" value="更多" :is-link="true"></cell>
      <i class="icon1"></i>
    </group>
    <a-content></a-content>
    <a-content></a-content>
    <group>
      <cell title="热播动画" value="更多" :is-link="true"></cell>
      <i class="icon1"></i>
    </group>
    <a-content></a-content>
    <a-content></a-content>
    <div class="p10"></div>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import aContent from '@/components/acontent'
export default {
  components: {
    Group,
    Cell,
    aContent
  }
}
</script>

<style>

.comic .weui-cells{
  position: relative;
  padding: 0px 10px 0 45px;
  margin-top: 10px;
  height: 40px;
  line-height: 40px;
}
.comic .weui-cell{
  padding: 0;
}
.comic .weui-cell_access .weui-cell__ft{
  font-size: 12px;
}
.comic .icon1{
  position: absolute;
  left: 10px;
  top: 12px;
  width: 30px;
  height: 17px;
  background: url('../../../static/img/comic-icon1.png') no-repeat;
  background-size: 100%;
}
.p10{
  width: 100%;
  height: 10px;
  background: #f0f3f7;
}
</style>
