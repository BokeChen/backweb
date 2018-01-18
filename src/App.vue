<template>
  <!-- <div id="app">
    <router-view/>
  </div> -->
<el-container style="height: 600px; border: 1px solid #eee">
    <el-header class="headerNav">
        <sel-head ></sel-head>
    </el-header>
    <el-container class="main">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
             <menu-tree :list="sidebarMenuList"></menu-tree>
        </el-aside>
        <el-container>
              <router-view/>
        </el-container>
    </el-container>
</el-container>
</template>
<style>
@import './style/comon.scss'; 
</style>
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
  .main{min-width:1200px !important;}
</style>

<script>
  import {mapState, mapMutations} from 'vuex'
  import selHead from '@/components/common/head'
  import menuTree from '@/components/common/menuTree'
  export default {
      name: 'App',
    data() {
      
      return {
        
        list:''
      }
    },
    computed:{
      ...mapState([
			'sidebarMenuList'
		])
  },
  beforeUpdate(){
     
  },
  methods:{    
       
      
  },
    components:{ selHead,menuTree }
  };
</script>
<style lang="scss" scoped>
.el-container{
    min-width:900px ;
    width:100%;
}
</style>