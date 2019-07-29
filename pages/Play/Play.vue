<template>
	<view style="padding-top: 2rem;">
		<view class="player" v-if="playList.length>0">
			<view class="normal-player" v-show="fullScreen">
				<view class="bg">
					<image :src="playList[now].songPic" style="width: 100%;height: 100%;"></image>
				</view>
				<view class="top">
					<view class="back" @tap="back">
						<text class="test">&#xe612;</text>
					</view>
					<view class="song">
						<view class="songname">
							{{playList[now].name}}
						</view>
						<view class="name">
							{{playList[now].singer}}
						</view>
					</view>
				</view>
				<view class="uni-padding-wrap">
					<view class="page-section swiper">
						<view class="page-section-spacing">
							<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
							 style="height: 24rem;">
								<swiper-item>
									<view class="swiper-item uni-bg-red">
										<view class="middle">
											<view class="middle_l">
												<view class="cd-wrapper">
													<view class="cd">
														<image :src="playList[now].songPic"></image>
													</view>
												</view>
												<view class="lyric-wrapper">
													<view class="lyric">
														lyric
													</view>
												</view>
											</view>
										</view>
									</view>
								</swiper-item>
								<swiper-item>
									<view class="swiper-item uni-bg-green">B</view>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</view>

				<imt-audio :autoplay='true' class='imt-audio' continue :src="playList[now].SongUrl" :duration="playList[now].time"></imt-audio>
			</view>
			<view class="mini-player" v-show="!fullScreen">
				迷你的
			</view>
			<!-- <audio ref="audio" :src="currentSong.SongUrl" controls autoplay="true"></audio> -->
		</view>
	</view>
</template>

<script>
	import imtAudio from 'components/imt-audio/imt-audio'
	import {
		mapState,
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				// now: 0,
				indicatorDots: true,
				autoplay: false,
				interval: 2000,
				duration: 500
			}
		},
		components: {
			imtAudio
		},
		computed: {
			...mapState(['fullScreen', 'playList', 'now']),
			...mapGetters(['currentSong'])
		},
		onLoad() {
			console.log(this.playList)
			// let len=this.playList.length;
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1,
				});
			}
		},
	}
</script>

<style lang="scss">
	// @import '../../static/font/iconfont.css'
	.imt-audio {
		position: absolute;
		bottom: 0;
		width: 90%;
		padding: 0 5% 2rem;
		background: none;
		margin: 0 auto;
	}

	@font-face {
		font-family: 'iconfont';
		src: url('~@/static/font/iconfont.ttf');
	}

	.test {
		font-family: iconfont;
	}

	.bg {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
		opacity: .6;
		filter: blur(10px);
	}

	.top {
		position: relative;

		.back {
			position: absolute;
			top: .5rem;
			left: .5rem;
			z-index: 9;

			.test {
				font-size: 1.5rem;
				font-weight: bold;
			}
		}

		.songname {
			width: 100%;
			text-align: center;
			padding: 1rem 0 .5rem 0;
			font-size: 1rem;
			color: #000;
		}

		.name {
			width: 100%;
			text-align: center;
			font-size: .5rem;
			color: #666;
		}
	}

	.middle {
		margin: 2rem 0 0;
		width: 100%;
		height: 40%;

		.middle_l {
			width: 80%;
			margin: 0 auto;

			.cd-wrapper {
				border: .5rem solid rgba(255, 255, 255, .3);

				// width: 100%;
				.cd {
					width: 100%;

					image {
						width: 100%;
					}
				}
			}
		}

		.lyric-wrapper {
			width: 80%;
			margin: 2rem auto 0;

			.lyric {
				width: 100%;
				text-align: center;
				font-size: .8rem;
				color: #666;
			}
		}
	}

	.bottom {
		position: absolute;
		bottom: 0;
		width: 100%;

		.progress-wrapper {
			width: 80%;
			margin: 0 auto;
			display: flex;

			.progress {
				flex: 1;
			}
		}
	}

	.icon {
		display: flex;
		justify-content: space-around;
		margin: 1rem auto 2rem;

		.test {
			font-size: 2rem;
		}
	}
</style>
