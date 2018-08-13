<template>
   <div class="page page-current courseInfo">
        <div id="J_prismPlayer" >
          <video id="video1" controls="controls" src="http://cloud.video.taobao.com/play/u/2554695624/p/1/e/6/t/1/fv/102/28552074" preload="auto" playsinline="" x-webkit-airplay="allow" x5-video-player-type="h5"  x5-video-player-fullscreen="true" x5-video-orientation="portraint" width="100%" height="100%" webkit-playsinline="true" playsinline="true" autoplay="true" >
            Your browser does not support the video tag.
          </video >
          <!-- <div  class="control">
            <span id="aplay" @click="aplay()">播放</span>
            {{this.CurtimeText}}
            <progress v-bind:value="this.pgCurtime" v-bind:max="this.pgTotalTime" @click="progressFun($event)"></progress>
            {{this.TotalTimeText}}
          </div> -->
        </div>
    </div>
</template>
<script>
// import {videoCount} from '../assets/js/api'
export default {
  data () {
    return {
      pgCurtime:0, //未格式化的当前播放时间
      pgTotalTime:0, //未格式化的总时间
      CurtimeText:'00:00', //格式化的当前播放时间
      TotalTimeText:'00:00',//未格式化的总时间
    }
  },
  components: {
  },
  methods: {
    // aplay (){
    //     var video = document.getElementById("video1")
    //     // var aPlay = document.getElementById("aplay")
    //     if (video.paused) {
    //         video.play()
    //         document.getElementById("aplay").innerHTML="暂停"
    //     } else {
    //         video.pause()
    //         document.getElementById("aplay").innerHTML="播放"
    //        this.videoTime()  //暂停时将数据传给接口
    //     }
    //     if ( video.duration == video.currentTime){
    //       this.videoTime()
    //     }
    // },
    videoTime (){
        let data = {
          watch_length:this.pgCurtime,
          total_time: this.pgTotalTime,
        }
        let parame1 = qs.stringify(data)
        console.log(parame1)
        // videoCount(parame1).then((res) => {
        //   if (res.code == 0) {
        //     console.log("提交成功")
        //   }
        // }).catch((err) => {
        //   console.log(err)
        // })
    },
    timeupdate (){
        var video1 = document.getElementById("video1")
        this.pgCurtime = video1.currentTime
        this.pgTotalTime = video1.duration
        this.CurtimeText = this.getFormatTime(video1.currentTime)
        this.TotalTimeText = this.getFormatTime(video1.duration)
    },
    progressFun (){
        var video1 = document.getElementById("video1")
        video1.currentTime = (event.offsetX / 205) * video1.duration
    },
    // <!-- 格式化时间为00:00:00这种形式 -->
    getFormatTime (time) {
        var time = time;
        var h = parseInt(time/3600),
            m = parseInt(time%3600/60),
            s = parseInt(time%60);
        h = h < 10 ? "0"+h : h;
        m = m < 10 ? "0"+m : m;
        s = s < 10 ? "0"+s : s;
        console.log(h+":"+m+":"+s)
        if(h=='00'){
          return m+":"+s;
        }else{
          return h+":"+m+":"+s;
        }
    },
  },
// 事实上有非常简单的方式，就是在created里增加监控时间
  created () {
     this.videoSrc = document.getElementById("video1")
     var this1 =this
     if (this.videoSrc==null){
      setTimeout(function(){
        var video = document.getElementById('video1')
        video.addEventListener("timeupdate",this1.timeupdate)  //iphone的时间进度条
        video.addEventListener('play',function(){
            alert("播放监控")
        });
        video.addEventListener('pause',function(){
            this1.videoTime()  //当用户暂停时，调用方法将数据传给接口
        });

      },5000);
     }
  },
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
