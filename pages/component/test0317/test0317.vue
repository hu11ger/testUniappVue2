<template>
	<view class="content" v-if="!loading">
		<view class="ts-search">
			<!-- <input class="ts-search__input" placeholder="请输入诗名" @input="" /> -->
		</view>
		<view class="ts-list" v-for="item in data" :key="item._id" @click="">
			<view class="ts-title">
				<text class="ts-name">{{item.title.split('/')[0]}}</text>
				<!-- <text class="ts-dynasty">[{{item.dynasty}}]</text> -->
				<view style="width: 50px;"></view>
				<text class="ts-author">{{item.author}}</text>
			</view>
			<view class="ts-desc">{{ item.text.split('\n')[0] }}</view>
			<view style="height: 50px;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getCloudData()
		},
		// const requestUrl = 'https://unidemo.dcloud.net.cn/ajax/echo/text?name=uni-app'
		// const duration = 2000
		data() {
			return {
				title: '云服务器数据测试',
				tangShiData: [],
				loading: false,
				res: '',
				data: []
			}
		},
		methods: {
			getCloudData: function(e) {
				this.loading = true
				uni.showLoading({
					title: '加载中'
				});
				uniCloud
					.callFunction({
						name: 'TangShiList',
						data: {
							limit: 300,
							offset: 0,
							keyWord: ""
						}
					})
					.then(res => {
						// console.log(res.result.data, 0)
						// data = res.result.data
						this.data = res.result.data
						uni.hideLoading();
						this.loading = false
					})
			},

			sendRequest(mode) {
				this.loading = true;
				switch (mode) {
					case 'promise':
						this._requestPromise();
						break;
					case 'await':
						this._requestAwait();
						break;
					default:
						this._request();
						break;
				}
			},
			_request() {
				uni.request({
					url: requestUrl,
					dataType: 'text',
					data: {
						noncestr: Date.now()
					},
					success: (res) => {
						console.log('request success', res)
						uni.showToast({
							title: '请求成功',
							icon: 'success',
							mask: true,
							duration: duration
						});
						this.res = '请求结果 : ' + JSON.stringify(res);
					},
					fail: (err) => {
						console.log('request fail', err);
						uni.showModal({
							content: err.errMsg,
							showCancel: false
						});
					},
					complete: () => {
						this.loading = false;
					}
				});
			},
			_requestPromise() {
				// #ifndef VUE3
				uni.request({
					url: requestUrl,
					dataType: 'text',
					data: {
						noncestr: Date.now()
					}
				}).then(res => {
					console.log('request success', res[1]);
					uni.showToast({
						title: '请求成功',
						icon: 'success',
						mask: true,
						duration: duration
					});
					this.res = '请求结果 : ' + JSON.stringify(res[1]);
					this.loading = false;
				}).catch(err => {
					console.log('request fail', err);
					uni.showModal({
						content: err.errMsg,
						showCancel: false
					});

					this.loading = false;
				});
				// #endif

				// #ifdef VUE3
				uni.request({
					url: requestUrl,
					dataType: 'text',
					data: {
						noncestr: Date.now()
					}
				}).then(res => {
					console.log('request success', res);
					uni.showToast({
						title: '请求成功',
						icon: 'success',
						mask: true,
						duration: duration
					});
					this.res = '请求结果 : ' + JSON.stringify(res);

					this.loading = false;
				}).catch(err => {
					console.log('request fail', err);
					uni.showModal({
						content: err.errMsg,
						showCancel: false
					});

					this.loading = false;
				});
				// #endif
			},
			async _requestAwait() {
				let res, err
				// #ifndef VUE3
				[err, res] = await uni.request({
					url: requestUrl,
					dataType: 'text',
					data: {
						noncestr: Date.now()
					}
				});
				// #endif
				// #ifdef VUE3
				try {
					res = await uni.request({
						url: requestUrl,
						dataType: 'text',
						data: {
							noncestr: Date.now()
						}
					});
				} catch (e) {
					err = e
				}
				// #endif
				if (err) {
					console.log('request fail', err);
					uni.showModal({
						content: err.errMsg,
						showCancel: false
					});
				} else {
					console.log('request success', res)
					uni.showToast({
						title: '请求成功',
						icon: 'success',
						mask: true,
						duration: duration
					});
					this.res = '请求结果 : ' + JSON.stringify(res);
				}
				this.loading = false;
			}

		}
	}
</script>

<style>
	.text-box {
		margin-bottom: 40rpx;
		padding: 40rpx 0;
		display: flex;
		min-height: 300rpx;
		background-color: #FFFFFF;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 30rpx;
		color: #353535;
		line-height: 1.8;
	}
</style>