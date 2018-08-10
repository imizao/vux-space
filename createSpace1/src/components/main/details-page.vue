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
    <a-content></a-content>
    <a-content></a-content>
    <div class="p10"></div>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import aHeader from '@/components/header'
import aVideo from '@/components/video'
import DetailsTxt from '@/components/details-txt'
import DetailsCon from '@/components/details-con'
import aContent from '@/components/acontent'

export default {
  components: {
    Group,
    Cell,
    aHeader,
    aVideo,
    DetailsTxt,
    DetailsCon,
    aContent
  }
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
