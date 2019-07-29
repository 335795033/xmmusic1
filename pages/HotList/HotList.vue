<template>
	<view style="background: #fcefe8;">
		<view class="title">
			<image :src="songList.logo"></image>
			<span>{{songList.dissname}}</span>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in song" :key="index" @tap="addPlayList(item)" >
				<view class="uni-media-list">
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.name}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{item.album.title}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapActions } from 'vuex'
	// import {ADD_PLAYLIST} from '../../store/mutations-type.js'
	export default {
		data() {
			return {
				songList:[],//歌单信息
				song:[],
			}
		},
		onLoad(e) {
			uni.showLoading({
				title:'loading',
				mask:false
			});
			// console.log(e)
			let id  = e.id
			// 通过ID获取歌单中的歌曲
			uni.request({
				url: 'https://v1.itooi.cn/tencent/songList?id='+id+'&pageSize=100&page=0',
				method: 'GET',
				data: {},
				success: res => {
					let arr=res.data.data.map(item=>{
						this.songList=item
					})
					// console.log(this.songList)
					let arr1=this.songList.songlist.map(item=>{
						// console.log(item)
						this.song.push(item)
						
					})
					uni.hideLoading();
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			...mapActions(['addPlayList'])
		},
	}
</script>

<style>
.title{
	position: relative;
	padding-bottom:70%;
	display: flex;
	justify-content: center;
}
.title image{
	position: absolute;
	width: 100%;
	position: -1;
	filter: blur(4px);
}

.title span{
	position: absolute;
	z-index: 2;
	font-size: .8rem;
	font-weight: bold;
	margin:1rem 0 0;
}
.uni-list{
	width: 90%;
	margin: 0 auto;
}

.uni-media-list-body{
	padding: .3rem .5rem;
	border-bottom:1px solid #D9D9D9 ;
}
.uni-media-list-text-top{
	font-size: .7rem;
}
.uni-media-list-text-bottom{
	font-size: .5rem;
	color: #999999;
}
</style>
