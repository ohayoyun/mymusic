<template>
  <div class="singsinger">
    
    <div class="main">
      <span class="back" @click="goBack">
       <
     </span>
      <span>歌手</span>
      <span>
        <i class="iconfont icon-gengduo"></i>
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
             <router-link to="/songs">歌单</router-link>
          </mt-tab-item>
        </mt-navbar>
     </div>
     
    </div>
    <div class="singerclass">歌手分类</div>
    <ul class="singerlist">    
      <li v-for="(item,index) in singerClass" :key="item.id">
      <router-link to="/singsinger">
        {{item.classname}}
      </router-link>      
      </li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable */
export default{
  created () {
     this.$store.dispatch('className')
  },
 name: 'singsinger',
 computed: {
   singerClass () {
      return this.$store.state.classsinger
   }
  
 },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
@import url("../../../../common/styles/hometwo.less");
.songsheet{
  width: 102%;
  height: 2rem;
  border-bottom: 1px solid gray;
  line-height: 2rem;
}
.singerlist li{
  width: 90%;
  height: 2.5rem;
  margin: 1rem auto;
  border-radius: 5%;
  border: 1px solid #ccc;
  line-height: 3rem;
  list-style: none;
  background: #fbfbfb;
}
.singerclass{
  margin-top: 9rem;
}
.main{
  width: 102%;
  margin-left: -0.5rem;
}
.classify{
  width: 102%;
  position: fixed;
  top: -0.5rem;
  z-index: 99;
  border-bottom: 1px solid gray;
}
</style>