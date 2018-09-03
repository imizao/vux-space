<template>
  <div>
    <div >
      <div class="p10"></div>
      <flexbox :gutter="5" v-for="(item, index) in bData" :key="index" style="margin-bottom:10px;overflow: hidden;">
        <flexbox-item :span="6" v-for="(m, n) in item.data" :key="n">
          <b-content :data="m"  ></b-content>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="p10"></div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
import bContent from '@/components/bcontent'

const aData =[
    {
      'data': [
        {
          'img': 'program11.png',
          'name': '闯堂兔',
          'url': '/details'
        },
        {
          'img': 'program12.png',
          'name': '闯堂兔',
          'url': '/details'
        }
      ]
    },
    {
      'data': [
        {
          'img': 'program11.png',
          'name': '闯堂兔',
          'url': '/details'
        },
        {
          'img': 'program12.png',
          'name': '闯堂兔',
          'url': '/details'
        }
      ]
    },

  ]

export default {
  components: {
    Flexbox,
    FlexboxItem,
    bContent
  },
  data () {
    return {
      data: '',
      bData: aData,
      aLength: 0
    }
  },
  beforeCreate () {
    // this.$http.get('/index')
    // .then(response => {
    //   this.data = response.data.data
    //   this.aLength = this.data.length / 2
    //   // console.log(this.data.length)
    // })
    // .catch(function (code) {
    //   console.log(code)
    // })
  },
  created: function () {
    sessionStorage.setItem('tab', 0)
    this.$store.state.count = sessionStorage.getItem('tab')
    console.log('cookie'+sessionStorage.getItem('tab'))
    console.log(`this.$store.state.count ${this.$store.state.count}`)
  },
  methods: {

  }
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
