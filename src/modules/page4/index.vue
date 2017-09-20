<style scoped>
  @import "../../css/vars.css"; /* 引入预定义变量 */
  .post-css-test{
    transform: rotateY(360deg);
    box-shadow: 0 0 3px 5px rgba(222, 222, 222, .3);
    display: flex;
    color: var(--color-main);
  }
  .echart_demo{
  	width:100%;
  	height:800px;
  	border:0px solid #3074BD;
  }
</style>
<template>
  <div class="height100">
    <div class="home-page-center single-page-center base">
      <div class="home-section-wrap page-center-wrap-bottom">
        <div class="home-section-env">
        </div>
        
        <!----------------------------------------------->
         <div class="echart_demo" id="echart_demo_new"></div>
        <!------------------------------------------------>
      </div>
    </div>
  </div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		data(){
			return{
				chart:''
			}
		},
		mounted(){
			this.initChart()
		},
		methods:{
			
    initChart() {
      this.chart = echarts.init(document.getElementById("echart_demo_new"))

      this.chart.setOption({
    backgroundColor: '#2c343c',

    title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:274, name:'联盟广告'},
                {value:235, name:'视频广告'},
                {value:400, name:'搜索引擎'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
})
    }
  
		}
	}
</script>
