<template>
  <div>
    <div class="p100"></div>
    <div class="error-img">
      <img src="static/img/video-null.png" alt="">
    </div>
    <p class="error-text">你还没有拍摄过视频…</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.p100{
  width: 100%;
  height: 100px;
}
.error-img{
  width: 135px;
  height: 135px;
  margin: 0 auto;
}
.error-img img{
  width: 100%;
  height: 100%;
}
.error-text{
  width: 100%;
  line-height: 20px;
  font-size: 14px;
  color: #666;
  text-align: center;
  padding: 10px 0;
}
</style>
