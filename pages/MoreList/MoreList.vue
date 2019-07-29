<template>
	<view>
		<view class="sheet">
			<view class="box">
				<view class="sheet_item" v-for="(sheet,index) in sheet" :key="index" @tap="goHotList" :data-id="sheet.dissid">
					<image :src="sheet.imgurl" style="border-radius: 14upx;"></image>
					<view class="text">
						<view class="title">{{sheet.dissname}}</view>
						<view class="name">{{sheet.creator.name}}</view>
						<view class="time">发布时间:{{sheet.createtime}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sheet:[]
			}
		},
		onLoad() {
			// 获取热门歌单
			uni.request({
				url: 'https://v1.itooi.cn/tencent/songList/hot',
				method: 'GET',
				data: {},
				success: res => {
					// console.log(res)
					let sheet = res.data.data.list.map(item => {
						// console.log(item)
						this.sheet.push(item)
						// console.log(this.sheet)
					})
				},
				fail: () => {},
				complete: () => {}
			});
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
		}
	}
</script>

<style>
.sheet{
	width: 95%;
	margin: 0 auto;
}
.sheet_item{
	height: 6rem;
	padding: .5rem 0;
	display: flex;
}
.sheet_item image{
	height: 100%;
	width: 33%;
}
.sheet_item .text{
	width: 60%;
	padding: .5rem;
}
.sheet_item .text .title{
	font-size: 1rem;
}
.sheet_item .text .name{
	font-size: .8rem;
	color: #999999;
	padding: .2rem 0;
}
.sheet_item .text .time{
	font-size: .5rem;
	color: #6D6D72;
}

</style>
