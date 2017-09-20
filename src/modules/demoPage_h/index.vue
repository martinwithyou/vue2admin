<style scoped>  
.content_operation_day{  
    width:100%;
    height:650px;
    background-color:#ffffff; 
}  
#main_operation_day{   
    width:100%;
    height:650px;
    float:left;
    background-color:#ffffff;
    border:0px solid #008000;  
}  
</style>  
<template>
	<div>
		<el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 我的行程列表</span>
         
        <!---------------------------------------------------------------->
         <div class="content_operation_day"> 
	
            <el-table
            :data="tableData"
            height="630"
            border
            style="width: 100%">
    
            <el-table-column
            prop="id"
            label="ID"
            width="200">
            </el-table-column>
    
            <el-table-column
            prop="title"
            label="姓名"
            width="300">
            </el-table-column>
    
            <el-table-column
            prop="userId"
            label="用户ID">
            </el-table-column>
            
            </el-table>
  
        </div> 
        <!---------------------------------------------------------------->
      </el-tab-pane>
      <el-tab-pane label="消息中心">消息中心</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
   </el-tabs>
  </div>
</template>

<style>
  .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>

<script>
import echarts from 'echarts'  
import $ from 'jquery'

  export default {
    data() {
      return {
        tableData:""
      }
    },
  	mounted(){
  		this.$nextTick(function() {  
  			this.getInfo();
  			this.getInfoByAJAX();
  		})
  	},
    methods: {
      tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      },
      getInfo(){
    	this.$http.get('https://jsonplaceholder.typicode.com/albums').then(function(response){
    	
          this.tableData=response.data;
          console.log(this.tableData);
          
        })
      },
      getInfoByAJAX(){
      	
      	$.ajax({
      		type:"get",
      		url:"https://jsonplaceholder.typicode.com/albums",
      		async:false,
      		success:function(res){
      			console.log(res);
      		},
      		error:function(res){
      			console.log("ajax error");
      		}
      	});
      	
      	
      }
    }
  }
</script>