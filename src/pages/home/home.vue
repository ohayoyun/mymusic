<template>
    <div id="home-main">
        <headerBar></headerBar>
        <broadcast></broadcast>
       
        <router-view/>
      
        <div class="login">     
           <router-link to="/login">
                <div class="logo-img">
                    <img src="./img/timg.jpg" alt="">
                </div>
                <div class="logo-right">    
                    <span class="span-login">点击登录</span>
                    <br>
                    <span>登录后可更准确推荐歌曲</span>                                        
                </div>  
           </router-link>         
            <router-link to="" class="letter">
                    <i class="iconfont icon-xinxi"></i>
            </router-link>           
        </div>
        <div class="collection">
            <ul>
                <li>
                    <router-link to="/localSong">
                        <i class="iconfont icon-shouji"></i><br>
                        <span>本地音乐</span>
                    </router-link>                   
                </li>
                 <li>
                    <router-link to="/mylove">
                        <i class="iconfont icon-shoucang"></i><br>
                        <span>喜欢歌单</span>
                    </router-link>                   
                </li>
                 <li>
                    <router-link to="/download">
                        <i class="iconfont icon-xiazai1"></i><br>
                        <span>下载</span>
                    </router-link>                   
                </li>
                 <li>
                    <router-link to="Lately">
                        <i class="iconfont icon-shijianzhongbiao"></i><br>
                        <span>最近</span>
                    </router-link>                   
                </li>
            </ul>
        </div>
        <div class="MusicLibrary">
            <ul>
                <li>
                    <router-link to="/musiclibrary">
                        <img src="../imgs/musicAll.png"><br>
                        <span>乐库</span>
                    </router-link>
                </li>
              
                <li>   
                    <router-link to="/songsheet">
                        <img src="../imgs/songSheet.png"><br>
                        <span>歌单</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/radioStation">
                        <img src="../imgs/station.png"><br>                    
                        <span>电台</span> 
                     </router-link>               
                </li>
                <li>
                    <router-link to="">
                        <img src="../imgs/youLike.png"><br>
                        <span>猜你喜欢</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <img src="../imgs/daily.png"><br>
                        <span>每日推荐</span>
                     </router-link>
                </li>
                <li>  
                    <router-link to="">
                        <img src="../imgs/recognition.png"><br>
                        <span>听歌识别</span>
                     </router-link>
                </li>
            </ul>
        </div>
        <div class="spread">
            <div class="spred-left">
                <i class="iconfont icon-tuiguang"></i>
                <span>推广</span>
            </div> 
            <div class="spred-right">
                 <span class="gray">趣味烧脑,女神陪你玩</span>
            </div>           
           
        </div>

        <div class="Feedback">
            <div class="Feedback-left">
                <i class="iconfont icon-bianji"></i>
                <span>反馈</span>
            </div>
            <div class="Feedback-right">
                <span class="gray">欢迎使用抢先版</span>
            </div>            
            
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import headerBar from '../../components/Header/Header-bar'
import broadcast from '../../components/broadcast/broadcast'
export default{
  name: 'home-main',
  components: {
    headerBar,
    broadcast
  },
  methods: {
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
a{
    text-decoration: none;
    color: black;
    font-family: "楷体";
}
#home-main{
    width: 100%;
    /* background: red; */
    position: relative;
    top: 5rem;
}
.login{
    width: 100%;
    height: 3rem;
    font-size: 12px;
    margin-top: 0.5rem;
    /* background: rgb(0,144,255); */
    border-bottom: 2px solid rgb(243,243,243);
}
.letter{
    display: block;
    width: 50px;
    height: 3rem;
    /* background: red; */
    float: left;
    line-height: 3rem;
}
.letter i{
    font-size: 22px;
    margin: auto 0;
}
.logo-img{
    width: 20%;
    height: 3rem;
    float: left;
    margin-right: 2rem;
}
.logo-right{
    width: 45%;
    height: 3rem;
    float: left;
    /* background: red; */
    margin-right: 2rem;
}
.span-login{
    margin-left: -30%;
}
.logo-right:nth-child(2){
    margin-left: -10%;
}
.login img{
    margin-left: 20px;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    float: left;
}
.collection{
    width: 100%;
    height: 4rem;
    background: white;
    margin-top: 3px;
    border-bottom: 10px solid rgb(243,243,243);
}
.collection ul{    
    height: 4rem;    
    margin-right: auto;
    margin-left: auto; 
}
.collection ul li{
  width: 24%;
  height: 4rem;
  float: left;
   margin-top: 5px;
}
.collection ul li:nth-child(1){
   /* margin-left: -25%; */
}
.collection ul li a{
    display: block;
    width: 100%;
    height: 4rem;
    /* background: blue; */
}
.collection ul li i{
    color: rgb(0, 144,255);
    font-size: 2.2rem;
}
.collection ul li span{
    font-size: 0.8rem;
}
.MusicLibrary ul li img{
    width: 3rem;
    height: 3rem;
}
.MusicLibrary ul li{
    float: left;
    width: 33%;
    margin-top: 0.4rem;
}
.MusicLibrary ul li a{
    display: block;
    width: 100%;
    height: 100%;
}
.MusicLibrary{
    width: 100%;
    height: 11rem;
    /* background: red; */
    border-bottom: 1px solid rgb(243,243,243);
}
.spread{
    width: 100%;
    height: 3rem;
    margin-top: 5px;
    border-bottom: 1px solid rgb(243,243,243);
}
.spred-left{
    width: 30%;
    height: 3rem;
    /* background: red; */
    float: left;
    line-height: 3rem;
     /* margin-right: 20%; */
}
.spred-right{
    float: left;
     width: 50%;
    /* background: red; */
    line-height: 3rem;
}
.Feedback {
    width: 100%;
    height: 3rem;
    float: left;
}
.Feedback-left{
    width: 30%;
    line-height: 3rem;
    /* background: red; */
    float: left;
    /* margin-right: 15%; */
}
.Feedback-right{
    width: 50%;
    /* background: red; */
    float: left;
}
.Feedback{
    width: 100%;
    height: 4rem;  
    border-bottom: 1px solid rgb(243,243,243);
} 
.gray{
    display: block;
    color: rgb(133, 133, 133);
    float: right;
    line-height: 3rem;
    
}
.Feedback span,.spread span{
    display: inline-block;
    height: 3rem;
}
</style>
