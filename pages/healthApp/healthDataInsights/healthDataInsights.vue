<template>
	<view>
		<view class="bg"></view>
		<!-- 底部导航栏 -->
		<u-tabbar v-model="current" :show="show" :bg-color="bgColor" :border-top="borderTop" :list="list"
			:mid-button="midButton" :inactive-color="inactiveColor" :activeColor="activeColor"
			@change="ChangeTabBar"></u-tabbar>

		<view class="uni-padding-wrap uni-common-mt">
			<!-- 设备格 -->
			<uni-transition ref="ani" custom-class="transition" :mode-class="animModeClass" :show="animShow">
				<view class="uni-flex uni-row"
					style="width:100%;background: white; border-radius: 24rpx;padding: 15rpx; justify-content: space-around; align-items: center;box-shadow: 0px 10px 32px rgba(110, 113, 145, 0.12);margin: 35rpx 0;">
					<view class="uni-flex" style="width: max-content;height: 160rpx;align-items:center">
						<image src="../../../static/image/healthDataInsights/polarUnite.png"
							style="height:90px;width:65px;">
						</image>
					</view>
					<view class="uni-column" style="padd-webkit-flex: 1;flex: 1;-webkit-justify-content: space-around;justify-content: space-around;padding: 10rpx 0rpx;
						width:100%">
						<view class=""
							style="height: 46rpx;text-align: left;padding-left: 15rpx;padding-top: 0rpx;font-size: 32rpx;color: black;margin: 0rpx 5rpx; font-weight: 600;">
							Polar Unite <text
								style="font-size:24rpx;color:#7f7f7f;margin-left:25rpx;font-weight:500">左腕佩戴</text>
						</view>
						<view class="uni-flex uni-row"
							style="margin:0 0;width:100%;height:max-content;justify-content:left;align-items:center;margin:10rpx 0">
							<view class="uni-flex"
								style="justify-content:left;align-items:center;padding:10rpx 10rpx;margin-right:20rpx">
								<image src="../../../static/image/healthDataInsights/bluetooth.png"
									style="width: 30rpx;height: 30rpx; margin-right:10rpx"></image>
								<view style="font-weight:500;font-size:30rpx;color:#7f7f7f;">已连接</view>
							</view>
							<view class="uni-flex" style="justify-content:left;align-items:center;padding:10rpx 15rpx">
								<image src="../../../static/image/healthDataInsights/charge.png"
									style="width: 30rpx;height: 30rpx; margin-right:10rpx"></image>
								<view style="font-weight:500;font-size:30rpx;color:#7f7f7f;">81%</view>
							</view>

						</view>
					</view>
					<view class="uni-flex">
						<!-- <u-button @click="btnClick" data-name="3333" :loading="btnLoading" :plain="btnPlain"
								:shape="btnShape" :size="btnSize" ripple=true :hairLine="hairLine" :type="btnType"
								:disabled="btnDisabled">同步</u-button> -->
						<image src="../../../static/image/healthDataInsights/tongbu.png" @click="btnClick"
							style="width: 186rpx;height: 122rpx; margin-right:0"></image>
					</view>
				</view>
			</uni-transition>

			<!-- 大图表格 -->
			<uni-transition ref="ani" duration=900 custom-class="transition" :mode-class="animModeClass"
				:show="animShow">
				<view class="uni-flex uni-column"
					style="width:100%;height:max-content;background: white; border-radius: 24rpx;padding: 25rpx; justify-content: space-around; align-items: center;box-shadow: 0px 10px 32px rgba(110, 113, 145, 0.12);margin: 35rpx 0;">
					<view class="charts-box">
						<qiun-data-charts type="arcbar" :opts="opts" :chartData="chartData" />
					</view>
					<view class="uni-flex uni-row" style="width:100%;justify-content:space-around;margin-top:-40rpx">
						<!-- 活动热量格 -->
						<view class="uni-flex uni-column" style="flex:1;width:75px;height:75px;justify-content:center">
							<view class="uni-flex"
								style="justify-content:center;align-items:center;padding:10rpx 10rpx;margin-right:10rpx">
								<image src="../../../static/image/healthDataInsights/red.png"
									style="width: 30rpx;height: 30rpx; margin-right:10rpx"></image>
								<view style="font-weight:600;font-size:24rpx;color:#7f7f7f;">活动热量</view>
							</view>
							<view style="height: 50rpx;padding:0 0 0 0;text-align:center">
								<text style="font-size:46rpx;font-weight:600;color:#000">166</text>
								<text style="font-size:24rpx;font-weight:500;color:#7f7f7f">/270 千卡</text>
							</view>
						</view>
						<!-- 运动时长 -->
						<view class="uni-flex uni-column" style="flex:1;width:75px;height:75px;justify-content:center">
							<view class="uni-flex"
								style="justify-content:center;align-items:center;padding:10rpx 10rpx;margin-right:10rpx">
								<image src="../../../static/image/healthDataInsights/orange.png"
									style="width: 30rpx;height: 30rpx; margin-right:10rpx"></image>
								<view style="font-weight:600;font-size:24rpx;color:#7f7f7f;">运动时长</view>
							</view>
							<view style="height: 50rpx;padding:0 0 0 0;text-align:center">
								<text style="font-size:46rpx;font-weight:600;color:#000">8</text>
								<text style="font-size:24rpx;font-weight:500;color:#7f7f7f">/25 分钟</text>
							</view>
						</view>
						<!-- 活动小时数 -->
						<view class="uni-flex uni-column" style="flex:1;width:75px;height:75px;justify-content:center">
							<view class="uni-flex"
								style="justify-content:center;align-items:center;padding:10rpx 10rpx;margin-right:10rpx">
								<image src="../../../static/image/healthDataInsights/qing.png"
									style="width: 30rpx;height: 30rpx; margin-right:10rpx"></image>
								<view style="font-weight:600;font-size:24rpx;color:#7f7f7f;">活动小时数</view>
							</view>
							<view style="height: 50rpx;padding:0 0 0 0;text-align:center">
								<text style="font-size:46rpx;font-weight:600;color:#000">4</text>
								<text style="font-size:24rpx;font-weight:500;color:#7f7f7f">/12 小时</text>
							</view>
						</view>
					</view>
				</view>

			</uni-transition>

			<!-- 步数和距离 -->
			<uni-transition ref="ani" duration=800 custom-class="transition" :mode-class="animModeClass"
				:show="animShow">
				<view class="uni-flex uni-row" style="width:100%;height:max-content;justify-content:space-between;
				margin: 35rpx 0;
				">
					<!-- 步数 -->
					<view class="uni-flex uni-column" style="width:170px;height:max-content;background: white;
					border-radius: 24rpx;
					padding: 10rpx 25rpx;
					justify-content: space-around;
					align-items: center;
					border:2px solid #f2f2f2;
					box-shadow: 0px 10px 32px rgba(110, 113, 145, 0.12);margin: 0 0;">
						<view class="uni-flex uni-row" style="width:100%;height:max-content;justify-content:space-between;
						align-items:center;margin:20rpx 0
					Z	">
							<view style="font-size:34rpx;font-weight:500;color:#000;">步数</view>
							<image src="../../../static/image/healthDataInsights/steps.png"
								style="width:60rpx;height:60rpx; margin-right:10rpx"></image>
						</view>
						<view class="uni-flex uni-column" style="width:100%;height:max-content;margin:20rpx 0">
							<view style="font-size:40rpx;font-weight:600;color:#000;margin:10rpx 0">
								1240
							</view>
							<view style="font-size:24rpx;font-weight:600;color:#7f7f7f">
								步
							</view>
						</view>
					</view>

					<!-- 距离 -->
					<view class="uni-flex uni-column" style="width:170px;height:max-content;background: white;
					border-radius: 24rpx;
					padding: 10rpx 25rpx;
					justify-content: space-around;
					align-items: center;
					border:2px solid #f2f2f2;
					box-shadow: 0px 10px 32px rgba(110, 113, 145, 0.12);margin: 0 0;">
						<view class="uni-flex uni-row" style="width:100%;height:max-content;justify-content:space-between;
						align-items:center;margin:20rpx 0
					Z	">
							<view style="font-size:34rpx;font-weight:500;color:#000;">距离</view>
							<image src="../../../static/image/healthDataInsights/distance.png"
								style="width:60rpx;height:60rpx; margin-right:10rpx"></image>
						</view>
						<view class="uni-flex uni-column" style="width:100%;height:max-content;margin:20rpx 0">
							<view style="font-size:40rpx;font-weight:600;color:#000;margin:10rpx 0">
								3.23
							</view>
							<view style="font-size:24rpx;font-weight:600;color:#7f7f7f">
								千米
							</view>
						</view>
					</view>
				</view>
			</uni-transition>

			<!-- 睡眠和压力 -->
			<uni-transition ref="ani" duration=800 custom-class="transition" :mode-class="animModeClass"
				:show="animShow">
				<view class="uni-flex uni-row" style="width:100%;height:max-content;justify-content:space-between;
				margin: 35rpx 0;
				">
					<!-- 压力 -->
					<view class="uni-flex uni-column" style="width:170px;height:max-content;background: white;
					border-radius: 24rpx;
					padding: 10rpx 25rpx;
					justify-content: space-around;
					align-items:start;
					border:2px solid #f2f2f2;
					box-shadow: 0px 10px 32px rgba(110, 113, 145, 0.12);margin: 0 0;">
						<view class="uni-flex uni-column" style="width:100%;height:max-content;justify-content:left;
						align-items:start;margin:10rpx 0
					Z	">
							<view style="font-size:34rpx;font-weight:500;color:#000; margin-bottom:10rpx">压力</view>
							<view style="font-size:24rpx;font-weight:400;color:#7f7f7f;">3/15</view>
						</view>
						<view class="uni-flex uni-row" style="width:100%;height:max-content;margin:10rpx 0">
							<image src="../../../static/image/healthDataInsights/yaliMock.png"
								style="width:150px;height:60px; margin-right:10rpx"></image>
						</view>
						<view class="uni-flex uni-row"
							style="width:100%;height:max-content;margin:10rpx 0;align-items:baseline">
							<view style="font-size:36rpx;font-weight:600;color:#000;margin:10rpx 10rpx 0 0">
								35
							</view>
							<view style="font-size:30rpx;font-weight:400;color:#7f7f7f">
								正常
							</view>
						</view>
					</view>

					<!-- 睡眠 -->
					<view class="uni-flex uni-column" style="width:170px;height:max-content;background: white;
					border-radius: 24rpx;
					padding: 10rpx 25rpx;
					justify-content: space-around;
					align-items:start;
					border:2px solid #f2f2f2;
					box-shadow: 0px 10px 32px rgba(110, 113, 145, 0.12);margin: 0 0;">
						<view class="uni-flex uni-column" style="width:100%;height:max-content;justify-content:left;
						align-items:start;margin:10rpx 0
					Z	">
							<view style="font-size:34rpx;font-weight:500;color:#000; margin-bottom:10rpx">睡眠</view>
							<view style="font-size:24rpx;font-weight:400;color:#7f7f7f">3/15<text
									style="font-size:24rpx;font-weight:400;color:#f47639;margin-left:25rpx">
									清醒次数偏高
								</text></view>
						</view>
						<view class="uni-flex uni-row" style="width:100%;height:max-content;margin:10rpx 0">
							<image src="../../../static/image/healthDataInsights/shuimianMock.png"
								style="width:150px;height:60px; margin-right:10rpx"></image>
						</view>
						<view class="uni-flex uni-row"
							style="width:100%;height:max-content;margin:10rpx 0;align-items:baseline">
							<view style="font-size:36rpx;font-weight:600;color:#000;margin:10rpx 10rpx 0 0">
								6h7min
							</view>
						</view>
					</view>
				</view>
			</uni-transition>
		</view>

		<!-- 顶部设备栏 -->
		<u-navbar title-color="#FE8787" back-icon-color="#000" :is-fixed="isFixed" :is-back="isBack"
			:background="background" :back-text-style="{ color: '#000' }" :title="title" :back-icon-name="backIconName"
			:back-text="backText">
		</u-navbar>
	</view>
