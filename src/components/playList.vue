<template>
 <transition name="fade">
  <div class="listBox" @click="close">
      <div class="playList">
          <span>播放列表</span>
          <span>收藏</span>
          <div><i class="iconfont icon-fenxiang1"></i></div>
          <div><i class="iconfont icon-liebiaoxunhuan"></i></div>
          <div><i class="iconfont icon-lajitong1"></i></div>
      </div>
  </div>
 </transition> 
</template>
<script>
export default{
  methods: {
    close () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.listBox{
    background: gray;
    width: 100%;
    min-height: 568px;
    opacity: 0.5;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
}
.fade-enter, .fade-leave-active {
    opacity: 0;
}
.up-enter-active, .up-leave-active {
    transition: all .3s;
}
.up-enter, .up-leave-active {
    -webkit-transform: translateY(100%);
    -moz-transform: translateY(100%);
    -ms-transform: translateY(100%);
    -o-transform: translateY(100%);
    transform: translateY(100%);
}
.playList{
    /* margin-top: 50%; */
    width: 100%;
    height :100px;
    background: red;
    margin-bottom: 0;
}
</style>

