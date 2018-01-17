<template>
<el-container style="height: 500px; border: 1px solid #eee">
    <el-header class="headerNav">
        <sel-header></sel-header>
    </el-header>
    <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
             <menu-tree></menu-tree>
            <!-- <el-menu >
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>个人信息</template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1"><i class="el-icon-menu" style="color:#000"></i>个人信息</el-menu-item>
                        <el-menu-item index="1-2"><i class="el-icon-menu" style="color:#000"></i>修改密码</el-menu-item>
                    </el-menu-item-group>
                    
              </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>机构用户</template>
                    <el-menu-item index="2-1"><i class="el-icon-menu" style="color:#000"></i>用户管理</el-menu-item>
                    <el-menu-item index="1-1"><i class="el-icon-menu" style="color:#000"></i>机构管理</el-menu-item>
                    <el-menu-item index="1-1"><i class="el-icon-menu" style="color:#000"></i>区域管理</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
                    <el-menu-item index="1-1"><i class="el-icon-menu" style="color:#000">菜单管理</i></el-menu-item>
                    <el-menu-item index="1-1"><i class="el-icon-menu" style="color:#000"></i>角色管理</el-menu-item>
                    <el-menu-item index="1-1"><i class="el-icon-menu" style="color:#000"></i>字典管理</el-menu-item>
                    <el-menu-item index="1-1"><i class="el-icon-menu" style="color:#000"></i>缓存管理</el-menu-item>
                </el-submenu>
            
             <el-submenu index="4">
                    <template slot="title"><i class="el-icon-setting"></i>日志查询</template>
                    <el-menu-item index="1-1"><i class="el-icon-menu" style="color:#000">日志查询</i></el-menu-item>
                    <el-menu-item index="1-1"><i class="el-icon-menu" style="color:#000"></i>连接池监视</el-menu-item>
                  
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title"><i class="el-icon-setting"></i>金牌合伙人</template>
                    <el-menu-item index="1-1"><i class="el-icon-menu" style="color:#000">用户管理</i></el-menu-item>
                    <el-menu-item index="1-1"><i class="el-icon-menu" style="color:#000"></i>业绩管理</el-menu-item>
                    <el-menu-item index="1-1"><i class="el-icon-menu" style="color:#000"></i>佣金管理</el-menu-item>
                    <el-menu-item index="1-1"><i class="el-icon-menu" style="color:#000"></i>理财师对应投资人报表</el-menu-item>
                    <el-menu-item index="1-1"><i class="el-icon-menu" style="color:#000"></i>理财师月业绩投资明细表</el-menu-item>
                </el-submenu>
            </el-menu> -->
          
        </el-aside>

        <el-container>

            <el-main>
                <el-table :data="tableData">
                    <el-table-column prop="date" label="日期" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </el-container>
</el-container>

</template>
<style>
  .headerNav {
    padding:0;
     min-height: 50px;
    border-width: 0 0 1px;
    background-color: #45aeea;
    background-image: -moz-linear-gradient(top,#54b4eb,#2fa4e7);
    background-image: -webkit-gradient(linear,0 0,0 100%,from(#54b4eb),to(#2fa4e7));
    background-image: -webkit-linear-gradient(top,#54b4eb,#2fa4e7);
    background-image: -o-linear-gradient(top,#54b4eb,#2fa4e7);
    background-image: linear-gradient(to bottom,#54b4eb,#2fa4e7);
    background-repeat: repeat-x;
    border: 1px solid #1990d5;
    box-shadow: 0 1px 10px rgba(0,0,0,0.1);

  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px; 
  }
  
  .el-aside {
    color: #333;
    padding:0 10px;
    margin-top:10px;
    background-color:white !important;
    border-right:5px solid #ddd;
  }
</style>

<script>
  import selHeader from '../../common/head'
  import menuTree from '../../common/menuTree'
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },components:{ selHeader,menuTree }
  };
</script>