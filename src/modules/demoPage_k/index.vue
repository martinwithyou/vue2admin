<style scoped>
	.operation_bar{
		width:98%;
		height:200px;
		border:2px solid #0099CC;
		background-color: #ffffff;
		margin-top:5px;
		margin-bottom:10px;
		padding-top:20px;
		padding-left:20px;
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
</style>

<template>
  <div>
  
  <div class="top-notice-title" v-text="modules_title"></div>
  
  
  <div class="table_page">
  	   <!---------------------->
  	    <el-tabs type="border-card">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="数据预览" name="first">
                	<!---------------------------------->
                	    <div class="operation_bar"></div>
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
                </el-tab-pane>
                <el-tab-pane label="关联概况" name="second">
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
                </el-tab-pane>
                <el-tab-pane label="更新记录" name="third">
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
                </el-tab-pane>
                <el-tab-pane label="字段设置" name="fourth">
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
                </el-tab-pane>
            </el-tabs>
        </el-tabs>
  	   <!---------------------->
  </div>

  
  

  </div>
</template>

<script>
  export default {
    data() {
      return {
      	activeName: 'first',
      	modules_title:"网站订单分析_K",
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
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>