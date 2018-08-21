<template>
  <div class="gift-box ">
    <div class="gift-img">
      <img src="static/img/gift1.jpg" alt="">
    </div>
    <span class="gift-text1">1800积分</span>
    <span class="gift-text2">￥18.00</span>
    <span class="gift-text3">熊出没毛绒公仔</span>
    <span class="gift-text4">2018-09-29</span>
    <span class="apx"></span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.gift-box{
  position: relative;
  width: 100%;
  height: 93px;
  padding: 5px 10px;
  box-sizing: border-box;
  background: #fff;
}
.apx{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 200%;
  height: 1px;
  background: #eee;
  border-bottom: #eee 1px solid;
  transform: scale(.5);
  transform-origin: left bottom;
}
.gift-img{
  position: absolute;
  left: 10px;
  top: 5px;
  width: 83px;
  height: 83px;
}
.gift-img img{
  display: block;
  width: 100%;
  height: 100%;
}
.gift-text1{
  position: absolute;
  left: 103px;
  top: 10px;
  font-size: 17px;
  font-weight: 500;
  color: #e06707;
}
.gift-text2{
  position: absolute;
  left: 180px;
  top: 15px;
  font-size: 12px;
  color: #999999;
  text-decoration:line-through;
}
.gift-text3{
  position: absolute;
  left: 103px;
  top: 34px;
  font-size: 14px;
  color: #333333;
}
.gift-text4{
  position: absolute;
  left: 103px;
  top: 66px;
  font-size: 12px;
  color: #666666;
}
</style>
