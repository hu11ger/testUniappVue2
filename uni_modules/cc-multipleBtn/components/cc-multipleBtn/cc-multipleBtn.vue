<template>
	<view class="tag_box">
		<view class="tag_list" v-for="(item, index) in remarkList" :key="index" @tap="setCurrent(index)">
			<view class="tag_listView" :tag="('20' + index)" :key="('20' + index)"
				:style="'color:' + (item.current == true ?'#fff':'') + ';background:' + (item.current == true ? colors:'') + ';border:' + (item.current == true ? 'none':'')">
				{{item.name}}
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		mixins: [{
			methods: {
				setData: function(obj, callback) {
					let that = this;
					const handleData = (tepData, tepKey, afterKey) => {
						tepKey = tepKey.split('.');
						tepKey.forEach(item => {
							if (tepData[item] === null || tepData[item] === undefined) {
								let reg = /^[0-9]+$/;
								tepData[item] = reg.test(afterKey) ? [] : {};
								tepData = tepData[item];
							} else {
								tepData = tepData[item];
							}
						});
						return tepData;
					};
					const isFn = function(value) {
						return typeof value == 'function' || false;
					};
					Object.keys(obj).forEach(function(key) {
						let val = obj[key];
						key = key.replace(/\]/g, '').replace(/\[/g, '.');
						let front, after;
						let index_after = key.lastIndexOf('.');
						if (index_after != -1) {
							after = key.slice(index_after + 1);
							front = handleData(that, key.slice(0, index_after), after);
						} else {
							after = key;
							front = that;
						}
						if (front.$data && front.$data[after] === undefined) {
							Object.defineProperty(front, after, {
								get() {
									return front.$data[after];
								},
								set(newValue) {
									front.$data[after] = newValue;
									that.$forceUpdate();
								},
								enumerable: true,
								configurable: true
							});
							front[after] = val;
						} else {
							that.$set(front, after, val);
						}
					});
					isFn(callback) && this.$nextTick(callback);
				}
			}
		}],

		data() {
			return {
				// 上次选中序列
				lastIndex: 0
			};
		},


		props: {
			// 是否单选
			isSingleSel: {
				type: Boolean
			},
			colors: {
				type: String
			},
			remarkList: {
				type: Array,
				default () {
					return []
				}

			}
		},
		methods: {

			setCurrent(index) {
				// 单选 清除所有选中
				if (this.isSingleSel) {
					if (this.lastIndex != index) {

						let remark = this.remarkList[this.lastIndex];
						remark.current = false;
					}
				}
				
				let remark = this.remarkList[index];
				remark.current = !remark.current
				this.lastIndex = index;

				let data = 'remarkList[' + index + ']';
				this.setData({
					[data]: remark
				});


				let selArr = [];
				this.remarkList.forEach(e => {
					if (e.current == true) {
						selArr.push(e);
					}
				});

				// 传值选中的Arr remarkList
				this.$emit("tagClick", selArr, this.remarkList);
			}

		}
	};
</script>

<style scoped lang="scss">
	.tag_box {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 40upx;
	}

	.tag_box::after {
		content: '';
		width: 30%;
	}

	.tag_list {
		max-width: 24%;
		min-width: 24%;
		text-align: center;
		margin-bottom: 30upx;
	}

	.tag_listView {
		height: 60upx;
		line-height: 60upx;
		border-radius: 30upx;
		border: 1upx solid #ddd;
		font-size: 22upx;
		color: #303030;
	}
</style>