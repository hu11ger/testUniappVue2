<template>
	<view>
		<view class="bg"></view>
		<!-- 底部导航栏 -->
		<u-tabbar v-model="current" :show="show" :bg-color="bgColor" :border-top="borderTop" :list="list"
			:mid-button="midButton" :inactive-color="inactiveColor" :activeColor="activeColor"
			@change="ChangeTabBar"></u-tabbar>
		<view class="wrap">
			<view class="uni-flex uni-row" style="
				width:100%;
				position: fixed;
				left: 0;
				right: 0;
				top: 50rpx;
				z-index: 991; border-radius: 24rpx;padding: 15rpx; justify-content: center; align-items: center;">
				<view class="uni-flex"
					style="width: 160rpx;height: 160rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;">
					<image src="../../../static/image/Avatar.png" style="width: 100rpx;height: 100rpx;"></image>
				</view>
				<view class="uni-flex uni-column"
					style="padd-webkit-flex: 1;flex: 1;-webkit-justify-content: space-between;justify-content: space-around;padding: 15rpx 0rpx;">
					<view class="text"
						style="height: 40rpx;text-align: left;padding-left: 15rpx;padding-top: 0rpx;font-size:24rpx;color: #999;margin: 10rpx 0;">
						Hello Panther!
					</view>
					<view class="text"
						style="height: 46rpx;text-align: left;padding-left: 15rpx;padding-top: 0rpx;font-size: 28rpx;color: black;margin: 0rpx 0; font-weight: 600;">
						Monday,11 July
					</view>
				</view>
			</view>
			<view style="padding: 10rpx 24rpx 0 24rpx; margin-top:40rpx">
				<view class="u-tabs-box">
					<!-- 顶部导航栏 -->
					<uni-transition ref="ani" custom-class="transition" :mode-class="animModeClass1" :show="animShow">
						<u-tabs-swiper-calendar activeColor="#FE8787" ref="tabs" :list="tabList" :current="tabsCurrent"
							@change="change" :is-scroll="true"></u-tabs-swiper-calendar>
					</uni-transition>

				</view>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition"
				@animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="">
						<view class="page-box">

							<view class="uni-colunm" style="padding: 0 40rpx; justify-content:left;align-items:center;">
								<view class="u-config-item">
									<view class="u-item-title">今日状态~</view>
								</view>
								<uni-transition ref="ani" custom-class="transition" :mode-class="animModeClass1"
									:show="animShow">
									<view class="uni-flex"
										style="height:135rpx;width:fit-content;border-radius:16rpx;overflow:hidden;margin:10rpx 0">
										<view class="uni-flex uni-column"
											style="width: 135rpx; background:#BBD0DD;justify-content:center;align-items:center">
											<text
												style="color:#4E4E4E;font-size:22rpx;font-weight:500;line-height:22rpx;margin-bottom:0">8h19min</text>
											<image src="../../../static/image/home/sleep.png"
												style="width: 75rpx;height: 75rpx;margin-top:10rpx"></image>
										</view>
										<view class="uni-flex uni-column"
											style="width: 135rpx; background:#E9FFFF;justify-content:center;align-items:center">
											<text
												style="color:#4E4E4E;font-size:22rpx;font-weight:500;line-height:22rpx;margin-bottom:0">2h29min</text>
											<image src="../../../static/image/home/sit.png"
												style="width: 75rpx;height: 75rpx;margin-top:10rpx"></image>
										</view>
										<view class="uni-flex uni-column"
											style="width: 135rpx; background:#C3F2F2;justify-content:center;align-items:center">
											<text
												style="color:#334F5C;font-size:22rpx;font-weight:500;line-height:22rpx;margin-bottom:0">2h4min</text>
											<image src="../../../static/image/home/stand.png"
												style="width: 75rpx;height: 75rpx;margin-top:10rpx"></image>
										</view>
										<view class="uni-flex uni-column"
											style="width: 135rpx; background:#8CC6D3;justify-content:center;align-items:center">
											<text
												style="color:#fff;font-size:22rpx;font-weight:500;line-height:22rpx;margin-bottom:0">2h24min</text>
											<image src="../../../static/image/home/walk.png"
												style="width: 75rpx;height: 75rpx;margin-top:10rpx"></image>
										</view>
										<view class="uni-flex uni-column"
											style="width: 135rpx; background:#60ACCA;justify-content:center;align-items:center">
											<text
												style="color:#fff;font-size:22rpx;font-weight:500;line-height:22rpx;margin-bottom:0">0h52min</text>
											<image src="../../../static/image/home/run.png"
												style="width: 75rpx;height: 75rpx;margin-top:10rpx"></image>
										</view>
									</view>
								</uni-transition>
							</view>


						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="">
						<view class="page-box">
							<view class="u-config-wrap" style="padding: 0 40rpx;">
								<view class="u-config-item">
									<view class="u-item-title">2</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item><swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="">
						<view class="page-box">
							<view class="u-config-wrap" style="padding: 0 40rpx;">
								<view class="u-config-item">
									<view class="u-item-title">今日状态~</view>
								</view>

							</view>
						</view>
					</scroll-view>
				</swiper-item><swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="">
						<view class="page-box">
							<view class="u-config-wrap" style="padding: 0 40rpx;">
								<view class="u-config-item">
									<view class="u-item-title">4</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item><swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="">
						<view class="page-box">
							<view class="u-config-wrap" style="padding: 0 40rpx;">
								<view class="u-config-item">
									<view class="u-item-title">5</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item><swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="">
						<view class="page-box">
							<view class="u-config-wrap" style="padding: 0 40rpx;">
								<view class="u-config-item">
									<view class="u-item-title">6</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item><swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="">
						<view class="page-box">
							<view class="u-config-wrap" style="padding: 0 40rpx;">
								<view class="u-config-item">
									<view class="u-item-title">7</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
			<!-- </view> -->
		</view>
	</view>
