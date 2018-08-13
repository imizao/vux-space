<template>
  <div class="mine-box">
    <div class="mine-icon"><img src="../../static/img/mine-icon1.png" alt=""></div>
    <p class="mine-name">爱吃鱼的小猫</p>
    <div class="vip-box">
      <span class="vip-icon"></span>
      <p class="vip-text">升级成为vip</p>
    </div>
    <div class="num-box">
      2300
    </div>
    <div class="speed-box">
      <div class="speed-box1">
        <div class="speed-icon"></div>
        <div class="day-box d1 active">
          <div class="day"></div>
          <span class="day-text">+10</span>
        </div>
        <div class="day-box d2 active">
          <div class="day"></div>
          <i class="i-icon"></i>
          <span class="day-text">+10</span>
        </div>
        <div class="day-box d3 active">
          <div class="day"></div>
          <i class="i-icon"></i>
          <span class="day-text">+10</span>
        </div>
        <div class="day-box d4 active">
          <div class="day"></div>
          <i class="i-icon"></i>
          <span class="day-text">+10</span>
        </div>
        <div class="day-box d5 active">
          <div class="day"></div>
          <i class="i-icon"></i>
          <span class="day-text">+10</span>
        </div>
        <div class="day-box d6 ">
          <div class="day"></div>
          <i class="i-icon"></i>
          <span class="day-text">+10</span>
        </div>
        <div class="day-box d7 ">
          <i class="i-icon"></i>
          <div class="day"></div>
          <span class="day-text">+10</span>
        </div>
      </div>
    </div>
    <div class=""></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mine-box {
  position: relative;
  width: 100%;
  height: 275px;
  background-image: linear-gradient(to bottom, #7eceff, #248dff);
}
.mine-icon {
  position: absolute;
  left: 15px;
  top: 10px;
  width: 60px;
  height: 60px;
}
.mine-icon img{
  width: 100%;
}
.mine-name {
  position: absolute;
  left: 85px;
  top: 28px;
  color: #fff;
  font-size: 17px;
}
.vip-box{
  position: absolute;
  right: 0;
  top: 23px;
  width: 138px;
  height: 34px;
  border-radius: 17px 0 0 17px;
  background-image: linear-gradient(to bottom, #4ac1ff, #248dff);
}
.vip-text {
  color: #fff;
  font-size: 14px;
  line-height: 34px;
  text-indent: 40px;
}
.vip-icon{
  position: absolute;
  left: 15px;
  top: 6px;
  width: 22px;
  height: 22px;
  background: url('./../../static/img/vip-icon.png') no-repeat;
  background-size: 100%;
}
.num-box{
  height: 43px;
  padding-top: 85px;
  color: #ffd827;
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;
  text-align: center;
  font-family: SFProText;
}
.speed-box{
  position: relative;
  width: 100%;
  padding:10px 25px;
  box-sizing: border-box;
}
.speed-box1{
  position: relative;
  width: 100%;
  height: 40px;
}
.speed-icon{
  position: absolute;
  width: 96%;
  height: 5px;
  margin-top: 8px;
  background: rgba(255,255,255,.5);
  background-size: 100%;
  border-radius: 4px;
}
.day-box{
  position: relative;
  width: 16.6%;
}
.d1{
  left: 0;
  top: 0;
}
.d2{
  left: 16%;
  top: 0;
}
.d3{
  left: 32%;
  top: 0;
}
.d4{
  left: 48%;
  top: 0;
}
.d5{
  left: 64%;
  top: 0;
}
.d6{
  left: 80%;
  top: 0;
}
.d7{
  left: 96%;
  top: 0;
}
.e2{
  left: -16%;
  top: 0;
}
.day{
  position: absolute;
  width: 20px;
  height: 20px;
  background: #f0f9ff;
  border-radius: 10px;
  z-index: 5;
  transition-delay: 900ms;
}
.i-icon{
  position: absolute;
  left: -95%;
  top: 8px;
  width: 0%;
  height: 5px;
  background: rgba(255,255,255,.5);
  z-index: 2;
  border-radius: 3px;
  transition: all 1s ;
  -webkit-transition: all 1s;
}
.day-text{
  position: absolute;
  top: 20px;
  color: #fff;
  display: none;
}
.active .day{

  background: #ffd827;
}
.active .i-icon{
  width: 100%;
  background: #ffd827;
}
.active .day-text{
  display: block;
}
</style>
