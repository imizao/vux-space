<template>
  <div class="index-m">
    <a-head></a-head>
    <a-tab></a-tab>
    <a-swiper></a-swiper>
    <router-view></router-view>
    <!-- <m-content></m-content> -->
    <!-- <spinner type="ripple"></spinner> -->
  </div>
</template>

<script>
 import aHead from './header'
 import aTab from './tab'
 import aSwiper from './swiper'
//  import mContent from './mcontent'

 export default {
   components: {
     aHead,
     aTab,
     aSwiper
   }
 }
</script>

<style>
.swiper-demo-img img {
  width: 100%;
}
</style>



