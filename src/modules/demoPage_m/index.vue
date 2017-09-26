<style scoped>
	.operation_bar{
		width:98%;
		height:300px;
		border:1px solid #d9d9d9;
		background-color: #ffffff;
		margin-top:5px;
		margin-bottom:10px;
		padding-top:0px;
		padding-left:0px;
		display:inline-block;
	}
	.top-notice-title{
  	width:350px;
  	height:64px;
  	color:rgba(10,18,32,0.64);
  	font-size:22px;
  	font-weight:400;
  	float:left;
  	padding-left:0px;
  	border:0px solid red;
  	line-height:64px;
   }
   .table_page{
   	width:100%;
   	margin-top:5px;
   	display:inline-block;
   }
   .input_form_name{
   	width:350px;
  	height:32px;
  	margin-bottom:10px;
   }
   .tip{
   	font-size:14px;
   	margin-right:20px;
   }
   .selelct_totle_bar{
   	width:95%;
   	height:200px;
   	border:1px solid #324057;
   	margin-top:10px;
   }
   .gust_basic_info{
   	width:100%;
   	height:50px;
   	line-height:50px;
   	border:0px solid #324057;
   }
   .totle_position{
   	float:left;
   	margin-right:20px;
   }
   .totle_devide{
   	padding-left:20px;
   }
   .gust_basic_info{
   	padding-left:20px;
   }
   .tip_active{
   	background-color: #666666;
   	color:#ffffff;
   }
   .tip{
   	padding-left:10px;
   	padding-right:10px;
   }
   .operation_bar{
   	border:0px;
   	background-color:#ffffff !important;
   	
   }
   .el-tabs__content{
   	/*background-color: #ffffff !important;*/
   }
</style>

<template>
  <div>
  
  <div class="top-notice-title" v-text="modules_title"></div>
  

  
  <div class="table_page">
  	   <!---------------------->
                        <div class="input_form_name">
  	                        <el-input v-model="the_input" placeholder="请输入报表名称"></el-input>
                        </div>
                	    <!---------------------------------->
                	    <div class="operation_bar">
                	    	<!--------------------------->
                	    	    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                                    <el-tab-pane label="选择字段" name="first">
                                    	<!-------------------------------->
                                    		<div class="totle_devide">
                                    			<span class="tip tip_active" >个人信息</span>
                                    			<span class="tip">借还款信息</span>
                                    			<span class="tip">信审信息</span>
                                    		</div>
                                    		
                                    		<div class="selelct_totle_bar">
                                    			
                                    			<div class="gust_basic_info">
                                    				<el-checkbox :indeterminate="isIndeterminate" class="totle_position" v-model="checkAll" @change="handleCheckAllChange" label="个人信息"></el-checkbox>
                                                    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                                                        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                                                    </el-checkbox-group>
                                    			</div>
                                    			
                                    			<div class="gust_basic_info">
                                    				<el-checkbox :indeterminate="job_isIndeterminate" class="totle_position" v-model="job_checkAll" @change="job_handleCheckAllChange" label="职业信息"></el-checkbox>
                                                    <el-checkbox-group v-model="checkedCities" @change="job_handleCheckedCitiesChange">
                                                        <el-checkbox v-for="job in job_cities" :label="job" :key="job">{{job}}</el-checkbox>
                                                    </el-checkbox-group>
                                    			</div>
                                    			
                                    		</div>
                                    		
                                    	<!-------------------------------->
                                    </el-tab-pane>
                                    <el-tab-pane label="筛选条件" name="second">
                                    	<!-------------------------------->

                                    	<!-------------------------------->
                                    </el-tab-pane>
                                </el-tabs>
                	    	<!--------------------------->
                	    </div>
                	    <!---------------------------------->
                	<!---------------------------------->
                	    <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                        
                        <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                        </el-table-column>
                        
                        <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                        </el-table-column>
                        
                        <el-table-column
                        prop="address"
                        label="地址">
                        </el-table-column>
                        
                        </el-table>
                	<!---------------------------------->
  	   <!---------------------->
  </div>

  
  

  </div>
</template>

<script>
  const basic_info_Options = ['客户名','手机号', '证件号','性别','地址','民族','紧急联系人'];
  const job_info_Options = ['工作单位名称','职位', '公司地址','薪资','工作年限','企业性质','职务','发薪方式','企业类型','员工人数','占股比例','月净利润'];
  export default {
    data() {
      return {
      	checkAll: true,
        checkedCities: [],
        cities: basic_info_Options,
        isIndeterminate: true,
        
        job_checkAll: true,
        job_checkedCities: [],
        job_cities: job_info_Options,
        job_isIndeterminate: true,
        
      	the_input:'',
      	activeName2:'first',
      	modules_title:"创建报表名称",
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },

    methods: {
      handleCheckAllChange(event) {
      	console.log(event.target.checked);
        this.checkedCities = event.target.checked ? basic_info_Options : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
      	console.log(value);
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      job_handleCheckAllChange(event) {
      	
      	console.log(event);
      	console.log(event.target);
      	console.log(event.target.checked);
      	
      	if(event.target.checked == true){
      		
      		this.job_checkedCities = job_info_Options;
      		
      	}else if(event.target.checked == false){
      		
      		this.job_checkedCities = [];
      	}
      	
//      this.job_checkedCities = event.target.checked ? job_info_Options : [];
//      
//      this.job_isIndeterminate = false;
      },
      job_handleCheckedCitiesChange(value) {
      	console.log(value);
        let job_checkedCount = value.length;
        
        console.log(value.length);
        
        this.job_checkAll = job_checkedCount === this.job_cities.length;
        this.job_isIndeterminate = job_checkedCount > 0 && job_checkedCount < this.job_cities.length;
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      onSubmit() {
          alert('submit!');
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>