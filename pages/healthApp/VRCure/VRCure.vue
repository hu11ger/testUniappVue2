<template>
	<view class="">
		<view class="bg"></view>

		<view>
			<!-- 输入框示例 -->
			<uni-popup ref="inputDialog" type="dialog">
				<uni-popup-dialog ref="inputClose" mode="input" title="登录认证" value="" placeholder="请输入您的手机号~"
					@confirm="dialogInputConfirm"></uni-popup-dialog>
			</uni-popup>
		</view>

		<!-- 底部导航栏 -->
		<u-tabbar v-model="bottomTabCurrent" :show="show" :bg-color="bgColor" :border-top="borderTop" :list="list"
			:mid-button="midButton" :inactive-color="inactiveColor" :activeColor="activeColor"
			@change="ChangBar"></u-tabbar>

		<!-- 顶部栏 -->
		<u-navbar title-color="#FE8787" back-icon-color="#000" :is-fixed="isFixed" :is-back="isBack"
			:background="background" :back-text-style="{ color: '#000' }" :title="title" :back-icon-name="backIconName"
			:back-text="backText">
		</u-navbar>
		<!-- <template> -->
		<!-- <view class="uni-padding-wrap uni-common-mt" style=""> -->
		<view class="wrap">
			<view style="padding: 24rpx 24rpx 0 24rpx;">
				<view class="u-tabs-box">
					<u-tabs-swiper activeColor="#FE8787" ref="tabs" :list="tabList" :current="current" @change="change"
						:is-scroll="false" swiperWidth="750"></u-tabs-swiper>
				</view>
			</view>

			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition"
				@animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height:max-content;width: 100%;" @scrolltolower="">
						<view class="page-box" style="height:max-content;width: 100%;">
							<view class="u-config-wrap" style="padding: 0 40rpx;height:max-content;width: 100%;">
								<view class="u-config-item">
									<view class="u-item-title">图片示例</view>
								</view>
								<view class="uni-btn-v">
									<u-button @click="inputDialogToggle" data-name="3333" :loading="btnLoading"
										:plain="btnPlain" :shape="btnShape" :size="btnSize" ripple=true
										:hairLine="hairLine" v-if="!hasUserInfo" :type="btnType">请先登录认证~</u-button>
								</view>
								<view class="u-config-item">
									<view class="u-item-title">上传个人记忆</view>
								</view>
								<!-- 图片上传功能 -->
								<view class="uni-list list-pd"
									style="border-radius:24rpx;box-shadow: 0px 10px 32px rgba(110, 113, 145, 0.12); ">
									<view class="uni-list-cell cell-pd">
										<view class="uni-uploader">
											<view class="uni-uploader-head">
												<view class="uni-uploader-title">点击可预览上传的的个人记忆</view>
												<view class="uni-uploader-info">{{ imageList.length }}/9</view>
											</view>
											<view class="uni-uploader-body">
												<view class="uni-uploader__files">
													<block v-for="(image, index) in imageList" :key="index">
														<view class="uni-uploader__file">
															<image class="uni-uploader__img" :src="image"
																:data-src="image" @tap="previewImage"></image>
														</view>
													</block>
													<view class="uni-uploader__input-box">
														<view class="uni-uploader__input" @tap="chooseImage"></view>
													</view>
												</view>
											</view>
										</view>
									</view>
								</view>

							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="">
						<view class="page-box">
							<view class="u-config-wrap" style="padding: 0 40rpx;">
								<view class="u-config-item">
									<view class="u-item-title">工作中</view>
								</view>
								<u-waterfall v-model="flowList3" ref="uWaterfall">
									<template v-slot:left="{ leftList }">
										<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
											<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
											<u-lazy-load threshold="-100" border-radius="10" :image="item.image"
												:index="index"></u-lazy-load>
											<view class="demo-title">
												{{ item.title }}
											</view>
											<view class="demo-price">
												{{ item.price }}min

											</view>

											<view class="demo-shop">
												{{ item.shop }}
											</view>

										</view>
									</template>
									<template v-slot:right="{ rightList }">
										<view class="demo-warter" v-for="(item, index) in rightList" :key="index">
											<u-lazy-load threshold="-100" border-radius="10" :image="item.image"
												:index="index"></u-lazy-load>
											<view class="demo-title">
												{{ item.title }}
											</view>
											<view class="demo-price">
												{{ item.price }}min
											</view>
											<view class="demo-shop">
												{{ item.shop }}
											</view>
										</view>
									</template>
								</u-waterfall>

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
		<!-- </template> -->

	</view>


