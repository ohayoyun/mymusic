<template>
  <div class="local">
    
    <div class="main">
      <span class="back" @click="goBack">
       <
     </span>
      <span> 本地音乐</span>
      <span>
        <i class="iconfont icon-gengduo"></i>
      </span>
    </div>
    <div class="classify">
      <div class="header-nav">
        <!-- <mt-navbar v-model="headNav" class="container"> -->
           <mt-navbar class="container">
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
 name: 'local',
 methods: {
  goBack () {
    this.$router.go(-1)
    }
 }
}
</script>
<style scoped>
*{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
}
.main{
  position: fixed;
  top: 0;
  width: 102%;
  margin-left: -0.5rem;
  height: 4.5rem;
  color: white;
  line-height: 4.5rem;
  font-size: 1.5rem;
  font-family: "楷体";
  background-color: rgb(0,144,255);
}
.back{
  color: white;

}
.list{
    width: 100%;
    height: 3.5rem;
    line-height: 1rem;
    line-height: 1.5rem;
    border-top: 1px solid #ccc; 
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-height: 3.5rem;
}
.listUl{
    width: 100%;
    list-style: none;
    position: relative;
    top: 0.5rem;
}
.bofang{
    width: 100%;
    line-height: 2rem;
    position: relative;
    top: 0.5rem;
}
.bofang i{
    margin-left: -60%;
    font-size: 1rem;
}
.list span:nth-child(1){
    width: 60%;    
    font-size: 1.3rem;
    /* background: red; */
}
.list span{
    display: block;
     float: left;
}
.main span:nth-child(3){
    width: 30%;
    font-size: 1.3rem;
    /* background: red; */
    position: absolute;
    right: -5%;    
}
.main span:nth-child(1){
    width: 30%;
    font-size: 1.3rem;
    position: absolute;
    left: -5%;    
}
.list span i{
    font-size: 1.5rem;
    position: absolute;
    left: 7%;
}
.list span .songname{
    position: absolute;
    left: 20%;
}
.classify{
  width: 100%;
  height: 3rem;
  margin-top: 5rem;
  /* background: red; */
  border-bottom: 1px solid gray;
}
.local{
  width: 100%;
  height: 2rem;
  border-bottom: 1px solid gray;
  line-height: 2rem;
}
.classify ul li{
  float: left;
  width: 50%;
  line-height: 3rem;
}
</style>