</template>

<script>
export default {
	onShow() {
		this.animShow = true
		this.getServerData();
	},
	onHide() {
		this.animShow = false
		this.chartData={}
	},
	onReady() {
		this.getServerData();
	},
	data() {
		return {
			chartData: {},
			//这里的 opts 是图表类型 type="arcbar" 的全部配置参数，您可以将此配置复制到 config-ucharts.js 文件中下标为 ['arcbar'] 的节点中来覆盖全局默认参数。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
			opts: {
				timing: "easeOut",
				duration: 1000,
				rotate: false,
				rotateLock: false,
				color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
				padding: [5, 5, 5, 5],
				fontSize: 13,
				fontColor: "#666666",
				dataLabel: true,
				dataPointShape: true,
				dataPointShapeType: "solid",
				touchMoveLimit: 60,
				enableScroll: false,
				enableMarkLine: false,
				title: {
					name: "",
					fontSize: 25,
					color: "#00FF00",
					offsetX: 0,
					offsetY: 0
				},
				subtitle: {
					name: "",
					fontSize: 15,
					color: "#666666",
					offsetX: 0,
					offsetY: 0
				},
				extra: {
					arcbar: {
						type: "default",
						width: 20,
						backgroundColor: "#fbeee5",
						startAngle: 0.75,
						endAngle: 0.25,
						gap: 3,
						direction: "cw",
						lineCap: "round",
						centerX: 0,
						centerY: 0,
						linearType: "none"
					}
				}
			},


			//按钮的样式
			hairLine: true,
			btnType: 'primary',
			btnSize: 'default',
			btnShape: 'circle',
			btnPlain: false,
			btnLoading: false,
			btnDisabled: false,
			//渐入动画相关
			animModeClass: ['fade', 'slide-top']
			, animShow: false
			,

			//顶部设备栏
			title: '健康数据',
			backText: '',
			backIconName: '',
			right: false,
			showAction: false,
			rightSlot: false,
			useSlot: false,
			background: {
				'background-image': 'linear-gradient(45deg, rgb(255, 255, 255), rgb(255, 255, 255))',
				// 'background-image': 'rgba(255,255,255,1)'
			},
			isBack: true,
			search: false,
			custom: false,
			isFixed: true,
			keyword: '',
			// #ifdef MP
			slotRight: false,
			// #endif
			// #ifndef MP
			slotRight: true,
			// #endif

			//底部导航栏
			current: 1,
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
				pagePath: "pages/healthApp/healthDataInsights/healthDataInsights"
				,
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
				text: 'SelfCare', pagePath: 'pages/healthApp/SelfCareCourse/SelfCareCourse',
				customIcon: false,
			},
			{
				iconPath: "../../../static/image/navBar/vrCare.png",
				selectedIconPath: "../../../static/image/navBar/vrCare-active.png",
				text: 'VRCure', pagePath: 'pages/healthApp/VRCure/VRCure',
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
	methods: {
		btnClick() {
			console.log("tontbu")
		},
		//底部导航栏
		ChangeTabBar(e) {
			uni.switchTab({
				url: '/' + this.list[e].pagePath
			})
		},
		getServerData() {
			//模拟从服务器获取数据时的延时
			setTimeout(() => {
				//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
				let res = {
					series: [
						{
							name: "活动热量",
							color: "#FE8787",
							data: 0.7
						},
						{
							name: "运动时长",
							color: "#EFAA7C",
							data: 0.4
						},
						{
							name: "活动次数",
							color: "#92C6D3",
							data: 0.3
						}
					]
				};
				this.chartData = JSON.parse(JSON.stringify(res));
			}, 500);
		},
	}
}
</script>

<style lang="scss" scoped>
/* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */


.charts-box {
	width: 100%;
	height: 175px;
	padding: 0rpx 0;
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
	background-image: linear-gradient((140deg, rgb(255, 255, 255) 9.160126000642776%, rgb(253.93750101327896, 231.45345389842987, 217.96302258968353) 57.31121301651001%));
	height: 100vh;
}

.demo-warter {
	border-radius: 8px;
	margin: 5px 5px 10px 5px;
	background-color: #ffffff;
	padding: 8px;
	position: relative;
	box-shadow: 0px 10px 32px rgba(110, 113, 145, 0.12);
}


.demo-image {
	width: 100%;
	border-radius: 4px;
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
