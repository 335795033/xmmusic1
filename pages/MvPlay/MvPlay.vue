<template>
	<view style="background: #fcefe8;">
		<view class="uni-padding-wrap uni-common-mt">
			<view>
				<video id="myVideo" :src="src"
				 @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls autoplay="true"></video>
			</view>
			<!-- #ifndef MP-ALIPAY -->
			<view class="songname">
				<view class="desc">
					{{songName[0].desc}}
				</view>
				<view class="singers">
					{{songName[0].name}}
				</view>
				<view class="name">
					{{songName[0].singers[0].name}}
				</view>	
			</view>
			<view class="uni-list uni-common-mt">
				<view class="uni-list-cell">
					<view class="uni-list-cell-db">
						<input v-model="danmuValue" class="uni-input" type="text" placeholder="在此处输入弹幕内容" />
					</view>
				</view>
			</view>
			<view class="uni-btn-v">
				<button @click="sendDanmu" class="page-body-button">发送弹幕</button>
			</view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '',
				danmuList: [{
						text: '舒服了',
						color: '#ff0000',
						time: 1
					},
					{
						text: '好腻害的感觉',
						color: '#ff00ff',
						time: 3
					}
				],
				danmuValue: '',
				songName:[],
			};
		},
		onLoad(e) {
			uni.showLoading({
				title:'loading',
				mask:false
			});
			let id = e.id;
			this.src = 'https://v1.itooi.cn/tencent/mvUrl?id=' + id + '&quality=1080';
			uni.request({
				url: 'https://v1.itooi.cn/tencent/mv?id='+ id,
				method: 'GET',
				data: {},
				success: res => {
					// console.log(res.data.data)
					let arr = res.data.data[id]
					this.songName.push(arr)
					console.log(this.songName)
					uni.hideLoading();
				},
				fail: () => {},
				complete: () => {}
			});
		},
		onReady: function(res) {
			// #ifndef MP-ALIPAY
			this.videoContext = uni.createVideoContext('myVideo')
			// #endif
		},
		methods: {
			sendDanmu: function() {
				this.videoContext.sendDanmu({
					text: this.danmuValue,
					color: this.getRandomColor()
				});
				this.danmuValue = '';
			},
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			getRandomColor: function() {
				const rgb = []
				for (let i = 0; i < 3; ++i) {
					let color = Math.floor(Math.random() * 256).toString(16)
					color = color.length == 1 ? '0' + color : color
					rgb.push(color)
				}
				return '#' + rgb.join('')
			}
		}
	}
</script>

<style lang="scss">
#myVideo{
	width: 100%;
}

.uni-list-cell-db{
	.uni-input{
		border: 1px solid #999;
		border-radius: .2rem;
		font-size: .6rem;
		height: 4rem;
		width: 95%;
		margin: 0 auto;
	}
}
.songname{
	width: 95%;
	margin: 0 auto;
	padding: 1rem 0;
	.desc{
		font-size: .8rem;
		text-indent: 2em;
		color: #999;
	}
	.singers{
		padding: .5rem 0;
		font-size: .8rem;
		text-align: right;
	}
	.name{
		font-size: .8rem;
		text-align: right;
		color: #999;
		margin: 0 0 1rem 0;
	}
}
.uni-btn-v button{
	background-color: #fcefe8;
}
</style>
