<template>
  <div class="musiclibrary">
  
    <div class="main">
      <span class="back" @click="goBack">
       <
     </span>
      <span>乐库</span>
      <span>
        <router-link to="/search">
             <img src="./m5.png" class="select">
        </router-link>
      </span>
      
    </div>
    <div class="classify">
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
    
    </div>
    
    <div class="lunbo">
      <mt-swipe :auto="4000">
      <mt-swipe-item><img src="./banner1.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="./banner2.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="./banner3.jpg"></mt-swipe-item>
      </mt-swipe>
    </div>
    <ul v-if="filenames" class="libraryUl">
      <li class="newsongs" v-for="(item,index) in filenames" :key="item.id" @click="listPlay(item, index)">
        <div class="names" :class="{'active':index === activeIndex}">{{item.filename}}</div>
        <div class="download"></div>
      </li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable */
// import headerBar from '../../../../components/Header/Header-bar'
export default{
 created () {
   this.$store.dispatch('newSongs')
 },
 name: 'musiclibrary',
 data () {
   return {
       activeIndex: -1
   }
 },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
     listPlay (item, index) {
      this.activeIndex = index
      return this.$store.dispatch('listPlay', item)
    }
  },
  computed: {
    filenames () {
      return this.$store.state.filenames
    }
 }
}
</script>
<style lang="less" scoped>
@import url("../../../common/styles/hometwo.less");
.main{
  width: 102%;
  margin-left: -0.5rem;
}
.musiclibrary{
  width: 102%;
  height: 2rem;
  border-bottom: 1px solid gray;
  line-height: 2rem;
}
.lunbo {
  width: 100%;
  height: 10rem;
  /* background: red; */
  margin-top: 8rem;
}
.lunbo img{
  width: 100%;
  height: 100%;
}
.select{
    width: 2rem;
    height: 2rem;
}
.main{
  z-index: 999;
}
.libraryUl{
  position: relative;
  top: 1rem;
}
.newsongs{
  width: 100%;
  height: 3rem;
  text-align: left;
  margin-left: 1rem;
  border-bottom: 1px solid #ccc;
  line-height: 3rem;
  list-style: none;
   .active{
      color: blue;
    }
}
.classify{
  position: fixed;
  top: -0.5rem;
  z-index: 99;
  width: 102%;
}
</style>