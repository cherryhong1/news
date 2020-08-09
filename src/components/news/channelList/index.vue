<template>
  <div class="channelContainer contanier"
       v-if="channelList.length > 0">
    <ul class="channellist">
      <li v-for="item in showChannelList"
          :key="item.id"
          :class="item.channelId === curId ? 'active' : ''"
          @click="switchTo(item.channelId)">
        {{ item.name }}
      </li>
      <a href=""
         class="fold"
         @click.prevent="isCollapse = !isCollapse">{{
        isCollapse ? "展开" : "收起"
      }}</a>
    </ul>
  </div>
</template>

<script>
// import { getChannelList } from "@/services/api/getNewsInfo";
import { mapState } from 'vuex';
export default {
  name: "channelList",
  data () {
    return {
      hoverColor: 0, //是否hover
      //  channelList: [],//栏目列表
      isCollapse: 1, //是否为折叠状态，1为折叠，0为展开状态
      curId: null
    };
  },
  methods: {
    changeColor () {
      this.hoverColor = 1;
    },
    switchTo (id) {
      this.curId = id;
      this.$emit("changeChannelId", id);
    }
  },
  // async created() {
  //   this.channelList = await getChannelList();
  //   console.log(this.channelList[0].channelId);
  //   this.curId = this.channelList[0].channelId;
  //   this.$emit("changeChannelId", this.curId);
  // },
  computed: {
    showChannelList () {
      if (this.isCollapse) {
        return this.channelList.slice(0, 8);
      }
      return this.channelList;
    },
    ...mapState({
      channelList: state => state.newsInfo.channelList
    })
  },
  watch: {
    channelList: {
      immediate: true,
      handler () {
        if (this.channelList.length > 0) {
          this.curId = this.channelList[0].channelId;
          this.$emit("changeChannelId", this.curId);
        }
      }
    }
  }
};
</script>

<style scoped>
.channelContainer {
  margin-top: 10px;
}
.channellist {
  display: inline-block;
}
.channellist li {
  float: left;
  margin-right: 10px;
  padding: 5px 10px;
  border: 1px solid rgb(201, 186, 186);
  font-size: 24px;
  font-weight: 700;
  color: rgb(65, 54, 54);
  cursor: pointer;
  margin-bottom: 20px;
}
.channellist li.active {
  color: rgb(95, 41, 194);
}
.channellist li.hover {
  color: #4d0909;
}
.fold {
  color: #000;
  font-size: 26px;
  /* display: inline-block; */
  float: left;
}
</style>
