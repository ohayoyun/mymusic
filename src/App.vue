<template>
  <div id="app">   
     <router-view/>
    <!-- <headerBar></headerBar>-->   
    <broadcast v-if="broadcastBol"></broadcast>
    <auido-component></auido-component>
  </div>
</template>
<script>
// import headerBar from './components/Header/Header-bar'
import Broadcast from './components/broadcast/broadcast'
import AuidoComponent from './components/AudioComponent.vue'
export default {
  name: 'app',
  components: {
    // headerBar,
    Broadcast,
    AuidoComponent
  },
  data () {
    return {
      url: ''
    }
  },
  methods: {
    login () {
      this.$http.get('/api/personalized?id=957687722')
        .then(res => {
          // this.url = res.data.data[0].url
          console.log(res)
        })
    }
  },
  computed: {
    broadcastBol () {
      this.$store.state.broadcastBol
    }
  }
}
</script>

<style>
#app {
  /* width: 100%;
  height: 100%; */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
