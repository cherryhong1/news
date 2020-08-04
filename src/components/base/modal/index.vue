<template>
  <div class="modal">
    <slot>蒙层</slot>
  </div>
</template>

<script>
export default {
  name:'modal'
}
</script>

<style scoped>
.modal{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
z-index: 200;
}
</style>