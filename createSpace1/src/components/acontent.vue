<template>
  <div>
    <flexbox :gutter="5">
      <flexbox-item :span="6">
        <b-content></b-content>
      </flexbox-item>
      <flexbox-item :span="6">
        <b-content></b-content>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
import bContent from './bcontent'

export default {
  components: {
    Flexbox,
    FlexboxItem,
    bContent
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
