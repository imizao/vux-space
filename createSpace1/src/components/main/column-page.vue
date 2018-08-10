<template>
  <div>
    <a-header></a-header>
    <c-tab></c-tab>
    <router-view></router-view>
  </div>
</template>

<script>
import aHeader from '@/components/header'
import cTab from '@/components/c-tab'

export default {
  components: {
    aHeader,
    cTab
  }
}
</script>

<style scoped>

</style>
