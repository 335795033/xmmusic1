<template>
	<view style="background: #fcefe8; padding-top:2rem;">
		<view class="content">
			<view class="title">排行榜</view>
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in rank[0]" :key="index" @tap="RankaddPlayList(item)">
					<view class="uni-media-list">
						<image class="uni-media-list-logo" :src="item.pic"></image>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">{{item.name}}</view>
							<view class="uni-media-list-text-bottom uni-ellipsis">{{item.singer}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
		data() {
			return {
				rank:[]
			}
		},
		onLoad() {
			uni.showLoading({
				title:'loading',
				mask:false
			});
			uni.request({
				url: 'https://v1.itooi.cn/tencent/topList?id=26&pageSize=100&page=0&format=1',
				method: 'GET',
				data: {},
				success: res => {
					// console.log(res.data.data)
					this.rank.push(res.data.data)
					// console.log(this.rank[0])
					uni.hideLoading();

				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			...mapActions(['RankaddPlayList'])
		}
	}
</script>

<style>
.content{
	width: 95%;
	padding: .4rem auto 0;
}
.title{
	font-size: 1rem;
	font-weight: bold;
	padding: .2rem 0 0 .4rem;
}
.uni-media-list{
	display: flex;
	padding: .4rem;
}
.uni-media-list image{
	width: 3rem;
	height: 3rem;
	box-shadow: 1px 1px 5upx #CCCCCC;
}
.uni-media-list-text-top{
	font-size: .8rem;
	padding: .2rem .5rem;
}
.uni-media-list-text-bottom{
	font-size: .6rem;
	color: #999;
	padding: .2rem .5rem;
}
</style>
