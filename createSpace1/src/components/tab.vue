<template>
  <div>
    <tab  v-if="aTab == 0" :line-width="2" active-color="#248dff" bar-active-color="#248dff" :scroll-threshold="5" :custom-bar-width="getBarWidth">
        <tab-item selected @on-item-click="onItemClick"><router-link class="a-box" to="/index">首页</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/comic">动漫世界</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/interest">趣味实验</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/scientific">科学探索</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/intelligence">智能创意</router-link></tab-item>
    </tab>
    <tab  v-else-if="aTab == 1" :line-width="2" active-color="#248dff" bar-active-color="#248dff" :scroll-threshold="5" :custom-bar-width="getBarWidth">
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/index">首页</router-link></tab-item>
        <tab-item selected @on-item-click="onItemClick"><router-link class="a-box" to="/comic">动漫世界</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/interest">趣味实验</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/scientific">科学探索</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/intelligence">智能创意</router-link></tab-item>
    </tab>
    <tab  v-else-if="aTab == 2" :line-width="2" active-color="#248dff" bar-active-color="#248dff" :scroll-threshold="5" :custom-bar-width="getBarWidth">
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/index">首页</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/comic">动漫世界</router-link></tab-item>
        <tab-item selected @on-item-click="onItemClick"><router-link class="a-box" to="/interest">趣味实验</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/scientific">科学探索</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/intelligence">智能创意</router-link></tab-item>
    </tab>
    <tab  v-else-if="aTab == 3" :line-width="2" active-color="#248dff" bar-active-color="#248dff" :scroll-threshold="5" :custom-bar-width="getBarWidth">
        <tab-item selected @on-item-click="onItemClick"><router-link class="a-box" to="/index">首页</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/comic">动漫世界</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/interest">趣味实验</router-link></tab-item>
        <tab-item selected @on-item-click="onItemClick"><router-link class="a-box" to="/scientific">科学探索</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/intelligence">智能创意</router-link></tab-item>
    </tab>
    <tab  v-else-if="aTab == 4" :line-width="2" active-color="#248dff" bar-active-color="#248dff" :scroll-threshold="5" :custom-bar-width="getBarWidth">
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/index">首页</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/comic">动漫世界</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/interest">趣味实验</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/scientific">科学探索</router-link></tab-item>
        <tab-item selected @on-item-click="onItemClick"><router-link class="a-box" to="/intelligence">智能创意</router-link></tab-item>
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
      aTab: 0,
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
    if (cookie.get('tab') == undefined) {
      this.aTab = 0
    } else {
      this.aTab = cookie.get('tab')
    }
  },
  methods: {
    onItemClick (tab) {
      cookie.set('tab', tab)
    }
  }

}
</script>

<style scoped>
.a-box{
  display: inline-block;
  width: 100%;
  color: #333;
  font-size: 16px;
}
</style>
