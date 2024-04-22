<template>
	
	<view style="width: 100%; height:400px">
		echarts测试
		<uni-ec-canvas class="uni-ec-canvas" id="line-chart" canvas-id="line-chart" :ec="ec" ref="canvas" />
	</view>
</template>


<script>
// 此处将路径替换为你放置该组件的路径  
import uniEcCanvas from '../../../components/uni-ec-canvas/uni-ec-canvas.vue'
import * as echarts from "../../../components/uni-ec-canvas/echarts.js"

export default {
	components: {
		uniEcCanvas
	},
	data() {
		return {
			ec: {
				tooltip: {
					trigger: "item",
					position: "top",
				},
				lazyLoad: false,
				options: {
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					yAxis: {
						type: 'value',
					},
					series: [
						{
							data: [820, 932, 901, 934, 1290, 1330, 1320],
							type: 'line',
							smooth: true
						},
					],
				} //echart 配置项
			}
		}
	},

}

</script>

<style lang="scss" scoped></style>