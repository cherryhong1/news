<template>
  <div class="errorContainer">
    <div :class="{isCenter:msg}" :style="{'visibility': 'msg'?'visibility':'hidden'}">
      {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'error',
  props: {
    msg: {
      default:'',
      type:String
    }
  }
}
</script>

<style scoped>
.errorContainer {
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  color: red;
text-align: left;
margin-left: 70px;
height: 20px;
}
</style>