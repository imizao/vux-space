<template>
   <div class="page page-current courseInfo">
        <div id="J_prismPlayer" >
          <video id="video1" controls="controls" :src="videoUrl" preload="auto" playsinline="" x-webkit-airplay="allow" x5-video-player-type="h5"  x5-video-player-fullscreen="true" x5-video-orientation="portraint" width="100%" height="100%" webkit-playsinline="true"  autoplay="true" >
            Your browser does not support the video tag.
          </video >
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      videoList: ['http://www.isjs.net/feiyu.mp4','http://www.isjs.net/720720.mp4','http://www.isjs.net/a1920.mp4','http://www.isjs.net/gjzncydjsxcp2018.mp4'],
      videoUrl: 'http://www.isjs.net/456.mp4'
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

</style>
