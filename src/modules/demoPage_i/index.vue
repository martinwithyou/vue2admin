<style scoped>  
.content_operation_day{  
    width:100%;
    /*height:650px;*/
    background-color:#ffffff; 
}  
#main_operation_day{   
    width:100%;
    /*height:650px;*/
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
            
            
            <el-table-column label="操作">
            <template scope="scope">
            <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
            size="small"
            type="success"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
    
            </el-table>           
        <!---------------------------------------------------------------->
      </el-tab-pane>
      <el-tab-pane label="消息中心">
      	<!----------------------------------------------------------------->
      	    <el-table
            :data="tableData_1"
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
            
            
            <el-table-column label="操作">
            <template scope="scope">
            <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
            size="small"
            type="info"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
            
            </el-table>
      	<!----------------------------------------------------------------->
      </el-tab-pane>
      <el-tab-pane label="角色管理">
      	<!----------------------------------------------------------------->
      	
      	    <el-table
            :data="tableData_1"
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
            
            
            <el-table-column label="操作">
            <template scope="scope">
            <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
            size="small"
            type="warning"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
            
            </el-table>
            
      	<!----------------------------------------------------------------->
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿">
      	<!----------------------------------------------------------------->
      	
      	    <el-table
            :data="tableData_1"
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
            
            
            <el-table-column label="操作">
            <template scope="scope">
            <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
            
            </el-table>
            
      	<!----------------------------------------------------------------->
      </el-tab-pane>
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
        tableData:"",
        tableData_1:""
      }
    },
  	mounted(){
  		this.$nextTick(function() {  
  			this.getInfo();
  			//this.getInfoByAJAX();
  		})
  	},
    methods: {
      handleEdit(index, row) {
      	
        console.log(index, row);
        
        //打印出每一列的信息
        //以及具体参数
        console.log(row.id);
        console.log(row.userId);
        console.log(row.title);
        this.getInfo();
        
      },
      handleDelete(index, row) {
      	
        console.log(index, row);
        this.getInfo();
        
      },
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
         
         this.tableData_1=response.data;
         
         console.log(this.tableData);
         
         console.log("表格数据重新渲染。。。");
         
        })
      },
      getInfoByAJAX(){
      	
      	$.ajax({
      		type:"get",
      		url:"https://jsonplaceholder.typicode.com/albums",
      		async:false,
      		success:function(res){
      			console.log(res);
      			this.tableData_1=res;
      		},
      		error:function(res){
      			console.log("ajax error");
      		}
      	});
      	
      	
      }
    }
  }
</script>