<template>
  <div class="me">
    <a-header></a-header>
    <mine-box></mine-box>
    <group>
      <cell title="积分换好礼" is-link link="/gift">
        <img slot="icon" width="40" height="40" style="display:block;margin-right:5px;" src="static/img/gift.png" alt="">
      </cell>
      <cell title="我的收藏" is-link link="/collection">
        <img slot="icon" width="40" height="40" style="display:block;margin-right:5px;" src="static/img/love.png" alt="">
      </cell>
      <cell title="历史记录" is-link link="/history">
        <img slot="icon" width="40" height="40" style="display:block;margin-right:5px;" src="static/img/history.png" alt="">
      </cell>
      <cell title="礼品兑换记录" value="收货地址填写" is-link link="/exchange">
        <img slot="icon" width="40" height="40" style="display:block;margin-right:5px;" src="static/img/gift1.png" alt="">
      </cell>
      <cell title="我的视频" value="录制视频共享至电视" is-link>
        <img slot="icon" width="40" height="40" style="display:block;margin-right:5px;" src="static/img/my-video.png" alt="">
      </cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import aHeader from '@/components/header'
import MineBox from '@/components/mine-box'
export default {
  components: {
    aHeader,
    MineBox,
    Group,
    Cell
  }
}
</script>

<style>
.me .vux-no-group-title {
  margin-top: 0;
}
.me .vux-label{
  font-size: 17px;
  color: #333333;
}
.me .weui-cell_access .weui-cell__ft{
  font-size: 12px;
  color: #999999;
}
</style>
