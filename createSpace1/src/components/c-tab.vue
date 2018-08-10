<template>
  <div>
    <tab :line-width="2" active-color="#248dff" bar-active-color="#248dff" :scroll-threshold="3" :custom-bar-width="getBarWidth">
      <tab-item selected><router-link class="a-box" to="./p1">热播动漫</router-link></tab-item>
      <tab-item><router-link class="a-box" to="./p2">国产动漫</router-link></tab-item>
      <tab-item><router-link class="a-box" to="./p3">国学经典</router-link></tab-item>
    </tab>
  </div>
</template>

<script>
import { Tab, TabItem, cookie } from 'vux'

export default {
  components: {
    Tab,
    TabItem
  },
  data () {
    return {
      index: 0,
      tab: 0,
      getBarWidth: function (index) {
        if (index === 0) {
          return 2 * 30 + 'px'
        } else {
          return 2 * 30 + 'px'
        }
      }
    }
  },
  created: function () {
    console.log(cookie.get('tab'))
  },
  methods: {
    onItemClick (tab) {
      cookie.set('tab', tab)
      console.log(`on item clicl ${tab}`)
    }
  }

}
</script>

<style scoped>
.a-box{
  display: inline-block;
  width: 100%;
}
</style>
