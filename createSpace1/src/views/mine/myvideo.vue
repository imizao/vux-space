<template>
  <div>
    <a-header :name="name"></a-header>
    <!-- 没有url 没有length -->
    <div v-if="url == '' && videoData.length == 0">
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
    <!-- 有url -->
    <div class="my-video" v-else-if="url != ''">
      <group>
        <x-input placeholder="标题"></x-input>
        <x-textarea :max="30" name="description" placeholder="提示"></x-textarea>
        <div class="my-video-img">
          <div class="my-video-box">
            <video :src="url" width="100%" height="100%"></video>
          </div>
        </div>
      </group>
      <div class="upload"></div>
    </div>
    <!-- 有length -->
    <div class="video-length" v-else-if="url == '' && videoData.length > 0">
      <div class="v-mian" v-for="(item,index) in videoData" :key="index">
        <div class="v-img">
          <video :src="item.url" width="100%" height="100%"></video>
        </div>
        <div class="v-title">{{item.title}}</div>
        <div class="v-con">{{item.con}}</div>
        <div class="v-success" v-if="item.start == 2"></div>
        <div class="v-underway" v-else-if="item.start == 1"></div>
        <div class="v-false" v-else-if="item.start == 0"></div>
      </div>
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
  </div>
</template>

<script>
import aHeader from '@/components/mini/header'
import aError from '@/components/error'
import { XTextarea, Group, XInput } from 'vux'

const videoData = [
  {
    url: 'http://www.isjs.net/gjzncydjsxcp2018.mp4',
    title: '我是一个标题',
    con: '我是一个简介内容',
    start: '2'
  },
  {
    url: 'http://www.isjs.net/gjzncydjsxcp2018.mp4',
    title: '我是一个标题',
    con: '我是一个简介内容',
    start: '1'
  },
  {
    url: 'http://www.isjs.net/gjzncydjsxcp2018.mp4',
    title: '我是一个标题1',
    con: '我是一个简介内容2',
    start: '0'
  }
]

export default {
  components: {
    aHeader,
    aError,
    XTextarea,
    Group,
    XInput
  },
  data () {
    return {
      name: '我的视频',
      active: false,
      url: '',
      videoUrl: 'http://www.isjs.net/gjzncydjsxcp2018.mp4',
      videoData: videoData
    }
  },
  methods: {
    changeTab () {
      this.active = !this.active
    }
  }
}
</script>

<style >
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
.my-video-img{
  width: 100%;
  height: 137px;
  border-top: 1px solid #eee;
  padding: 25px 10px 20px;
  box-sizing: border-box;
}
.my-video-box{
  width: 163px;
  height: 100%;
}
.video-img{
  text-align: left;
  margin: 0 100px 0 0;
}
.upload{
  position: fixed;
  right: 19px;
  bottom: 16px;
  width: 69px;
  height: 69px;
  background: url('./../../../static/img/fba2.png') no-repeat;
  background-size: 100%;
}
.my-video .weui-cells {
  margin-top: 10px;
}
.video-length{
  margin-top: 10px;
  border-bottom: 1px solid #eee;
}
.v-mian{
  position: relative;
  width: 100%;
  padding: 10px 0;
  height: 70px;
  background: #fff;
  border-top: 1px solid #eee;
}
.v-img{
  width: 122px;
  height: 100%;
}
.v-title{
  position: absolute;
  left: 132px;
  top: 10px;
  font-size: 17px;
  color: #333;
}
.v-con{
  position: absolute;
  left: 132px;
  top: 38px;
  width: 233px;
  font-size: 14px;
  color: #999;
}
.v-success{
  position: absolute;
  top: 10px;
  right: 6px;
  width: 50px;
  height: 50px;
  background: url('./../../../static/img/adopted.png') no-repeat;
  background-size: 100%;
}
.v-underway{
  position: absolute;
  top: 10px;
  right: 6px;
  width: 50px;
  height: 50px;
  background: url('./../../../static/img/in-progress.png') no-repeat;
  background-size: 100%;
}
.v-false{
  position: absolute;
  top: 10px;
  right: 6px;
  width: 50px;
  height: 50px;
  background: url('./../../../static/img/not-adopted.png') no-repeat;
  background-size: 100%;
}
</style>
