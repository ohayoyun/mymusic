<template>
  <div class="ranking">
    
    <div class="main">
      <span class="back" @click="goBack">
       <
     </span>
      <span>排行</span>
      <span>
        <i class="iconfont icon-gengduo"></i>
      </span>
    </div>
    
      <div class="header-nav">
        <mt-navbar class="container">
          <mt-tab-item id="head-nav1">
             <router-link to="/musiclibrary">推荐</router-link>
          </mt-tab-item>
          <mt-tab-item id="head-nav2">
             <router-link to="/singsinger">歌手</router-link>
          </mt-tab-item>
          <mt-tab-item id="head-nav3">
             <router-link to="/ranking">排行</router-link>
          </mt-tab-item>
           <mt-tab-item id="head-nav4">
             <router-link to="/songsheet">歌单</router-link>
          </mt-tab-item>
        </mt-navbar>
     </div>
      <ul class="rankUl">
        <li v-for="item in rankSongs" :key="item.id">
            <div class="liImg">
                <img :src="item.banner7url.replace('{size}', '400')" width="60" height="60"  alt="">
            </div>
            <div class="liText">
                 <span class="liSpan">{{item.rankname}}</span> 
            </div>
        </li>
      </ul>
    </div>
   
  </div>
</template>
<script>
/* eslint-disable */
export default{
 name: 'ranking',
  created () {
    this.$store.dispatch('rankSong')
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
   computed: {
    rankSongs (){
       return this.$store.state.rankSong
    }
  }
}
</script>
<style lang="less" scoped>
@import url("../../../../common/styles/hometwo.less");
.ranking{
  width: 102%;
  font-size: 1.0714rem;
  color: #333;
}
.header-nav{
  width: 102%;
  height: 3rem;
  margin-top: 5rem;
  /* background: red; */
  border-bottom: 1px solid gray;
  position: fixed;
  top: -0.5rem;
  z-index: 99;
}
.rankUl{
  margin-top: 8rem;
}
.rankUl li{
  width: 100%;
  height: 6rem;
  text-align: left;
  margin-left: 1rem;
  border-bottom: 1px solid #ccc;
  line-height: 3rem;
  list-style: none;
  margin: 0;
  padding: 1rem;
}
.rankUl li .liImg{
  width: 30%;
  height: 6rem;
//   background: red;
  float: left;
}
.rankUl li .liText{
  width: 70%;
  height: 6rem;
//   background: yellow;
  float: left;
  line-height: 6rem;
  .liSpan{
    margin-left: 1rem;
  }
}
.liImg img{
  width: 6rem;
  height: 6rem;
}
.main{
  width: 102%;
  margin-left: -0.5rem;
}
</style>