<template>
  <div class="shop">
    <div class="tou">
      <div class="hello"> 
          <div class="h1">
              <span> </span>
              <img :src="'//elm.cangdu.org/img/'+txt.image_path" alt="" class="im1">
          </div>
            <div class="h2">
                <h1>{{txt.name}}</h1>
                <p>商家配送/分钟送达/{{txt.piecewise_agent_fee.tips}}</p>
                <p>{{txt.promotion_info}}</p>
            </div>
           
      </div>  
      <div class="content">
            <div>商品</div>
            <div>评价</div>
        </div>
        </div>
      <div class="nei">
        <div class="nei1">
          <div v-for="(item,index) in arr" :key="index">
              {{item.name}}
          </div>
        </div>
        <div class="nei2">
          <div v-for="(item,index) in arr" :key="index" class="div1">
                 <div  class="div2">{{item.name}} <span>{{item.description}}</span></div>
                   <div class="div3" v-for="(v,i) in arr[index].foods" :key="i">
                     <div class="div31">
                       <img :src="'//elm.cangdu.org/img/'+v.image_path" alt="" class="img2">
                     </div>
                     <div class="div32">
                       <p>{{v.name}}</p>
                       <p>{{v.description}} </p>
                       <p> 月收{{v.rating_count}}分 好评率{{v.satisfy_rate}}% </p>
                      <div>${{v.specfoods[0].price}}起   <!-- <span class="sp3" v-text="num">sad </span> --> <span class="sp2" @click="chi(v)"> +</span></div> 
                     </div>
             </div>
        </div>
          </div>
        
      </div>
      <div class="footer"> 
<div @click="add"> <i class="el-icon-delete-solid"></i> </div>

<div>
      <h2> {{ha}}.00</h2>
      <p>{{txt.piecewise_agent_fee.tips}}</p>
