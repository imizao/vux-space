<template>
  <div>
    <div class="header">
      <span class="p-box">
        我的收藏
        <i class="p-icon1"></i>
        <i class="p-icon2"></i>
        <i class="p-icon3"></i>
        <i class="p-icon4"></i>
        <i class="p-icon5"></i>
      </span>
      <span class="p-text1" @click="aaActive()" :class="{display1: aActive}">编辑</span>
      <span class="p-text1" @click="aaActive()" :class="{display1: bActive}">取消</span>
    </div>
    <div class="p10"></div>
    <div class="col-box">
      <div class="col-l" v-for="(item, index) in fruits" :key="index">
        <img :src="'static/img/index/'+item.img" alt="">
        <div class="col-name">
          {{item.name}}
          <div class="check_css3" :class="{display: aActive}">
            <span><input type="checkbox" class="input_check" :checked="fruitIds.indexOf(item.fruitId) > -1" :id="'check'+item.fruitId"  @click='checkedOne(item.fruitId)' name="del" >
              <label :for="'check'+item.fruitId"></label>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="check-box" :class="{display: aActive}">
      <div class="check-all" @click='checkedAll()'>全选</div>
      <div class="check-del" @click="deleteFruits()">删除({{newList.length}})</div>
      <span class="check-lie"></span>
    </div>
    <a-add></a-add>
  </div>
</template>

<script>
import aAdd from './add'
export default {
  components: {
    aAdd
  },
  data () {
    return {
      isActive: false,
      aActive: false,
      bActive: true,
      fruits: [
        {
          fruitId:'0',
          img: 'program5.png',
          url: '/detail',
          name:'闯堂兔'
        },
        {
          fruitId:'1',
          img: 'program9.png',
          url: '/detail',
          name:'闯堂兔'
        },
        {
          fruitId:'2',
          img: 'program6.png',
          url: '/detail',
          name:'闯堂兔'
        },
        {
          fruitId:'3',
          img: 'program7.png',
          url: '/detail',
          name:'闯堂兔'
        },
        {
          fruitId:'4',
          img: 'program8.png',
          url: '/detail',
          name:'闯堂兔'
        }
      ],
      fruitIds: [],
      newList: [],
      isCheckedAll: false
    }
  },
  methods: {
    aaActive () {
      this.aActive = !this.aActive
      this.bActive = !this.bActive
    },
    CheckItem: function(item){
      item.state = !item.state;
      console.log(this.items);
    },
    checkedOne (fruitId) {
        let idIndex = this.fruitIds.indexOf(fruitId)
        if (idIndex >= 0) {
          // 如果已经包含了该id, 则去除(单选按钮由选中变为非选中状态)
          this.fruitIds.splice(idIndex, 1)
          console.log(this.fruitIds)
        } else {
          // 选中该checkbox
          this.fruitIds.push(fruitId)
          console.log(this.fruitIds)
        }
    },
    checkedAll () {
      this.isCheckedAll = !this.isCheckedAll
      if (this.isCheckedAll) {
        // 全选时
        this.fruitIds = []
        this.fruits.forEach(function (fruit) {
          this.fruitIds.push(fruit.fruitId)
        }, this)
        console.log(this.fruitIds)
      } else {
        this.fruitIds = []
        console.log(this.fruitIds)
      }
    },
    deleteFruits () {
      if(this.fruitIds.length > 0) {
        this.fruitIds.map(index => {
          console.log(index)
          this.fruits.map(i => {
            if (i.fruitId == index){
              this.fruits.splice(i.fruitId,1)
              this.fruitIds.splice(index,1)
              this.newList=this.fruitIds;
            }
          })
        })
      }
    }

  },
  mounted(){
    //初始化，把prolist赋值给newList。默认显示所有目标
    this.newList=this.fruitIds;
  }
}
</script>

<style scoped>
.header{
  width: 100%;
  height: 44px;
  text-align: center;
  background: #fff;
}
.p-box{
  position: relative;
  line-height: 44px;
}
.p-icon1{
  position: absolute;
  left: -23px;
  top: -5px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: #F89D91;
}
.p-icon2{
  position: absolute;
  left: -15px;
  top: 15px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  opacity: 0.8;
  background: #74C7FF;
}
.p-icon3{
  position: absolute;
  right: -13px;
  top: -5px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  opacity: 0.5;
  background: #FF8574;
}
.p-icon4{
  position: absolute;
  right: -22px;
  top: 2px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  opacity: 0.6;
  background: #F4B63D;
}
.p-icon5{
  position: absolute;
  right: -12px;
  top: 19px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #90D2FF;
}
.p-text1{
  position: absolute;
  right: 10px;
  top: 10px;
}
.col-box{
  float: left;
  height: auto;
  display: block;

}
.col-box:before,.col-box:after{
  display: inline-block;
  content: '';
}
.col-box:after{
  clear:both;
}
.col-l{
  float: left;
  width: 47%;
  margin-left: 2%;
  height: auto;
  background: #fff;
}
.col-l img{
  display: block;
  width: 100%;
  height: 100%;
}
.col-name{
  position: relative;
  line-height: 30px;
  text-indent: 5px;
  font-size: 14px;
  color: #333;
}
.col-icon{
  position: absolute;
  right: 5px;
  top: 7px;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  background-color: #fff;
  border: 1px solid #999;
  box-sizing: border-box;
}
.col-icon.active{
  background-color: #248dff;
  border: 1px solid #248dff;
}

.display1{
  display: none;
}
.check_css3.display{
  display: block!important;
}
.check-box.display{
  display: block!important;
}
.check-box{
  display: none;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  box-shadow: 0 -2px 10px 0 rgba(103, 108, 114, 0.4);
  z-index: 10;
}
.check-all {
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  text-align: center;
  line-height: 50px;
  font-size: 17px;
  color: #248dff;
}
.check-del {
  position: absolute;
  left: 50%;
  top: 0;
  width: 50%;
  height: 100%;
  line-height: 50px;
  text-align: center;
  color: #e06707;
}
.check-lie{
  position: absolute;
  left: 50%;
  top: -50%;
  width: 1px;
  height: 200%;
  background: #999;
  transform: scale(.5);
}
.check_css3 {
  display: none;
  position: absolute;
  right: 7px;
  top: 4px;
}

</style>
