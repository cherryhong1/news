<template>
  <div id="app">
    <Banner :banners="banners" />
    <ChannelList @changeChannelId='changeChannelId'/>
   <newsList :news="news"/>
  </div>
</template>

<script>
import Banner from "./components/Banner";
import ChannelList from './components/news/channelList';
import newsList from './components/news/newsList';
import {getNewsList} from './services/api/getNewsInfo'

export default {
  name: "App",
  components: {
    Banner,
    ChannelList,
    newsList
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
      ],
      currentChannelId:'',//当前的栏目id
      news:[]//当前获取的新闻列表
    };
  },
  methods:{
    changeChannelId(id){
      console.log(id)
      this.currentChannelId= id;
    },

  },
  // computed:{
  //   newslist(){
  //     getNewsList(this.currentChannelId).then(res=>{
  //      return res
  //   })
  //   }
  // },
  async created(){
    console.log()
    // var curId='5572a108b3cdc86cf39001cd' 
       await  getNewsList(this.currentChannelId).then(res=>{
         console.log(res)
      this.news = res
    })
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
