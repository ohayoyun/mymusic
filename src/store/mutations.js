/* eslint-disable */
export default {
  // 将获取到的歌曲列表存储在vuex中
  GETRESULT (state, songs) {
    state.results = songs
  },
  // 将用户点击的那个搜索结果存储在vuex中
  GORESULT (state, songs) {
    state.result = songs
  },
  // 设置音频控件为全局控件
  SETAUDIOELEMENT (state) {
    state.audioElement = document.getElementById('audioElement')
  },
  // 播放
  PLAYCONTROL (state) {
    state.audioElement.play()
    state.playStatus = true
  },
  // watching的跳转路由
  SETHEADNEV (state, nav) {
    state.headNav = nav
  },
  //添加到播放列表
  ADDSONGMSG (state, item) {
    state.playArr.list.push(item)
  },
  NEWSONGS (state, songs) {
    state.filenames = songs
  },
  CLASSNAME (state, classsinger) {
    state.classsinger = classsinger
  },
  RANKSONG (state, rankSong){
    state.rankSong = rankSong
  },
  SONGLIST (state,info) {
    state.songslist = info
  }
}
