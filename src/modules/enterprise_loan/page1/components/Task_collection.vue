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
.part_boardcast{
	width:99%;
	height:150px;
	background-color:#ffffff;
	float:left;
	margin-bottom:20px;
	box-shadow: 0px 0px 3px #d9d9d9;
	padding-top:20px;
}

.part_boardcast_bottom{
	width:99%;
	height:350px;
	background-color:#ffffff;
	float:left;
	margin-bottom:20px;
	box-shadow: 0px 0px 3px #d9d9d9;
}
.position_right{
	text-align: right;
}
</style>  
<template>
	<div> 
		<!----------------------------->
		<div class="vue_location" v-text="location"></div>
		<!----------------------------->
		
		<!------------------------------>
		<div class="part_boardcast">
			
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  
            <el-row>
                <el-col :span="6">
                	<div class="grid-content bg-purple">
                		<el-form-item label="企业名称" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="6">
                	<div class="grid-content bg-purple-light">
                		<el-form-item label="企业证件号码" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="6">
                	<div class="grid-content bg-purple">
                		<el-form-item label="流程状态" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="6">
                	<div class="grid-content bg-purple-light">
                		<el-form-item label="申请人" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                	</div>
                </el-col>
            </el-row>
       
            <el-row>
                <el-col :span="6">
                	<div class="grid-content bg-purple">
                		<el-form-item label="请选择日期" prop="name">
                		<el-date-picker
                        v-model="value6"
                        type="daterange"
                        placeholder="选择日期范围">
                        </el-date-picker>
                        </el-form-item>
                	</div>
                </el-col>
                <el-col :span="6">
                	<div class="grid-content bg-purple-light">
                		
                	</div>
                </el-col>
                <el-col :span="6">
                	<div class="grid-content bg-purple position_right">
                		
                	</div>
                </el-col>
                <el-col :span="6">
                	<div class="grid-content bg-purple-light position_right">
                		<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                		<el-button type="success"  @click="resetForm('ruleForm')">签收</el-button>
                	</div>
                </el-col>
            </el-row>
        <!--<el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>-->
        </el-form>
        
        
		</div>
		<!------------------------------>
		
		<!------------------------------>
		<div class="part_boardcast_bottom">
			<c-table></c-table>
		</div>
		<!------------------------------>
		
  </div>
</template>


<script>
  import $ from 'jquery'
  import CTable from 'modules/page1/components/task_component/table' 
  export default {
  	components:{
  		CTable
  	},
    data() {

      return {
        
        location:"您的位置    >  我的工作台    >  任务领取",
//************************************************************************
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          value6:''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
//************************************************************************
      }
      
    },
  	mounted(){
  		
  		this.$nextTick(function() {  
  		
  			this.getAjax();
  			
  		})
  	},
    methods: {

    //*********************************************************************************************************
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    resetForm(formName) {
        this.$refs[formName].resetFields();
    },
    getAjax(){
    	$.ajax({
    		type:"get",
    		url:"http://192.168.1.110:8080/test",
    		async:true,
    		success:function(res){
    			alert(res);
    			console.log(res);
    		},
    		error:function(res){
    			console.log(res);
    		}
    	});
    }
   }
  }
</script>