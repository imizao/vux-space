<template>
   <div class="page page-current courseInfo">
        <div id="J_prismPlayer" >
          <video id="video1" controls="controls" :src="videoUrl" preload="auto" playsinline="" x-webkit-airplay="allow" x5-video-player-type="h5"  x5-video-player-fullscreen="true" x5-video-orientation="portraint" width="100%" height="100%" webkit-playsinline="true" playsinline="true" autoplay="true" >
            Your browser does not support the video tag.
          </video >
        </div>
        <!-- <button class="btn" @click="aClick(0)">飞鱼</button>
        <button class="btn" @click="aClick(1)">720</button>
        <button class="btn" @click="aClick(2)">1920(默认)</button>
        <button class="btn" @click="aClick(3)">1920</button>
        <button class="btn" @click="aClick(4)">腾讯云</button> -->
    </div>
</template>
<script>
export default {
  data () {
    return {
      videoList: ['http://www.isjs.net/feiyu.mp4','http://www.isjs.net/720720.mp4','http://www.isjs.net/a1920.mp4','http://www.isjs.net/7201920.mp4', 'http://1256976636.vod2.myqcloud.com/20d64332vodgzp1256976636/1af5fd787447398156965268702/f0.mp4'],
      videoUrl: 'http://1256976636.vod2.myqcloud.com/20d64332vodgzp1256976636/436376b75285890781445053789/iQ6Fa2yoWq4A.mp4'
    }
  },
  methods: {
    aClick (index) {
      this.videoUrl = this.videoList[index]
    }
  }
}
</script>


<style >
#J_prismPlayer {
  position: relative;
  z-index: 8888;
  height: 210px;
  background: #000;
  width: 100%;
  overflow: hidden;
}
.btn{
  margin: 20px auto 0;
  width: 17%;
  height: 44px;
  border-radius: 22px;
  background-image: linear-gradient(to bottom, #4ac1ff, #248dff);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  line-height: 44px;
  font-size: 17px;
  letter-spacing: 0.4px;
  color: #ffffff;
}
.control {
  height: 45px;
  background: rgba(34,37,44,.9);
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0 4%;
  line-height: 45px;
  color:#aaacb4;
  font-size: 15px;
}
progress { -webkit-appearance: none;padding:8px 10px;width: 205px}
/*FireFox浏览器已经完成的进度条，使用progress::-moz-progress-bar { }*/
/*谷歌浏览器-webkit-progress-bar指全部的进度条progress-value指已经完成的进度*/
::-webkit-progress-inner-element {height: 4px;border-radius: 5px;}
::-webkit-progress-bar {background: #6e747a;border-radius: 5px;}
::-webkit-progress-value { background: #00ba6b;border-radius: 5px}
::-moz-progress-bar { background: #00ba6b;border-radius: 5px; }
::-ms-fill { background: #00ba6b; }


</style>
