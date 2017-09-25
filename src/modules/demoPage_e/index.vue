<style scoped>
	.operation_bar{
		width:98%;
		height:200px;
		border:0px solid #0099CC;
		background-color: #ffffff;
		margin-top:5px;
		margin-bottom:10px;
		padding-top:20px;
		padding-left:20px;
	}
</style>

<template>
  <div>
  
  <div class="operation_bar">
  	<!------------------------------------------------------->
  	  	
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    	
  <el-form-item label="审批人">
    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
  </el-form-item>
  
  <el-form-item label="活动区域">
    <el-select v-model="formInline.region" placeholder="活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  
  <el-form-item label="开始时间">
  	<el-date-picker
      v-model="formInline.value1"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
  </el-form-item>
  
  <el-form-item label="结束时间">
  	<el-date-picker
      v-model="formInline.value2"
      type="datetime"
      placeholder="选择日期时间"
      align="right"
      :picker-options="pickerOptions1">
    </el-date-picker>
  </el-form-item>
 
  <el-form-item label="活动性质">
    <el-checkbox-group v-model="formInline.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
    
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
  
</el-form>
  	<!------------------------------------------------------->
  </div>
  
  
  <!----------------------------------------------------->
  <!------------------------------------------------------>
  
  <el-table
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 100%">
    
    <el-table-column
      type="index"
      label="ID"
      width="80">
    </el-table-column>
    
    <el-table-column
      property="date"
      label="日期"
      width="120">
    </el-table-column>
    
    <el-table-column
      property="name"
      label="姓名"
      width="120">
    </el-table-column>
    
    <el-table-column
      property="address"
      label="地址">
    </el-table-column>
    
  </el-table>
  
  <!---------------------------------------------------------->
  <!---------------------------------------------------------->
  
  
  <div style="margin-top: 20px">
    <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
    <el-button @click="setCurrent()">取消选择</el-button>
  </div>
  
  </div>
</template>

<script>
  export default {
    data() {
      return {
      	formInline: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
       },
      	pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        formInline: {
            user: '',
            region: ''
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentRow: null
      }
    },

    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      onSubmit() {
          alert('submit!');
      }
    }
  }
</script>