</template>

<script>
var sourceType = [
	['camera'],
	['album'],
	['camera', 'album']
]
var sizeType = [
	['compressed'],
	['original'],
	['compressed', 'original']
]
export default {

	onLoad() { },
	mounted() {
		//显示搜索框
		this.showAction = false;
		this.useSlot = true;
		this.rightSlot = false;
		this.search = true;
		this.slotRight = false;
	},
	onUnload() {
		this.imageList = [],
			this.sourceTypeIndex = 2,
			this.sourceType = ['拍照', '相册', '拍照或相册'],
			this.sizeTypeIndex = 2,
			this.sizeType = ['压缩', '原图', '压缩或原图'],
			this.countIndex = 8;
	},

	data() {
		return {
			//底部按钮的样式
			hairLine: true,
			btnType: 'primary',
			btnSize: 'default',
			btnShape: 'circle',
			btnPlain: false,
			btnLoading: false,
			btnDisabled: false,

			//登录认证功能,获取用户手机号，暂时是mock版本
			hasUserInfo: false,
			userInfo: {},
			btnLoading: false,
			userPhoneNum: '',

			//图片上传功能
			userTelNum: 'your_userTelNum', // 替换为实际的用户名
			tangiblePicsIndex: 1, // 上传文件的索引


			imageSrc: '',
			title: 'choose/previewImage',
			imageList: [],
			sourceTypeIndex: 2,
			sourceType: ['拍照', '相册', '拍照或相册'],
			sizeTypeIndex: 2,
			sizeType: ['压缩', '原图', '压缩或原图'],
			countIndex: 8,
			count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			//底部导航栏
			bottomTabCurrent: 3,
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
			activeColor: '#FE8787',


			tabList: [{
				name: '物品'
			},
			{
				name: '景色'
			},
			{
				name: '记忆'
			},
			],
			current: 0,
			swiperCurrent: 0,
			tabsHeight: 0,
			dx: 0,
			loadStatus: ['loadmore', 'loadmore', 'loadmore', 'loadmore'],


			title: 'VR游戏疗愈定制',
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
	computed: {},
	methods: {
		//输入对话框相关的方法，收集用户的手机号当作唯一id
		inputDialogToggle() {
			this.$refs.inputDialog.open()
		},
		dialogInputConfirm(val) {

			uni.hideLoading()
			console.log(val)
			this.userPhoneNum = val
			// 关闭窗口后，恢复默认内容
			this.$refs.inputDialog.close()
			uni.showToast({
				title: '登录认证成功！',
				icon: 'success',
				duration: 1000
			})
			this.hasUserInfo = true
			console.log("userPhoneNum", this.userPhoneNum)
		},

		sourceTypeChange: function (e) {
			this.sourceTypeIndex = parseInt(e.detail.value)
		},
		sizeTypeChange: function (e) {
			this.sizeTypeIndex = parseInt(e.detail.value)
		},
		countChange: function (e) {
			this.countIndex = e.detail.value;
		},
		chooseImage: async function () {
			// unicloudUpLoadImage()
			// #ifdef APP-PLUS
			// TODO 选择相机或相册时 需要弹出actionsheet，目前无法获得是相机还是相册，在失败回调中处理
			if (this.sourceTypeIndex !== 2) {
				let status = await this.checkPermission();
				if (status !== 1) {
					return;
				}
			}
			// #endif

			if (this.imageList.length === 9) {
				let isContinue = await this.isFullImg();
				console.log("是否继续?", isContinue);
				if (!isContinue) {
					return;
				}
			}
			uni.chooseImage({
				sourceType: sourceType[this.sourceTypeIndex],
				sizeType: sizeType[this.sizeTypeIndex],
				count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList
					.length : this.count[this.countIndex],
				success: (res) => {
					this.imageList = this.imageList.concat(res.tempFilePaths);
					var filePath = res.tempFilePaths[0]
					// var cloudPath = res.tempFiles[0].path.substring(11) //获取随机名字
					var cloudPath =
						`${this.userPhoneNum}/tangiblePic/pic_${this.tangiblePicsIndex++}.jpg` //获取名字
					console.log(cloudPath)
					//进行上传操作
					uniCloud.uploadFile({
						filePath: filePath,
						cloudPath: cloudPath,
						cloudPathAsRealPath: true,

						onUploadProgress: function (progressEvent) {
							console.log(progressEvent);
							var percentCompleted = Math.round(
								(progressEvent.loaded * 100) / progressEvent.total
							);
						},
						success: (res) => {
							console.log(res.fileID)
							uni.showToast({
								title: '上传成功',
								icon: 'success',
								duration: 1000
							})
						},
						fail: (err) => {
							console.log('uploadImage fail', err);
							uni.showModal({
								content: err.errMsg,
								showCancel: false
							});
						},
						complete() { }
					})
				},
				fail: (err) => {
					console.log("err: ", err);
					// #ifdef APP-PLUS
					if (err['code'] && err.code !== 0 && this.sourceTypeIndex === 2) {
						this.checkPermission(err.code);
					}
					// #endif
					// #ifdef MP
					if (err.errMsg.indexOf('cancel') !== '-1') {
						return;
					}
					uni.getSetting({
						success: (res) => {
							let authStatus = false;
							switch (this.sourceTypeIndex) {
								case 0:
									authStatus = res.authSetting['scope.camera'];
									break;
								case 1:
									authStatus = res.authSetting['scope.album'];
									break;
								case 2:
									authStatus = res.authSetting['scope.album'] && res
										.authSetting['scope.camera'];
									break;
								default:
									break;
							}
							if (!authStatus) {
								uni.showModal({
									title: '授权失败',
									content: 'Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限',
									success: (res) => {
										if (res.confirm) {
											uni.openSetting()
										}
									}
								})
							}
						}
					})
					// #endif
				}
			})
		},
		isFullImg: function () {
			return new Promise((res) => {
				uni.showModal({
					content: "已经有9张图片了,是否清空现有图片？",
					success: (e) => {
						if (e.confirm) {
							this.imageList = [];
							res(true);
						} else {
							res(false)
						}
					},
					fail: () => {
						res(false)
					}
				})
			})
		},
		previewImage: function (e) {
			// unicloudUpLoadImage()
			var current = e.target.dataset.src
			uni.previewImage({
				current: current,
				urls: this.imageList
			})
		},
		async checkPermission(code) {
			let type = code ? code - 1 : this.sourceTypeIndex;
			let status = permision.isIOS ? await permision.requestIOS(sourceType[type][0]) :
				await permision.requestAndroid(type === 0 ? 'android.permission.CAMERA' :
					'android.permission.READ_EXTERNAL_STORAGE');

			if (status === null || status === 1) {
				status = 1;
			} else {
				uni.showModal({
					content: "没有开启权限",
					confirmText: "设置",
					success: function (res) {
						if (res.confirm) {
							permision.gotoAppSetting();
						}
					}
				})
			}

			return status;
		},


		//切换底部导航栏
		ChangBar(e) {
			uni.switchTab({
				url: '/' + this.list[e].pagePath
			})
		},
		remove(id) {
			this.$refs.uWaterfall.remove(id);
		},
		clear() {
			this.$refs.uWaterfall.clear();
		},
		reachBottom() {
			// 此tab为空数据
			if (this.current != 2) {
				this.loadStatus.splice(this.current, 1, "loading")
				setTimeout(() => {
					this.getOrderList(this.current);
				}, 1200);
			}
		},
		// 页面数据
		getOrderList(idx) {
			for (let i = 0; i < 5; i++) {
				let index = this.$u.random(0, this.dataList.length - 1);
				let data = JSON.parse(JSON.stringify(this.dataList[index]));
				data.id = this.$u.guid();
				this.orderList[idx].push(data);
			}
			this.loadStatus.splice(this.current, 1, "loadmore")
		},
		// tab栏切换
		change(index) {
			this.swiperCurrent = index;
			this.getOrderList(index);
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
		titleChange(index) {
			this.useSlot = false;
			this.title = index == 0 ? '新闻' : index == 1 ? '新闻列表' : '雨打梨花深闭门，忘了青春，误了青春';
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
		searchChange(index) { },
		backChange(index) {
			this.isBack = !!index;
		},
		bgColorChange(index) {
			this.background = {};
			if (index == 0) {
				this.background = {
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
		},


	}
}
</script>

<style>
/* #ifndef H5 */
page {
	height: 100%;
	background-color: #f2f2f2;
}

/* #endif */
</style>

<style lang="scss" scoped>
.cell-pd {
	padding: 22rpx 30rpx;
}

.list-pd {
	margin-top: 20rpx;
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