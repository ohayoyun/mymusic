/* eslint-disable */
import http from 'axios'
export default {
  getResult (store, val) {
    let url = '/dpi/api/v3/search/song?format=json&keyword=' + val
    return http.get(url)
      .then(res => {
        // console.log(res)
        if(res.data) {
          // console.log(res.data.data.info)
          let info = res.data.data.info
          let songs = []
          for (var i = 0; i < info.length; i++) {
            let infoOne = info[i]
            if(i === 10) {
              break
            }
            let song = {
              songname:  infoOne.songname,
              songername: infoOne.songername
            }
            songs.push(song)
          }
          // console.log(songs)
          store.commit('GETRESULT', songs)
          return {status: true, msg: '请求成功'}
        } else {
          return {status: false, msg: '请求失败'}
        }
      })
  },
  goResult (store, val) {
    let url = '/dpi/api/v3/search/song?format=json&keyword=' + val
    return http.get(url)
      .then(({data}) =>{
        // console.log(data.data.info)
        let info = data.data.info
        let songs = []
        for (var i = 0; i < info.length; i++) {
          let infoOne = info[i]
          let song = {
            songname: infoOne.songname,
            singername: infoOne.singername,
            hash: infoOne.hash
          }
          songs.push(song)
        }
        // console.log(songs)
        store.commit('GORESULT', songs)
        return {status: true, msg: '获取信息成功'}
      })
  },
   // 注册播放相关的事件
   registerPlayEvent ({ dispatch, commit, state }) {
     //<audio onended="myFunction()">音频播放结束后执行函数
    state.audioElement.onended = function () {
      // 先关闭音乐
      state.playStatus = false
       // 判断是不是单曲循环
      //  if () {

      //  }else{}

    }
   },
  // 播放点击的这一首
  listPlay (store, item) {
    let playArr = store.state.playArr.list 
    for (var i = 0; i < playArr.length; i++) {  // 先判断点击的这首歌在不在当前播放的列表中
      // 若是有歌曲id相同, 则表示在, 就调列表的播放
      if (playArr[i].hash === item.hash) {
        store.dispatch('playFromPlayList', i)
      }
    }
    //不在列表，就先添加进去
    store.commit('ADDSONGMSG', item)
    // 获取刚刚添加到播放列表的这首歌的下标(也就是数组最后一位)
    let index = store.state.playArr.list.length - 1
    store.dispatch('playFromPlayList',index)
  },
  // 从在播放的列表中选中播放
  playFromPlayList (store, index) {
    store.dispatch('setSongMsg', store.state.playArr.list[index])
    store.state.songMsgIndex = index
  },
  setSongMsg (store, item) {
    store.state.songMsg = item  //正在播放
    let url = '/cpi/yy/index.php?r=play/getdata&hash=' + item.hash
    return http.get(url)
    .then(({data}) => {
      console.log(data)
      store.state.audioElement.src = data.data.play_url
      store.commit('PLAYCONTROL')
    })

  },
  newSongs ({commit}) {
    // console.log('a')
    let url = '/bpi/?json=true' 
    return http.get(url)
    .then (({data}) =>{
      // console.log(data.data)
      let songs = []
      for(let i = 0; i < data.data.length; i++){
        let song = data.data[i]
        let songOne = {
          hash: song.hash,
          filename: song.filename
        }
        songs.push(songOne)
      }
      // console.log(songs)
      commit('NEWSONGS', songs)
    })

  },
  className ({commit}) {    
    let url = '/bpi/singer/class&json=true' 
    return http.get(url)
    .then (({data}) =>{
      // console.log(data.list)    
      let classsinger =data.list     
    //  console.log(classsinger)
      commit('CLASSNAME', classsinger)
    })
  },
  rankSong ({commit}){
    let url = '/bpi/rank/list&json=true'
    return http.get(url)
    .then (res =>{      
      let rankSong = res.data.rank.list
      
      // console.log(rankSong)
      commit('RANKSONG', rankSong)
    })
  },
  songList ({commit}) {
    let url = '/bpi/plist/index&json=true'
    return http.get(url)
    .then (res => {
      let info = res.data.plist.list.info
      commit('SONGLIST', info)
      // console.log(info)
    })
  }
}
