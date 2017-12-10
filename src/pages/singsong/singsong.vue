
<template>
  <div id="hello">
    <headerBar></headerBar>
    <broadcast></broadcast>
    <router-view/>
    <div class="lunbo">
      <mt-swipe :auto="4000">
      <mt-swipe-item><img src="./banner1.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="./banner2.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="./banner3.jpg"></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="kind">
      <ul>
        <li>
          <div class="kindSmall">
            <i class="iconfont icon-wujiaoxing2"></i>
          </div>          
          <span>打擂台</span>
        </li>
      </ul>
    </div>
    <div class="ringSong">

    </div>
    <div class="naerby">
      
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import headerBar from '../../components/Header/Header-bar'
import broadcast from '../../components/broadcast/broadcast'
export default{
  name: 'hello',
  components: {
  headerBar,
  broadcast
  }
}
</script>
