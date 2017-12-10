/* eslint-disable */
export default {
  // 搜索到的歌曲
  results: [],
  // 用户点击的那个搜索结果
  result: [],
  // 用于控制播放组件的显示隐藏
  broadcastBol: true,
  // 音频的控件
  audioElement: '',
  // 正在播放的列表
  playArr: {
    hash: 0,
    type: 'list',//  当前播放列表来源类型 { list: 歌单列表, search: 搜索列表}
    list: []
  },
  // 正在播放的音频在播放列表的下标
  songMsgIndex: 0,
  // 正在播放的音频的信息
  songMsg: {},
  //推荐的新歌
  filenames: [],
  //歌手分类
  classsinger:[],
  //排行榜歌曲
  rankSong: []
}
