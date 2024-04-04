<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-hello-text">
				请点击按钮向服务器发起请求
			</view>
			<a v-if="!signState" href="#" v-on:click="saveURL">登录</a>
			<view class="uni-textarea uni-common-mt">
				<textarea :value="res"></textarea>
			</view>
			<view class="uni-btn-v uni-common-mt">
				<button type="primary" @click="locationHref" :loading="loading">发起Polar账号登陆请求</button>
				<button type="primary" @click="getToken" :loading="loading">获取token令牌</button>
				<button type="primary" @click="getUserBasicInfo" :loading="loading">获取用户基础信息</button>
				<button type="primary" @click="createTransaction" :loading="loading">创建transaction</button>
				<button type="primary" @click="listActivity" :loading="loading">listActivity</button>
				<!-- <button type="primary" @click="location()" :loading="loading">location</button> -->
				<button type="primary" @click="listActivitySummary" :loading="loading">listActivitySummary</button>
			</view>
		</view>
	</view>
</template>
<script>
	import Base64 from 'base-64'
	// 引用qs
	// import qs from 'qs'
	const requestUrl = 'https://unidemo.dcloud.net.cn/ajax/echo/text?name=uni-app'
	const duration = 2000
	export default {
		data() {
			return {
				title: 'request',
				loading: false,
				res: '',
				client_id: 'd9b43148-dff9-4730-bf04-59d284efb671',
				client_secret: '8182dbf0-a83c-442c-a110-324bef38d628',
				encodeClientStr: '',

				scope: 'read:user', // Grants access to read a user's profile data.
				state: 'your state',
				getCodeURL: '/api/oauth2/authorization',
				getAccessTokenURL: '/api2/oauth2/token',
				getUserURl: '/api3',
				redirectURL: null,
				code: null,
				accessToken: null,
				signState: false,
				xUserID: null,
				transactionID: null,
				activityID: null,

			}
		},
		created() {
			this.getCodeURL += '?' + 'client_id=' + this.client_id + '&response_type=code'
		},
		mounted() {
			console.log(getApp().globalData.accessCode)
			if (getApp().globalData.accessCode != '') {
				this.code = getApp().globalData.accessCode
				uni.showToast({
					title: '您已登录至Polar账号',
					icon: 'success',
					mask: false,
					duration: 2000
				})
			}

		},
		methods: {
			location() {
				uni.request({
					url: '/getinfo/users/61291757/physical-information-transactions/21952335/physical-informations/15466211',
					method: 'GET',
					header: {
						'Host': 'www.polaraccesslink.com',
						'Authorization': 'Bearer ' + this.accessToken,
						'Accept': 'application/json;charset=UTF-8',
						'Content-Type': 'application/x-www-form-urlencoded',
					},

				})
				// location.href =
				// 	'https://www.polaraccesslink.com/v3/users/61291757/physical-information-transactions/21952335/physical-informations/15466211'

			},
			listActivitySummary() {
				uni.request({
					// url: '/getinfo/users/61291757/activity-transactions/' + this.transactionID + '/activities/' +
					// 	this.activityID,
					url: '/getinfo/users/61291757/activity-transactions/1093181050/activities/2558483657',
					method: 'GET',
					header: {
						'Host': 'www.polaraccesslink.com',
						'Content-Type': 'application/x-www-form-urlencoded',
						'Accept': 'application/json;charset=UTF-8',
						'Authorization': 'Bearer ' + this.accessToken,
					},
				}).then(res => {
					console.log(res[1].data)
				})
			},
			listActivity() {
				uni.request({
					url: '/getinfo/users/61291757/activity-transactions/' + this.transactionID,
					method: 'GET',
					header: {
						'Host': 'www.polaraccesslink.com',
						'Content-Type': 'application/x-www-form-urlencoded',
						'Accept': 'application/json;charset=UTF-8',
						'Authorization': 'Bearer ' + this.accessToken,
					},
				}).then(res => {
					console.log(res[1].data[0])
					let Arr = res[1].data[0].split['/']
					let activityID = Arr.pop()
					this.activityID = activityID
				})
			},
			listHeartRate() {
				uni.request({
					// url: '/getinfo/users/61291757/activity-transactions/' + this.transactionID,
					// url: '/getinfo/users/61291757/activity-transactions/1093153832',
					url: '/getinfo/users/continuous-heart-rate/2024-04-04',
					// url: '/getinfo/users/61291757/physical-information-transactions/' + this.transactionID,
					// url: '/getinfo/users/61291757/physical-information-transactions/21952335',
					method: 'GET',
					header: {
						'Host': 'www.polaraccesslink.com',
						'Content-Type': 'application/x-www-form-urlencoded',
						'Accept': 'application/json;charset=UTF-8',
						'Authorization': 'Bearer ' + this.accessToken,
					},
				}).then(res => {
					console.log(res[1].data)
					// location.href = res[1].data[0]
					// location.href = res[1].data["resource-uri"]
				})
			},

			createTransaction() {
				uni.request({
					url: '/getinfo/users/61291757/activity-transactions',
					// url: '/getinfo/users/61291757/physical-information-transactions',
					method: 'POST',
					data: {
						'user - id': 61291757
					},
					header: {
						'Host': 'www.polaraccesslink.com',
						'Content-Type': 'application/x-www-form-urlencoded',
						'Accept': 'application/json;charset=UTF-8',
						'Authorization': 'Bearer ' + this.accessToken,
					},
				}).then(res => {
					console.log(res[1].data)
					this.transactionID = res[1].data["transaction-id"]
				})
			},
			getToken() {
				this.encodeClientStr = Base64.encode(this.client_id + ':' + this.client_secret)
				this.encodeClientStr = "Basic " + this.encodeClientStr
				console.log(this.encodeClientStr)

				uni.request({
					url: '/tokenapi/oauth2/token',
					method: 'POST',
					data: {
						grant_type: "authorization_code",
						code: this.code,
						// redirect_uri: 'http://localhost:8080/pages'
					},
					header: {
						'Content-Type': 'application/x-www-form-urlencoded',
						'Authorization': this.encodeClientStr,
						'Accept': 'application/json;charset=UTF-8',
					},
				}).then(res => {
					console.log(res[1].data)
					this.accessToken = res[1].data.access_token
					this.xUserID = res[1].data.x_user_id
				})

				//uni 跨域 正常使用 manifest更新需要重新运行终端 
				//叫api4不行
				// uni.request({
				// 	url: '/ajun/json_demo.json',
				// 	method: 'GET',
				// }).then(res => {
				// 	console.log(res)
				// })

			},
			// registerUser() {
			// 	let data = qs.stringify({
			// 		"member-id": "user1"
			// 	})
			// 	uni.request({
			// 		url: '/getinfo/users',
			// 		method: 'POST',
			// 		data: {
			// 			"member-id": "user1"
			// 		},
			// 		withCredentials: true,
			// 		header: {
			// 			// 'Host': 'www.polaraccesslink.com',
			// 			'Content-Type': 'application/xml',
			// 			'Accept': 'application/json',
			// 			// 'Authorization': 'Bearer ' + this.accessToken
			// 			'Authorization': this.encodeClientStr,
			// 		},
			// 	})
			// },
			getUserBasicInfo() {
				uni.request({
					url: '/getinfo/users/61291757',
					method: 'GET',
					header: {
						'Authorization': 'Bearer ' + this.accessToken,
						'Host': 'www.polaraccesslink.com',
						'Accept': 'application/json'
					},
				})
			},
			locationHref() {
				location.href =
					"https://flow.polar.com/oauth2/authorization?response_type=code&client_id=d9b43148-dff9-4730-bf04-59d284efb671"
				// uni.navigateTo({
				// 	url: 'https://flow.polar.com/oauth2/authorization?response_type=code&client_id=d9b43148-dff9-4730-bf04-59d284efb671'
				// })
			},
			// https://flow.polar.com/oauth2/authorization?response_type=code&client_id=d9b43148-dff9-4730-bf04-59d284efb671
			requestPromise() {
				// #ifndef VUE3
				this.$axios({
						method: 'POST',
						url: '/api/oauth2/authorization',
						params: {
							'response_type': 'code',
							'client_id': '=d9b43148-dff9-4730-bf04-59d284efb671',
						}
					})
					.then(res => {
						console.log(res)
						// location.href = res.data
					}).catch(res => {
						console.log(res)
						// location.href = res.data
					})
				// uni.request({
				// 	// url: '/api/v1/image-to-3d/018e8e76-9fb0-7f66-8e94-ee2b52be85d8',
				// 	// method: 'GET',
				// 	// header: {
				// 	// 	'Authorization': "Bearer msy_ar8y9bKmstdLwmebSabtqBqnxbiZvsYLyIcX",
				// 	// },
				// 	url: '/api/oauth2/authorization',
				// 	method: 'GET',
				// 	data: {
				// 		response_type: 'code',
				// 		client_id: 'd9b43148-dff9-4730-bf04-59d284efb671',
				// 	}
				// }).then(res => {
				// 	console.log('request success', res[1].data);
				// 	uni.showToast({
				// 		title: '查询成功',
				// 		icon: 'success',
				// 		mask: true,
				// 		duration: duration
				// 	});
				// 	this.res = '请求结果 : ' + JSON.stringify(res[1].data);
				// 	this.loading = false;
				// }).catch(err => {
				// 	console.log('request fail', err);
				// 	uni.showModal({
				// 		content: err.errMsg,
				// 		showCancel: false
				// 	});

				// 	this.loading = false;
				// });
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