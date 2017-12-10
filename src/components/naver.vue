<template>
     <div class="header-nav">
        <mt-navbar class="container">
          <mt-tab-item id="head-nav1">
            <router-link to="/musiclibrary">推荐</router-link>
          </mt-tab-item>
          <mt-tab-item id="head-nav2">
             <router-link to="/singsinger">歌手</router-link>

             </mt-tab-item>
          <mt-tab-item id="head-nav3">
             <router-link to="/rank">排行</router-link>

             </mt-tab-item>
          <mt-tab-item id="head-nav4">
             <router-link to="/">歌单</router-link>
          </mt-tab-item>
        </mt-navbar>
     </div>
</template>
<style speced>
.header-nav{
  width: 100%;
  height:3rem;
  position: fixed;
  top:4.5rem;
}
</style>

