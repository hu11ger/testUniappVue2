<template>
	<view>
		<view class="bg"></view>
		<view>
			<!-- 底部导航栏 -->
			<u-tabbar v-model="current" :show="show" :bg-color="bgColor" :border-top="borderTop" :list="list"
				:mid-button="midButton" :inactive-color="inactiveColor" :activeColor="activeColor"
				@change="ChangBar"></u-tabbar>
		</view>

		<!-- 顶部栏 -->
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
	},
	onHide() {
		this.animShow = false
	},
	data() {
		return {
			//渐入动画相关
			animModeClass: ['fade', 'slide-top']
			, animShow: false
			,//底部导航栏
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
				text: 'SelfCare', pagePath: 'pages/healthApp/selfCare/selfCare',
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
			activeColor: '#FE8787',

			selectedIndex: null,
			title: 'VRCure',
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
	methods: {
		ChangBar(e) {
			uni.switchTab({
				url: '/' + this.list[e].pagePath
			})
		},
	}
}
</script>

<style></style>
