<template>
    <div class="main">
        <div class="myset">
            <router-link to="/myset">
             <!-- <img src="./imgs/myset.png" class="myset"> -->
             <i class="iconfont icon-fenlei1"></i>
          </router-link>
        </div>      
       
        <div class="header-conten">
            <router-link to="/">我</router-link>
            <router-link to="/newsong">歌</router-link>
            <!-- <router-link to="/singsong">唱</router-link> -->
        </div>

        <div class="select">
            <router-link to="/search">
             <img src="./imgs/m5.png" class="selectImg">
           </router-link>
        </div>
       
       
    </div>  
    
</template>
<script>    
</script>
<style lang='less' scoped>
*{
    margin: 0;
    padding: 0;
}
a{
   font-size: 1.5rem;
   text-decoration: none;
   color: white;
}
.main{
  position: fixed;
  top: 0;
  width: 102%;
  height: 4.5rem;
  z-index: 3;
  background-color: rgb(0,144,255);
  margin-left: -0.5rem;
}
.myset{
    width: 15%; 
    height:4.5rem;
    //  background: red;
    float: left;
    margin-left: 5%;
   
}
.header-conten{
    width: 55%;
    height:4.5rem;
    text-align: center;
    line-height: 4.5rem;
    // background: yellow; 
    margin: 0 auto;
    font-size: 1.7rem;
    color:white;
    float: left;
   
}
.main a i{
    width: 20%;
    height:4.5rem;
    font-size: 35px;
    line-height: 4.5rem;
    float: left;
}
.main a{
    width: 50%;
    height: 4.5rem;
    float: left; 
}
.select{
   width: 20%;
   height:4.5rem;
   margin-left: 5%;   
//    background: red;
    float: left;
     .selectImg{
        width: 2rem;
        height: 2rem;
        position: relative;
        top: 0.5rem;
    }
}

</style>