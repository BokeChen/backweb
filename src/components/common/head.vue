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
     <ui class="navRight">
         <li>home</li>
         <li>主题</li>
         <li>您好，系统管理员</li>
         <li>退出</li>
     </ui>

</div>
</div>
</template>
<script>

export default {

  data(){
      return {
         isactiveIndex:"1"
      }
  },
  methods: {
      tabChange(index){         
         this.isactiveIndex = index;
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
    li{float:left;font-size:14px;color:white;padding:0 10px;}
}
.isactive{
    background-color:#1684c2;
}

</style>

