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
					<image src="../../../static/image/Avatar.png" style="width: 100rpx;height: 100rpx;"
						@click="navi2HealthRating"></image>
				</view>
				<view class="uni-flex uni-column"
					style="padd-webkit-flex: 1;flex: 1;-webkit-justify-content: space-between;justify-content: space-around;padding: 15rpx 0rpx;">
					<view class="text"
						style="height: 40rpx;text-align: left;padding-left: 15rpx;padding-top: 0rpx;font-size:24rpx;color: #999;margin: 10rpx 0;">
						Hello Ajun11！
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
					<scroll-view scroll-y style="height:100%;width: 100%;" @scrolltolower="">
						<view class="page-box">

							<view class="uni-colunm" style="padding: 0 40rpx; justify-content:left;align-items:center;">
								<view class="u-config-item">
									<view class="u-item-title">今日状态~</view>
								</view>
								<uni-transition ref="ani" duration=700 custom-class="transition"
									:mode-class="animModeClass1" :show="animShow">
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
								<!-- 父级宽度  实机386px 12/13pro虚拟机350px-->
								<!-- canvas图表宽度  实机250px  12/13pro虚拟机250px -->
								<!-- 虚拟机版本 -->
								<uni-transition ref="ani" duration=1000 custom-class="transition"
									:mode-class="animModeClass1" :show="animShow">
									<view class="charts-box uni-flex uni-row" style="position:relative;
								left:0; margin:30rpx 0 0 0">
										<!-- ip15plus实机版本 -->
										<!-- <view class="charts-box" style="position:relative; margin:30rpx 0"> -->
										<qiun-data-charts type="ring" :opts="opts" :chartData="chartData"
											:canvas2d="true" canvasId="rUfZIfxLQirsZHTYweOVUtNUOfGIWUbz"
											style="top:0;left:0;position:absolute;z-index:0"
											background="rgba(255,255,255,1)" />
										<!-- ip15plus版本 -->
										<image src="../../../static/image/home/clock.png"
											style="width: 135px;height: 135px;top:19%;left:31%;position:absolute;z-index:99">
											<!-- 虚拟机版本 -->
											<!-- <image src="../../../static/image/home/clock.png"
											style="width: 135px;height: 135px;top:19%;left:34%;position:absolute;z-index:99"> -->
										</image>
									</view>
								</uni-transition>
								<!-- <uni-transition ref="ani" duration=1200 custom-class="transition"
									:mode-class="animModeClass1" :show="animShow"> -->
								<view class="uni-flex"
									style="width:100%;height:fit-content;justify-content:space-between;padding:0 20rpx;align-items:start;margin-top:-60rpx;">
									<!-- 心率图表 -->
									<view class="uni-column" style="width:150px;height:165px;box-shadow: 0px 10px 32px rgba(110, 113, 145, 0.12);
										justify-content:space-around;padding:35rpx 0;align-items:center;
										border-radius:40rpx;">
										<view class="uni-flex"
											style="justify-content:left;align-items:start;padding:0 30rpx">
											<image src="../../../static/image/home/heart.png"
												style="width: 36rpx;height: 36rpx; margin-right:20rpx"></image>
											<view style="font-weight:500;font-size:30rpx;color:black;">心率数据</view>
										</view>
										<view style="width:100%;height:130px;">
											<qiun-data-charts type="line" :opts="heartRateOpts"
												:chartData="heartRateChartData" />
										</view>
									</view>
									<!-- 睡眠数据图表 -->
									<view class="uni-column" style="width:150px;height:165px;box-shadow: 0px 10px 32px rgba(110, 113, 145, 0.12);
										justify-content:space-around;padding:35rpx 0;align-items:center;
										border-radius:40rpx;">
										<view class="uni-flex"
											style="justify-content:left;align-items:start;padding:0 30rpx">
											<image src="../../../static/image/home/sleepData.png"
												style="width: 36rpx;height: 36rpx; margin-right:20rpx"></image>
											<view style="font-weight:500;font-size:30rpx;color:black;">睡眠数据</view>
										</view>
										<view style="width:100%;height:130px;text-align:center;">
											<!-- <qiun-data-charts type="line" :opts="heartRateOpts"
												:chartData="heartRateChartData" /> -->
											<!-- mock数据 -->
											<image src="../../../static/image/home/sleepMockData.png"
												style="height: 100px;width:90px;margin-top:10px"></image>
										</view>
									</view>
								</view>
								<!-- </uni-transition> -->
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="">
						<view class="page-box">
							<view class="u-config-wrap" style="padding: 0 40rpx;">
								<view class="u-config-item">
									<view class="u-item-title">暂时还没有数据噢~</view>
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

		onReady() {
			this.getServerData(); //活动时长比例数据
			this.getHeartRateData() //心率数据
		},
		onShow() {
			this.animShow = true
			this.getServerData(); //活动时长比例数据
			this.getHeartRateData() //心率数据
		},
		onHide() {
			this.animShow = false
			this.chartData = {}
			this.heartRateChartData = {}
		},
		data() {
			return {
				//睡眠数据
				sleepChartData: {},
				sleepOpts: {},

				//心率数据
				heartRateChartData: {},
				heartRateOpts: {
					timing: "easeOut",
					duration: 1000,
					rotate: false,
					rotateLock: false,
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: [15, 0, 0, 0],
					fontSize: 13,
					fontColor: "#666666",
					dataLabel: false,
					dataPointShape: false,
					dataPointShapeType: "hollow",
					touchMoveLimit: 60,
					enableScroll: false,
					enableMarkLine: false,
					legend: {
						show: false,
						position: "bottom",
						float: "center",
						padding: 0,
						margin: 0,
						backgroundColor: "rgba(0,0,0,0)",
						borderColor: "rgba(0,0,0,0)",
						borderWidth: 0,
						fontSize: 13,
						fontColor: "#666666",
						lineHeight: 11,
						hiddenColor: "#CECECE",
						itemGap: 0
					},
					xAxis: {
						disableGrid: true,
						disabled: true,
						axisLine: false,
						axisLineColor: "#CCCCCC",
						calibration: false,
						fontColor: "#666666",
						fontSize: 0,
						lineHeight: 0,
						marginTop: 0,
						rotateLabel: false,
						rotateAngle: 45,
						itemCount: 5,
						boundaryGap: "center",
						splitNumber: 5,
						gridColor: "#CCCCCC",
						gridType: "solid",
						dashLength: 4,
						gridEval: 1,
						scrollShow: false,
						scrollAlign: "left",
						scrollColor: "#A6A6A6",
						scrollBackgroundColor: "#EFEBEF",
						title: "",
						titleFontSize: 13,
						titleOffsetY: 0,
						titleOffsetX: 0,
						titleFontColor: "#666666",
						format: ""
					},
					yAxis: {
						gridType: "dash",
						dashLength: 2,
						disabled: true,
						disableGrid: true,
						splitNumber: 5,
						gridColor: "#CCCCCC",
						padding: 0,
						showTitle: true,
						data: []
					},
					extra: {
						line: {
							type: "curve",
							width: 6,
							activeType: "none",
							linearType: "custom",
							onShadow: true,
							animation: "horizontal"
						},
						tooltip: {
							showBox: false,
							showArrow: false,
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
							legendShow: false,
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


				//charts
				chartData: {},
				//这里的 opts 是图表类型 type="ring" 的全部配置参数，您可以将此配置复制到 config-ucharts.js 文件中下标为 ['ring'] 的节点中来覆盖全局默认参数。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
				opts: {
					timing: "easeOut",
					duration: 1000,
					rotate: false,
					rotateLock: false,
					color: ["#FFFFFF", "#E2ECEC", "#8CF0FB", "#59CDDC", "#3F92A2", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: [5, 5, 5, 5],
					fontSize: 13,
					fontColor: "#666666",
					dataLabel: false,
					dataPointShape: true,
					dataPointShapeType: "solid",
					touchMoveLimit: 60,
					enableScroll: false,
					enableMarkLine: false,
					legend: {
						show: false,
						position: "right",
						lineHeight: 25,
						float: "center",
						padding: 5,
						margin: 5,
						backgroundColor: "rgba(0,0,0,0)",
						borderColor: "rgba(0,0,0,0)",
						borderWidth: 0,
						fontSize: 13,
						fontColor: "#666666",
						hiddenColor: "#CECECE",
						itemGap: 0
					},
					title: {
						name: "",
						fontSize: 15,
						color: "#666666",
						offsetX: 0,
						offsetY: 0
					},
					subtitle: {
						name: "",
						fontSize: 25,
						color: "#7cb5ec",
						offsetX: 0,
						offsetY: 0
					},
					extra: {
						ring: {
							ringWidth: 44,
							activeOpacity: 0.5,
							activeRadius: 10,
							offsetAngle: -90,
							labelWidth: 15,
							border: false,
							borderWidth: 3,
							borderColor: "#FFFFFF",
							centerColor: "#ffffff",
							customRadius: 0,
							linearType: "none"
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
							splitLine: true,
							horizentalLine: false,
							xAxisLabel: false,
							yAxisLabel: false,
							labelBgColor: "#FFFFFF",
							labelBgOpacity: 0.7,
							labelFontColor: "#666666"
						}
					}
				},

				//控件动画相关
				animModeClass2: ['fade', 'slide-top'],
				animModeClass1: ['fade', 'slide-left'],
				animShow: false,


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
				activeColor: '#FE8787'
			}
		},
		computed: {},
		methods: {
			drawClockBg() {
				uni.getImageInfo({
					src: "https://mp-4873eed2-c888-469f-becd-e538e287ac05.cdn.bspapp.com/clock.png",
					success(res) {
						console.log(res.path)
						var ctx = uni.createCanvasContext("firstCanvas") // 使用画布创建上下文 图片
						ctx.drawImage(res.path, x, y, 100, 100) // 设置图片坐标及大小，括号里面的分别是（图片路径，x坐标，y坐标，width，height）
						ctx.save(); //保存
						ctx.draw() //绘制
					}
				})

			},
			getHeartRateData() {
				//模拟从服务器获取数据时的延时
				setTimeout(() => {
					//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
					let res = {
						// categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
						series: [{
							name: "心率",
							data: [35, 25, 37, 20, 35, 25, 37, 20, 35, 25, 37, 4, 20],
							color: '#f78786',
							setShadow: [0, 10, 20, '#FFB2B2']
							// linearColor:[[0,'#FF4F4F'],[0.1,'#fde0e0'],[0.64,'#fde0e0'],[1,'#ffffff']]
						}]
					};
					this.heartRateChartData = JSON.parse(JSON.stringify(res));
				}, 500);

			},
			navi2HealthRating() {
				uni.navigateTo({
					url: "/pages/healthApp/healthRating/healthRating"
				})
			},
			getServerData() {
				//模拟从服务器获取数据时的延时
				setTimeout(() => {
					//计算空白值=(24-其余的总和)，并将其加入data的最后一项，name:blank; color:white
					//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
					let res = {
						series: [{
							data: [{
									"name": "sleep",
									"value": 8.3,
									"color": "#BBD0DD"
								},
								{
									"name": "sit",
									"value": 0.2,
									"color": "#E9FFFF"
								},
								{
									"name": "stand",
									"value": 0.2,
									"color": "#C3F2F2"
								},
								{
									"name": "walk",
									"value": 0.6,
									"color": "#8CC6D3"
								},
								{
									"name": "stand",
									"value": 0.05,
									"color": "#C3F2F2"
								},
								{
									"name": "sit",
									"value": 1.2,
									"color": "#E9FFFF"
								},
								{
									"name": "stand",
									"value": 0.1,
									"color": "#C3F2F2"
								},
								{
									"name": "run",
									"value": 1.5,
									"color": "#60ACCA"
								}, {
									"name": "sit",
									"value": 1.2,
									"color": "#E9FFFF"
								},
								{
									"name": "stand",
									"value": 0.2,
									"color": "#C3F2F2"
								},
								{
									"name": "walk",
									"value": 0.3,
									"color": "#8CC6D3"
								},
								{
									"name": "stand",
									"value": 0.2,
									"color": "#C3F2F2"
								}, {
									"name": "sit",
									"value": 2.1,
									"color": "#E9FFFF"
								},
								{
									"name": "run",
									"value": 0.5,
									"color": "#60ACCA"
								}, {
									"name": "sit",
									"value": 1.5,
									"color": "#E9FFFF"
								},
								{
									"name": "stand",
									"value": 1,
									"color": "#C3F2F2"
								},
								{
									"name": "walk",
									"value": 1.3,
									"color": "#8CC6D3"
								}, {
									"name": "sit",
									"value": 1.9,
									"color": "#E9FFFF"
								}, {
									"name": "sleep",
									"value": 1.8,
									"color": "#BBD0DD"
								},
							]
						}]
					};
					let sumData = 0;
					for (let i = 0; i < res.series[0].data.length; i++) {
						sumData += res.series[0].data[i].value
						console.log(res.series[0].data[i].value)
						// console.log(i)
					}
					console.log(sumData)
					let blankValue = (24.0 - sumData)
					if (blankValue > 0) {
						let newObj = {
							"name": "blank",
							"value": blankValue,
							"color": "#fff"
						}
						res.series[0].data.push(newObj)
					}
					this.chartData = JSON.parse(JSON.stringify(res));
				}, 500);
			},
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
		background: #fff;
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