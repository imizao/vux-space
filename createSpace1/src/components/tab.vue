<template>
  <div>
    <tab  v-if="$store.state.count == 0" :line-width="2" active-color="#248dff" bar-active-color="#248dff" :scroll-threshold="5" :custom-bar-width="getBarWidth">
        <tab-item selected @on-item-click="onItemClick"><router-link class="a-box" to="/index">首页</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/comic">动漫世界</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/interest">趣味实验</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/scientific">科学探索</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/intelligence">智能创意</router-link></tab-item>
    </tab>
    <tab  v-else-if="$store.state.count == 1" :line-width="2" active-color="#248dff" bar-active-color="#248dff" :scroll-threshold="5" :custom-bar-width="getBarWidth">
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/index">首页</router-link></tab-item>
        <tab-item selected @on-item-click="onItemClick"><router-link class="a-box" to="/comic">动漫世界</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/interest">趣味实验</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/scientific">科学探索</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/intelligence">智能创意</router-link></tab-item>
    </tab>
    <tab  v-else-if="$store.state.count == 2" :line-width="2" active-color="#248dff" bar-active-color="#248dff" :scroll-threshold="5" :custom-bar-width="getBarWidth">
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/index">首页</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/comic">动漫世界</router-link></tab-item>
        <tab-item selected @on-item-click="onItemClick"><router-link class="a-box" to="/interest">趣味实验</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/scientific">科学探索</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/intelligence">智能创意</router-link></tab-item>
    </tab>
    <tab  v-else-if="$store.state.count == 3" :line-width="2" active-color="#248dff" bar-active-color="#248dff" :scroll-threshold="5" :custom-bar-width="getBarWidth">
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/index">首页</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/comic">动漫世界</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/interest">趣味实验</router-link></tab-item>
        <tab-item selected @on-item-click="onItemClick"><router-link class="a-box" to="/scientific">科学探索</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/intelligence">智能创意</router-link></tab-item>
    </tab>
    <tab  v-else-if="$store.state.count == 4" :line-width="2" active-color="#248dff" bar-active-color="#248dff" :scroll-threshold="5" :custom-bar-width="getBarWidth">
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/index">首页</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/comic">动漫世界</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/interest">趣味实验</router-link></tab-item>
        <tab-item @on-item-click="onItemClick"><router-link class="a-box" to="/scientific">科学探索</router-link></tab-item>
        <tab-item selected @on-item-click="onItemClick"><router-link class="a-box" to="/intelligence">智能创意</router-link></tab-item>
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
    if (sessionStorage.getItem('tab') == undefined) {
      sessionStorage.setItem('tab', 0)
      this.$store.state.count = sessionStorage.getItem('tab')
    } else {
      this.$store.state.count = sessionStorage.getItem('tab')
    }
  },
  methods: {
    onItemClick (tab) {
      sessionStorage.setItem('tab', tab)
      this.$store.state.count = sessionStorage.getItem('tab')
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