</template>

<script>
export default {
	onShow() {
		this.animShow = true
	},
	onHide() {
		this.animShow = false
	},
	data() {
		return {
			//控件动画相关
			animModeClass2: ['fade', 'slide-top']
			,
			animModeClass1: ['fade', 'slide-left']
			, animShow: false
			,

			//各项维度得分
			ratingsArr: [
				{
					id: 0,
					iconUrl: '',
					name: 'Calmness',
					progress: 67,
				},
				{
					id: 1,
					iconUrl: '',
					name: 'Happiness',
					progress: 76,
				},
				{
					id: 2,
					iconUrl: '',
					name: 'Coping',
					progress: 60,
				}, {
					id: 3,
					iconUrl: '',
					name: 'Sleep',
					progress: 67,
				}, {
					id: 4,
					iconUrl: '',
					name: 'Health',
					progress: 87,
				}, {
					id: 5,
					iconUrl: '',
					name: 'Connection',
					progress: 75,
				}, {
					id: 6,
					iconUrl: '',
					name: 'Fulfilment',
					progress: 68,
				},
			],

			//进度条
			progressPercent: 71,

			//顶部导航栏
			tabList: [{
				name: 'Mon',
				date: 11
			},
			{
				name: 'Tue',
				date: 12
			},
			{
				name: 'Wed',
				date: 13
			},
			{
				name: 'Thu',
				date: 14
			},
			{
				name: 'Fri',
				date: 15
			},
			{
				name: 'Sat',
				date: 16
			},
			{
				name: 'Sun',
				date: 17
			}
			],
			tabsCurrent: 0,
			swiperCurrent: 0,
			tabsHeight: 0,
			dx: 0,
			loadStatus: ['loadmore', 'loadmore', 'loadmore', 'loadmore'],

			//底部导航栏
			current: 2,
			show: true,
			bgColor: '#ffffff',
			borderTop: true,
			list: [{
				iconPath: "../../../static/image/navBar/ques.png",
				selectedIconPath: "../../../static/image/navBar/ques-active.png",
				text: 'SelfRate',
				pagePath: "pages/healthApp/SelfRatingSelect/SelfRatingSelect",
				// count: 2,
				// isDot: true,
				customIcon: false,
			},
			{
				iconPath: "../../../static/image/navBar/bodyData.png",
				selectedIconPath: "../../../static/image/navBar/bodyData-active.png",
				text: 'Insights',
				customIcon: false,
			},
			{
				iconPath: "../../../static/image/navBar/home.png",
				selectedIconPath: "../../../static/image/navBar/home-active.png",
				pagePath: 'pages/healthApp/home/home',
				text: 'Daily',
				midButton: true,
				customIcon: false,
			},
			{
				iconPath: "../../../static/image/navBar/healthBehave.png",
				selectedIconPath: "../../../static/image/navBar/healthBehave-active.png",
				text: 'SelfCare',
				customIcon: false,
			},
			{
				iconPath: "../../../static/image/navBar/vrCare.png",
				selectedIconPath: "../../../static/image/navBar/vrCare-active.png",
				text: 'VRCure',
				// count: 23,
				// isDot: false,
				customIcon: false,
			},
			],
			midButton: true,
			inactiveColor: '#9C9EB9',
			activeColor: '#FE8787'
		}
	},
	onReady() {
	},
	methods: {
		ChangeTabBar(e) {
			uni.switchTab({
				url: '/' + this.list[e].pagePath
			})
		},

		// tab栏切换
		change(index) {
			this.swiperCurrent = index;
			// this.getOrderList(index);
		},
		transition({
			detail: {
				dx
			}
		}) {
			this.$refs.tabs.setDx(dx);
		},
		animationfinish({
			detail: {
				current
			}
		}) {
			this.$refs.tabs.setFinishCurrent(current);
			this.swiperCurrent = current;
			this.tabsCurrent = current;
		},
	}
}
</script>


