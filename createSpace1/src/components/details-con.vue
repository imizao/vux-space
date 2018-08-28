<template>
  <div class="detail">
    <group>
      <cell title="剧集" ></cell>
    </group>
    <scroller lock-y scrollbar-x>
      <div class="box1" v-bind:style="{'width': length+'px'}">
        <div class="box1-item" v-for="(i,index) in num" :key="index">
          <router-link to=""><span>{{' ' + i + ' '}}</span></router-link>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
import { Group, Cell, Scroller } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Scroller
  },
  data () {
    return {
      length: 0,
      num: 52,
    }
  },
  created () {
    this.getBarWidth(this.num)
  },
  methods: {
    getBarWidth(num) {
      this.length = num * 137 + (num - 1) * 5
      return this.length
    }
  }
}
</script>

<style >
.detail .weui-cell_access .weui-cell__ft{
  font-size: 12px;
}
.box1 {
  height: 87px;
  position: relative;
  background: #fff;
  padding-left: 10px;
}
.box1-item {
  width: 137px;
  height: 77px;
  background-color: #ccc;
  display:inline-block;
  margin-left: 5px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
</style>
