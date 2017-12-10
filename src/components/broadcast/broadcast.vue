<template>
   <div class="box">
      <img src="./img/timg.jpg" class="mylogo">
      <div class="control">
        <span class="songname">CANDY CANDY</span>
        <span class="controlBox">
          <i class="iconfont icon-zanting3"></i>
          <i class="iconfont icon-bofangqi_shouyexiayishou_"></i>
           <router-link to="/playList">
             <img src="./img/myset.png" class="listImg"> 
          </router-link>
          <!-- <img src="./img/myset.png" class="listImg" >  -->
        </span>
        
      </div>      
    </div>
</template>
<script>
 /* eslint-disable */
 export default {
   created () {
     
   }
 }
</script>
<style scoped>
.box{
  position: fixed;
  bottom: 0;
  height: 4.5rem;
  width: 100%;
  z-index: 3;
  -webkit-box-shadow: 0px 0px 30px rgb(233, 233, 233); 
  -moz-box-shadow: 0px 0px 30px rgb(233, 233, 233); 
  box-shadow: 0px 0px 30px rgb(233, 233, 233); 
  background: white;
}
.box .mylogo{
    margin-left: 1.5rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    float: left;
    display: block;
}
i{
  font-size: 0.8rem;
}
.listImg{
  width: 1rem;
  margin-left: 5%;
}
.control{
  float: left;
  width: 76%;
  line-height: 4rem;
  /* background: red; */
  position: relative;
  right: -1%;
}
.control .songname{
  margin-left: 3%; 
}
.controlBox{
  margin-right: 0;
}
.controlBox i{
  margin-right: 1rem; 
   /* margin-left: 5%; */
}
</style>
