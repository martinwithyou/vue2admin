<style scoped>  
.vue_location{
  	width:100%;
  	height:30px;
  	border-bottom:1px solid #f2f2f2;
  	padding-left:20px;
  	line-height:30px;
  	color:#666666;
  	background: #f2f2f2;
  	font-size:14px !important;
  	float:left;
}
.part_title{
	width:100%;
	height:50px;
	line-height:50px;
	border:0px solid #3074BD;
	padding-left:20px;
	color:#1d8ec0;
	font-weight:600;
}
.part_title_new{
	width:100%;
	/*height:50px;*/
	line-height:50px;
	border:0px solid #3074BD;
	padding-left:20px;
	color:#1d8ec0;
	font-weight:600;
}
.new_input_style{
	border-radius: 0px !important;
	width:230px !important;
}
.new_input_style_long{
	border-radius: 0px !important;
	width:330px !important;
}
.part_boardcast{
	width:70%;
	height:200px;
	background-color:#ffffff;
	float:left;
	box-shadow: 0px 0px 3px #d9d9d9;
}
.part_boardcast_right_special{
	width:28%;
	height:740px;
	background-color:#ffffff;
	float:right;
	box-shadow: 0px 0px 3px #d9d9d9;
	margin-right:5px;
}
.part_boardcast_title{
	width:100%;
	height:50px;
	border-bottom:0px solid #3074BD;
	line-height:50px;
	padding-left:20px;
	font-size:14px !important;
	float:left;
	font-weight:700;
}
.part_boardcast_title_tip{
	width:100%;
	height:50px;
	border-bottom:2px solid #f2f2f2;
	line-height:50px;
	padding-left:20px;
	font-size:14px !important;
	float:left;
	font-weight:700;
}
.part_boardcast_title_welcome{
	width:50%;
	height:50px;
	float:left;
	border-bottom:0px solid #3074BD;
	line-height:50px;
	padding-left:20px;
	font-size:14px !important;
}
.part_boardcast_left{
	height:100%;
	width:40%;
	/*border:1px solid #0082E6;*/
	float:left;
}
.part_boardcast_right{
	height:100%;
	width:40%;
	/*border:1px solid #0082E6;*/
	float:right;
}
.part_boardcast_left_a{
	width:65%;
	height:100%;
	float:left;
	background-color: #58B7FF;
	line-height:150px;
	text-align:center;
	color:#ffffff;
	font-size: 16px;
	font-weight: 700;
}
.part_boardcast_left_b{
	width:35%;
	height:100%;
	float:left;
	background-color: #20A0FF;
	line-height:150px;
	text-align:center;
	color:#ffffff;
	font-size: 16px;
	font-weight: 700;
}
.part_boardcast_left_c{
	width:65%;
	height:100%;
	float:left;
	background-color: #1D8CE0;
	line-height:150px;
	text-align:center;
	color:#ffffff;
	font-size: 16px;
	font-weight: 700;
}
.part_boardcast_left_d{
	width:35%;
	height:100%;
	float:left;
	background-color: #0000ff;
	line-height:150px;
	text-align:center;
	color:#ffffff;
	font-size: 16px;
	font-weight: 700;
}
.part_boardcast_middle{
	background: #f2f2f2;
	height:150px;
	width:100%;
	float:left;
	margin-top:20px;
}
.part_boardcast_bottom{
	background: #ffffff;
	height:350px;
	width:100%;
	float:left;
	margin-top:20px;
	margin-bottom:20px;
	box-shadow: 0px 0px 3px #d9d9d9;
}
.part_boardcast_bottom_half{
	background: #ffffff;
	height:170px;
	width:100%;
}
.part_boardcast_title_tip_waiting{
	background: #ffffff;
	height:118px;
	width:100%;
	float:left;
	overflow-y: auto;
}
</style>  
<template>
	<div> 
		<!-- vue path start--------------------------->
		<div class="vue_location" v-text="location"></div>
		<!---vue path end-------------------------->
        <div class="part_boardcast">
        	
        	<div class="part_boardcast_title" v-text="boardcast_title_content"></div>
        	<div class="part_boardcast_title_welcome" v-text="boardcast_title_content_welcome"></div>
        	<div class="part_boardcast_title_welcome" v-text="boardcast_title_content_data_time"></div>
        	<div class="part_boardcast_title_welcome">
        		<el-row>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple" v-text="current_role">
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple-light" v-text="current_name">
                    	</div>
                    </el-col>
                    <el-col :span="8">
                    	<div class="grid-content bg-purple" v-text="current_jobNumber">
                    	</div>
                    </el-col>
                </el-row>
        	</div>
 <!-------------------------------------------------------------------------------------------->
        <div class="part_boardcast_middle">
        	<div class="part_boardcast_left">
        		<div class="part_boardcast_left_a">
        			{{waiting_task}}
        		</div>
        		<div class="part_boardcast_left_b">
        			{{20}}
        		</div>
        	</div>
        	<div class="part_boardcast_right">
        		<div class="part_boardcast_left_c">
        			{{deleting_task}}
        		</div>
        		<div class="part_boardcast_left_d">
        			{{20}}
        		</div>
        	</div>
        </div>
<!--------------------------------------------------------------------------------------------> 

<!-------------------------------------------------------------------------------------------->
        <div class="part_boardcast_bottom">
        	<div class="part_boardcast_bottom_half">
        		<div class="part_boardcast_title_tip">{{ waiting_task }}</div>
        		<div class="part_boardcast_title_tip_waiting">
        			<c-table></c-table>
        		</div>
        	</div>
        	<div class="part_boardcast_bottom_half">
        		<div class="part_boardcast_title_tip">{{ deleting_task }}</div>
        		<div class="part_boardcast_title_tip_waiting">
        			<c-table></c-table>
        		</div>
        	</div>
        </div>
<!-------------------------------------------------------------------------------------------->
        	
        </div>

        <div class="part_boardcast_right_special">
        	<div class="part_boardcast_title_tip" v-text="tip"></div>
        </div>
        <!------------------------------------------------------------>
  </div>
</template>


<script>
  import CTable from 'modules/page1/components/todo_component/table'
  export default {
  	components:{
  		CTable
  	},
    data() {
    	
      return {
    
        location:"您的位置    >  我的工作台   >  待办事项",
        
        boardcast_title_content:"通知",
        
        boardcast_title_content_welcome:'您好，欢迎使用雪橙金服企业进件管理系统',
        //*******************************************************
        boardcast_title_content_data_time:'今天是2017年10月05日， 星期四',
        
        current_role:"当前角色：审批员",
        
        current_name:"姓名：方伟",
        
        current_jobNumber:"工号：1234568",
        
        waiting_task:"待签收任务",
        
        deleting_task:"待处理任务",
        
        tip:"便签"
        //*******************************************************
        
      }
      
    },
  	mounted(){
  		
  		this.$nextTick(function() {  
  		
  			
  		})
  	},
    methods: {

    //*********************************************************************************************************
      submitForm() {
     
      },
      resetForm() {
        
      },         

    //*********************************************************************************************************
      

    }
  }
</script>