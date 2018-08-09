<template>
  <div>
    <tab :line-width="2" active-color="#248dff" bar-active-color="#248dff" :scroll-threshold="5" :custom-bar-width="getBarWidth">
      <tab-item selected @on-item-click="onItemClick"><router-link class="a-box" to="/index">首页</router-link></tab-item>
      <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/comic">动漫世界</router-link></tab-item>
      <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/interest">趣味实验</router-link></tab-item>
      <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/scientific">科学探索</router-link></tab-item>
      <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/intelligence">智能创意</router-link></tab-item>
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
          return 30 + 'px'
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
