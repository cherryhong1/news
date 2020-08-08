<template>
  <div class="channelList">
<Page 
:curPage='curPage'
 :totalIist='202'
  :limitPage='6'
  @pageChange="pageChange"
  ></Page>
  </div>
</template>

<script>
import Page from '../components/base/page'
export default {
  name: "channelList",
  data(){
    return{
      curPage:8
    }
  },
  methods:{
    pageChange(page){     
     this.curPage = page;
    }
  },
  components:{
    Page
  },
  created() {
    // console.log(this.$route.params.id )
  }
};
</script>

<style scoped></style>
