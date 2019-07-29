<template>
	<view style="background: #fcefe8;height: 41rem;">
		<view class="header">
			<view class="header-t">
				<view class="uname">
					失落凡间的仙兔
				</view>
				<view class="img">
					<image src="../../static/touxiang.png"></image>
				</view>
			</view>
			<view class="header-b">
				<view class="box">
					<view class="num">
						25
					</view>
					<view class="title">
						累计播放
					</view>
				</view>
				<view class="box">
					<view class="num">
						1
					</view>
					<view class="title">
						关注
					</view>
				</view>
				<view class="box">
					<view class="num">
						824
					</view>
					<view class="title">
						粉丝
					</view>
				</view>
				<view class="box">
					<view class="num">
						3
					</view>
					<view class="title">
						连续签到
					</view>
				</view>
			</view>
		</view>
		<view class="">
			开发中...
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.header{
	width: 100%;
	height: 11rem;
	background: #333333;
	padding-top: 2rem;
}
.header-t,.header-b{
	display: flex;
}
.header-t{
	justify-content: space-between;
	padding: 2.5rem 1rem 0;
}
.uname{
	margin-top: 1.2rem;
	font-size: 1.2rem;
	color: #fff;
	font-weight: bold;
}
.header-t image{
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
}
.header-b{
	padding: 0 1rem;
}
.num{
	font-size: 1rem;
	font-weight: bold;
	color: #FFFFFF;
}
.box{
	margin:0 .5rem;
}
.title{
	font-size: .5rem;
	color: #999;
}
</style>
