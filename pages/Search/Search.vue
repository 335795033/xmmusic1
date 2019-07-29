<template>
	<view style="background: #fcefe8;">
		<view class="content">
			<view class="header">
				<input class="search" type="search" placeholder="🔍周杰伦" @input="search">
				<view @tap="deleteinfo" class="quxiao">取消</view>
			</view>
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in info" :key="index">
					<view class="uni-media-list">
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top" @tap="SearchaddPlayList(item)">{{item.songname}}·{{item.albumname}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="History">
				<view class="title">
					搜索历史
				</view>
				<view class="item_f">
					<view class="item">
						周杰伦
					</view>
					<view class="item">
						bigbang
					</view>
					<view class="item">
						这就是灌篮
					</view>
				</view>
			</view>
			<view class="Hot">
				<view class="title">
					热门搜索
				</view>
				<view class="item_f">
					<view class="item">
						沙漠骆驼
					</view>
					<view class="item">
						许巍
					</view>
					<view class="item">
						田馥甄
					</view>
					<view class="item">
						周杰伦
					</view>
					<view class="item">
						抖音神曲
					</view>
					<view class="item">
						五月天
					</view>
					<view class="item">
						陈晓文
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
				info:[]
			}
		},
		methods: {
			search(e) {
				let ss = e.target.value
				console.log(ss)
				uni.showLoading({
					title:'loading',
					mask:false
				});
				uni.request({
					url: "https://v1.itooi.cn/tencent/search?keyword=" + ss + "&type=song&pageSize=100&page=0",
					method: 'GET',
					data: {},
					success: res => {
						// console.log(res)
						let xq = res.data.data.list.slice(0, 10).map(item => {
							this.info.push(item)
							// this.info.slice()
							return item
						})
						let arr=this.info.slice(this.info.length-10,this.info.length)
						this.info=arr
						uni.hideLoading();
					},
					fail: () => {},
					complete: () => {}
				});
			},
			...mapActions(['SearchaddPlayList']),
			deleteinfo(){
				this.info=[];
				// let search=document.getElementsByClassName('search').=''
				// console.log(search.inputValue)
				// search.value=''
			}
		}
	}
</script>

<style>
	.content {
		width: 95%;
		margin: 0 auto;
		height: 35rem;
	}
	.header{
		display: flex;
	}
	.header input{
		border: 1px solid #999;
		border-radius: .2rem;
		font-size: .8rem;
		padding: .2rem;
		width: 80%;
	}
	.quxiao{
		margin: auto auto;
		width: 15%;
		text-align: center;
		font-size: .8rem;
		background: #0A98D5;
		border-radius: .5rem;
		height: 1.4rem;
		line-height: 1.4rem;
		color: #FFECEC;
	}.title{
		font-size: 1.2rem;
		font-family: '微软雅黑';
		font-weight: bold;
		margin:1.5rem 0 .1rem .5rem;
	}
	.item_f{
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.item{
		font-size: .6rem;
		padding: .2rem;
		border: 1px solid #dbd7d7;
		border-radius: 1.5rem;
		margin: .2rem .4rem;
		background: #dbd7d7;
	}
	.uni-media-list-body{
		font-size: .8rem;
		padding: .5rem 0 .1rem;
		border-bottom: 1px solid #EEEEEE;
		background: #dbd7d7;
		border-radius: .2rem;
	}
</style>
