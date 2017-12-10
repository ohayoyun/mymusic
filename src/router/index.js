/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import singsong from '@/pages/singsong/singsong'
import home from '@/pages/home/home'
import myset from '@/pages/myset/myset'
import watching from '@/pages/watching/watching'
import search from '@/pages/search/search'
import playList from '@/components/playList'//播放条右下角

import rank from '@/pages/watching/classify/rank'
import login from '@/pages/home/login/login'
import songs from '@/pages/watching/classify/songs'
import singer from '@/pages/watching/classify/singer'
import newsong from '@/pages/watching/classify/newsongs/newsong'
import localSong from '@/pages/home/localSong'
import mylove from '@/pages/home/mylove'
import download from '@/pages/home/download'
import Lately from '@/pages/home/Lately'
import musiclibrary from '@/pages/home/library/musiclibrary'
import singsinger from '@/pages/home/library/singsinger/singsinger'
import ranking from '@/pages/home/library/ranking/ranking'
import songsheet from '@/pages/home/library/songsheet/songsheet'
import radioStation from '@/pages/home/library/radioStation/radioStation'
Vue.use(Router)
export default new Router({
  routes: [
    { path: '/',name: 'home', component: home},
    { path: '/singsong',name: 'singsong', component: singsong},
    { path:'/myset', name: 'myset',component: myset},
    {path:'/search',name: 'search',component: search},
    {path:'/watching',
      name: 'watching',
      component: watching},
    {
      path:'/playList',
      name: 'playList',
      component: playList
    },
    {
      path:'/rank',
      name: 'rank',
      component: rank
    },
    {
      path:'/login',
      name: 'login',
      component: login
    },
    {
      path:'/songs',name: 'songs', component: songs
    },
    { path:'/singer',name: 'singer',component: singer},
    { path:'/newsong',name: 'newsong', component: newsong},
    { path:'/localSong', name: 'localSong', component: localSong},
    { path:'/mylove', name: 'mylove', component: mylove},
    { path:'/download', name: 'download', component: download},
    { path:'/Lately', name: 'Lately', component: Lately},
    { path:'/musiclibrary', name: 'musiclibrary', component: musiclibrary},
    { path:'/singsinger', name: 'singsinger', component: singsinger},
    { path:'/songsheet', name: 'songsheet', component: songsheet},
    { path:'/radioStation', name: 'radioStation', component: radioStation},
    { path:'/ranking', name: 'ranking', component: ranking},
    // { path:'/ranking', name: 'ranking', component: ranking}
  ] 
  })
