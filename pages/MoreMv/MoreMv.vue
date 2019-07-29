<template>
	<view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in HotMv" :key="index" @tap="goHotMv" :data-id="HotMv[index].vid">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.picurl"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.title}}·{{item.singers[0].name}}</view>
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
				HotMv:[]
			};
		},
		onLoad() {
			// 获取热门MV
			uni.request({
				url: 'https://v1.itooi.cn/tencent/mv/hot',
				method: 'GET',
				data: {},
				success: res => {
					// console.log(res)
					let HotMv = res.data.data.list.map(item => {
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
		methods: {
			goHotMv(e){
				// console.log(e)
				let id = e.currentTarget.dataset.id;
				uni.navigateTo({
					url:'../MvPlay/MvPlay?id=' + id
				})
			},
		},
	}
</script>

<style lang="scss">
.uni-list{
	width: 95%;
	margin: 0 auto;
	.uni-list-cell{
		width: 100%;
		image{
			width: 100%;
			box-shadow: 1px 1px 5upx #ccc;
		}
	}
}
.uni-media-list-text-top{
	font-size: .8rem;
	padding: 0 0 .5rem 0;
}
</style>
