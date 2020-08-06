<template>
  <div class="header">
    <div class="navContainer container clearfix">
      <div class="logoContainer">
        <a href="https//www.baidu.com">
          <img src="../assets/logo.png" alt=""
        /></a>
      </div>
      <ul class="nav">
        <li>首页</li>
        <li>国内头条</li>
        <li>娱乐新闻</li>
        <li>教育新闻</li>
        <li>互联网新闻</li>
      </ul>
      <div class="infoContainer">
        <span class="login">登录</span>
        <span class="register">
          注册
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  height: 60px;
  z-index: 20;
  background: #000;
}
.navContainer{
  width: 1080px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
}
.navContainer a{
  color: #fff;
}
.logoContainer {

  width: 30px;
  vertical-align: middle;
}
.logoContainer img {
  width: 100%;
  cursor: pointer;
}
.nav li {
  display: inline-block;
  cursor: pointer;
  line-height: 60px;
  margin-right: 20px;
  color: #fff;
}
.nav li.active {
  color: blueviolet;
}
.infoContainer {
  /* float: right; */
}
.infoContainer span {
  cursor: pointer;
  line-height: 60px;
  margin-right: 20px;
  color: #333;
}
</style>
