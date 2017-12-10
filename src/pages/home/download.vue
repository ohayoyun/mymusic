<template>
  <div class="download">
    
    <div class="main">
      <span class="back" @click="goBack">
       <
     </span>
      <span>我的下载</span>
      <span>
        <i class="iconfont icon-gengduo"></i>
      </span>
    </div>
    <div class="classify">
      <div class="header-nav">
        <mt-navbar v-model="headNav" class="container">
          <mt-tab-item id="head-nav1">
            <router-link to="/">单曲</router-link>
          </mt-tab-item>
          <mt-tab-item id="head-nav2">
             <router-link to="/">歌手</router-link>

             </mt-tab-item>
          <mt-tab-item id="head-nav3">
             <router-link to="/">歌单</router-link>

             </mt-tab-item>
          <!-- <mt-tab-item id="head-nav4">
             <router-link to="/">歌手</router-link>
          </mt-tab-item> -->
        </mt-navbar>
     </div>
    </div>
    <div class="bofang"><i class="iconfont icon-zanting1"></i></div>
      <ul class="listUl">
        <li class="list">       
          <span>
              <i class="iconfont icon-erjic"></i>
             <div class="songname"> 生命的名字</div>
          </span>
        </li>
      </ul>
  </div>
</template>
<script>
/* eslint-disable */
export default{
 name: 'download',
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
@import url("../../common/styles/hometwo.less");
.download{
  width: 102%;
  height: 2rem;
  border-bottom: 1px solid gray;
  line-height: 2rem;
}
.main{
  margin-left: -0.5rem;
}
</style>
