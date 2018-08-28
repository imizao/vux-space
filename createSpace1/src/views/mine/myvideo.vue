<template>
  <div>
    <a-header :name="name"></a-header>
    <a-error></a-error>
    <div class="video-box">
      <img @click="changeTab" src="static/img/fba1.png" alt="">
      <span class="video-alert" :class="{active: active}">
        <img src="static/img/video-tishi.png" alt="">
      </span>
      <span class="video-alert1" :class="{active1: active}">
        <div class="tab-box">
          <span class="tab-icon1" ></span>
          <span class="tab-icon2" ></span>
          <span class="tab-icon3">本地上传</span>
          <span class="tab-icon4">立即拍摄</span>
          <input id="shot" class="video-active1" type="file" accept="video/*" capture="camcorder">
          <input id="video" class="video-active" type="file" accept="video/*">
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import aHeader from '@/components/mini/header'
import aError from '@/components/error'
export default {
  components: {
    aHeader,
    aError
  },
  data () {
    return {
      name: '我的视频',
      active: false
    }
  },
  methods: {
    changeTab () {
      this.active = !this.active
    }
  }
}
</script>

<style scoped>
.video-box{
  position: fixed;
  width: 56px;
  height: 56px;
  right: 25px;
  bottom: 25px;
}
.video-box img{
  width: 100%;
  height: 100%;
}
.video-alert{
  display: block;
  position: absolute;
  top: -90px;
  right: -15px;
  width: 170px;
  height: 89px;
}
.video-alert1{
  display: none;
  position: absolute;
  top: -90px;
  right: -16px;
  width: 170px;
  height: 89px;
  background: url('./../../../static/img/video-bg.png') no-repeat;
  background-size: 100%;
}
.video-alert.active{
  display: none;
}
.video-active{
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 80%;
  opacity: 0;
  z-index: 5;
}
.video-active1{
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 80%;
  opacity: 0;
  z-index: 5;
}
.video-alert1.active1{
  display: block;
}
.video-alert img{
  width: 100%;
  height: 100%;
}
.tab-box{
  position: relative;
  width: 100%;
  height: 100%;
}
.tab-icon1{
  position: absolute;
  left: 28px;
  top: 8px;
  width: 34px;
  height: 34px;
  background: url('./../../../static/img/upload.png') no-repeat;
  background-size: 100%;
}
.tab-icon2{
  position: absolute;
  right: 26px;
  top: 8px;
  width: 34px;
  height: 34px;
  background: url('./../../../static/img/shoot.png') no-repeat;
  background-size: 100%;
}
.tab-icon3{
  position: absolute;
  left: 16px;
  bottom: 20px;
  font-size: 14px;
  color: #333;
}
.tab-icon4{
  position: absolute;
  right: 16px;
  bottom: 20px;
  font-size: 14px;
  color: #333;
}
</style>
