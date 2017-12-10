<template>
  <div class="newsong">
    <watching></watching>
    <router-view/>
    <div class="lunbo">
      <mt-swipe :auto="4000">
      <mt-swipe-item><img src="./banner1.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="./banner2.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="./banner3.jpg"></mt-swipe-item>
      </mt-swipe>
    </div>
    <ul v-if="filenames">
      <li class="newsongs" v-for="(item,index) in filenames" :key="item.id" @click="listPlay(item, index)">
        <div class="names" :class="{'active':index === activeIndex}">{{item.filename}}</div>
        <div class="download"></div>
      </li>
    </ul>
    <div class="fill"></div>
  </div> 
</template>
<script>
 /* eslint-disable */
import watching from '../../watching'
export default{
  created () {
   this.$store.dispatch('newSongs')
 },
 data () {
   return {
       activeIndex: -1
   }
 },
  components: {
    watching
  },
  methods: {
    listPlay (item, index) {
      this.activeIndex = index
      return this.$store.dispatch('listPlay', item)
    }
  },
  computed: {
    filenames () {
      return this.$store.state.filenames
    }
  }
}
</script>
<style lang="less" scoped>
*{
  margin-left: 0;
  padding: 0;
}
.newsong{
    width: 100%;
}
.lunbo{
  width: 100%;
  height: 180px;
  margin-top: 7rem;
}
.lunbo img{
  width: 100%;
}
.select{
    width: 2rem;
    height: 2rem;
    position: relative;
    top: 1rem;
}
.newsongs{
  width: 100%;
  height: 3rem;
  text-align: left;
  margin-left: 1rem;
  border-bottom: 1px solid #ccc;
  line-height: 3rem;
  list-style: none;
   .active{
      color: blue;
    }
}
.fill{
  width: 100%;
  height: 4rem;
}
</style>
