<template>
  <div class="food">
      <div class="tou">
      <div class="nav">
      <div>《 </div>
      <div>登陆|注册</div>
      <div></div>
      
    </div>
    <div class="nav1">
            <div></div>
            <div @click="fag">排序</div>
            <div @click="fag1">筛选</div>
      </div>
    
</div>
  <div id="d2" v-show="fage">
          <div id="d21" > <i  class="el-icon-sort"></i> 智能排序 </div>
          <div id="d21"> <i  class="el-icon-coordinate"></i> 距离最近 </div>
          <div id="d21" @click="xiao"> <i  class="el-icon-loading"></i> 销量最高 </div>
          <div id="d21" @click="qi"> <i  class="el-icon-s-flag"></i> 起送价最高 </div>
          <div id="d21" @click="qii"> <i  class="el-icon-date"></i> 起送价最低 </div>
          <div id="d21"> <i  class="el-icon-search"></i> 配送速度最快 </div>
          <div id="d21"> <i  class="el-icon-umbrella"></i> 评分最高 </div>
      </div>
        <div id="d3"  v-show="fage1">
          <div>配送方式</div>
          <div class="kk"> <i class="el-icon-check"></i> 蜂鸟传送 </div>
          <div class="kl">商家属性(可以多选) </div>
          <div class="ui"> 
              <div> <i class="el-icon-success"></i> 品牌商家 </div>
              <div><i class="el-icon-success"></i> 外卖保 </div>
              <div><i class="el-icon-success"></i> 准时达 </div>
              <div> <i class="el-icon-success"></i>新店 </div>
              <div><i class="el-icon-success"></i> 在线支付 </div>
              <div> <i class="el-icon-success"></i> 开发票</div>
             </div>
             <div class="hk">
         <el-button>默认按钮</el-button> <el-button type="success">成功按钮</el-button>
             </div>
    
           </div>
<div class="footer">
         <ul class="ul2">
             <li v-for="(v,i) in list" :key="i" class="li2" @click="xx(v)">
                 <div class="j"><img  :src=" '//elm.cangdu.org/img/'+v.image_path" class="im1"></div>
                 <div class="oo">
                     <p><span class="p">品牌</span> <b>{{v.name}}</b> <span class="bao"></span> <span v-for="(item,index) in list[i].supports" :key="index" class="hui"> {{item.icon_name}} </span> </p>
                     <p>{{v.rating}}  月售{{v.recent_order_num}}单  <span class="span1"> {{v.delivery_mode.text}} </span> <span  v-for="(item,index) in list[i].supports" :key="index" v-show="index==1"> {{item.name}} </span> </p>
                     <p>￥{{v.float_delivery_fee}}起送/配送费约￥{{v.float_minimum_order_amount}} <span class="span2">{{v.distance}}/{{v.order_lead_time}}</span></p>
                 </div>
             </li>
          </ul> 
</div>
  </div>
</template>

<script>
export default {
  name: 'food',
  data () {
    return {
    list:[],
    txt:"",
    fage:false,
    fage1:false,

    }
  },
  mounted(){
      var geohash=this.$route.query.geohash
      this.axios.get("https://elm.cangdu.org/v2/pois/"+geohash).then(r=>{
        console.log(r)
        this.txt=r.data
      })
         this.axios.get("https://elm.cangdu.org/shopping/restaurants?latitude="+this.txt.latitude+"&longitude="+this.txt.longitude).then(r=>{
        console.log(r)
        this.list=r.data
      })
  },
  methods:{
    fag(){
      this.fage1=false
      this.fage=!this.fage
    },
     fag1(){
       this.fage=false
      this.fage1=!this.fage1
    },
    xiao(){            // 小  大
       this.list.sort((aa,bb)=>
        //   从大到小
              bb.recent_order_num-aa.recent_order_num
          )
        this.fage=false
    },
    qi(){
      this.list.sort((aa,bb)=>
        bb.float_delivery_fee-aa.float_delivery_fee
      )
        this.fage=false

    },
     qii(){
      this.list.sort((aa,bb)=>
        aa.float_delivery_fee-bb.float_delivery_fee
      )
        this.fage=false

    }
  }
}
</script>


<style lang="scss" scoped>
#d3{
   width: 100%;
  height: 2.5rem;
  background:white;
  padding: 0px;
  margin: 0px;
  position: absolute;
   font-size: 0.12rem;
   padding-left: 0.15rem;
   .kk{
     width: 1rem;
     height: 0.35rem;
    border: 0.01rem solid #e4e4e4;
    text-align: center;
    line-height: 0.35rem;
  color: blue;
 margin-bottom: 0.1rem;
  margin-top: 0.1rem;
   }
   .kl{
 margin-bottom: 0.1rem;

   }
   .ui{
     width: 100%;
     height:0.9rem ;
    // border: 0.01rem solid #e4e4e4;
    padding-right: 0.2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    div{
      width: 30%;
      height: 45%;
    border: 0.01rem solid #e4e4e4;
    text-align: center;
    line-height: 0.45rem;
      
    }
   }
   .hk{
     width: 100%;
     height: 0.5rem;
         background-color: #f1f1f1;
         margin-left: -0.2rem;
         margin-right: 0.2rem;
         display: flex;
         padding: 0.06rem;
         .el-button{
           width: 50%;
         }
   }
}
#d2{
  width: 100%;
  height: 3.5rem;
  background:white;
  padding: 0px;
  margin: 0px;
  position: absolute;
   font-size: 0.25rem;
  #d21{
    padding-left: 0.1rem;
    width: 100%;
    height: 0.5rem;
    border: 0.01rem solid #e4e4e4;
      font-size: 0.15rem;
      line-height: 0.5rem;

  }
}
.food{
  width: 100%;
height: 100%;
margin: 0px;
padding: 0px;
box-sizing: border-box;
   .nav {
    width: 100%;
    height: 0.55rem;
    background: #3190e8;
    display: flex;
    justify-content: space-between;
    font-size: 0.18rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    align-items: center;
    color: white;
  
  

    div:nth-of-type(3){
        font-size: 0.18rem;
    }
   }
   .nav1{
       width: 100%;
       height: 0.3rem;
       display: flex;
       justify-content: space-around;
    border: 0.01rem solid #e4e4e4;
    div{
        width: 33.3%;
        height: 100%;
    border: 0.01rem solid #e4e4e4;
     font-size: 0.15rem;
     color: black;
     text-align: center;
     line-height: 0.3rem;

    }
   }
}
.ul2{
  font-size: 0.12rem;
  background: white;
}
.oo{
    margin-left: 0.2rem;
}
.span2{
    margin-left: 0.5rem; 
}
.span1{
    margin-left: 1rem;
}
.p{
    background: yellow;
}
.li2{
    width: 100%;
    height: 1rem;
  
    display: flex;
    align-items: center;
}
*{
    list-style: none
}
.tt{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  font-size: 0.30rem;
  display: flex;
  flex-direction: column;
}
.cc{
    width: 100%;
    height: 1rem;
    background: blue;
 
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
}
.dd{
    width: 100%;
    height: 100%;
    flex: 1;
    overflow: auto
}
.ss{
    width: 100%;
    height: 0.9rem;
    border: dashed 1px darkgoldenrod;
}
.im1{
    width: 100px;
    height: 100px;

}
.j{
  padding-left: 0.1rem;
  box-sizing: border-box;
}
.oo p{
  margin-top: 0.05rem;
}
</style>
