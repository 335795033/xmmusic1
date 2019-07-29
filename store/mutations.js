import * as Types from './mutations-type.js'
const mutations={
	[Types.ADD_PLAYLIST](state,item){
		console.log(item)
		//查找当前添加的歌曲是否已经存在
		let music=state.playList.find(val=>val.id==item.id);
		if(music){
			state.fullScreen=true;
			//歌曲存在，找当前歌曲的索引,设置为当前播放的索引
			state.now=state.playList.indexOf(music);
		}else{
			// 往播放列表添加歌曲
		state.playList=[...state.playList,item]
		// 显示全屏的播放器
		state.fullScreen=true;
		// 设置点击歌曲立即播放
		state.now=state.playList.length-1;
		}
		console.log(state.playList)
		// console.log(state)
	},
	[Types.RANK_ADD_PLAYLIST](state,item){
		console.log(item)
		let music=state.playList.find(val=>val.id==item.id);
		if(music){
			state.fullScreen=true;
			//歌曲存在，找当前歌曲的索引,设置为当前播放的索引
			state.currentIndex=state.playList.indexOf(music);
		}else{
			// 往播放列表添加歌曲
		state.playList=[...state.playList,item]
		// 显示全屏的播放器
		state.fullScreen=true;
		// 设置点击歌曲立即播放
		state.now=state.playList.length-1;
		}
		uni.navigateTo({
			url: "../Play/Play",
		})
		console.log(state.playList)
	},
	[Types.SEARCH_ADD_PLAYLIST](state,item){
		// console.log(item)
		let music=state.playList.find(val=>val.id==item.id);
		if(music){
			state.fullScreen=true;
			//歌曲存在，找当前歌曲的索引,设置为当前播放的索引
			state.currentIndex=state.playList.indexOf(music);
		}else{
			// 往播放列表添加歌曲
		state.playList=[...state.playList,item]
		// 显示全屏的播放器
		state.fullScreen=true;
		// 设置点击歌曲立即播放
		state.now=state.playList.length-1;
		}
		console.log(state.playList)
	},
	[Types.CHANGE_NOW](state,item){
		// console.log(state.now)
		if(state.now==0){
			state.now=state.playList.length-1
		}else{
			state.now=state.now-1
		}
	},
	[Types.REDUCE_NOW](state,item){
		// console.log(state.now)
		if(state.now==state.playList.length-1){
			state.now=0
		}else{
			state.now=state.now+1
		}
	}
}
export default mutations;