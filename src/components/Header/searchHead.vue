<template>  
    <div class="searchHeader">
        <span class="back" @click="goBack">
            <i class="iconfont icon-fanhui"></i>
        </span>
        <div class="inputBox">
            <div class="inputContent">
                <div class="spanI">
                    <i class="iconfont icon-chazhao"></i>  
                </div>          
                <input type="text" placeholder="今天想唱什么歌" class="sousuo" v-model="key" /> 
            </div>        
            <span>&nbsp&nbsp搜索</span>
        </div>             
    </div>
</template>
<script>
/* eslint-disable */
export default {
 name:'searchHeader',
 
  methods: {
    goBack () {
      this.$router.go(-1)
    }  
  } 
}
</script>

<style scoped>
.searchHeader{
  width: 100%;
  height: 600px;
  /* background: rgb(0, 144, 255); */
}
a{
  text-decoration: none;
  color: blue;
}
.content{
  width: 100%;
  height: 4rem;
  background: rgb(0, 144, 255);
  position: relative;
}
.back{
  display: block;
  width: 15%;
  height: 4rem;
  background: rgb(0, 144, 255);
  line-height: 4rem;
  float: left;
}
.back i{
  color: white;
  font-size: 1.4rem;
}
.sousuo{
  background: rgb(0,107, 189);
  /* border-radius: 0.5rem; */
  width: 85%;
  height: 2rem;
  margin-right: -0.3rem;
}
input{  
   background:none;  
   outline:none;  
   border:0px;  
   color: white;
} 
.inputBox{
  width: 85%;
  height: 4rem;
  background: rgb(0, 144, 255);
  float: left;
  color: white;
}
.inputBox span{
  display: block;
  float: left;
  margin-left: 78%;
  line-height: 4.1rem;
}

.inputContent{
  width: 63%;
  height: 2.2rem;
  background: rgb(0,107, 189);
  position: absolute;
   border-radius: 0.3rem;
  left: 16%;
  top: 2.8%;
}
.spanI{
  float: left;
  width: 10%;
  line-height: 2.1rem;
  margin-left: 0.1rem;
}
.song{
  display: block;
  width: 40%;
  border-radius: 0.8rem;
  padding: 5px;
  margin-top: 1rem;
   margin-left: 1rem;
  border: 1px solid gray;
}
</style>