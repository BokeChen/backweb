
<?php
@$username = $_REQUEST['username'] or die({"state":"error","message":'用户名不能为空'});
@$upwd = $_REQUEST['password'] or die('登录命名不能为空'); 
 //0:修改响应头部数据格式
 header("content-type:application/json;charset=utf-8");
 require("init.php");
 $sql = "SELECT * FROM bw_user_login";
 $sql .=" WHERE  用户名  = '$username' ";
 $result = mysqli_query($conn,$sql);
 $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
 $err_times=0;
 $verify=false;
 foreach($rows as $k=>$v){
    $err_times = $v['err_times'];
    if($upwd === $v['密码']){
     $verify = true;
    }
}
 $json = json_encode($rows);
 if($verify){
     //echo '登录成功';  
 }else{
     //echo '登录失败';
     $err_times = $err_times+1;
 }
 $sql = "UPDATE bw_user_login SET err_times = '$err_times' WHERE 用户名 ='$username'";
 $result = mysqli_query($conn,$sql);
 if(($result ===true )&& $verify ){
    echo {"state":"success","message":'登录成功'};
 }else{
    echo {"state":"false","message":'登录失败'};
    
 }
 
?>

