<template>
  <div class="newslist contanier">
    <ul class="newInfo">
      <li v-for="item in news" :key="item.id">
        <div class="imgContainer" v-if="item.havePic">
          <a :href="item.link" target="_blank" rel="noopener noreferrer">
            <img :src="item.imageurls[0].url" :alt="item.title" />
          </a>
        </div>
        <div class="words">
          <a :href="item.link" target="_blank" rel="noopener noreferrer">
            <h2 class="title">
              {{ item.title }}
            </h2>
            <div class="baseInfo">
              <span v-if="item.channelName">{{ item.channelName }}</span>
              <span v-if="item.source">来源：{{ item.source }}</span>
              <span v-if="item.pubDate">发布日期：{{ item.pubDate }}</span>
            </div>
            <div class="content" v-if="item.desc">{{ item.desc }}</div>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "news",
  props: {
    news: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.newslist {
  padding: 10px 0;
  line-height: 1.5;
  color: #666;
}
.newslist ul li {
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  padding: 10px 0;
}
.newslist ul li:not(:last-child) {
  margin-bottom: 1px solid #949191;
}
.newslist ul li .imgContainer {
  width: 200px;
  margin-right: 10px;
  overflow: hidden;
  padding-right: 10px;
  border-right: 1px solid #f6f6f6;
}
.imgContainer img {
  width: 100%;
}
.words {
  text-align: left;
}
.newslist ul li a:hover h2 {
  color: blue;
}
.newslist ul li h2 {
  font-size: 28px;
  font-weight: 700;
  color: #333;
  line-height: 40px;
}
.newslist ul li .baseInfo {
  font-size: 24px;
  color: #949191;
  padding: 5px;
}
.newslist ul li .baseInfo span:not(:last-child) {
  margin-right: 20px;
}
.newslist .content {
  font-size: 20px;
  color: #999;
}
</style>
