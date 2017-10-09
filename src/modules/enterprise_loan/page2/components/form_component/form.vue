<style scoped>  

.select_bar{
	width:100%;
	margin-top:20px;
}
.new_input_style{
	border-radius: 0px !important;
	width:230px !important;
}
</style>  
<template>
	<div> 
<!----------------------------->
<div class="select_bar">
	
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
	
<el-row>
  <el-col :span="6">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="流程名称" prop="name">
            <el-input v-model="ruleForm.name" class="new_input_style"></el-input>
        </el-form-item>
    </div>
  </el-col>
  <el-col :span="6">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="企业名称" prop="name">
            <el-input v-model="ruleForm.name" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="6">
  	<div class="grid-content bg-purple">
  		<el-form-item label="阶段名称" prop="name">
            <el-input v-model="ruleForm.name" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="6">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="申请人" prop="name">
            <el-input v-model="ruleForm.name" class="new_input_style"></el-input>
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
  	<div class="grid-content bg-purple">
  		
  	</div>
  </el-col>
  <el-col :span="6">
  	<div class="grid-content bg-purple">
  		
  	</div>
  </el-col>
  <el-col :span="6">
  	<div class="grid-content bg-purple" style="text-align:right;">
  		<el-button type="success" v-text="task"></el-button>
        <el-button type="info" v-text="search"></el-button>
  	</div>
  </el-col>
</el-row>


</el-form>

</div>
<!----------------------------->
  </div>
</template>


<script>
//import 
  export default {
    data() {
    	
      return {

//*****************************************************************************
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
            { required: true, message: '请选择', trigger: 'change' }
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
        },
        
        value6:'',
        details:'查看',
        change:'修改',
        delete_:'删除',
        search:'搜索',
        task:'任务分配'
//*****************************************************************************
      }
      
    },
  	mounted(){
  		
  		this.$nextTick(function() {  
  		
  			this.loadData(this.criteria, this.currentPage, this.pagesize);
  			
  		})
  	},
    methods: {

    //*********************************************************************************************************
   

    //*********************************************************************************************************
      
    }
  }
</script>