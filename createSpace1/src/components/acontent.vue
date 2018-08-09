<template>
  <div>
    <flexbox :gutter="5">
      <flexbox-item :span="6">
        <div class="con-img">
          <img src="../../static/img/img.png" alt="">
          <p class="con-p">闯堂家族</p>
        </div>
      </flexbox-item>
      <flexbox-item :span="6">
        <div class="con-img">
          <img src="../../static/img/img.png" alt="">
          <p class="con-p">闯堂家族</p>
        </div>
      </flexbox-item>
    </flexbox>
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
