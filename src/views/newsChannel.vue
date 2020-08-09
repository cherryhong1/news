<template>
  <div class="channelList contanier">
    <p class="titleName">{{curChannelName}}</p>
    <Loading v-if="isLoading"></Loading>
    <newList :news='news'
             v-else></newList>
    <Page :curPage="curPage"
          :totalIist="totalIist"
          :limitPage="limitPage"
          @pageChange="pageChange"></Page>
  </div>
</template>

<script>
import Page from "../components/base/page";
import newList from "../components/news/newsList";
import Loading from '../components/base/center'
import * as newInfo from '../services/api/getNewsInfo'
export default {
  name: "channelList",
  data () {
    return {

      limitPage: 6,
      totalIist: 10,
      curChannelName: '',
      news: [],
      isLoading: true
    };
  },
  components: {
    newList,
    Loading,
    Page
  },
  computed: {
    curPage () {
      return +this.$route.query.page || 1
    }
  },
  methods: {
    //页码改变
    pageChange (page) {
      this.curPage = page
      this.$router.push({
        // name:'NewsChannel',
        // id:this.$route.params.id,
        query: {
          page: +page
        }
      })
      this.getNewsList()
    },
    //获取新闻标题
    async getChannelName () {
      var res = await newInfo.getChannelList()
      console.log(this.$route.params.id)
      var channel = res.find(item => {
        return item.channelId = this.$route.params.id
      })
      this.curChannelName = channel.name
    },
    //获取新闻列表页
    async getNewsList () {
      this.isLoading = true;
      var res = await newInfo.getNewsList(this.$route.params.id, this.curPage, this.limitPage)
      this.news = res.contentlist;
      this.totalIist = res.allNum;
      this.isLoading = false;
    }
  },
  watch: {
    //监听导航栏的channelId的变化去调用对应的数据
    "$route.params.id": {
      immediate: true,
      handler () {
        this.getChannelName()
        this.getNewsList()
      }
    }
  }
};
</script>

<style scoped>
.titleName {
  font-size: 30px;
  line-height: 69px;
  font-weight: 700;
  border-bottom: 1px solid #343434;
  text-align: left;
  margin-bottom: 10px;
}
</style>
