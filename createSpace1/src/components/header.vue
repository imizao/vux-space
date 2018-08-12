<template>
  <div class="index-m">
    <flexbox :gutter="0" class="h48">
      <flexbox-item :span="2.16">
        <div class="logo-box">
          <router-link to="index"><div class="logo"></div></router-link>
        </div>
      </flexbox-item>
      <flexbox-item :span="8.24">
        <search placeholder=" " ></search>
      </flexbox-item>
      <flexbox-item :span="1.6">
        <div class="mine-box">
          <router-link to="mine"><div class="mine"></div></router-link>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>
<script>
import { Flexbox, FlexboxItem, Spinner, Search } from 'vux'

export default {
  components: {
    Flexbox,
    FlexboxItem,
    Spinner,
    Search
  }
}
</script>

<style>
.h48{
  height: 48px;
}
.logo-box{
  padding: 10px 0 5px 10px;
  width: 100%;
  box-sizing: border-box;
}
.logo{
  width: 47px;
  height: 33px;
  background: url('../../static/img/logo.png') no-repeat;
  background-size: 100%;
}
.mine-box{
  position: relative;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
}
.mine{
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background: url('../../static/img/mine-icon.png') no-repeat right;
  background-size: 100%;
}
.index-m .weui-search-bar{
  padding: 0;
  height: 34px;
  border-radius: 17px;
}
.index-m .weui-search-bar__label{
  text-align: right;
  border-radius: 17px;
  background: #efeff4;
}
.index-m .weui-search-bar:before{
  content: none;
}
.index-m .weui-search-bar:after{
  content: none;
}
.index-m .weui-search-bar__form:after{
  content: none;
}
.index-m .weui-search-bar__form{
  background:none;
  border-radius: 17px;
}
.weui-search-bar__label .weui-icon-search{
  margin-top: 5px;
}
.index-m .weui-search-bar__box .weui-icon-search {
  top: 3px;
}
.index-m .weui-search-bar__cancel-btn{
  margin-right: 10px;
  line-height: 32px;
  color: #0574ed;
}
.index-m .vux-search-fixed{
  margin-top: 9px;
}
.index-m .weui-search-bar__box .weui-search-bar__input{
  height: 1.6em;
  line-height: 1.6em;
}
.index-m .weui-search-bar__box .weui-icon-clear{
  line-height: 33px;
}
</style>
