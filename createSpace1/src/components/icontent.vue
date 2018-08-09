<template>
  <div>
    <div class="p10"></div>
    <a-content></a-content>
  </div>
</template>

<script>
import aContent from './acontent'

export default {
  components: {
    aContent
  }
}
</script>

<style scoped>
.p10{
  width: 100%;
  height: 10px;
  background: #f0f3f7;
}
</style>
