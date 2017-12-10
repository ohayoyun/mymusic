<template>
  <div id="watching">
    <headerBar></headerBar>
    <broadcast></broadcast>
    <router-view/>
    <div class="classify">
      <div class="header-nav">
        <mt-navbar class="container">
          <mt-tab-item id="head-nav1">
            <router-link to="/newsong">新歌</router-link>
          </mt-tab-item>
          <mt-tab-item id="head-nav2">
             <router-link to="/singer">歌手</router-link>

             </mt-tab-item>
          <mt-tab-item id="head-nav3">
             <router-link to="/rank">排行</router-link>

             </mt-tab-item>
          <mt-tab-item id="head-nav4">
             <router-link to="/songs">歌单</router-link>
          </mt-tab-item>
        </mt-navbar>
     </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import headerBar from '../../components/Header/Header-bar'
import broadcast from '../../components/broadcast/broadcast'
export default{
  name: 'watching',
  data () {
    return {
    }
  },
  components: {
    headerBar,
    broadcast,
 },
  computed: {
    headNav:{
      get () {
        return this.$store.getters.headNav
      },
      set (nav) {
        //stringObject.substr(start,length)抽取从 start 下标开始的指定数目的字符
        const index = nav.substr(-1)  //-1 指字符串中最后一个字符，-2 指倒数第二个字符
        this.$store.commit('SETHEADNEV',nav)
        this.goRouter(Number(index))
      }
    }    
  },
  methods: {
    goRouter (index) {

      switch (index) {
        case 1:
        this.$route.push({path: '/newsong'});
        break;
        case 2:
        this.$route.push({path: '/singer'});
        break;
        case 3:
         this.$router.push({path: '/rank'});
         break;
        case 4:
         this.$router.push({path: '/songs'});
         break;
      }
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
#watching {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
 
}
.main{
  width: 102%;
}
.classify{
  width: 103%;
  height: 3rem;
  margin-top: 5rem;
  /* background: red; */
  border-bottom: 1px solid gray;
  position: fixed;
  top: -0.5rem;
  z-index: 99;
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
