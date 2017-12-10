<template>
  <div class="rank">
  <watching></watching>
  <router-view/>
  <ul class="rankUl">
    <li v-for="item in rankSongs" :key="item.id" @click="listRank(item, index)">
      <div class="liImg">
          <img :src="item.banner7url.replace('{size}', '400')" width="60" height="60"  alt="">
      </div>
      <div class="liText">
       <span class="liSpan">{{item.rankname}}</span> 
      </div>
      <span class="tiaozhuan">></span>
    </li>
  </ul>
  <div class="fill"></div>
  </div> 
</template>
<script>
/* eslint-disable */
import watching from '../watching'
export default{
   created () {
    this.$store.dispatch('rankSong')
  },
  components: {
    watching
  },
  computed: {
    rankSongs (){
       return this.$store.state.rankSong
    }
  },
  methods: {
    listRank () {
      
    }
  }
}
</script>
<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
.main{
    width: 102%;
}
.rankUl{
  margin-top: 8rem;
}
.rankUl li{
  width: 100%;
  height: 6rem;
  text-align: left;
  margin-left: 1rem;
  border-bottom: 1px solid #ccc;
  line-height: 3rem;
  list-style: none;
  margin: 0;
  padding: 1rem;
}
.rankUl li .liImg{
  width: 25%;
  height: 6rem;
  // background: red;
  float: left;
}
.rankUl li .liText{
  width: 60%;
  height: 6rem;
  // background: yellow;
  float: left;
  line-height: 6rem;
  .liSpan{
    margin-left: 2rem;
  }
}
.liImg img{
  width: 6rem;
  height: 6rem;
}
.fill{
  width: 100%;
  height: 5rem;
}
.tiaozhuan{
 line-height: 6rem;
 font-size: 1.3rem;
 color: #3c3c3c
}
</style>
