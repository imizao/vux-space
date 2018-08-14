<template>
  <div>
    <router-link to="/details">
        <div class="con-img">
          <img src="static/img/img.png" alt="">
          <p class="con-p">闯堂家族</p>
        </div>
      </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.con-img img{
  width: 100%;
}
.con-p{
  height: 23px;
  line-height: 19px;
  font-size: 14px;
  text-indent: 10px;
  color: #333;
}
.vux-flex-row{
  overflow-x: hidden;
  background: #fff;
}
</style>
