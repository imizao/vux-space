<template>
  <div class="vip">
    <div class="vip-top">
      <div class="img-box">
        <img src="static/img/mine-icon1.png" alt="">
      </div>
      <p class="vip-name">爱吃鱼的小猫</p>
      <div class="small-box">
        <i class="small-icon"></i>
        普通游客
      </div>
    </div>
    <div class="p10"></div>
    <div class="main-box">
      <h6 class="vip-h6">创智空间VIP会员</h6>
      <div class="vip-l" v-for="(item,index) in data" :key="index">
        <p class="vip-p1">{{item.month}}</p>
        <p class="vip-p2"><span class="vip-span">￥</span>{{item.sum}}</p>
        <p class="vip-p3">￥{{item.summed}}</p>
      </div>
    </div>
    <div class="p10"></div>
    <div class="foot-box">
      <h6 class="vip-h6">邀请码兑换</h6>
      <input class="vip-int" type="text">
      <p class="foot-text">验证</p>
    </div>
    <div class="flex-box">
      微信支付：<span class="flex-span">￥20.0</span>
      <div class="flex-int">立即支付</div>
    </div>
  </div>
</template>

<script>
const aData = [
  {
    month: '12个月',
    sum: 30,
    summed: 240
  },
  {
    month: '6个月',
    sum: 20,
    summed: 60
  },
  {
    month: '3个月',
    sum: 10,
    summed: 24
  },
  {
    month: '1个月',
    sum: 5,
    summed: 240
  },
  {
    month: '15天',
    sum: 3,
    summed: 60
  },
  {
    month: '7天',
    sum: 1,
    summed: 24
  }
]
export default {
  data () {
    return {
      data: aData
    }
  }
}
</script>

<style scoped>
.vip-top{
  position: relative;
  width: 100%;
  height: 90px;
  background-image: linear-gradient(to bottom, #7eceff, #248dff);
}
.img-box{
  position: absolute;
  left: 10px;
  top: 15px;
  width: 60px;
  height: 60px;
}
.img-box img{
  width: 100%;
  height: 100%;
}
.vip-name{
  position: absolute;
  left: 80px;
  top: 33px;
  font-size: 17px;
  color: #fff;
}
.small-box{
  position: absolute;
  right: 0;
  top: 28px;
  width: 137px;
  height: 34px;
  border-radius: 17px 0 0 17px;
  background-image: linear-gradient(to bottom, #4ac1ff, #248dff);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
  text-indent: 39px;
  line-height: 34px;
  font-size: 14px;
}
.small-icon{
  position: absolute;
  left: 15px;
  top: 6px;
  width: 22px;
  height: 22px;
  object-fit: contain;
  background: url('./../../../static/img/common-icon.png') no-repeat;
  background-size: 100%;
}
.main-box{
  float: left;
  width: 100%;
  height: auto;
  background: #fff;
  display: block;
  padding: 0 0 10px 0;
}
.vip-h6{
  font-size: 17px;
  color: #333333;
  line-height: 54px;
  text-indent: 2%;
}
.vip-l{
  position: relative;
  float: left;
  width: 30.66%;
  height: 130px;
  border-radius: 10px;
  margin-left: 2%;
  margin-bottom: 10px;
  background-color: #ffffff;
  box-shadow: 0 1px 5px 0 rgba(103, 108, 114, 0.4);
  text-align: center;
}
.vip-p1{
  padding-top: 10px;
  font-size: 17px;
  font-weight: 500;
  color: #333333;
  line-height: 40px;
}
.vip-p2{
  font-size: 36px;
  color: #e06707;
  line-height: 35px;
}
.vip-p3{
  font-size: 12px;
  font-weight: 500;
  color: #999;
  text-decoration: line-through;
  line-height: 17px;
}
.vip-span{
  font-size: 17px;
  font-weight: 500;
  color: #e06707;
}
.foot-box{
  position: relative;
  float: left;
  width: 100%;
  height: 90px;
  background: #fff;
  display: block;
  padding: 0 0 10px 0;
  margin-top: 10px;
}
.vip-int{
  position: absolute;
  left: 2%;
  top: 50px;
  width: 72%;
  height: 33px;
  border-radius: 2px;
  background-color: #eeeeee;
  padding-left: 10px;
  font-size: 14px;
  border: 0px;
  outline:none;
  cursor: pointer;
}
.foot-text{
  position: absolute;
  right: 16px;
  top: 44px;
  padding: 10px;
  font-size: 17px;
  color: #4a90e2;
}
.flex-box{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  box-shadow: 0 -2px 10px 0 rgba(103, 108, 114, 0.4);
  font-size: 14px;
  color: #333333;
  line-height: 50px;
  text-indent: 2%;
}
.flex-span{
  font-size: 19px;
  color: #e06707;
}
.flex-int{
  position: absolute;
  right: 0;
  top: 0;
  width: 150px;
  height: 50px;
  background-image: linear-gradient(to bottom, #ffee1a, #e06707);
  box-shadow: 0 2px 10px 0 rgba(80, 71, 69, 0.3);
  text-align: center;
  line-height: 50px;
  color: #fff;
}
</style>
