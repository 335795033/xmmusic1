<template>
	<view class="content">
		<view class="header">
			<h1>发现</h1>
			<input type="search" placeholder="🔍周杰伦" @tap='goSearch'>
			<text class="test" @tap="sao">&#xe64b;</text>
		</view>
		<scroll-view scroll-y="true" style="height: 40rem;">
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
							<swiper-item v-for="(list,index) in list" :key="index">
								<image class="swiper-item" :src="list.url"></image>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
			<view class="sheet">
				<view class="bigbox">
					<h2>热门歌单</h2>
					<view class="more" @tap="goMoreList">more></view>
				</view>
				<view class="box">
					<view class="sheet_item" v-for="(sheet,index) in sheet" :key="index" @tap="goHotList" :data-id="sheet.dissid">
						<image :src="sheet.imgurl" style="border-radius: 14upx;"></image>
						<p>{{sheet.dissname}}</p>
					</view>
				</view>
			</view>
			<view class="HotMV">
				<view class="bigbox">
					<h2>热门MV</h2>
					<view class="more" @tap="goMoreMv">more></view>
				</view>
				<view class="box">
					<view class="mv_item" v-for="(HotMv,index) in HotMv" :key="index" @tap="goHotMv" :data-id="HotMv.vid">
						<image :src="HotMv.picurl"></image>
						<p>{{HotMv.title}}</p>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				indicatorDots: false,
				autoplay: true,
				interval: 4000,
				duration: 500,
				list: [],
				sheet: [],
				HotMv: []
			}
		},
		onLoad() {
			// 下拉刷新
			uni.startPullDownRefresh();

			// 获取轮播��
			uni.request({
				url: 'https://v1.itooi.cn/tencent/banner',
				method: 'GET',
				data: {},
				success: res => {
					// console.log(res)
					let pic = res.data.data.map(item => {
						this.list.push(item.pic_info)
					})
					// console.log(this.list)
				},
				fail: (err) => {
					console.log(err)
				},
				complete: () => {}
			});
			// 获取热门歌单
			uni.request({
				url: 'https://v1.itooi.cn/tencent/songList/hot',
				method: 'GET',
				data: {},
				success: res => {
					// console.log(res)
					let sheet = res.data.data.list.slice(0, 6).map(item => {
						// console.log(item)
						this.sheet.push(item)
						// console.log(this.sheet)
					})
				},
				fail: () => {},
				complete: () => {}
			});
			// 获取热门MV
			uni.request({
				url: 'https://v1.itooi.cn/tencent/mv/hot',
				method: 'GET',
				data: {},
				success: res => {
					// console.log(res)
					let HotMv = res.data.data.list.slice(0, 6).map(item => {
						// console.log(item)
						this.HotMv.push(item)
						// console.log(this.HotMv)
					})
					// console.log(this.HotMv)
				},
				fail: () => {},
				complete: () => {}
			});
		},
		// 下拉刷新
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			goHotList(e) {
				// console.log(e)
				// console.log(e.currentTarget.dataset.id)
				let id = e.currentTarget.dataset.id;
				uni.navigateTo({
					url: "../HotList/HotList?id=" + id
				})
			},
			goHotMv(e) {
				// console.log(e)
				let id = e.currentTarget.dataset.id;
				uni.navigateTo({
					url: '../MvPlay/MvPlay?id=' + id
				})
			},
			goMoreList() {
				uni.navigateTo({
					url: '../MoreList/MoreList'
				})
			},
			goMoreMv() {
				uni.navigateTo({
					url: '../MoreMv/MoreMv'
				})
			},
			goSearch() {
				uni.navigateTo({
					url: '../Search/Search',
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			sao() {
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});

			}
		}
	}
</script>

<style>
	@font-face {
		font-family: 'iconfont';
		src: url('~@/static/icon/iconfont.ttf');
	}

	.test {
		font-family: iconfont;
	}

	.content {
		background: #fcefe8;
		padding-top: 2rem;
	}

	.header {
		display: flex;
		justify-content: space-around;
		padding: 15upx 0;
	}

	.header h1 {
		font-size: 1rem;
	}

	.header .test {
		color: #ccc;
		margin-top: .2rem;
	}

	.header input {
		border: 1upx solid #cccccc;
		box-shadow: 0px 0px 5upx #ccc;
		border-radius: 10upx;
		width: 70%;
		font-size: 20upx;
	}

	.uni-padding-wrap {
		width: 95%;
		margin: 0 auto;
	}

	.swiper {
		height: 360upx;
	}

	.swiper-item {
		width: 100%;
		height: 360upx;
		border-radius: 20upx;
	}

	.bigbox {
		display: flex;
		justify-content: space-between;
	}

	.bigbox .more {
		padding: 1.2rem 1.5rem 0 0;
		font-size: .5rem;
	}

	.sheet h2,
	.HotMV h2 {
		font-size: 40upx;
		padding: .5rem;
	}

	.box {
		width: 95%;
		margin: 0 auto;
		display: flex;
		flex-flow: wrap;
		justify-content: space-around;
	}

	.sheet_item {
		width: 33%;
		border-radius: 10upx;
		padding: 0.2rem 0;
	}

	.sheet_item image {
		margin: 0 5%;
		width: 90%;
		height: 5.5rem;
		box-shadow: 2px 2px 5upx #CCCCCC;
	}

	.sheet_item p,
	.mv_item p {
		font-size: .5rem;
		color: #666666;
		width: 92%;
		margin: 0 auto;
	}

	.HotMV .box {
		width: 95%;
		margin: 0 auto;
	}

	.mv_item {
		width: 48%;
		margin: 0 1%;
	}

	.mv_item image {
		height: 6rem;
		width: 100%;
		box-shadow: 2px 2px 5upx #CCCCCC;
	}
</style>
