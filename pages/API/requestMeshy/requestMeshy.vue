<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-hello-text">
				请点击按钮向服务器发起请求
			</view>
			<view class="uni-textarea uni-common-mt">
				<textarea :value="res"></textarea>
			</view>
			<view class="uni-btn-v uni-common-mt">
				<!-- <button type="primary" @click="sendRequest" :loading="loading">发起请求（Callback）</button> -->
				<button type="primary" @click="sendRequest('promise')" :loading="loading">发起请求（Promise）</button>
				<button type="default" @click="getResult" :loading="loading">查询AI生成结果</button>
				<!-- <button type="primary" @click="sendRequest('await')" :loading="loading">发起请求（Async/Await）</button> -->
			</view>
		</view>
	</view>
</template>
<script>
	// const requestUrl = 'https://unidemo.dcloud.net.cn/ajax/echo/text?name=uni-app'
	const duration = 2000
	export default {
		data() {
			return {
				title: '测试接入Meshy',
				loading: false,
				res: '',
				baseUrl: 'https://api.meshy.ai/v1/image-to-3d',
				meshyAPI: 'msy_ar8y9bKmstdLwmebSabtqBqnxbiZvsYLyIcX',
				inputHeader: {
					'Authorization': "Bearer msy_ar8y9bKmstdLwmebSabtqBqnxbiZvsYLyIcX",
					'Content - Type': 'application/json'
				},
				inputArg: {
					image_url: 'https://mp-4873eed2-c888-469f-becd-e538e287ac05.cdn.bspapp.com/18148991553/tangible/pic_1.jpg',
					enable_pbr: true,
				},
				fbxURL: '',
				fbxLocalPath: '',
				resultID: '',
			}
		},
		methods: {
			uploadModelFBX() {
				uniCloud.uploadFile({
					filePath: this.fbxLocalPath,
					cloudPath: 'model.fbx',
					// cloudPathAsRealPath: true,
					onUploadProgress: function(progressEvent) {
						console.log(progressEvent);
						var percentCompleted = Math.round(
							(progressEvent.loaded * 100) / progressEvent.total
						);
					},
					success: (res) => {
						console.log(res)
						uni.showToast({
							title: '上传模型成功',
							icon: 'success',
							duration: 1000
						})
					},
					fail: (err) => {
						console.log('上传模型 fail', err);
						uni.showModal({
							content: err.errMsg,
							showCancel: false
						});
					},
					complete() {}
				});
			},
			downloadModel() {
				uni.showLoading({
					title: '下载中'
				})
				uni.downloadFile({
					url: this.fbxURL,
					success: (res) => {
						uni.showToast({
							title: '下载AI生成模型成功',
							icon: 'success',
							duration: 1000
						})
						console.log('下载AI生成模型成功', res)
						this.fbxLocalPath = res.tempFilePath;
						uni.hideLoading();
						this.uploadModelFBX()
					},
					fail: (err) => {
						console.log('下载AI生成模型失败', err)
					}
				})
			},
			getResult() {
				this.loading = true
				uni.request({
					// url:this.baseUrl+this.resultID
					url: this.baseUrl + '/018e8e76-9fb0-7f66-8e94-ee2b52be85d8',
					method: 'GET',
					header: {
						'Authorization': "Bearer msy_ar8y9bKmstdLwmebSabtqBqnxbiZvsYLyIcX",
						// 'Content-type': 'application/json'
					},
				}).then(res => {
					console.log('request success', res[1].data);
					uni.showToast({
						title: '查询成功',
						icon: 'success',
						mask: true,
						duration: duration
					});
					this.res = '查询结果 : ' + res[1].data;
					this.loading = false;
					this.fbxURL = res[1].data.model_urls.fbx
					//下载之后，上传模型
					this.downloadModel()
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
			_requestPromise() {
				// #ifndef VUE3
				uni.request({
					url: this.baseUrl,
					method: 'POST',
					header: {
						'Authorization': "Bearer msy_ar8y9bKmstdLwmebSabtqBqnxbiZvsYLyIcX",
						'Content-type': 'application/json'
					},
					data: {
						image_url: 'https://mp-4873eed2-c888-469f-becd-e538e287ac05.cdn.bspapp.com/bear.png',
						enable_pbr: true,
					}
				}).then(res => {
					console.log('request success', res[1].data);
					this.resultID = res[1].data.result
					uni.showToast({
						title: '请求成功',
						icon: 'success',
						mask: true,
						duration: duration
					});
					this.res = '请求结果 : ' + res[1].data;
					this.loading = false;
					// result: "018e6c7f-7352-759b-8302-9dc94dab864b"
					// 018e8e76-9fb0-7f66-8e94-ee2b52be85d8

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
		}
	}
</script>