<template>
  <div id="loginForm">
      <div>
          <img src="../../../assets/logo-login.png" alt="">
      </div>
    <el-form :label-position="labelPosition" ref="form" :model="form" :rules="rules" label-width="80px">
    <el-form-item label="登录名" prop="name" required>
        <el-input v-model="form.name" class="inp_bgColor" max-length="2" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password" required>
        <el-input v-model="form.password" max-length="20" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="" prop="verifycode" class="loginVerify" v-if="form.loginErrorTimes>3">
         <span class=" el-form-item__label">验证码</span>
        <el-input v-model="form.verifycode" max-length="4" auto-complete="off"></el-input>
        <img src="../../../assets/validateCodeServlet.jpg" alt="">
        <span> 看不清</span>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录系统</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import {accountLogin} from '@/service/getData'
  export default {
    data() {
      return {
          labelPosition:'top',
        form: {
          name: '',
          password: '',
          verifycode:'',
          loginErrorTimes:1,
          userInfo:''
        },
        rules:{
             name: [
            { required: true, message: '请输入登录名', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1到 20 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入登录密码', trigger: 'blur' }
          ],
          verifycode: [
            { required: true, message: '请输入验证码', trigger: 'blur' }
          
          ]
        }
      }
    },
    methods: {      
      async submitForm(formName) {
        this.$refs[formName].validate((valid) => { return 
          if (valid) {
            alert('submit!');              
             return true;
          } else {            
             this.form.loginErrorTimes++;        
            return false;
          }
          
        }).bind(this);
       
         this.userInfo = await accountLogin(this.form.name, this.form.password);
         console.log(this.userInfo);
        
      }
  }
  }
</script>
<style lang="scss" scoped>
#loginForm{
    position: relative;
    text-align: left;
    width: 480px;
    padding: 25px 29px 29px;
    margin: 0 auto 20px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .05);
    -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, .05);
    box-shadow: 0 1px 2px rgba(0, 0, 0, .05);
 &>div{
     height: 69px;
     text-align: center;
 }

 .el-button{
     width:100%;
     margin-top:15px;
     color:white;
 }
}
</style>
<style lang="scss">
#loginForm{
    .el-form-item__label{
        font-size:16px;
        color:rgb(153,153,153);
        line-height:30px;
    }
    .el-input__inner{
        background-color:rgb(250,255,189);
       height: 36px;
       line-height:36px;
    }
 .el-form-item  {
     label{
      padding:0;
     }
     
     } 
     .inp_bgColor{
      background-color: rgb(250,255,189);
    }
    .el-form-item{
        margin-bottom:12px;
    }
    .el-button{
     span{
       color:white;
     }
     
 }
 .loginVerify {
    margin-top:20px;
     .el-input{
         margin:0 5px ;
          width:65px;
          height:40px;
         .el-input__inner{
         background-color: white;
         height:30px;
     }
    
     }
      img{
         height:26px;
         vertical-align:middle;
     }
 }
    
}
</style>

