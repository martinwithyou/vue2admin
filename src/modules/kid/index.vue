<template>
  <div class="parent">
    <p v-if="pocketMoney < 300">儿子: {{ pocketMoney }}太少了，不够 </p>
    <p v-else>儿子: 谢谢老爸！</p>
    <button v-if="pocketMoney > 300" @click="repay">点击有惊喜</button>
  </div>
</template>

<script>
	export default {
		name:'kid',
		props:{
			money: Number
		},
		data(){
			return{
				
			}
		},
		computed(){
			pocketmonent () {
				return this.money;
			}
		},
		methods:{
			
    initChart() {}
  
		}
	}
</script>
