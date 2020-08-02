<template>
  <div id="app">
    <Banner :banners="banners" />
    <ChannelList @changeChannelId='changeChannelId'/>
  </div>
</template>

<script>
import Banner from "./components/Banner";
import ChannelList from './components/news/channelList'
export default {
  name: "App",
  components: {
    Banner,
    ChannelList
  },
  data() {
    return {
      banners: [
        {
          url: "https://baidu.com",
          path: require("./assets/banner/banner1.jpg"),
          title: "夏日钜惠"
        },
        {
          url: "https://baidu.com",
          path: require("./assets/banner/banner2.jpg"),
          title: "优加霸王餐"
        },
        {
          url: "https://baidu.com",
          path: require("./assets/banner/banner3.jpg"),
          title: "酷学一夏"
        }
      ]
    };
  },methods:{
    changeChannelId(id){
      console.log(id)
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
