<!--
 * @Author: your name
 * @Date: 2020-08-30 22:06:22
 * @LastEditTime: 2020-08-30 23:21:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0\hi-vue3.0\src\views\movies.vue
-->
<template>
  <div class="movies">
    <a-skeleton v-if="!movieList.length" active />
    <a-table v-else   :pagination="false" :loading="loading" :columns="columns" :data-source="movieList" :scroll="{ x: '100%',y:760 }" rowKey="serial_number">
        <template #award="{text,recode,index}">
        <p  class="scroll-award">{{dealWithText(text,recode,index)}}</p>
      </template>
      <template #poster="{text}">
        <img class="poster" @click="showBigPic(text)" :src="text" alt="" srcset="">
      </template>
      <template #action>
          <a-button-group>
      <a-button type="primary">
       <icon-font type="icon-Watch" />
      </a-button>
      <a-button type="primary">
        <icon-font type="icon-Like" />
      </a-button>
    </a-button-group>
      </template>
    </a-table>
     <div v-if="movieList.length" class="table-footer">
       <a-input-search
      v-model:value="keyWords"
      placeholder="请输入影片名"
      style="width: 200px;max-width:130px"
      @search="SearchWithKeyWords"
    >
    <template  v-slot:addonAfter>
      <SearchOutlined @click="SearchWithKeyWords"/>
    </template>
    </a-input-search>
    <a-pagination
    style="margin-left:4px"
    v-if="movieList.length"
      class="movie-pagination"
      show-size-changer
      v-model:current="pageCurrent"
      v-model:pageSize="pageSize"
      :total="total"
      @change="changePage"
      @showSizeChange="changePage"
    />
     </div>
  <modal-Pic v-model:visible="modalPicVisible" :imgUrl="toBeViewed"></modal-pic>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, ref, reactive,markRaw } from "vue";
import { Connector } from "../../api/index";
import {Table,Pagination,Input,Skeleton} from "ant-design-vue"
import {createFromIconfontCN,SearchOutlined} from "@ant-design/icons-vue";
import ModalPic from "./components/ModalPic.vue"
const IconFont=createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_2003220_3jz8f4m9k5t.js"})
const { movie } = Connector;
export default defineComponent({
    components:{
      ModalPic,
      ATable:Table,
      APagination:Pagination,
      AInputSearch:Input,
      ASkeleton:Skeleton,
    IconFont,
    SearchOutlined
    },
  setup(props: any, ctx) {
    let modalPicVisible=ref(false);
    let toBeViewed=ref("");
    let movieList = ref([]);
    let loading=ref(false);
    let moviesParams = reactive({
      keyWords: "",
      pageNum: 1,
      pageSize: 10
    });
    let paginationParams=reactive({
      pageCurrent:1,
      pageSize:10,
      total:0
    });
    const columns = ref([
      { title: "电影名称", dataIndex: "movie_name",align:"center" ,width:100 },
      { title: "电影海报", dataIndex: "poster",slots:{customRender:"poster"},align:"center" ,width:150 },
      { title: "荣誉奖项", dataIndex: "award",ellipsis:true,align:"center" ,width:200,slots:{customRender:"award"} },
      { title: "精彩点评", dataIndex: "describe",ellipsis:true,align:"center" ,width:150 },
      { title: "评分", dataIndex: "start",align:"center" ,width:150 },
      { title: "评论人数", dataIndex: "evaluate",align:"center" ,width:150 },
      {
        title: "Action",
        key: "operation",
        width: 250,
        align:"center",
        slots: { customRender: "action" }
      }
    ])
    const methods = () => {
      async function getMovies() {
        loading.value=true
        const { data } = await movie.getMovies(moviesParams);
        movieList.value = data.data.movieList;
        paginationParams.total=data.data.total;
        loading.value=false
      };
      function dealWithText(text:string,recode:unknown,index:number):string{
          return text.length>2?text.replace(/\[|\]|"/g,''):""
      };
      function showBigPic(imgUrl){
        toBeViewed.value=imgUrl
        modalPicVisible.value=true
      };
      function SearchWithKeyWords(){
       methods().getMovies()
        
      };
      function changePage(pageNum:number,pageSize:number){
        console.log(pageSize);
        
       moviesParams=Object.assign({},moviesParams,{pageNum,pageSize})
        methods().getMovies()
      };
      return {
        getMovies,
        dealWithText,
        showBigPic,
        changePage,
        SearchWithKeyWords
      };
    };
    methods().getMovies();    
    return {
      toBeViewed,
      loading,
      modalPicVisible,
      columns,
      movieList,
      ...toRefs(moviesParams),
      ...toRefs(paginationParams),
      ...methods()
    };
  }
});
</script>
<style >
  .ant-table-wrapper{
    height: 767px;
    overflow-y: hidden;
  }
</style>
<style lang="scss" scoped>
/deep/.ant-table-tbody td{
    vertical-align: middle;
}
.movie-pagination{
  text-align: right;
}
.table-footer{
  display: flex;
    justify-content: flex-end;
    margin: 6px 0px;
}
.poster{
    height:60px
}
.scroll-award:hover{
  animation: move 3s infinite alternate linear ;
}
@keyframes move {
  0%{
    transform: translate(0,0);
  }
  100%{
    transform: translate(-100%,0);
  }
}
</style>