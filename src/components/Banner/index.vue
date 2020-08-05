<template>
  <div class="banner-container">
    <div
      class="banner"
      @mouseenter="autoStop()"
      @mouseleave="autostart()"
      v-show="show"
    >
      <ul class="bannerBox">
        <li
          v-for="(banner, index) in banners"
          :key="index"
          :class="{ active: curIndex === index }"
        >
          <a :href="banner.url">
            <img :src="banner.path" :alt="banner.title" />
          </a>
        </li>
      </ul>
      <ul class="dotted">
        <li
          v-for="(banner, index) in banners"
          :key="index"
          :class="{ active: curIndex === index }"
          @click="curIndex = index"
        ></li>
      </ul>
    </div>
    <button @click="changeShow()">轮播图显隐</button>
  </div>
</template>

<script>
export default {
  name: "banner",
  props: {
    banners: {
      type: Array,
      required: true
    },
    duration: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      curIndex: 0, //当前显示的是第几张图片
      timer: null, //定时器事件
      show: true //当前轮播图是否显示
    };
  },
  methods: {
    // 自动开始切换
    autostart() {
      if (this.timer) {
        return;
      }
      this.timer = setInterval(() => {
        this.curIndex = (this.curIndex + 1) % this.banners.length;
      }, this.duration);
    },
    // 停止切换
    autoStop() {
      clearInterval(this.timer);
      this.timer = null;
    },
    changeShow() {
      this.show = !this.show;
      if (!this.show) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  },
  // mounted(){
  //   this.autostart()
  // },
  destroyed() {
    this.autoStop();
  },
  beforeDestroy() {
    // 页面关闭（路由跳转）时清除定时器
    // 定时器未生效是因为暂停时页面暂时未销毁
    clearInterval(this.timer);
    this.timer = null;
  }
};
</script>

<style scoped>
.banner {
  width: 1080px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
.banner .bannerBox {
  height: 337px;
  overflow: hidden;
  transition: 0.5s;
  width: 100%;
}
.banner .bannerBox img {
  width: 100%;
}
.banner .bannerBox li {
  display: none;
}
.banner .bannerBox li.active {
  display: block;
}
.dotted {
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  z-index: 2;
}
.dotted li {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  margin-right: 5px;
}
.dotted li.active {
  background: rgb(114, 224, 11);
}
button {
  width: 200px;
  background: rgb(177, 84, 84);
  display: none;
}
</style>
