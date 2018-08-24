<template>
  <div>
    <a-header :name="name"></a-header>
  </div>
</template>

<script>
import aHeader from '@/components/mini/header'
export default {
  components: {
    aHeader
  },
  data () {
    return {
      name: '我的视频'
    }
  }
}
</script>

<style scoped>

</style>