</div>
<div v-text="txt2"></div>
  <div v-text="cont" class="hong" v-show="fage"></div>
      </div>
      <div class="to" v-show="fage1">
          <div class="too">
              <div class="to1"> <span>购物车</span> <span><i class="el-icon-delete"></i>清空</span></div>
              <div class="to2" v-for="(item,index) in list " :key="index">
                     <div> {{item.name}}</div>
                     <div> ${{item.price}}</div>
                      <div class="to22">
                        <p @click="an(item,index)">-</p>
                        <div>{{item.shu}} </div>
                        <p @click="ja(item,index)">+</p>
                      </div>
                 </div>
          </div>
      </div>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    txt:"",
    txt1:"",
    txt2:"还差￥20起送",
    arr:[],
    cont:"",
    fage:false,
    fage1:false,
    mum:1,
    list:[],
   
    }
  },
    mounted(){
        var id=this.$route.query.id;
        this.axios.get("https://elm.cangdu.org/shopping/restaurant/"+id).then(s=>{
            // console.log(s)
            this.txt=s.data
        })
        this.axios.get("https://elm.cangdu.org/shopping/v2/menu?restaurant_id="+id).then(r=>{
          console.log(r)
          this.arr=r.data
        })
        
    },
    methods:{
      chi(v){

           this.cont++
           if(this.cont>=0){
             this.fage=true
           }
           var ii=this.list.findIndex(p=>{
             return v.name==p.name
           })
           if(ii==-1){
 this.list.push({name:v.name,price:v.specfoods[0].price,shu:1})
      console.log(this.list)
           }else{
            //  this.list[ii].shu++
            for(var i in this.list.length){
              
            }
           }
        //    var  s= 0
        // for(var i in this.list){
        //  s+=this.list[i].price*this.list[i].shu
        //   return this.txt1=s
        // }
         
      },
  
      add(){
        if(this.fage==true){
          this.fage1=!this.fage1
        }
      },
      an(item,index){
      
         item.shu--
          this.cont--
        
        if (item.shu==0) {
          this.list.splice(index,1)
          console.log(this.list)
          this.fage=false
          if(this.cont==0){
            this.fage1=false
          }
        }
      }, 
       ja(item,index){
          this.cont++
          item.shu++
       }
     
    },
    computed:{
        ha(){
          var s=0
          for(var i in this.list){
            s+= Number(this.list[i].price*this.list[i].shu)
             if(s==20){
            this.txt2="去结算"
          }
          return s
          } 
         
        }
        
    },
    watch:{
      
    
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .to{
    position: absolute;
    width: 100%;
    height: 100%;
  background-color: rgba(119,103,137,.43);
    top: -0.5rem;
    .too{
      width: 100%;
      height: auto;
      background: white;
      font-size: 0.15rem;
      position: absolute;
      z-index: 1;
      color: black;
      bottom: 0;
        .to1{
          height: 0.4rem;
         background-color: #eceff1;
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: 0.05rem;
        }
        .to2{
          height: 0.4rem;
           display: flex;
           border: 1px saddlebrown solid;
             align-items: center;
             justify-content: space-between;
             .to22{
              display: flex;
              p{
                width: 0.2rem;
                height: 0.2rem;
                text-align: center;
                border-radius: 50%;
                background: seagreen;
                color: white;
                line-height: 0.2rem;
              }
             }
        }
    }
   
    
  }

.shop{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
}
.tou{
  width: 100%;
  height:1.26rem;
    // border: 1px saddlebrown dashed;
  
}
.hello{
  width: 100%;
  height: 0.9rem;
  background-color: rgba(119,103,137,.43);
  display: flex;
  .h1{
      flex: 2;
    //   border: saddlebrown 1px solid;
    padding: 0.1rem;
    span{
        font-size: 0.18rem;
            position: absolute;
    }
      .im1{
          width:0.7rem;
          height: 0.7rem;
          display: block;

      }
  }
  .h2{
      flex: 8;
    //   border: saddlebrown 1px solid;
      padding-top: 0.05rem;
        h1{
            font-size: 0.23rem;
        }
        p{
            font-size: 0.12rem;
            margin-top: 0.1rem;
        }
  }
  }
  .content{
    width: 100%;
    height: 0.36rem;
    // border: 1px saddlebrown dashed;
    background: white;
    display: flex;
    justify-content: space-around;
      font-size: 0.15rem;
      align-items: center;
   div:hover{
      color: blue;
   }
  
}
.nei{
    width: 100%;
    height: 100%;
    flex: 1;
    overflow: auto;
  // background: red;
    // border: 1px saddlebrown dashed;
    display: flex;
     .nei1{
      flex: 3;
    // border: 1px saddlebrown dashed;
            font-size: 0.15rem;
            font-weight: bold;
        div{
          width: 1rem;
          height: 0.5rem;
            text-align: center;
            line-height: 0.5rem;
            overflow: hidden;
    border-bottom: 0.01rem solid #e4e4e4;
        }
     }
     .nei2{
         flex: 8;
    // border: 1px saddlebrown dashed;
            font-size: 0.15rem;
           .div1{
               font-size: 0.16rem;
                font-weight: bold;
                width: 100%;
                // height: auto;
          border-bottom: 0.01rem solid #e4e4e4;
                // line-height: 0.4rem;
                // padding-left: 0.1rem;
               
                span{
               font-size: 0.12rem;
                font-weight: normal;
                }
            }
          .div2{
            height: 0.4rem;
                line-height: 0.4rem;
                background:#ededed;
                 padding-left: 0.1rem;
          }
          .div3{
              width: 100%;
              height: 1rem;
          border-bottom: 0.01rem solid #e4e4e4;
          display: flex;
              .div31{
                  flex: 2;
          border: 0.01rem solid #e4e4e4;
          .img2{
            width: 0.6rem;
            padding-top: 0.2rem;
          }

              }
              .div32{
                flex: 15;
          border: 0.01rem solid #e4e4e4;
            padding-top: 0.1rem;
            p:nth-of-type(2){
               font-size: 0.12rem;
              color: gray;
            }
            .sp2{
              display: block;
              width: 0.15rem;
              height: 0.15rem;
              background: blue;
              border-radius: 50%;
              margin-left: 1.4rem;
               font-size: 0.13rem;
              margin-top: -0.15rem;
              text-align: center;
              line-height: 0.11rem;
               font-size: 0.16rem;
              color: white;
            }
           
              }
          }
  }
  }

  .footer{
    width: 100%;
    height: 0.5rem;
    border: 1px saddlebrown dashed;
  background:black;
  display: flex;
  position: relative;
    div:nth-of-type(1){
        width: 0.5rem;
        height: 100%;
        border-radius: 50%;
        background:blue;
            font-size: 0.35rem;
        text-align: center;
  position: absolute;
  bottom: 0.1rem;
  margin-left: 0.2rem;
  z-index: 2;
    }
    .hong{
      width: 0.2rem;
      height: 0.2rem;
      border-radius:50%;
      background: red; 
      position: absolute;
      z-index: 8;
      left:0.58rem;
      top: -0.14rem;
      color: white;
            font-size: 0.14rem;
            text-align: center;
    line-height: 0.2rem;
    }
     div:nth-of-type(2){
       color: white;
            font-size: 0.15rem;
          margin-left: 1rem;
          p{
            font-size: 0.1rem;

          }
     }
      div:nth-of-type(3){
       color: white;
            font-size: 0.16rem;

          width: 1rem;
            height: 100%;
            background: seagreen;
            text-align: center;
            line-height: 0.5rem;
          margin-left: 1.12rem;
      }
  }
</style>
