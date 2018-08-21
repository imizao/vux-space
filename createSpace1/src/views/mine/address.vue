<template>
  <div>
    <a-header :name="name"></a-header>
    <div class="p10"></div>
    <group class="box">
      <x-input title="收货人：" v-model="value1" ></x-input>
      <x-input title="联系方式：" v-model="value2" ></x-input>
      <x-address title="地址选择：" v-model="addressValue" raw-value :list="addressData" value-text-align="left" label-align="justify"></x-address>
      <x-textarea title="详细信息:" placeholder="请输入详细街道、小区、门牌号等…" :show-counter="false" :rows="3"></x-textarea>
    </group>
    <div class="int">保存</div>
  </div>
</template>

<script>
import aHeader from '@/components/mini/header'
import { Group, XInput, ChinaAddressData, XAddress, XTextarea} from 'vux'

export default {
  components: {
    Group,
    XInput,
    XAddress,
    XTextarea,
    aHeader
  },
  data () {
    return {
      name: '收货人地址填写',
      addressData: ChinaAddressData,
      addressValue: [],
      value1: '',
      value2: ''
    }
  }
}
</script>

<style >
.p10 {
  width: 100%;
  height: 10px;
}
.box{
  padding-bottom: 20px;
}
.box .weui-cells{
  margin-top: 0;
}
.int{
  margin: 20px auto 0;
  width: 93%;
  height: 44px;
  border-radius: 22px;
  background-image: linear-gradient(to bottom, #4ac1ff, #248dff);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  line-height: 44px;
  font-size: 17px;
  letter-spacing: 0.4px;
  color: #ffffff;
}
.box .weui-textarea {
  font-size: 14px;
  color: #999999;
}
</style>
