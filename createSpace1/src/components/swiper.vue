<template>
  <div>
    <div class="p10"></div>
    <swiper auto loop :aspect-ratio="360/750" >
      <swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index"><router-link to="/details"><img :src="item"></router-link></swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'

const imgList = [
  'static/img/index/program1.png',
  'static/img/index/program2.png',
  'static/img/index/program3.png',
  'static/img/index/program4.png'
]
export default {
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {
      demo04_list: imgList
    }
  }
}
</script>

<style scoped>
.p10{
  width: 100%;
  height: 10px;
  background-color: #f0f3f7;
}
.swiper-demo-img img {
  width: 100%;
}
</style>
