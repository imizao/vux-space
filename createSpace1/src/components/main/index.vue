<template>
  <div class="index-m">
    <a-head></a-head>
    <a-tab></a-tab>
    <a-swiper></a-swiper>
    <router-view></router-view>
  </div>
</template>

<script>
import { cookie } from 'vux'
import aHead from '@/components/header'
import aTab from '@/components/tab'
import aSwiper from '@/components/swiper'

export default {
  components: {
    aHead,
    aTab,
    aSwiper
  },
  data() {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    $route(to, from) {
      let isBack = this.$router.isBack //  监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
    }
  }
};
</script>

<style>
.swiper-demo-img img {
  width: 100%;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 1;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>



