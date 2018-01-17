<template>
  <div class="headerBar">
      <div class="logoTitle">
          <span id="productName">金牌合伙人</span>
      </div>
      <div>     
     <ul class="navLeft">
         <li :class="{'isactive':isactiveIndex==1}" @click="tabChange(1)">我的面板</li>
         <li :class="{'isactive':isactiveIndex==2}" @click="tabChange(2)">系统设置</li>
         <li :class="{'isactive':isactiveIndex==3}" @click="tabChange(3)">善林财富</li>
     </ul>
     <ul class="navRight">
         <li><i class="el-icon-menu" ></i> <div>访问金牌合伙人主页</div></li>
         <li><i class="el-icon-menu"></i><div>主题</div></li>
         <li>您好，系统管理员<div>个人信息</div></li>
         <li>退出<div>退出登录</div></li>
     </ul>

</div>
</div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name:"SelHead",
  data(){
      return {
         isactiveIndex:"1"
      }
  },
  methods: {
      ...mapMutations([
                'HEADER_MENUCHANGE',
            ]),
      tabChange(index){         
         this.isactiveIndex = index;
         this.HEADER_MENUCHANGE(index);
      }
    }
}
</script>
<style lang="scss" >

</style>
<style lang="scss" scoped>
 .headerBar{
    >div:nth-child(1){
        float:left;
        width:199px;
    }
     >div:nth-child(2){
         min-width: 900px;
         width:100%;
         padding-left:199px;
     }
 }
 
 #productName{
     display:inline-block;
    font-family: STXingkai;
    color: gold;
    font-size: 29px;
    padding-left:20px;
 }
.el-header{
    background-color:rgb(69, 174, 234);
    >span{
      line-height:60px;
    }
   
}
.navLeft{

    float: left;
    li{float:left;
       font-size:14px;
       color:white;
       padding:0 10px;
       height:56px;
       &:hover{
           background-color:#1684c2;
       }
    }
}
.navRight{
    float:right;
    li{float:left;font-size:14px;color:white;padding:0 15px;position: relative;
      i{
          color:white;
      }
      div{display:none;
          position: absolute;
          top:50px;
          left:0px;
          height:24px;
          line-height:24px;
          font-size:12px;
          border:1px solid gray;
          color:#666;
          background-color:white;
          padding:0 5px;
      }
      &:hover div{
          display: inline-block;
          
      }
    }
    li:nth-child(1){
        div{ width:100px;left:-10px;}
    }
    
    li:nth-child(3){
        div{ left:20px;}
    }
     li:nth-child(4){
        div{ width:60px;}
    }
}
.isactive{
    background-color:#1684c2;
}

</style>

