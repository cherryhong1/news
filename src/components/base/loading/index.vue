<template>
  <div class="loading">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style scoped>
.loading {
  margin: 100px auto 0;
  width: 150px;
  text-align: center;
}
.loading span {
   width: 30px;
  height: 30px;
  background-color: #67CF22; 
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: load 1.4s infinite ease-in-out;
  animation: load 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  margin-right: 10px;
}
.loading span:first-child {
  animation-delay: -0.4s;
}
.loading span:nth-child(2) {
  animation-delay: -0.2s;
}


@keyframes load {
  0%,
  80%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>