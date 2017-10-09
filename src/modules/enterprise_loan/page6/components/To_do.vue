<style scoped>  
.vue_location{
  	width:100%;
  	height:60px;
  	border-bottom:1px solid #f2f2f2;
  	padding-left:20px;
  	line-height:60px;
  	color:#666666;
  	background: #f2f2f2;
}
.part_title{
	width:100%;
	height:50px;
	line-height:50px;
	border:0px solid #3074BD;
	padding-left:20px;
	color:#1d8ec0;
	font-weight:600;
}
.part_title_new{
	width:100%;
	/*height:50px;*/
	line-height:50px;
	border:0px solid #3074BD;
	padding-left:20px;
	color:#1d8ec0;
	font-weight:600;
}
.new_input_style{
	border-radius: 0px !important;
	width:230px !important;
}
.new_input_style_long{
	border-radius: 0px !important;
	width:330px !important;
}
</style>  
<template>
	<div> 
		<!-- vue path start--------------------------->
		<div class="vue_location" v-text="location"></div>
		<!---vue path end-------------------------->
        
<!--------------表单录入---------------------------------------------->
<div class="part_title" v-text="basic_info"></div>
        
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

<!--------------------表单第一行开始---------------------------->
<el-row>
	
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="主体企业" prop="region">
         <el-select v-model="ruleForm.region" placeholder="请选择">
            <el-option label="是" value="true"></el-option>
            <el-option label="否" value="false"></el-option>
         </el-select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="主体企业" prop="name">
            <el-input v-model="ruleForm.name" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="主体企业证件号" prop="name">
            <el-input v-model="ruleForm.name" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  
</el-row>
<!-------------表单第二行开始--------------------------->
<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="企业名称" prop="region">
         <el-select v-model="ruleForm.region" placeholder="请选择">
            <el-option label="是" value="true"></el-option>
            <el-option label="否" value="false"></el-option>
         </el-select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="企业证件类型" prop="region">
         <el-select v-model="ruleForm.region" placeholder="请选择">
            <el-option label="社会信用代码" value="true"></el-option>
            <el-option label="组织机构代码" value="false"></el-option>
         </el-select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="社会信用代码" prop="name">
            <el-input v-model="ruleForm.name" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
</el-row>

<!----------------表单第三行开始------------------------------------->

<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  	    <el-form-item label="法人名称" prop="name">
            <el-input v-model="ruleForm.name" class="new_input_style"></el-input>
        </el-form-item>
    </div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="法人证件号码" prop="name">
            <el-input v-model="ruleForm.name" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="法人手机号码" prop="name">
            <el-input v-model="ruleForm.name" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
</el-row>


<el-row>
  <el-col :span="12">
  	<div class="grid-content bg-purple">
  		<el-form-item label="企业经营地址" prop="name">
            <el-input v-model="ruleForm.name" class="new_input_style_long"></el-input>
        </el-form-item>
  	</div>
  </el-col>
  <el-col :span="12">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="法人居住地址" prop="name">
            <el-input v-model="ruleForm.name" class="new_input_style_long"></el-input>
        </el-form-item>
  	</div>
  </el-col>
</el-row>

<div class="part_title" v-text="card_info"></div>


<!-----------------------表单第四行开始--------------------------------------------->

<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="账户类型" prop="region">
         <el-select v-model="ruleForm.region" placeholder="请选择">
            <el-option label="是" value="true"></el-option>
            <el-option label="否" value="false"></el-option>
         </el-select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="开户银行" prop="region">
         <el-select v-model="ruleForm.region" placeholder="请选择">
            <el-option label="社会信用代码" value="true"></el-option>
            <el-option label="组织机构代码" value="false"></el-option>
         </el-select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="对公账号" prop="name">
            <el-input v-model="ruleForm.name" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
</el-row>
<!-----------------------表单第五行开始--------------------------------------------->

<el-row>
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="开户省" prop="region">
         <el-select v-model="ruleForm.region" placeholder="请选择">
            <el-option label="是" value="true"></el-option>
            <el-option label="否" value="false"></el-option>
         </el-select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple-light">
  		<el-form-item label="开户城市" prop="region">
         <el-select v-model="ruleForm.region" placeholder="请选择">
            <el-option label="社会信用代码" value="true"></el-option>
            <el-option label="组织机构代码" value="false"></el-option>
         </el-select>
        </el-form-item>
  	</div>
  </el-col>
  
  <el-col :span="8">
  	<div class="grid-content bg-purple">
  		<el-form-item label="开户支行" prop="name">
            <el-input v-model="ruleForm.name" class="new_input_style"></el-input>
        </el-form-item>
  	</div>
  </el-col>
</el-row>


<div class="part_title" v-text="enclosure_info"></div>

<div class="part_title_new" v-text="">
	<!----------------------------------------------------------->
	<el-upload
    class="upload-demo"
    ref="upload"
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    :auto-upload="false">
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <!--<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>-->
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
	<!----------------------------------------------------------->
</div>


<div class="part_title" v-text="">
   <el-button type="success" @click="submitForm('ruleForm')">立即提交</el-button>
</div>


</el-form>
        <!------------------------------------------------------------>
  </div>
</template>


<script>
//import 
  export default {
    data() {
    	
      return {
    
        location:"您的位置    >  工作流管理 >  待处理流程任务",
        
        basic_info:"基本信息",
        
        card_info:"银行卡信息",
        
        enclosure_info:"附件信息",
        
        //*******************************************************
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
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
        }
        //*******************************************************
        
      }
      
    },
  	mounted(){
  		
  		this.$nextTick(function() {  
  		
  			
  		})
  	},
    methods: {

    //*********************************************************************************************************
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.submitUpload();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },         

    //*********************************************************************************************************
      
    //*********************************************************************************************************
    submitUpload() {
        this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
        
        console.log(file, fileList);
    },
    handlePreview(file) {
        console.log(file);
    }
    //*********************************************************************************************************
    }
  }
</script>