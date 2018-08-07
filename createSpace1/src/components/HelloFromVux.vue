<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="123" :value="msg" is-link></cell>
    </group>
    <icon type="success" ></icon>
  </div>
</template>

<script>
import { Group, Cell, Icon, Card } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Icon,
    Card
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
