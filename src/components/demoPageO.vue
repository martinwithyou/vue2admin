<style>
  .el-table .info-row {
    background: #c9e5f5;
  }
  .el-table .positive-row {
    background: #e2f0e4;
  }
  .gust_basic_info{
   	padding-left:20px;
   	height:36px;
   }
   .gust_basic_info_job{
   	padding-left:20px;
   	height:36px;
   }
   .totle_select{
    display:inline-block;
    margin-left:50px;
   }
   .background_for_more_select{
   	background-color: #ffffff;
   	padding-top:20px;
   }
</style>
<template>
	<div class="background_for_more_select">
              <!---------------------------------------------------------->
              <div class="gust_basic_info">
              	  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                  <el-checkbox-group v-model="checkedCities" class="totle_select" @change="handleCheckedCitiesChange">
                      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                  </el-checkbox-group>
              </div> 
              <!---------------------------------------------------------->
              
              <!---------------------------------------------------------->
              <div class="gust_basic_info_job">
              	  <el-checkbox :indeterminate="job_isIndeterminate" v-model="job_checkAll" @change="job_handleCheckAllChange">全选</el-checkbox>
                  <el-checkbox-group v-model="job_checkedCities" class="totle_select" @change="job_handleCheckedCitiesChange">
                      <el-checkbox v-for="job in job_cities" :label="job" :key="job">{{job}}</el-checkbox>
                  </el-checkbox-group>
              </div> 
              <!---------------------------------------------------------->
              
              <!---------------------------------------------------------->
              <div class="gust_basic_info">
              	  <el-checkbox :indeterminate="bankCard_isIndeterminate" v-model="bankCard_checkAll" @change="bankCard_handleCheckAllChange">全选</el-checkbox>
                  <el-checkbox-group v-model="bankCard_checkedCities" class="totle_select" @change="bankCard_handleCheckedCitiesChange">
                      <el-checkbox v-for="bankCard in bankCard_cities" :label="bankCard" :key="bankCard">{{bankCard}}</el-checkbox>
                  </el-checkbox-group>
              </div> 
              <!---------------------------------------------------------->
              
              <!---------------------------------------------------------->
              <div class="gust_basic_info">
              	  <el-checkbox :indeterminate="apply_isIndeterminate" v-model="apply_checkAll" @change="apply_handleCheckAllChange">全选</el-checkbox>
                  <el-checkbox-group v-model="apply_checkedCities" class="totle_select" @change="apply_handleCheckedCitiesChange">
                      <el-checkbox v-for="apply in apply_cities" :label="apply" :key="apply">{{apply}}</el-checkbox>
                  </el-checkbox-group>
              </div> 
              <!---------------------------------------------------------->
              
              <!---------------------------------------------------------->
              <div class="gust_basic_info" style="border:2px solid red;">
              	  <el-button type="primary" size="small" @click="submitForm">确定</el-button>
              	  <el-button size="small" @click="reSet">重置</el-button> 
              </div>
              <!---------------------------------------------------------->
  </div>
</template>
<script>
  const cityOptions = ['客户名', '手机号', '证件号', '性别','地址', '民族', '紧急联系人'];
  
  const job_info_Options = ['工作单位名称','职位', '公司地址','薪资','工作年限','企业性质','职务','发薪方式','企业类型','员工人数','占股比例','月净利润'];
  
  const bankCard_info_Options = ['开户银行', '银行卡号','预留手机号','开户支行','开户地区','信用卡额度','银行卡类别'];
  
  const apply_info_Options = ['申请时间', '申请编号','民族' ,'紧急联系人','渠道来源','发生方式','借款用途','产品类别','申请金额','期限'];
  
  export default {
    data() {
      return {
        checkAll: true,
        checkedCities: [],
        cities: cityOptions,
        isIndeterminate: true,
        
        job_checkAll: true,
        job_checkedCities: [],
        job_cities: job_info_Options,
        job_isIndeterminate: true,
        
        bankCard_checkAll: true,
        bankCard_checkedCities: [],
        bankCard_cities: bankCard_info_Options,
        bankCard_isIndeterminate: true,
        
        apply_checkAll: true,
        apply_checkedCities: [],
        apply_cities: apply_info_Options,
        apply_isIndeterminate: true
      }
    },
    methods: {
    	submitForm(){
    		var obj={
    			checkedCities:" ",
    			job_checkedCities:"",
    			bankCard_checkedCities:"",
    			apply_checkedCities:""
    		}
    		
    		obj.checkedCities=this.checkedCities;
    		obj.job_checkedCities=this.job_checkedCities;
    		obj.bankCard_checkedCities=this.bankCard_checkedCities;
    		obj.apply_checkedCities=this.apply_checkedCities;
    		
    		console.log(obj);
    	},
    	reSet(){
    		var obj={
    			checkedCities:[],
    			job_checkedCities:[],
    			bankCard_checkedCities:[],
    			apply_checkedCities:[]
    		}
    		
    		this.checkedCities=[];
    		this.job_checkedCities=obj.job_checkedCities;
    		this.bankCard_checkedCities=obj.bankCard_checkedCities;
    		this.apply_checkedCities=obj.apply_checkedCities;
    		
    		console.log(obj);
    	},
    	apply_handleCheckAllChange(event) {
        this.apply_checkedCities = event.target.checked ? apply_info_Options : [];
        this.apply_isIndeterminate = false;
      },
      apply_handleCheckedCitiesChange(value) {
        let apply_checkedCount = value.length;
        this.apply_checkAll = apply_checkedCount === this.apply_cities.length;
        this.apply_isIndeterminate = apply_checkedCount > 0 && apply_checkedCount < this.apply_cities.length;
      },
      
    	bankCard_handleCheckAllChange(event) {
        this.bankCard_checkedCities = event.target.checked ? bankCard_info_Options : [];
        this.bankCard_isIndeterminate = false;
      },
      bankCard_handleCheckedCitiesChange(value) {
        let bankCard_checkedCount = value.length;
        this.bankCard_checkAll = bankCard_checkedCount === this.bankCard_cities.length;
        this.bankCard_isIndeterminate = bankCard_checkedCount > 0 && bankCard_checkedCount < this.bankCard_cities.length;
      },
    	job_handleCheckAllChange(event) {
        this.job_checkedCities = event.target.checked ? job_info_Options : [];
        this.job_isIndeterminate = false;
      },
      job_handleCheckedCitiesChange(value) {
        let job_checkedCount = value.length;
        this.job_checkAll = job_checkedCount === this.job_cities.length;
        this.job_isIndeterminate = job_checkedCount > 0 && job_checkedCount < this.job_cities.length;
      },
      handleCheckAllChange(event) {
      	console.log(event.target.checked);
        this.checkedCities = event.target.checked ? cityOptions : [];
        console.log(cityOptions);
        console.log([]);
        console.log(this.checkedCities);
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }       
    }
  }
</script>