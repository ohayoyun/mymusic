<template>
  <div class="login">
      <div class="toper">
        <span @click="close">x</span>
      </div>
     <div class="alert" v-show="isShow">暂不支持登录
         <span class="closed" @click="close">X</span>
     </div>
      <div class="bottomer">        
        <div class="enter" @click="login">登录</div>
        <div class="join">注册</div>
        <div class="others">其它登录方式</div>
        <div class="other">

        </div>
        <span>登录代表你同意酷狗服务和隐私条款</span>
      </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name:'login',
  data () {
     return{
          isShow: false
     }
  },
  methods: {
      close () {
        this.$router.go(-1)
      },
      login () {
          this.isShow = true
      }
  }
}
</script>

<style scoped>
.login{
    color: white;
    width: 100%;
    height: 667px;
    background-image: url(./login.jpg);
    background-size: 104%;
}
.enter{
    width: 60%;
    height: 3rem;
    position: relative;
    left: 20%;
    line-height: 3rem;
    background:rgb(16,244,100);
    border-radius: 2rem;
    margin-bottom: 1rem;
}
.join{
    width: 60%;
    height: 3rem;
    position: relative;
    left: 20%;
    line-height: 3rem;
    background:rgb(10,115,209);
    border-radius: 2rem;
    margin-bottom: 2rem;
}
.bottomer{
    width: 100%;
    height: 30%;
    /* background: red; */
    /* margin-bottom: -10rem;  */
}
.toper{
    width: 100%;
    height: 45%;
}
.toper span{
    position: relative;
    left: -40%;
    top: 8%;
    font-size: 2rem;
}
.alert{
    width: 80%;
    height: 6rem;
    background: red;
    line-height: 5rem;
    margin: auto auto;
    z-index: 99;
}
.closed{
    z-index: 100;
    position: relative;
    right: -20%;
}
</style>
