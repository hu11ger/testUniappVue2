<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="demo">
				<block v-if="imageSrc">
					<image :src="imageSrc" :data-src="imageSrc" class="image" mode="widthFix"></image>
				</block>
				<block v-else>
					<view class="uni-hello-addfile" @click="test">+ 选择图片</view>
				</block>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'uploadFile',
				imageSrc: ''
			}
		},
		onUnload() {
			// this.imageSrc = '';
		},
		methods: {
			test() {
				//前端代码
				uni.chooseImage({
					count: 1,
					success(res) {
						console.log(res);
						if (res.tempFilePaths.length > 0) {
							var imageSrc = res.tempFilePaths[0]
							var cloudPath = res.tempFiles[0].path.substring(11) //获取随机名字
							//进行上传操作

							this.imageSrc = imageSrc
							// console.log(cloudPath)
							// callback方式，与promise方式二选一即可
							uniCloud.uploadFile({
								filePath: imageSrc,
								cloudPath: cloudPath,
								onUploadProgress: function(progressEvent) {
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
								complete() {}
							});

						}
					},
					fail: (err) => {
						console.log('chooseImage fail', err)
						// #ifdef MP
						uni.getSetting({
							success: (res) => {
								let authStatus = res.authSetting['scope.album'];
								if (!authStatus) {
									uni.showModal({
										title: '授权失败',
										content: 'Hello uni-app需要从您的相册获取图片，请在设置界面打开相关权限',
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
				});

			},

			//默认
		}
	}
</script>

<style>
	.image {
		width: 100%;
	}

	.demo {
		background: #FFF;
		padding: 50rpx;
	}
</style>