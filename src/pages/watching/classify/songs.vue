<template>
  <div class="songs">
    <watching></watching>
    <router-view/>
    <ul class="rankUl">
      <li v-for="item in songsList" :key="item.id">
        <div class="liImg">
            <img :src="item.imgurl.replace('{size}', '400')" width="60" height="60">
        </div>
        <div class="liText">
        <span class="liSpan">{{item.specialname}}</span>
          </div>
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
    this.$store.dispatch("songList")
  },
  components: {
    watching
  },
  computed: {
    songsList () {
      return this.$store.state.songslist
    }
  }
}
</script>
<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
.songs{
    width: 100%;   
    // background: yellowgreen;
}
.rankUl{
  margin-top: 8rem;
}
.rankUl li{
  width: 100%;
  height: 5rem;
  text-align: left;
  margin-left: 1rem;
  border-bottom: 1px solid #ccc;
  line-height: 3rem;
  list-style: none;
  margin: 0;
  padding: 1rem;
}
.rankUl li .liImg{
  width: 20%;
  height: 5rem;
  // background: red;
  float: left;
}
.rankUl li .liText{
  width: 70%;
  height: 5rem;
  // background: yellow;
  float: left;
  line-height: 5rem;
  .liSpan{
    display: block;
    margin-left: 2rem;
  }
}
.liImg img{
  width: 5rem;
  height: 5rem;
}
.fill{
  width: 100%;
  height: 5rem;
}
</style>
