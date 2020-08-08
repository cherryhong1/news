<template>
  <div class="page">
    <a href="" class="page-item" :class='{disabled:curPage ===1 }' @click.prevent="handlerPageChange(1)">首页</a>
    <a href="" class="page-item" :class="{disabled:curPage === 1}" @click.prevent="handlerPageChange(curPage-1)">上一页</a>
    <a href="" 
    class="page-item" 
    v-for='page in showPage' 
    :key="page" 
    :class="{active:page === curPage}"
    @click.prevent='handlerPageChange(page)'>
    {{page}}    
    </a>
    <a href="" class="page-item" :class="{disabled:curPage === totalPage}" @click.prevent="handlerPageChange(curPage+1)">下一页</a>
    <a href="" class="page-item" :class="{disabled:curPage === totalPage}" @click.prevent="handlerPageChange(totalPage)">尾页</a>
    <span class="total">
      <i>{{curPage}}</i>/
      <i>{{totalPage}}</i>
    </span>
  </div>
</template>

<script>
export default {
  name:'page',
  props:{
    curPage:{  //当前页码数
      type:Number,
      default:1
    },
    totalIist:{ //总条数
      type:Number,
      default:0
    },
    limitPage:{  //一页显示的条数  
      type:Number,
      default:10
    }
  },
  computed:{
    totalPage(){  //总页码数
      return Math.ceil(this.totalIist/this.limitPage)
    },    
    minPage(){ //显示页码的最小值 
      var n = this.curPage - this.limitPage/2
      if(n<1){
        n=1
      }
      return n
    },
    maxPage (){ //显示页码的最大值
     var n = this.minPage + this.limitPage -1;
     if(n>this.totalPage){
       n = this.totalPage
     }
      return n
    },
    showPage(){  //能显示的页码
    var list = [];
    console.log(this.minPage,this.maxPage)
    for (let index = this.minPage; index <=this.maxPage; index++) {
      list.push(index)    
    }
      return list
    },
  },
  methods:{
    handlerPageChange(page){
      if(page<1){
        page=1
      }else if(page>this.totalPage){
        page= this.totalPage
      }
      if(page != this.curPage){
         console.log(page)
        this.$emit('pageChange',page)
      }
     
    }
  }

}
</script>

<style scoped>
.page{
  text-align: center;
  color: #333;
}
.page a{
  color: #333;
  display: inline-block;
  width: 50px;
  height: 30px;
  text-align: center;
  border: 1px solid #000;
  margin-right: 5px;
  line-height: 30px;

}
.page a.active{
  color: rgb(189, 55, 55);
  border: 1px solid black;
}
.page a.disabled{
  color: #888484;
  border:1px solid #888484;
}
.total{
  margin-left: 5px;
}
</style>