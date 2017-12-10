<template>
  <div class="singsinger">
    
    <div class="main">
      <span class="back" @click="goBack">
       <
     </span>
      <span>电台</span>
      <span>
        <i class="iconfont icon-gengduo"></i>
      </span>
    </div>
    <div class="classify">
      <div class="header-nav">
        <mt-navbar v-model="headNav" class="container">
          <mt-tab-item id="head-nav1">
             <router-link to="/">推荐</router-link>
          </mt-tab-item>
          <mt-tab-item id="head-nav2">
             <router-link to="/">歌手</router-link>
          </mt-tab-item>
          <mt-tab-item id="head-nav3">
             <router-link to="/ranking">排行</router-link>
          </mt-tab-item>
           <mt-tab-item id="head-nav4">
             <router-link to="/">歌单</router-link>
          </mt-tab-item>
        </mt-navbar>
     </div>
     
    </div>
   
  </div>
</template>
<script>
/* eslint-disable */
export default{
 name: 'singsinger',
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
  width: 100%;
  height: 2rem;
  border-bottom: 1px solid gray;
  line-height: 2rem;
}
.header-nav{
  width: 100%;
  height: 3rem;
  margin-top: 5rem;
  /* background: red; */
  border-bottom: 1px solid gray;
  position: fixed;
  top: -1rem;
  z-index: 99;
}
</style>