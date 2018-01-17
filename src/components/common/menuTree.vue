<template>
  <div>
      <dl class="menu">
           <dt><i class="el-icon-arrow-right"></i>机构用户</dt>
           <dd><i class="el-icon-arrow-right"> </i>用户管理</dd>
           <dd><i class="el-icon-arrow-right"></i> 机构管理</dd>
      </dl>
      <dl>
           <dt><i class="el-icon-arrow-right"></i>系统设置</dt>
           <dd><i class="el-icon-arrow-right"></i> 菜单管理</dd>
           <dd><i class="el-icon-arrow-right"></i> 角色管理</dd>
      </dl> 
  </div>

</template>
<script>

export default {
    name: 'MenuTree',
  data(){
      return {
        
      }
  },
  methods: {
     
    }
}
</script>
<style lang="scss" scoped>
 .menu{
     border:1px solid #ddd;
     border-radius: 2px;
     background-color:white;
     dt{
         height: 36px;
         background-color:#eee;
         border:1px solid #ddd;
         line-height: 36px;
         padding-left:10px;
     }
     dd{
         height:36px;
         line-height: 36px;
         padding-left:10px;
     }
     
 }

</style>

 

