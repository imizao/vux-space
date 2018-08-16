<template>
  <div class="header">
    <span class="p-box">
      {{name}}
      <i class="p-icon1"></i>
      <i class="p-icon2"></i>
      <i class="p-icon3"></i>
      <i class="p-icon4"></i>
      <i class="p-icon5"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style scoped>
.header{
  width: 100%;
  height: 44px;
  text-align: center;
  background: #fff;
}
.p-box{
  position: relative;
  line-height: 44px;
}
.p-icon1{
  position: absolute;
  left: -23px;
  top: -5px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: #F89D91;
}
.p-icon2{
  position: absolute;
  left: -15px;
  top: 15px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  opacity: 0.8;
  background: #74C7FF;
}
.p-icon3{
  position: absolute;
  right: -13px;
  top: -5px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  opacity: 0.5;
  background: #FF8574;
}
.p-icon4{
  position: absolute;
  right: -22px;
  top: 2px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  opacity: 0.6;
  background: #F4B63D;
}
.p-icon5{
  position: absolute;
  right: -12px;
  top: 19px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #90D2FF;
}
</style>