<style lang="scss" scoped>
/* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
.charts-box {
	width: 100%;
	height: 300px;
	padding: 20rpx 0;
}

.uni-ec-canvas {
	width: 100%;
	height: 100%;
	display: block;
}

.bg {
	top: 0;
	left: 0;
	position: fixed;
	z-index: -1;
	width: 100vw;
	height: 100vh;
	background-color: white;
}

.demo-warter {
	border-radius: 8px;
	margin: 5px 5px 10px 5px;
	background-color: #ffffff;
	padding: 8px;
	position: relative;
	box-shadow: 0px 10px 32px rgba(110, 113, 145, 0.12);
}

.u-close {
	position: absolute;
	top: 32rpx;
	right: 32rpx;
}

.demo-image {
	width: 100%;
	border-radius: 4px;
}

.demo-title {
	font-size: 32rpx;
	font-weight: 600;
	margin-top: 5px;
	color: $u-main-color;
}

.demo-tag {
	display: flex;
	margin-top: 5px;
}

.demo-tag-owner {
	background-color: $u-type-error;
	color: #FFFFFF;
	display: flex;
	align-items: center;
	padding: 4rpx 14rpx;
	border-radius: 50rpx;
	font-size: 20rpx;
	line-height: 1;
}

.demo-tag-text {
	border: 1px solid $u-type-primary;
	color: $u-type-primary;
	margin-left: 10px;
	border-radius: 50rpx;
	line-height: 1;
	padding: 4rpx 14rpx;
	display: flex;
	align-items: center;
	border-radius: 50rpx;
	font-size: 20rpx;
}

.demo-price {
	font-size: 28rpx;
	color: grey;
	margin-top: 5px;
}

.demo-shop {
	font-size: 28rpx;
	color: #68B9C0;
	margin-top: 5px;
}

.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;

	.top {
		display: flex;
		justify-content: space-between;

		.left {
			display: flex;
			align-items: center;

			.store {
				margin: 0 10rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}

		.right {
			color: $u-type-warning-dark;
		}
	}

	.item {
		display: flex;
		margin: 20rpx 0 0;

		.left {
			margin-right: 20rpx;

			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}
		}

		.content {
			.title {
				font-size: 28rpx;
				line-height: 50rpx;
			}

			.type {
				margin: 10rpx 0;
				font-size: 24rpx;
				color: $u-tips-color;
			}

			.delivery-time {
				color: #e5d001;
				font-size: 24rpx;
			}
		}

		.right {
			margin-left: 10rpx;
			padding-top: 20rpx;
			text-align: right;

			.decimal {
				font-size: 24rpx;
				margin-top: 4rpx;
			}

			.number {
				color: $u-tips-color;
				font-size: 24rpx;
			}
		}
	}

	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;

		.total-price {
			font-size: 32rpx;
		}
	}

	.bottom {
		display: flex;
		margin-top: 40rpx;
		padding: 0 10rpx;
		justify-content: space-between;
		align-items: center;

		.btn {
			line-height: 52rpx;
			width: 160rpx;
			border-radius: 26rpx;
			border: 2rpx solid $u-border-color;
			font-size: 26rpx;
			text-align: center;
			color: $u-type-info-dark;
		}

		.evaluate {
			color: $u-type-warning-dark;
			border-color: $u-type-warning-dark;
		}
	}
}

.centre {
	text-align: center;
	margin: 200rpx auto;
	font-size: 32rpx;

	image {
		width: 164rpx;
		height: 164rpx;
		border-radius: 50%;
		margin-bottom: 20rpx;
	}

	.tips {
		font-size: 24rpx;
		color: #999999;
		margin-top: 20rpx;
	}

	.btn {
		margin: 80rpx auto;
		width: 200rpx;
		border-radius: 32rpx;
		line-height: 64rpx;
		color: #ffffff;
		font-size: 26rpx;
		background: linear-gradient(270deg, rgba(249, 116, 90, 1) 0%, rgba(255, 158, 1, 1) 100%);
	}
}

.wrap {
	display: flex;
	flex-direction: column;
	height: calc(100vh - var(--window-top));
	width: 100%;
}

.swiper-box {
	flex: 1;
}

.swiper-item {
	height: 100%;
}


.u-demo {
	//height: 200vh;
	height: calc(100% - 44px);
	height: calc(100% - 44px - constant(safe-area-inset-top));
	height: calc(100% - 44px - env(safe-area-inset-top));
}

.wrap {
	// padding: 24rpx;
}

.navbar-right {
	margin-right: 24rpx;
	display: flex;
}

.search-wrap {
	margin: 0 20rpx;
	flex: 1;
}

.right-item {
	margin: 0 12rpx;
	position: relative;
	color: #ffffff;
	display: flex;
}

.message-box {}

.slot-wrap {
	display: flex;
	align-items: center;
	flex: 1;
}

.map-wrap {
	display: flex;
	align-items: center;
	padding: 4px 6px;
	background-color: rgba(240, 240, 240, 0.35);
	color: #fff;
	font-size: 22rpx;
	border-radius: 100rpx;
	margin-left: 30rpx;
}

.map-wrap-text {
	padding: 0 6rpx;
}
</style>
