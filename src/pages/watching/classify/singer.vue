<template>
  <div class="singer">
    <watching></watching>
    <router-view/>
     <ul class="singerlist">    
      <li v-for="(item,index) in singerClass" :key="item.id">
      <router-link to="/singsinger">
        {{item.classname}}
      </router-link>      
      </li>
    </ul>
  </div>
</template>
<script>
  /* eslint-disable */
import watching from '../watching'
export default{
  components: {
    watching
  },
   created () {
     this.$store.dispatch('className')
  },
 name: 'singsinger',
 computed: {
   singerClass () {
      return this.$store.state.classsinger
   }  
 }
}
</script>

<style scoped>
@import url("../../../common/styles/hometwo.less");
.singer{
    width: 100%;
    height: 400px;
}
.singerlist li{
  width: 90%;
  height: 2.5rem;
  margin: 1rem auto;
  border-radius: 5%;
  border: 1px solid #ccc;
  line-height: 3rem;
  list-style: none;
  background: #fbfbfb;
}
.classify{
  position: fixed;
  top: -0.5rem;
  z-index: 99;
  width: 103%;
  height: 3rem;
}
</style>
