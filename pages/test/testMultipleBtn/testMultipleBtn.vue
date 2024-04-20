<template>
	<view class="cencal_order">
		<view class="remark">
			<textarea maxlength="-1" placeholder="请在此处输入评价" placeholder-class="textarea_p"></textarea>
		</view>

		<!-- isSingleSel:是否设置单选(默认false多选) colors:设置颜色  remarkList：标签数组 @tagClick：标签点击 -->
		<cc-multipleBtn :isSingleSel="false" :colors="colors" :remarkList="remarkList"
			@tagClick="tagsClick"></cc-multipleBtn>

		<view class="btns" :style="{background: '#fbbd08'}">
			确认提交
		</view>
	</view>
</template>

<script>
	var app = getApp();
	export default {
		data() {
			return {
				colors: '#f37b1d',
				remarkList: [{
					name: '商品品质好'
				}, {
					name: '性价比高'
				}, {
					name: '态度好'
				}, {
					name: '价格合理'
				}, {
					name: '做工不错'
				}, {
					name: '物流时间长'
				}, {
					name: '价格优惠低'
				}, {
					name: '其他原因'
				}],
				data: ""
			};
		},

		components: {},
		props: {},

		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function() {},
		methods: {

			tagsClick(tagArr, arr) {
				// 选中数据有变化 重新赋值（可以兼容小程序）
				this.remarkList = arr;

				console.log("选中的标签  = ", JSON.stringify(tagArr));

				uni.showModal({
					title: '选中的标签',
					content: '选中的标签 = ' + JSON.stringify(tagArr)
				})

			}

		}
	};

	<
	style lang = "scss"
	scoped >
		page {
			background - color: #F5F5FA;
		}

		.cencal_order {
			padding: 20 upx 4 % ;
			background - color: #fff;
		}

		.remark {
			background - color: #F5F5F5;
			border - radius: 10 upx;
			height: 40 vw;
			padding: 20 upx;
			margin - top: 20 upx;

			textarea {
				font - size: 26 upx;
				color: #797979;
        }
    }

    .textarea_p {
        font-size: 24upx;
        color: # 797979;
			}

			.btns {
				width: 100 % ;
				height: 80 upx;
				line - height: 80 upx;
				font - size: 30 upx;
				color: #333;
        text-align: center;
        margin-top: 100upx;
        border-radius: 8upx;
    }
</style>