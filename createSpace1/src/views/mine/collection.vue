<template>
  <div>
    <div class="header">
      <span class="p-box">
        我的收藏
        <i class="p-icon1"></i>
        <i class="p-icon2"></i>
        <i class="p-icon3"></i>
        <i class="p-icon4"></i>
        <i class="p-icon5"></i>
      </span>
      <span class="p-text1" @click="aaActive()" :class="{display1: aActive}">编辑</span>
      <span class="p-text1" @click="aaActive()" :class="{display1: bActive}">取消</span>
    </div>
    <div class="p10"></div>
    <div class="col-box">
      <div class="col-l">
        <img src="static/img/index/program5.png" alt="">
        <div class="col-name">
          闯堂兔
          <div class="b-active" :class="{display: aActive}"><span class="col-icon" @click="iActive()" :class="{active: isActive}"></span></div>
        </div>
      </div>
      <div class="col-l">
        <img src="static/img/index/program5.png" alt="">
        <div class="col-name">
          闯堂兔
          <div class="b-active" :class="{display: aActive}"><span class="col-icon" @click="iActive()" :class="{active: isActive}"></span></div>
        </div>
      </div>
      <div class="col-l">
        <img src="static/img/index/program5.png" alt="">
        <div class="col-name">
          闯堂兔
          <div class="b-active" :class="{display: aActive}"><span class="col-icon" @click="iActive()" :class="{active: isActive}"></span></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      isActive: false,
      aActive: false,
      bActive: true
    }
  },
  methods: {
    aaActive () {
      this.aActive = !this.aActive
      this.bActive = !this.bActive
    },
    iActive () {
      this.isActive = !this.isActive
    }
  }
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
.p-text1{
  position: absolute;
  right: 10px;
  top: 10px;
}
.col-box{
  float: left;
  height: auto;
  display: block;

}
.col-box:before,.col-box:after{
  display: inline-block;
  content: '';
}
.col-box:after{
  clear:both;
}
.col-l{
  float: left;
  width: 47%;
  margin-left: 2%;
  height: auto;
  background: #fff;
}
.col-l img{
  display: block;
  width: 100%;
  height: 100%;
}
.col-name{
  position: relative;
  line-height: 30px;
  text-indent: 5px;
  font-size: 14px;
  color: #333;
}
.col-icon{
  position: absolute;
  right: 5px;
  top: 7px;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  background-color: #fff;
  border: 1px solid #999;
  box-sizing: border-box;
}
.col-icon.active{
  background-color: #248dff;
  border: 1px solid #248dff;
}
.b-active{
  display: none;
}
.display{
  display: block;
}
.display1{
  display: none;
}
</style>
