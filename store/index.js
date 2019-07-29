import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations.js'
import actions from './action.js'
import getters from './getters.js'


Vue.use(Vuex)

// 播放模式
const playMode={
	sequence:0,//顺序播放
	loop:1,//循环播放
	random:2//随机播放
}

const store = new Vuex.Store({
			state: {
				playing: false, //这里表示是否播放
				fullScreen: false, //播放器是否全屏
				playList: [], //播放列表
				mode: playMode.sequence, //默认是顺序播放
				currentIndex: -1 ,//当前播放歌曲的索引
				now:0,
				lyc:[]
			},
			mutations,
			actions,
			getters
	})
export default store
