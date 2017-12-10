<template>
  <div id='search'>
     <!-- <search-head></search-head>
    </router-view> -->
    <div class="content">
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
        <ul class="resultUl"  v-show="orshow">
          <li class="resultLi" v-for="item in results" :key="item" @click="goResult(item)">
          <a href="javascript:;">
          {{item.songname}}
          </a>          
          </li>
        </ul>    
      </div>
     </div>
          <!-- 显示隐藏 -->
    <div class="hot">
        <div class="hotSearch">
        <span>热门搜索</span> 
      </div> 
      <div>
        <span class="song">TFBOYS-盛夏的剩下</span>   
      </div> 
    </div>
     <!-- <div class="whatSearch" v-if="ok">
       <div>在线搜索</div>
       <div>本地搜索</div>
     </div> -->
     
     <!-- 隐藏 -->
    <div class="searchson" v-show="isShow">
      <!-- <search-head></search-head>
      <router-view/> -->
      <div class="kind">
        <mt-navbar>

          <mt-tab-item id="head-nav1">歌曲</mt-tab-item>
          <mt-tab-item id="head-nav2">MV</mt-tab-item>
          <mt-tab-item id="head-nav4">歌词</mt-tab-item>
        </mt-navbar>
      </div>
      <div class="bofang"><i class="iconfont icon-zanting1"></i></div>
      <ul class="listUl" >
        <li class="list" v-for="(item, index) in result" :key='item.id' @click="listPlay(item, index)">
          <a href="javascript:;">    
            <span>
                <i class="iconfont icon-erjic"></i>                
                <div class="songname" :class="{'active':index === activeIndex}"> {{item.songname}}</div>             
            </span>
            <span>
                <i class="iconfont icon-gengduo"></i>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
/* eslint-disable */
// import searchHead from '../../components/Header/searchHead'
export default{
  name: 'search',
  data () {
    return {
      key: '',
      isShow: false,
      orshow: false,
      activeIndex: -1
    }
  },
  watch: {
    key: function (val) {
      this.orshow = true
      console.log(val)
      this.$store.dispatch('getResult', val)
    }
  },
  computed: {
    results () {
      return this.$store.state.results
    },
    result () {
      return this.$store.state.result
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    // 当用户点击搜索结果的时候
    goResult (item) {
       this.isShow = true;
       this.orshow = false;
      // 由歌名和歌手组成的新的关键字
      let val = item.songname + item.songername
      return this.$store.dispatch('goResult', val)
        .then(res => {
          if (res.status) {
            console.log('获取数据成功')
          } else {
            console.log('获取数据失败')
          }
        })      
    },
    listPlay (item, index) {
      this.activeIndex = index
      return this.$store.dispatch('listPlay', item)
    }
  }
}

</script>

<style lang="less" scoped>
*{
  padding: 0;
  margin: 0;
}
#search{
  width: 100%;
  height: 600px;
  /* background: rgb(0, 144, 255); */
}
a{
  text-decoration: none;
  
}
.content{
  width: 100%;
  height: 4rem;
  background: rgb(0, 144, 255);
  position: fixed;
  z-index: 99;  
}
.back{
  display: block;
  width: 15%;
  height: 4rem;
  /* background: red; */
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
  line-height: 4rem;
}

.inputContent{
  width: 63%;
  height: 2.1rem;
  background: rgb(0,107, 189);
  position: absolute;
   border-radius: 0.3rem;
  left: 16%;
  top: 25%;
}
.spanI{
  float: left;
  width: 10%;
  line-height: 2rem;
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
.hot{
  position: absolute;
  top: 4.5rem;
  left: 0;
  right: 0;
}
.resultUl{
  position: absolute;
  list-style: none;
  top: 4rem;
  left: 0.7rem;
  width: 95%;
  padding: 0;
  text-align:left;
  z-index: 30;
  background-color: white;
}
.resultLi a{
  width: 100%;
  height: 3rem;
  color: blue;
  line-height: 3rem;
  text-align:left;
  border-bottom: 1px solid #ccc;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.whatSearch{
  width: 100%;
  height: 3rem;
  top: 4rem;
  position: absolute;
}
.whatSearch div{
  float: left;
}
.searchson{
   width: 100%;
   position: relative;
   top: 0rem;
   /* background: yellow; */
   
}
.kind{
    width: 100%;
    position: fixed;
    top: 4rem;
    z-index: 99;
    border-bottom: 1px solid #ccc; 
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
    background: white;
    list-style: none;
    position: absolute;
    top: 7rem;
    z-index: 2;
    .active{
      color: blue;
    }
}
.songname{
        // color: blue;
}

.list a{
  display: block;
  width: 100%;
  height: 3.5rem;
  color: black;
}

.bofang{
    width: 100%;
    line-height: 2rem;
    position: relative;
    top: 7rem;
}
.bofang i{
    margin-left: -60%;
    font-size: 1rem;
}
.list span:nth-child(1){
    width: 60%;
    position: relative;
    left: 0%;
    font-size: 1.3rem;
    /* background: red; */
}
.list span{
    display: block;
     float: left;
}
.list span:nth-child(2){
    width: 30%;
    font-size: 1.3rem;
    /* background: red; */
    position: absolute;
    right: -10%;    
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
</style>
