<style scoped>  
.content_operation_day{  
    width:100%;
    background-color:#ffffff; 
}  
#main_operation_day{   
    width:100%;
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
.el-table .info-row {
    background: #c9e5f5;
}
.el-table .positive-row {
    background: #e2f0e4;
}
.vue_location{
  	width:100%;
  	height:60px;
  	border-bottom:1px solid #f2f2f2;
  	padding-left:20px;
  	line-height:60px;
  	color:#666666;
  	background: #f2f2f2;
}
.select_bar{
	width:100%;
	height:150px;
	padding:20px;
}
.new_input_style{
	border-radius: 0px !important;
	width:230px !important;
}
</style>  
<template>
	<div> 

        <!---------------------------------------------------------------->
            <el-table
            height="600"
            border
            ref="testTable"       
            :data="tableData"
            :default-sort = "{prop: 'id', order: 'ascending'}"
            @selection-change="handleSelectionChange"   
            @row-click="handleclick"
            :row-class-name = "tableRowClassName"
            style="width: 100%">
    
            <el-table-column
              type="selection">
            </el-table-column>
            
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
            
            
            <!------------------------------------------------------------>
            <div align="right">
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
  </div>
</template>


<script>
//import 
  export default {
    data() {
    	
      return {
      	
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
  		
  			this.loadData(this.criteria, this.currentPage, this.pagesize);
  			
  		})
  	},
    methods: {

    //*********************************************************************************************************
                //从服务器读取数据
                loadData: function(criteria, pageNum, pageSize){   
                	//*****************************************
                	console.log(this.url);
                	//*****************************************
                    this.$http.get(this.url,{parameter:criteria, pageNum:pageNum, pageSize:pageSize}).then(function(res){
                    	
                    	console.log(res);
                    	
                        this.tableData = res.data;
                        
                        //this.totalCount = res.data.number;
                        
                        //console.log(this.totalCount);
                        
                        console.log(this.tableData[0]);
                        
                    },function(){
                    	
                        console.log('failed');
                        
                    });                 
                },
                
                //************************************************************************************************
                new_loadData: function(criteria,pageNum, pageSize){
                	this.$http.get({
                		method:'get',
                		url:this.url,
                		data:{parameter:criteria, pageNum:pageNum, pageSize:pageSize},
                		headers: {"X-Requested-With": "XMLHttpRequest"},
                        emulateJSON: true
                	}).then(function(res){
                       
                        this.tableData=res.data;
                        
                	},function(error){
                		
                		console.log(error);
                	})
                },
                //************************************************************************************************

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
                            this.$http.post(this.url,{"name":value},{emulateJSON: true}).then(function(res){
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