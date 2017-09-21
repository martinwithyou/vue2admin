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
.el-select .el-input {
    width: 110px;
}
.el-table .info-row {
    background: #c9e5f5;
}   

#top {
    background:#20A0FF;
    padding:5px;
    overflow:hidden;
}
</style>  
<template>
	<div>
		<el-tabs type="border-card">
        <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 我的行程列表</span>
         
         
        <!----------------------------->
        <div id="top">          
            <span style="float:right;"> 
                <el-button type="text" @click="add" style="color:white">添加</el-button>  
                <el-button type="text" @click="deletenames" style="color:white">批量删除</el-button>        
            </span>                     
        </div>  
        <!----------------------------->
        <br/>

        <div style="margin-top:15px">
           <el-input placeholder="请输入内容" v-model="criteria" style="padding-bottom:10px;">
              <el-select v-model="select" slot="prepend" placeholder="请选择">
                 <el-option label="id" value="1"></el-option>
                 <el-option label="name" value="2"></el-option>
              </el-select>
              <el-button slot="append" icon="search" v-on:click="search"></el-button>
          </el-input>  
        </div>
        <!---------------------------------------------------------------->
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
            type="success"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
    
            </el-table> 
            
            
            <!------------------------------------------------------------>
            <div align="center">
              <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[10, 20, 30, 40]"
                  :page-size="pagesize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="totalCount">
              </el-pagination>
            </div>
            <!------------------------------------------------------------>
        <!---------------------------------------------------------------->
      </el-tab-pane>
      <el-tab-pane label="消息中心">
      	<!----------------------------------------------------------------->
     
      	<!----------------------------------------------------------------->
      </el-tab-pane>
      <el-tab-pane label="角色管理">
      	<!----------------------------------------------------------------->
      	

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
        tableData_1:"",
         //表格当前页数据
        tableData: [],

        //多选数组
          multipleSelection: [],

                //请求的URL
                url:'https://jsonplaceholder.typicode.com/albums',

                //搜索条件
                criteria: '',

                //下拉菜单选项
                select: '',

                //默认每页数据量
                pagesize: 10,

                //默认高亮行数据id
                highlightId: -1,

                //当前页码
                currentPage: 1,

                //查询的页码
                start: 1,

                //默认数据总数
                totalCount: 1000,
      }
    },
  	mounted(){
  		this.$nextTick(function() {  
  			this.getInfo();
  			//this.getInfoByAJAX();
  			this.loadData(this.criteria, this.currentPage, this.pagesize);
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
      	
      	
      },
      
    //*********************************************************************************************************
                //从服务器读取数据
                loadData: function(criteria, pageNum, pageSize){                    
                    this.$http.get(this.url,{parameter:criteria, pageNum:pageNum, pageSize:pageSize}).then(function(res){
                        this.tableData = res.data.pagestudentdata;
                        this.totalCount = res.data.number;
                    },function(){
                        console.log('failed');
                    });                 
                },

                //多选响应
                handleSelectionChange: function(val) {
                    this.multipleSelection = val;
                },

                //点击行响应
                handleclick: function(row, event, column){
                    this.highlightId = row.id;
                },

                //编辑
                handleEdit: function(index, row) {
                    this.$prompt('请输入新名称', '提示', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                        }).then(({ value }) => {
                            if(value==''||value==null)
                                return;
                            this.$http.post('newstu/update',{"id":row.id,"name":value},{emulateJSON: true}).then(function(res){
                                this.loadData(this.criteria, this.currentPage, this.pagesize);                              
                            },function(){
                                console.log('failed');
                            });
                        }).catch(() => {

                    });
                },


                //单行删除
                handleDelete: function(index, row) {
                    var array = [];
                    array.push(row.id);
                    this.$http.post('newstu/delete',{"array":array},{emulateJSON: true}).then(function(res){
                        this.loadData(this.criteria, this.currentPage, this.pagesize);
                    },function(){
                        console.log('failed');
                    });
                },

                //搜索
                search: function(){
                    this.loadData(this.criteria, this.currentPage, this.pagesize);
                },

                //添加
                add: function(){
                        this.$prompt('请输入名称', '提示', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                        }).then(({ value }) => {
                            if(value==''||value==null)
                                return;
                            this.$http.post('newstu/add',{"name":value},{emulateJSON: true}).then(function(res){
                                this.loadData(this.criteria, this.currentPage, this.pagesize);
                            },function(){
                                console.log('failed');
                            });
                        }).catch(() => {

                    });

                },

                //多项删除
                deletenames: function(){
                    if(this.multipleSelection.length==0)
                        return;
                    var array = [];
                    this.multipleSelection.forEach((item) => {
                        array.push(item.id);
                    })
                    this.$http.post('newstu/delete',{"array":array},{emulateJSON: true}).then(function(res){
                        this.loadData(this.criteria, this.currentPage, this.pagesize);
                    },function(){
                        console.log('failed');
                    });
                },

                //改变当前点击的行的class，高亮当前行
                tableRowClassName: function(row, index){
                   if(row.id == this.highlightId)
                   {
                      return 'info-row';
                   }
                },

                //每页显示数据量变更
                handleSizeChange: function(val) {
                    this.pagesize = val;
                    this.loadData(this.criteria, this.currentPage, this.pagesize);
                },

                //页码变更
                handleCurrentChange: function(val) {
                    this.currentPage = val;
                    this.loadData(this.criteria, this.currentPage, this.pagesize);
                },        

    //*********************************************************************************************************
      
    }
  }
</script>