import * as Types from './mutations-type.js'
const actions = {
	// 加入播放列表
	addPlayList({commit}, item) {
		// console.log(item)
		let id = item.mid
		let picPath = 'https://v1.itooi.cn/tencent/pic?id=' + id
		let plyUrl = 'https://v1.itooi.cn/tencent/url?id=' + id + '&quality=128'
		uni.request({
			url: 'https://v1.itooi.cn/tencent/lrc?id=' + id,
			method: 'GET',
			data: {},
			success: res => {
				console.log(res.data)
				item.lyc=res.data
			},
			fail: () => {},
			complete: () => {}
		});
		let time=item.interval
		let singer=item.singer[0].name
		let name=item.name
		let MySongIofo = {
			songPic: picPath,
			SongUrl: plyUrl,
			time:time,
			singer:singer,
			name:name,
			id:id
		}
		commit(Types.ADD_PLAYLIST, MySongIofo);
		uni.navigateTo({
			url: "../Play/Play",
		})
	},
	RankaddPlayList({commit},item){
		console.log(item)
		let id = item.id
		let picPath = 'https://v1.itooi.cn/tencent/pic?id=' + id
		let plyUrl = 'https://v1.itooi.cn/tencent/url?id=' + id + '&quality=128'
		let time= item.time
		let singer=item.singer
		let name=item.name
		let MySongIofo = {
			songPic: picPath,
			SongUrl: plyUrl,
			time:time,
			singer:singer,
			name:name,
			id:id
		}
		commit(Types.RANK_ADD_PLAYLIST, MySongIofo);
		
	},
	SearchaddPlayList({commit},item){
		console.log(item)
		let id = item.media_mid
		let picPath = 'https://v1.itooi.cn/tencent/pic?id=' + id
		let plyUrl = 'https://v1.itooi.cn/tencent/url?id=' + id + '&quality=128'
		let time=item.interval
		let singer=item.singer[0].name
		let name=item.songname
		let MySongIofo = {
			songPic: picPath,
			SongUrl: plyUrl,
			time:time,
			singer:singer,
			name:name,
			id:id
		}
		commit(Types.SEARCH_ADD_PLAYLIST, MySongIofo);
		uni.navigateTo({
			url: "../Play/Play",
		})
	},
	prev({commit},item){
		// console.log(item)
		commit(Types.CHANGE_NOW,item);
	},
	next({commit},item){
		// console.log(item)
		commit(Types.REDUCE_NOW,item);
	}
}
export default actions
