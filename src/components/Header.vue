<template>
  <div class="header">
    <div class="navContainer container clearfix">
      <div class="logoContainer">
        <router-link :to="{ name: 'Home' }">
          <img src="../assets/logo.png"
               alt="" /></router-link>
      </div>
      <ul class="nav">
        <li>
          <router-link :to="{ name: 'Home' }">首页</router-link>
        </li>
        <li v-if='isLoading'>loading...</li>
        <li v-else
            v-for="item in channelList"
            :key="item.channelId">
          <router-link :to="{
              name: 'NewsChannel',
              params: {
                id: item.channelId
              }
            }">{{ item.name }}</router-link>
        </li>
      </ul>
      <div class="infoContainer">
        <template v-if='isLogining'>
          ...isLogining
        </template>
        <template v-else-if="userInfo&&userInfo.nickname&&!isLogining">
         <router-link :to="{name:'Personal'}">{{userInfo.nickname}}</router-link>         
          <a @click="handlerLoginOut"> 退出登录</a>
        </template>
        <template v-else>
          <span class="login">
            <router-link :to="{ name: 'Login' }"> 登录 </router-link>
          </span>
          <span class="register">
            <router-link :to="{ name: 'Register' }"> 注册 </router-link>
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Header",
  data () {
    return {
      // channelList: []
    };
  },
  computed: {
    ...mapState({
      channelList: state => state.newsInfo.channelList.slice(0, 5),
      isLoading: state => state.newsInfo.isLoading,
      userInfo: state => state.userInfo.userInfo,
      isLogining: state => state.userInfo.isLoading

    })
  },
  methods:{
    handlerLoginOut(){
      this.$store.dispatch('userInfo/clearUser')
      this.$router.push({
        name:'Login'
      })
    }
  }
  // created(){
  //   setTimeout(()=>{
  //   this.$store.dispatch('newsInfo/fetchIsLoading',false)
  //   },1000)

  //   this.$store.dispatch('newsInfo/fetchChannelList')
  // }

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
.navContainer {
  width: 1080px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
}
.navContainer a {
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

.infoContainer span {
  cursor: pointer;
  line-height: 60px;
  margin-right: 20px;
  color: #333;
}
.navContainer a.router-link-exact-active {
  color: brown;
}
</style>
