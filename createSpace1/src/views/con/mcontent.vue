<template>
  <div>
    <i-content></i-content>
    <i-content></i-content>
    <i-content></i-content>
    <i-content></i-content>
    <div class="p10"></div>
  </div>
</template>

<script>
import iContent from '@/components/icontent'
export default {
  components: {
    iContent
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
