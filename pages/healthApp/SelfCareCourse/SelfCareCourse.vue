<template>
	<view class="">
		<view class="bg"></view>
		<u-navbar title-color="#000" back-icon-color="#000" :is-fixed="isFixed" :is-back="isBack"
			:background="background" :back-text-style="{ color: '#000' }" :title="title" :back-icon-name="backIconName"
			:back-text="backText">
			<view class="slot-wrap" v-if="useSlot">
				<view class="search-wrap" v-if="search">
					<!-- 如果使用u-search组件，必须要给v-model绑定一个变量 -->
					<u-search v-model="keyword" :show-action="showAction" height="56" :action-style="{ color: '#fff' }"
						placeholder="请搜索你想要的内容"></u-search>
				</view>
				<view class="navbar-right" v-if="rightSlot">
					<view class="message-box right-item">
						<u-icon name="chat" size="38"></u-icon>
						<u-badge count="18" size="mini" :offset="[-15, -15]"></u-badge>
					</view>
					<view class="dot-box right-item">
						<u-icon name="calendar-fill" size="38"></u-icon>
						<u-badge size="mini" :is-dot="true" :offset="[-6, -6]"></u-badge>
					</view>
				</view>
			</view>
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
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="">
						<view class="page-box">
							<view class="u-config-wrap" style="padding: 0 40rpx;">
								<view class="u-config-item">
									<view class="u-item-title">工作前</view>
								</view>
								<u-waterfall v-model="flowList2" ref="uWaterfall">
									<template v-slot:left="{ leftList }">
										<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
											<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
											<u-lazy-load threshold="" border-radius="10" :image="item.image"
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
											<u-lazy-load threshold="" border-radius="10" :image="item.image"
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
								<view class="u-config-item">
									<view class="u-item-title">工作中</view>
								</view>
								<u-waterfall v-model="flowList" ref="uWaterfall">
									<template v-slot:left="{ leftList }">
										<view class="demo-warter" v-for="(item, index) in leftList" :key="index">
											<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
											<u-lazy-load threshold="" border-radius="10" :image="item.image"
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
											<u-lazy-load threshold="" border-radius="10" :image="item.image"
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
											<u-lazy-load threshold="" border-radius="10" :image="item.image"
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
											<u-lazy-load threshold="" border-radius="10" :image="item.image"
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
export default {
	onLoad() {
		this.getOrderList(0);
		this.getOrderList(1);
		this.getOrderList(3);
		// this.addRandomData();
	},
	// onReachBottom() {
	// 	this.loadStatus = 'loading';
	// 	// 模拟数据加载
	// 	setTimeout(() => {
	// 		this.addRandomData();
	// 		this.loadStatus = 'loadmore';
	// 	}, 1000)
	// },
	mounted() {
		//显示搜索框
		this.showAction = false;
		this.useSlot = true;
		this.rightSlot = false;
		this.search = true;
		this.slotRight = false;
	},
	data() {
		return {
			// loadStatus: 'loadmore',
			flowList: [{
				price: 10,
				title: 'Aligning Work to Values',
				shop: 'Daily Boost',
				image: '../../../static/image/selfCareSource-1.png',
			}, {
				price: 5,
				title: 'Taking Things For Granted',
				shop: 'Relax',
				image: '../../../static/image/selfCareSource-2.png',
			}, {
				price: 4,
				title: 'Re-think Stress',
				shop: 'Daily Boost',
				image: '../../../static/image/selfCareSource-3.png',
			}],
			flowList2: [{
				price: 10,
				title: 'Aligning Work to Values',
				shop: 'Daily Boost',
				image: '../../../static/image/selfCareSource-4.png',
			}],
			flowList3: [{
				price: 5,
				title: 'Taking Things For Granted',
				shop: 'Relax',
				image: '../../../static/image/selfCareSource-2.png',
			}, {
				price: 4,
				title: 'Re-think Stress',
				shop: 'Daily Boost',
				image: '../../../static/image/selfCareSource-3.png',
			}]
			,

			list: [{
				price: 4,
				title: '欲与天公试比高',
				shop: '李白杜甫白居易旗舰店',
				image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg',
			}],
			orderList: [
				[],
				[],
				[],
				[]
			],
			dataList: [{
				id: 1,
				store: '夏日流星限定贩卖',
				deal: '交易成功',
				goodsList: [{
					goodsUrl: '//img13.360buyimg.com/n7/jfs/t1/103005/7/17719/314825/5e8c19faEb7eed50d/5b81ae4b2f7f3bb7.jpg',
					title: '【冬日限定】现货 原创jk制服女2020冬装新款小清新宽松软糯毛衣外套女开衫短款百搭日系甜美风',
					type: '灰色;M',
					deliveryTime: '付款后30天内发货',
					price: '348.58',
					number: 2
				},
				{
					goodsUrl: '//img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg',
					title: '【葡萄藤】现货 小清新学院风制服格裙百褶裙女短款百搭日系甜美风原创jk制服女2020新款',
					type: '45cm;S',
					deliveryTime: '付款后30天内发货',
					price: '135.00',
					number: 1
				}
				]
			},
			{
				id: 2,
				store: '江南皮革厂',
				deal: '交易失败',
				goodsList: [{
					goodsUrl: '//img14.360buyimg.com/n7/jfs/t1/60319/15/6105/406802/5d43f68aE9f00db8c/0affb7ac46c345e2.jpg',
					title: '【冬日限定】现货 原创jk制服女2020冬装新款小清新宽松软糯毛衣外套女开衫短款百搭日系甜美风',
					type: '粉色;M',
					deliveryTime: '付款后7天内发货',
					price: '128.05',
					number: 1
				}]
			},
			{
				id: 3,
				store: '三星旗舰店',
				deal: '交易失败',
				goodsList: [{
					goodsUrl: '//img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg',
					title: '三星（SAMSUNG）京品家电 UA65RUF70AJXXZ 65英寸4K超高清 HDR 京东微联 智能语音 教育资源液晶电视机',
					type: '4K，广色域',
					deliveryTime: '保质5年',
					price: '1998',
					number: 3
				},
				{
					goodsUrl: '//img14.360buyimg.com/n7/jfs/t6007/205/4099529191/294869/ae4e6d4f/595dcf19Ndce3227d.jpg!q90.jpg',
					title: '美的(Midea)639升 对开门冰箱 19分钟急速净味 一级能效冷藏双开门杀菌智能家用双变频节能 BCD-639WKPZM(E)',
					type: '容量大，速冻',
					deliveryTime: '保质5年',
					price: '2354',
					number: 1
				}
				]
			},
			{
				id: 4,
				store: '三星旗舰店',
				deal: '交易失败',
				goodsList: [{
					goodsUrl: '//img10.360buyimg.com/n7/jfs/t22300/31/1505958241/171936/9e201a89/5b2b12ffNe6dbb594.jpg!q90.jpg',
					title: '法国进口红酒 拉菲（LAFITE）传奇波尔多干红葡萄酒750ml*6整箱装',
					type: '4K，广色域',
					deliveryTime: '珍藏10年好酒',
					price: '1543',
					number: 3
				},
				{
					goodsUrl: '//img10.360buyimg.com/n7/jfs/t1/107598/17/3766/525060/5e143aacE9a94d43c/03573ae60b8bf0ee.jpg',
					title: '蓝妹（BLUE GIRL）酷爽啤酒 清啤 原装进口啤酒 罐装 500ml*9听 整箱装',
					type: '一打',
					deliveryTime: '口感好',
					price: '120',
					number: 1
				}
				]
			},
			{
				id: 5,
				store: '三星旗舰店',
				deal: '交易成功',
				goodsList: [{
					goodsUrl: '//img12.360buyimg.com/n7/jfs/t1/52408/35/3554/78293/5d12e9cfEfd118ba1/ba5995e62cbd747f.jpg!q90.jpg',
					title: '企业微信 中控人脸指纹识别考勤机刷脸机 无线签到异地多店打卡机WX108',
					type: '识别效率高',
					deliveryTime: '使用方便',
					price: '451',
					number: 9
				}]
			}
			],
			tabList: [{
				name: '放松'
			},
			{
				name: '工作'
			},
			{
				name: '睡眠'
			},
			{
				name: '身体',
			},
			{
				name: '克服',
			}
			],
			current: 0,
			swiperCurrent: 0,
			tabsHeight: 0,
			dx: 0,
			loadStatus: ['loadmore', 'loadmore', 'loadmore', 'loadmore'],

			title: '',
			backText: '',
			backIconName: 'arrow-leftward',
			right: false,
			showAction: false,
			rightSlot: false,
			useSlot: true,
			background: {
				// 'background-image': 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))',
				'background-image': 'rgba(0,0,0,0)'
			},
			isBack: true,
			search: true,
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
		// 价格小数
		priceDecimal() {
			return val => {
				if (val !== parseInt(val)) return val.slice(-2);
				else return '00';
			};
		},
		// 价格整数
		priceInt() {
			return val => {
				if (val !== parseInt(val)) return val.split('.')[0];
				else return val;
			};
		},
		slotRightCurrent() {
			return this.slotRight ? 0 : 1;
		}
	},
	methods: {
		addRandomData() {
			//随机加入十个数据 且可重复
			for (let i = 0; i < 10; i++) {
				let index = this.$u.random(0, this.list.length - 1);
				// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
				let item = JSON.parse(JSON.stringify(this.list[index]))
				item.id = this.$u.guid();
				this.flowList.push(item);
			}


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
		// 总价
		totalPrice(item) {
			let price = 0;
			item.map(val => {
				price += parseFloat(val.price);
			});
			return price.toFixed(2);
		},
		// 总件数
		totalNum(item) {
			let num = 0;
			item.map(val => {
				num += val.number;
			});
			return num;
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
		}
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