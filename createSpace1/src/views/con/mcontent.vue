<template>
  <div>
    <div >
      <div class="p10"></div>
      <flexbox :gutter="5" v-for="(item, index) in data" :key="index">
        <flexbox-item :span="6" v-for="(m, n) in item.data" :key="n">
          <b-content :data="m"></b-content>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="p10"></div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
import bContent from '@/components/bcontent'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    bContent
  },
  data () {
    return {
      data: '',
      aLength: 0
    }
  },
  beforeCreate () {
    this.$http.get('/index')
    .then(response => {
      this.data = response.data.data
      this.aLength = this.data.length / 2
      console.log(this.data.length)
    })
    .catch(function (code) {
      console.log(code)
    });
  },
  methods: {

  }
}
</script>

<style scoped>
.p10{
  width: 100%;
  height: 10px;
  background: #f0f3f7;
}
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
