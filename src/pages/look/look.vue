<template>
  <div id="look">
    <headerBar></headerBar>
    <broadcast></broadcast>
    <router-view/>
  </div>
</template>
<script>
/* eslint-disable */
import headerBar from '../../components/Header/Header-bar'
import broadcast from '../../components/broadcast/broadcast'
export default{
  name: 'look',
  components: {
  headerBar,
  broadcast
  }
}
</script>
<style scoped>
#look{
  width: 100%;
  height: 500px;
  background: pink;
}
</style>
