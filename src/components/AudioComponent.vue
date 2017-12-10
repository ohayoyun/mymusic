<template>
  <audio id="audioElement" src="http://fs.open.kugou.com//6513547386e920170f5aa8ad3379bd28//59f95f6e//G078//M08//18//17//jg0DAFgi6G-AKqsqADDP_nSW5F4051.mp3">您的浏览器不支持 audio 标签。</audio>
</template>
<script>
export default {
  name: 'audioComponent',
  mounted () {
    // 设置音频控件为全局组件
    this.$store.commit('SETAUDIOELEMENT')
  }
}
</script>
<style scoped>

</style>
