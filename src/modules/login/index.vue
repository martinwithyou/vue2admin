<style scoped>
  .login {
    margin-top: 300px;
    border-top:5px solid #d9d9d9;
    border-bottom:5px solid #d9d9d9;
    background-color:#ffffff !important;
  }

  .login-form {
    border: 0px solid #eaeefb;
    border-radius: 4px;
    transition: .2s;
    padding: 16px;
  }
  .full-screen {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /*background-color: #475669;
    z-index: -100;*/
    background-color:#324057;
  }
</style>
<template>
	<div class="full-screen">
	<!--<c-waves>-->
	
<!--------------------login form start------------------------------->	
  <div class="login">
    <el-row>
      <el-col :span="8">&nbsp;</el-col>
      <el-col :span="8" class="login-form">
        <el-form :model="user" :rules="rules" ref="loginForm" label-width="100px" label-suffix="：">
          <el-form-item label="登录ID" prop="name">
            <el-input v-model.number.trim="user.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="user.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login('loginForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
<!------------------login form end---------------------------------->
  
 <!-- </c-waves>-->
  </div>
</template>
<script>
//	import CWaves from 'components/CWaves'
  import {mapGetters} from 'vuex'
  export default {
//	components: {
//      CWaves
//  },
    data() {
      let checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('登录ID不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须大于18'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      return {
        user: {
          name: '',
          pass: ''
        },
        rules: {
          name: [
            {type: 'number', required: true, message: '请输入登录ID，必须为数字', trigger: 'blur'},
            {validator: checkName, trigger: 'blur'}
          ],
          pass: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 3, max: 15, message: '长度为 3~15 个字符', trigger: 'blur'}
          ]
        }
      };
    },
    computed: mapGetters([
      'tokens'
    ]),
    watch: {
      tokens: function (val) {
        this.$router.push('/home/page1');
      }
    },
    methods: {
      login(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch('login', {name: this.user.name, pass: this.user.pass})
          } else {
            return false;
          }
        });
      }
    }
  }
</script>
