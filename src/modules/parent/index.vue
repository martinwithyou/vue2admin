<template>
  <div class="height100">
    <div class="home-page-center single-page-center base">
      <div class="home-section-wrap page-center-wrap-bottom">
        <div class="home-section-env">
        </div>
        
        <!----------------------------------------------->
         <div class="echart_demo" id="echart_demo"></div>
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
				
			}
		},
		mounted(){
			this.initChart()
		},
		methods:{
			
    initChart() {}
  
		}
	}
</script>
