<template>
  <div class="profile">
    <div class="nav">
      <div><</div>
      <div>我的</div>
      <div class="qq"></div>
    </div>  
    <div class="boot">
        <div class="boot1">
            <div></div>
            <div>
                <h4>登陆/注册</h4>
               <div class="a"> <i class="el-icon-mobile"></i>暂无绑定手机号</div>
            </div>
        </div>
        <div class="boot2">
                <div class="w">
                    <div><b>0.00</b>元</div>
                    <div>我的余额</div>
                </div>
                <div class="w">
                     <div><b>0</b>个</div>
                    <div>我的优惠</div>
                </div>
                <div class="w">
                     <div><b>0</b>分</div>
                    <div>我的积分</div>
                </div>
        </div>
        <div class="boot3">
            <div><i class="el-icon-s-unfold"></i>我的订单</div>
            <div><i class="el-icon-shopping-bag-2"></i>积分商城 </div>
            <div><i class="el-icon-s-flag"></i>饿了么会员卡</div>
            <div><i class="el-icon-first-aid-kit"></i>服务中心</div>
              <div><i class="el-icon-platform-eleme"></i>下载饿了么APP</div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
     
    }
  }


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.profile {
  width: 100%;
  height: 100%;
  list-style: none;
  font-size: 0.2rem;
  background: #e4e4e4;
  overflow: auto;
  .nav {
    width: 100%;
    height: 0.5rem;
    background: #3190e8;
    display: flex;
    justify-content: space-between;
    font-size: 0.18rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    align-items: center;
    color: white;
    .qq {
      width: 0.35rem;
    }
  }
  .boot{
        flex: 1;
   .boot1{
      width: 100%;
    height: 0.8rem;
    background: #3190e8;
    display: flex;
    div:nth-of-type(1){
        flex: 3;
      
    }
     div:nth-of-type(2){
         padding-top: 0.18rem;
         color: white;
        flex: 7;
         
          .a{
              font-size: 0.12rem;
          }
    }
   }
   .boot2{
   width: 100%;
    height: 0.8rem;
    display: flex;
    background: white;
    .w{
        padding-top: 0.07rem;
        text-align: center;
        font-size: 0.15rem;
        width: 33.3%;
        height: 100%;
          border: 0.001rem solid #e4e4e4;
          b{
               font-size: 0.25rem;
          }
        
    }
   }
   .boot3{
         font-size: 0.15rem;
       width: 100%;
    div{
        height: 0.3rem;
        background: white;
        line-height: 0.3rem;
        padding-left: 0.1rem;
         border-bottom: 0.001rem solid #e4e4e4;
      
    }
    div:nth-of-type(3){
       margin-bottom: 0.07rem;
    }
   }
  }
  
}
</style>
