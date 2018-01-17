<template>
  <div>  
      <dl class="menu" v-for="item in list" :key="item.id">
           <dt @click="menuActive(item.id)"><i :class="{'el-icon-arrow-right':isActive!=item.id,'el-icon-arrow-down':isActive==item.id}"></i>{{item.first_nav}}</dt>
           <transition name="slide" v-for="subItem in item.second_nav" :key="subItem.id">
           <dd v-show="isActive ==item.id" @click="subMenuActive(subItem.id)" :class="{'subMenuActive':subMenuActiveItem==subItem.id}"><i :class="subItem.icon"></i> {{subItem.nav}}</dd>            
           </transition> 
      </dl> 
  </div>
</template>
<script>
export default {
    name: 'MenuTree',
    props:["list"],
  data(){
      return {
         isActive:1,
         show:true,
         subMenuActiveItem:11

      }
  },
  methods: {
      menuActive(index){
            this.isActive = index;
      },
      subMenuActive(index){
           this.subMenuActiveItem = index;
      }
    }
}
</script>
<style lang="scss" scoped>
 .menu{
     border:1px solid #ddd;
     border-radius: 2px;
     background-color:white;
     margin-bottom:2px;
     font-size: 14px;
     overflow: hidden;
     cursor: pointer;
     dt{
         height: 36px;
         background-color:#eee;
         border-bottom:1px solid #ddd;
         line-height: 36px;
         padding-left:20px;
         color:#54b4eb;
         .el-icon-arrow-right,.el-icon-arrow-down{
             margin-right:2px;
             font-size: 14px;
             color:#54b4eb;
             font-weight: bold;            
         }     
     }
     dd{
         height:28px;
         line-height: 28px;
         padding-left:10px;
          margin:8px 8px;
         color:#54b4eb;
         &.subMenuActive{
          background-color:#54b4eb !important;
          color:white !important;
          i{color:white;}
         }
         &:hover{
            background-color:rgba(206, 203, 203,0.3);   
         }
       &.slide-enter-active, &.slide-leave-active {
            transition: height 0.2s linear;
            }
        &.slide-enter, &.slide-leave-to {
            opacity: 0;
            height:0
            }
            i{color:#54b4eb;}
                
     } 
       
 }

</style>



 

