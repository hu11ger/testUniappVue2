<template>
	<view>
		<view class="bg"></view>
		<!-- 底部导航栏 -->
		<u-tabbar v-model="bottomTabCurrent" :show="show" :bg-color="bgColor" :border-top="borderTop" :list="list"
			:mid-button="midButton" :inactive-color="inactiveColor" :activeColor="activeColor" @change="ChangBar"
			style="opacity: 0; visibility: hidden;"></u-tabbar>

		<u-navbar title-color="#000" back-icon-color="#000" :is-fixed="isFixed" :is-back="isBack"
			:background="background" :back-text-style="{ color: '#000' }" :title="title" back-icon-name="arrow-left"
			:back-text="backText">
		</u-navbar>
		<view class="wrap">
			<view style="padding: 24rpx 24rpx 0 24rpx;">
				<view class="u-tabs-box">
					<u-tabs-swiper activeColor="#FE8787" ref="tabs" :list="tabList" :current="current" @change="change"
						:isScroll="false"></u-tabs-swiper>
				</view>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition"
				@animationfinish="animationfinish">
				<swiper-item @touchmove.stop="" class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="">
						<view class="page-box">
							<view class="u-config-wrap" style="padding: 0 40rpx;">
								<view class="u-config-item">
									<view class="u-item-title">你的最新得分</view>
								</view>
								<view style="font-size:70px;height: 140rpx; 
									display:flex;flex-direction:column;
									justify-content:center;line-height:140rpx;
									text-align:left;font-weight:500;color:black">
									71%
								</view>
								<view style="margin:15rpx 0">
									<u-line-progress :percent="progressPercent" active-color="#68B9C0" :striped="false"
										:stripedActive="false"></u-line-progress>
								</view>
								<!-- 折线图，展示健康评价趋势 -->
								<view class="charts-box">
									<qiun-data-charts type="line" :opts="opts" :chartData="chartData"
										:inScrollView="true" :disableScroll="true" background="rgba(255,255,255,1)"
										:ontouch="true" />
								</view>


								<!-- <u-gap bg-color="#E3E3E3" height="20" margin-top="30" margin-bottom="20"></u-gap> -->
								<view class="u-config-item">
									<view class="u-item-title">各项维度得分</view>
								</view>
								<view v-for="(item, index) in ratingsArr" class="uni-flex uni-row" @click=""
									style="-webkit-justify-content: space-between;justify-content: space-between;background: white; border-radius: 24rpx;padding: 15rpx 30rpx; justify-content: left; align-items: center;box-shadow: 0px 10px 32px rgba(110, 113, 145, 0.12);margin: 25rpx 0;">
									<view class="uni-flex uni-row"
										style="height: 70rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;">
										<image src="../../../static/image/selfRating.png"
											style="width: 60rpx;height: 60rpx;"></image>
									</view>
									<view class="uni-flex uni-row"
										style="padd-webkit-flex: 1;flex: 1;-webkit-justify-content: space-between;justify-content: space-between;padding: 10rpx 0rpx;align-items:center;margin-left:25rpx">
										<view class="text"
											style="height: 40rpx;flex: 2;text-align: left;padding-left: 0;padding-top: 0rpx;font-size: 32rpx;color: black;margin: 0rpx 0; font-weight: 500;">
											{{ item.name }}
										</view>
										<view class="text"
											style="height: 40rpx;flex: 1;text-align: left;padding-left: 0;padding-top: 0rpx;font-size: 30rpx;color: black;margin: 0rpx 0; font-weight: 500;">
											{{ item.progress }}%
										</view>
										<view style="margin: 0 0; flex: 2; height: 40rpx;">
											<u-line-progress :percent="item.progress" active-color="#68B9C0"
												:striped="false" :stripedActive="false"></u-line-progress>

										</view>
										<view
											style="margin: 0 0; flex: 1;height: 40rpx; justify-content:right;text-align:end;">
											<!-- <u-line-progress :percent="progressPercent" active-color="#68B9C0"
												:striped="false" :stripedActive="false"></u-line-progress> -->
											<u-icon name="arrow-right" size="35" color="#666666"></u-icon>
										</view>
									</view>
								</view>


							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item @touchmove.stop="" class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="">
						<view class="page-box">
							<view class="u-config-wrap" style="padding: 0 40rpx;">
								<view class="u-config-item">
									<view class="u-item-title">工作中</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page-box">
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="">
						<view class="page-box">
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
		data() {
			return {
				//底部导航栏
				bottomTabCurrent: 4,
				show: true,
				bgColor: '#ffffff',
				borderTop: false,
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
						pagePath: "pages/healthApp/healthDataInsights/healthDataInsights",
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
						pagePath: 'pages/healthApp/SelfCareCourse/SelfCareCourse',
						customIcon: false,
					},
					{
						iconPath: "../../../static/image/navBar/vrCare.png",
						selectedIconPath: "../../../static/image/navBar/vrCare-active.png",
						text: 'VRCure',
						pagePath: 'pages/healthApp/VRCure/VRCure',
						// count: 23,
						// isDot: false,
						customIcon: false,
					},
				],
				midButton: true,
				inactiveColor: '#9C9EB9',
				activeColor: '#FE8787',

				// charts
				chartData: {},
				//这里的 opts 是图表类型 type="line" 的全部配置参数，您可以将此配置复制到 config-ucharts.js 文件中下标为 ['line'] 的节点中来覆盖全局默认参数。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
				opts: {
					timing: "easeOut",
					duration: 1000,
					rotate: false,
					rotateLock: false,
					color: ["#48647A", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: [15, 0, 0, 5],
					fontSize: 12,
					fontColor: "#999",
					dataLabel: false,
					dataPointShape: true,
					dataPointShapeType: "solid",
					touchMoveLimit: 60,
					enableScroll: true,
					enableMarkLine: false,
					legend: {
						show: false,
						position: "bottom",
						float: "center",
						padding: 5,
						margin: 10,
						backgroundColor: "rgba(0,0,0,0)",
						borderColor: "rgba(0,0,0,0)",
						borderWidth: 0,
						fontSize: 13,
						fontColor: "#666666",
						lineHeight: 11,
						hiddenColor: "#CECECE",
						itemGap: 10
					},
					xAxis: {
						disableGrid: true,
						disabled: false,
						axisLine: true,
						axisLineColor: "#CCCCCC",
						calibration: false,
						fontColor: "#999",
						fontSize: 10,
						lineHeight: 20,
						marginTop: 0,
						rotateLabel: false,
						rotateAngle: 45,
						itemCount: 4,
						boundaryGap: "center",
						splitNumber: 5,
						gridColor: "#999",
						gridType: "dash",
						dashLength: 4,
						gridEval: 1,
						scrollShow: true,
						scrollAlign: "left",
						scrollColor: "#d4eaed",
						scrollBackgroundColor: "#EFEBEF",
						min: 0,
						max: 100,
						title: "",
						titleFontSize: 13,
						titleOffsetY: 0,
						titleOffsetX: 0,
						titleFontColor: "#999",
						format: ""
					},
					yAxis: {
						gridType: "dash",
						dashLength: 2,
						disabled: false,
						disableGrid: false,
						splitNumber: 4,
						gridColor: "#CCCCCC",
						padding: 10,
						showTitle: false,
						data: [{
							type: "value",
							position: "left",
							disabled: false,
							axisLine: true,
							axisLineColor: "#CCCCCC",
							calibration: false,
							fontColor: "#999",
							fontSize: 10,
							textAlign: "right",
							title: "1",
							titleFontSize: 0,
							titleOffsetY: 0,
							titleOffsetX: 0,
							titleFontColor: "#66666600",
							min: 60,
							max: 100,
							tofix: null,
							unit: "%",
							format: ""
						}]
					},
					extra: {
						line: {
							type: "curve",
							width: 3,
							activeType: "solid",
							linearType: "custom",
							onShadow: false,
							animation: "vertical"
						},
						tooltip: {
							showBox: false,
							showArrow: true,
							showCategory: false,
							borderWidth: 0,
							borderRadius: 0,
							borderColor: "#000000",
							borderOpacity: 0.7,
							bgColor: "#000000",
							bgOpacity: 0.7,
							gridType: "solid",
							dashLength: 4,
							gridColor: "#CCCCCC",
							boxPadding: 3,
							fontSize: 13,
							lineHeight: 20,
							fontColor: "#FFFFFF",
							legendShow: true,
							legendShape: "auto",
							splitLine: false,
							horizentalLine: false,
							xAxisLabel: false,
							yAxisLabel: false,
							labelBgColor: "#FFFFFF",
							labelBgOpacity: 0.7,
							labelFontColor: "#666666"
						},
						markLine: {
							type: "solid",
							dashLength: 4,
							data: []
						}
					}
				},


				//各项维度得分
				ratingsArr: [{
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

				tabList: [{
						name: '幸福感'
					},
					{
						name: '心情'
					}
				],
				current: 0,
				swiperCurrent: 0,
				tabsHeight: 0,
				dx: 0,
				loadStatus: ['loadmore', 'loadmore', 'loadmore', 'loadmore'],

				title: '健康追踪',
				backText: '',
				backIconName: 'arrow-left',
				backIconName: '',
				right: false,
				showAction: false,
				rightSlot: false,
				useSlot: false,
				background: {
					// 'background-image': 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))',
					'background-image': 'rgba(0,0,0,0)'
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
				slotRight: true
				// #endif
			}
		},

		onReady() {
			this.getServerData();
		},
		methods: {
			ChangBar(e) {
				uni.switchTab({
					url: '/' + this.list[e].pagePath
				})
			},

			// charts
			getServerData() {
				//模拟从服务器获取数据时的延时
				setTimeout(() => {
					//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
					let res = {
						categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT",
							"NOV", "DEC"
						],
						series: [{
							name: "健康追踪",
							data: [88, 80, 65, 77, 78, 87, 88, 76, 88, 93, 76, 65]
						}]
					};
					this.chartData = JSON.parse(JSON.stringify(res));
				}, 500);
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
				this.current = current;
			},
		},

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
		background-image: linear-gradient((140deg, rgb(255, 255, 255) 9.160126000642776%, rgb(253.93750101327896, 231.45345389842987, 217.96302258968353) 57.31121301651001%));
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

	.bg {
		top: 0;
		left: 0;
		position: fixed;
		z-index: -1;
		width: 100vw;
		height: 100vh;
		background-image: linear-gradient((140deg, rgb(255, 255, 255) 9.160126000642776%, rgb(253.93750101327896, 231.45345389842987, 217.96302258968353) 57.31121301651001%));
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