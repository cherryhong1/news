<template>
  <div class="container">
    <Banner :banners="banners" />
    <ChannelList @changeChannelId="handelChannelId" />
    <NewsList :news="news" v-show="!isLoading"></NewsList>
    <Modal v-show="isLoading">
      <Center>
        <Loading />
      </Center>
    </Modal>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import Loading from "../components/Base/Loading";
import Center from "../components/Base/Center";
import Modal from "../components/Base/Modal";
import ChannelList from "../components/News/ChannelList";
import NewsList from "../components/News/NewsList/";
import { getNewsList } from "../services/api/getNewsInfo";

export default {
  name: "Home",
  components: {
    Banner,
    Loading,
    Center,
    Modal,
    ChannelList,
    NewsList
  },
  data() {
    return {
      banners: [
        {
          url: "https://baidu.com",
          path: require("@/assets/banner/banner1.jpg"),
          title: "夏日钜惠"
        },
        {
          url: "https://baidu.com",
          path: require("@/assets/banner/banner2.jpg"),
          title: "优加霸王餐"
        },
        {
          url: "https://baidu.com",
          path: require("@/assets/banner/banner3.jpg"),
          title: "酷学一夏"
        }
      ],
      news: [],
      isLoading: false
    };
  },
  methods: {
    async handelChannelId(id) {
      this.isLoading = true;
      var res = await getNewsList(id);
      console.log(res);
      this.isLoading = false;
      this.news = res;
    }
  }
};
</script>

<style></style>
