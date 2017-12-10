<template>
  <div id='leftBar'>
    <div class="content">
      <span class="back" @click="goBack">
        <i class="iconfont icon-you"></i>
      </span>
      <div class="my">
          <router-link to="">
              <div class="logo-img">
                  <img src="./timg.jpg" alt="">
              </div>
          </router-link>
      </div>
      <div class="someSet">
        <ul>
          <li><i class="iconfont icon-xinxi"></i>消息中心</li>
          <li><i class="iconfont icon-pifu"></i>皮肤中心</li>
          <li><i class="iconfont icon-1"></i>会员中心</li>
          <li><i class="iconfont icon-shizhong"></i>定时开关</li>
          <li><i class="iconfont icon-huisheyinxiao"></i>蝰蛇音效</li>
          <li><i class="iconfont icon-gongju"></i>音乐工具</li>
          <li><i class="iconfont icon-fengling"></i>铃声彩铃</li>
        </ul>
      </div>
      <div class="someSwitch">
        <ul>
          <li>
            <i class="iconfont icon-wifiwofi"></i>
            <span>仅WIFI联网</span>
            <div class="switch switch1">
                 <mt-switch v-model="value"></mt-switch>
            </div>         
            </li>
          <li>
            <i class="iconfont icon-ttpodicon"></i>
            <span>桌面歌词</span>
            <div class="switch">
             <mt-switch v-model="value"></mt-switch>
             </div>
            </li>
          <li><i class="iconfont icon-suopinggeci"></i>
            <span>锁屏歌词</span>
            <div class="switch">
             <mt-switch v-model="value"></mt-switch>
             </div>
          </li>
        </ul>
      </div>
      <div class="feet">
        <div class="left">
          <i class="iconfont icon-shezhi"></i>
          设置
          </div>
        <div class="right">
            <i class="iconfont icon-tuichu"></i>
          退出
          </div>
      </div>
    </div>
      
  </div>
</template>

<script>
/* eslint-disable */
export default{
  name: 'leftBar',
  data () {
    return {
      value: ''  
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
ul{
    list-style: none;
}
#leftBar{
  width: 104%;
  height:700px;
  background-image: url(./background.png);
  background-size: 120%;
  font-family: "楷体";
  /* padding: 1rem; */
  /* overflow: hidden; */
  margin: -0.4rem;
}
.content{
  width: 80%;
  height: 500px;
  /* background: white; */
}
.back{
  color: white;
  margin-right: -80%;
  position: relative;
  top: 1rem;
}
.my{
  border-bottom: 1px solid rgb(24, 144, 190); 
  width: 100%;
  height: 3.4rem;
}
.logo-img{
    width: 20%;
    height: 68px;
    float: left;
}
.logo-img img{
    margin-left: 20px;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    float: left;
}
.someSet{
  color: white;
  border-bottom: 1px solid rgb(24, 144, 190); 
}
.someSet ul li{
  margin-top: 1rem;
  font-size: 1.2rem;
  position: relative;
  left: 1rem;
  text-align: left;

}
.someSet ul li:nth-child(7){
  margin-bottom: 1rem;
}
.someSet ul li i{
  font-size: 1.3rem;
  margin-right: 1rem;
}
.someSwitch{
  color: white;
  border-bottom: 1px solid rgb(24, 144, 190); 
}
.someSwitch ul li{
  width: 100%;
  margin-top: 1rem;
  font-size: 1.2rem;
  /* background: red; */
  margin-left: 1.3rem;
  margin-bottom: 0.6rem;
}
.someSwitch ul li i{
  font-size: 1.3rem;
  margin-right: 2rem;
  float: left;
}
.someSwitch ul li:nth-child(1){
  
}
.someSwitch ul li span{
  float: left;
  margin-left: -1rem;
}
.switch{
  position: relative;
  right: -5rem;
}
.switch1{
  left: 3.9rem;
}
.feet{
  color: rgb(166, 191, 204);
  font-size: 1.5rem;
  margin-top: 1rem;
 
}
.feet div i{
  font-size: 1.3rem;
}
.left{
  width: 60%;
  height: 5rem;
  float: left;
   /* background: red; */
  margin-left: -2rem;
}
.right{
  width: 40%;
  float: left;
}
</style>
