<template>
	<view class="">
		<view class="bg"></view>
		<view>
			<!-- 底部导航栏 -->
			<u-tabbar v-model="current" :show="show" :bg-color="bgColor" :border-top="borderTop" :list="list"
				:mid-button="midButton" :inactive-color="inactiveColor" :activeColor="activeColor"
				@change="ChangBar"></u-tabbar>
		</view>
		<template>
			<view class="uni-padding-wrap uni-common-mt">
				<!-- <view class="uni-title uni-common-mt">
					flex-direction: row
					<text>\n横向布局</text>
				</view>
				<view class="uni-flex uni-row">
					<view class="flex-item uni-bg-red">A</view>
					<view class="flex-item uni-bg-green">B</view>
					<view class="flex-item uni-bg-blue">C</view>
				</view> -->
				<!-- 				<view class="uni-flex uni-row">
					<view class="text">横向布局-自动宽度</view>
					<view class="text">横向布局-自动宽度</view>
				</view> -->
				<uni-transition ref="ani" custom-class="transition" :mode-class="animModeClass" :show="animShow">

					<view class="uni-flex uni-row" v-for="(item, index) in ratingObjArr" @click="selectRatingQues(item)"
						:style="{ 'border': selectedIndex == item.id ? '2px solid #48647A' : '2px solid transparent' }"
						style="background: white; border-radius: 24rpx;padding: 15rpx; justify-content: center; align-items: center;box-shadow: 0px 10px 32px rgba(110, 113, 145, 0.12);margin: 40rpx 0;">

						<view class="uni-flex"
							style="width: 160rpx;height: 160rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;">
							<image src="../../../static/image/selfRating.png" style="width: 120rpx;height: 120rpx;">
							</image>
						</view>
						<view class="uni-flex uni-column"
							style="padd-webkit-flex: 1;flex: 1;-webkit-justify-content: space-between;justify-content: space-around;padding: 15rpx 0rpx;">
							<view class="text"
								style="height: 46rpx;text-align: left;padding-left: 15rpx;padding-top: 0rpx;font-size: 32rpx;color: black;margin: 0rpx 5rpx; font-weight: 600;">
								<!-- 工作紧张测量问卷 -->
								{{ item.name }}
							</view>
							<view class="text"
								style="height: 40rpx;text-align: left;padding-left: 15rpx;padding-top: 0rpx;font-size:26rpx;color: #999;margin: 10rpx 5rpx;">
								<!-- Job Stress Survey, JSS -->
								{{ item.des }}
							</view>
							<view class="text"
								style="height: 40rpx;text-align: left;padding-left: 15rpx;padding-top: 0rpx;font-size: 26rpx;color: #6E7191;margin: 10rpx 5rpx;">
								<!-- 约10分钟 -->
								{{ item.duration }}
							</view>
						</view>
					</view>

					<view class="u-demo-area" style="margin-top: 40px; padding:0 20px">
						<uni-transition duration=600 ref="ani" custom-class="transition" :mode-class="animModeClass"
							:show="animShow">
							<u-button @click="btnClick" data-name="3333" :loading="btnLoading" :plain="btnPlain"
								:shape="btnShape" :size="btnSize" ripple=true :hairLine="hairLine" :type="btnType"
								:disabled="btnDisabled">开始自测</u-button>
						</uni-transition>
					</view>
				</uni-transition>

			</view>

			<!-- 顶部导航栏 -->
			<u-navbar title-color="#000" back-icon-color="#000" :is-fixed="isFixed" :is-back="isBack"
				:background="background" :back-text-style="{ color: '#000' }" :title="title"
				:back-icon-name="backIconName" :back-text="backText">
			</u-navbar>
		</template>

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
			//渐入动画相关
			animModeClass: ['fade', 'slide-top']
			, animShow: false
			,

			//底部导航栏
			current: 2,
			show: true,
			bgColor: '#ffffff',
			borderTop: true,
			list: [{
				iconPath: "../../../static/image/navBar/ques.png",
				selectedIconPath: "../../../static/image/navBar/ques-active.png",
				text: 'SelfRate',
				"pagePath": "pages/healthApp/SelfRatingSelect/SelfRatingSelect",
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
				"pagePath": 'pages/healthApp/home/home',
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
			activeColor: '#FE8787',

			selectedIndex: null,
			//底部按钮的样式
			hairLine: true,
			btnType: 'primary',
			btnSize: 'default',
			btnShape: 'circle',
			btnPlain: false,
			btnLoading: false,
			btnDisabled: true,
			ratingObjArr: [{
				id: 0,
				name: "工作紧张测量问卷",
				des: "Job Stress Survey, JSS",
				duration: '约10分钟',
				selected: false,
			}, {
				id: 1,
				name: "马氏工作倦怠量表",
				des: "Maslach Burnout Inventory MBI",
				duration: '约4分钟',
				selected: false,
			}, {
				id: 2,
				name: "焦虑自评量表",
				des: "Self-Rating Anxiety Scale,SAS",
				duration: '约5分钟',
				selected: false,
			}, {
				id: 3,
				name: "抑郁体验问卷",
				des: "Depressive ExpQuestionnaire.DEO)",
				duration: '约15分钟',
				selected: false,
			}],

			title: '心理量表测量',
			backText: '',
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
	computed: {
		slotRightCurrent() {
			return this.slotRight ? 0 : 1;
		}
	},
	methods: {
		ChangBar(e) {
			uni.switchTab({
				url: '/' + this.list[e].pagePath
			})
		},
		btnClick() {
			console.log("点击按钮", this.selectedIndex)
		},
		selectRatingQues(item) {
			console.log(item.name)
			if (this.selectedIndex == item.id
			) {
				this.selectedIndex = null
				this.btnDisabled = true
			} else if (this.selectedIndex != item.id) {
				this.selectedIndex = item.id
				this.btnDisabled = false
			}
		},
		titleChange(index) {
			this.useSlot = false;
			this.title = index == 0 ? '心理量表测量' : index == 1 ? '新闻列表' : '雨打梨花深闭门，忘了青春，误了青春';
		},
		leftChange(index) {
			if (index == 0) {
				this.backText = '';
				this.backIconName = 'arrow-leftward';

			} else {
				this.backText = '返回';
				this.backIconName = 'arrow-left';
			}
		},
		searchChange(index) {
			this.title = null;
			this.useSlot = true;
			this.search = false;
			this.custom = false;
			if (index == 0) {
				this.title = '新闻';
				this.useSlot = false;
				this.rightSlot = false;
			} else if (index == 1) {
				this.showAction = false;
				this.useSlot = true;
				this.rightSlot = false;
				this.search = true;
				this.slotRight = false;
			} else if (index == 2) {
				this.useSlot = true;
				this.showAction = true;
				this.rightSlot = false;
				this.search = true;
				this.slotRight = false;
			} else {
				this.useSlot = true;
				this.search = true;
				this.showAction = false;
				this.rightSlot = true;
				this.slotRight = false;
			}
		},
		backChange(index) {
			this.isBack = !!index;
		},
		bgColorChange(index) {
			this.background = {};
			if (index == 0) {
				this.background = {
					// 'background-image': 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))',
					'background-image': 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
				}
			} else {
				let color = index == 1 ? '#39CCCC' : index == 2 ? '#B471CC' : '#001f3f';
				this.background = {
					background: color
				}
			}

		},
		rightChange(index) {
			if (index == 0) {
				this.slotRight = true;
				this.useSlot = false;
			} else {
				this.slotRight = false;
			}
		},
		customChange(index) {
			this.search = false;
			this.rightSlot = false;
			if (index == 0) {
				this.custom = true;
				this.title = null;
				this.isBack = false;
				this.useSlot = true;
			} else {
				this.useSlot = false;
				this.title = '新闻';
				this.isBack = true;
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.flex-item {
	width: 33.3%;
	height: 200rpx;
	text-align: center;
	line-height: 200rpx;
}

.flex-item-V {
	width: 100%;
	height: 150rpx;
	text-align: center;
	line-height: 150rpx;
}

.text {
	display: flex;
	flex-direction: column;
	justify-content: center;

	// padding: 0 20rpx;
	// background-color: #ebebeb;
	height: 40rpx;
	line-height: 40rpx;
	text-align: center;
	// color: #777;
	// font-size: 26rpx;
}

.desc {
	/* text-indent: 40rpx; */
}

.flex-pc {
	display: flex;
	justify-content: center;
}

.wrap {
	padding: 12px;
}

.demo-layout {
	height: 25px;
	border-radius: 4px;
}

.bg-purple {
	background: #CED7E1;
}

.bg-purple-light {
	background: #e5e9f2;
}

.bg-purple-dark {
	background: #99a9bf;
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
	padding: 24rpx;
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
	background-color: rgba(255, 255, 255, 0);
	color: #fff;
	font-size: 22rpx;
	border-radius: 100rpx;
	margin-left: 30rpx;
}

.map-wrap-text {
	padding: 0 6rpx;
}
</style>