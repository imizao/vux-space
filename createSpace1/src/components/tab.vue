<template>
  <div>
    <tab :line-width="2" active-color="#248dff" bar-active-color="#248dff" :scroll-threshold="5" :custom-bar-width="getBarWidth">
      <tab-item selected>首页</tab-item>
      <tab-item>动漫世界</tab-item>
      <tab-item>趣味实验</tab-item>
      <tab-item>科学探索</tab-item>
      <tab-item>智能创意</tab-item>
    </tab>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'

export default {
  components: {
    Tab,
    TabItem
  },
  data () {
    return {
      index: 0,
      getBarWidth: function (index) {
        if (index === 0) {
          return 30 + 'px'
        } else {
          return 2 * 30 + 'px'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
