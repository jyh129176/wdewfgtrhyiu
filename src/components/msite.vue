<template>
  <div class="msite">
    <div class="hh" v-show="fage==false">
        <div class="nav">
     <div > 
       ♬
     </div>
     <div class="ds"> {{txt.name}}</div>
     <div>登录|注册</div>
    </div>
    <div class="boot">
      <div class="asd">
        <!-- <div v-for="(item,i) in arr" :key="i" class="ssss"> 
          <p><img :src="'https://fuss10.elemecdn.com/'+item.image_url" alt="" class="img1"></p>
          <p> {{item.title}}</p>
        </div> -->
      <swiper :options="swiperOption">
          <swiper-slide>
               <div v-for="(item,i) in arr" :key="i" class="ssss" v-show="i<8" @click="food(item.id)"> 
                <p><img :src="'https://fuss10.elemecdn.com/'+item.image_url" alt="" class="img1"></p>
                <p> {{item.title}}</p>
              </div>
          </swiper-slide>



          <swiper-slide>
               <div v-for="(item,i) in arr" :key="i" class="ssss" v-show="i>=8" @click="food(item.id)"> 
                <p><img :src="'https://fuss10.elemecdn.com/'+item.image_url" alt="" class="img1"></p>
                <p> {{item.title}}</p>
              </div>
          </swiper-slide>


      　<div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      </div>
      <div class="qwe">
          <div class="qwe1">
            <i class="el-icon-camera"></i>附近商家 
          </div>
     
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
    </div>
    <div class="hao" v-show="fage==true"> <router-view></router-view></div>
    <div class="footer">
        <div>
          <p  @click="ss"> <i class="el-icon-platform-eleme"></i> </p>
          <p>外卖</p>
        </div>
         <div>
          <p  @click="ds"> <i class="el-icon-picture-outline-round"></i> </p>
          <p>搜索</p>
        </div>
         <div>
          <p @click="dsd">  <i class="el-icon-tickets"></i> </p>
          <p>订单</p>
        </div>
         <div>
          <p @click="dsds"> <i class="el-icon-user"></i> </p>
          <p>我的</p>
        </div>
       </div>
  </div>
</template>

<script>
export default {
  name: 'msite',
  data () {
    return {
        txt:'',
        arr:[],
        list:[],
        swiperOption:{
          pagination:{
            el:".swiper-pagination",
            clickable:true
          },
          // autoplay:{
          //   delay:3000,
          //   disableOnInteraction:false
          // },
          // loop:true
        },
        fage:false
    }
  },
  mounted(){
      var geohash=this.$route.query.geohash
      this.axios.get("https://elm.cangdu.org/v2/pois/"+geohash).then(r=>{
        console.log(r)
        this.txt=r.data
      })
      this.axios.get("https://elm.cangdu.org/v2/index_entry").then(r=>{
        //  console.log(r)
        this.arr=r.data
      })
      //https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.476
      this.axios.get("https://elm.cangdu.org/shopping/restaurants?latitude="+this.txt.latitude+"&longitude="+this.txt.longitude).then(r=>{
        console.log(r)
        this.list=r.data
      })
      console.log(this.txt.latitude)
  },
  methods:{
    food(id){
        this.$router.push({path:"/food",query:{geohash:this.txt.geohash,id:id}})
    },
    ds(){
      this.$router.push({path:"/msite/search",query:{geohash:this.txt.geohash}})
      this.fage=true
          },
          ss(){
            this.$router.push("/msite")
              this.fage=false
          },
            dsd(){
      this.$router.push({path:"/msite/order",query:{geohash:this.txt.geohash}})
      this.fage=true
          },
               dsds(){
      this.$router.push({path:"/msite/profile",query:{geohash:this.txt.geohash}})
      this.fage=true
          },
          xx(v){
            this.$router.push({path:"/shop",query:{geohash:this.txt.geohash,id:v.id}})
          }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hao{
  flex: 1
}
.ds{
  width: 2rem;
  height: 0.25rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis；
}
.hui{
  color: #999;
}
.bao{
  margin-left: 1.2rem;
}
.img1{
  width: 0.5rem;
  height: 0.4rem;
}
.msite{
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
 
  background: #f0eeee;
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
    position: fixed;
    z-index: 2;

    div:nth-of-type(3){
        font-size: 0.18rem;
    }
}
.boot{
  width: 100%;
    height: 100%;
  flex-grow: 1;
    overflow: auto;
    .asd{
      margin-top: 0.55rem;
      height: 2.2rem;
      background: white;
      // overflow: hidden;
      .swiper-container{
            width: 100%;
        height: 100%;
      }
      .swiper-wrapper{
          width: 100%;
        height: 100%;
      }
      .swiper-slide{
        width: 100%;
        height: 100%;
          display: flex;
      flex-wrap: wrap;
      }
      .ssss{
        padding-top: 0.15rem;
        width: 25%;
        height: 48%;
        text-align: center;
        // border: 1px solid saddlebrown;
        font-size: 0.15rem;
      }
    }
    .qwe{
      width: 100%;
      height: 100%;
      
      .qwe1{
        margin-top: 0.1rem;
        height: 0.3rem;
        background: white;
        font-size: 0.14rem;
        padding-left: 0.1rem;
        line-height: 0.3rem;
        color: #999;;
      }
    }
}
  .footer{
    width: 100%;
    height: 0.5rem;
    border: 0.01rem solid #e4e4e4;
    background:white;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0px;
    padding-top: 0.05rem;
    div{
      width: 25%;
      height: 100%;
      text-align: center;
      p:nth-of-type(1){
        font-size: 0.18rem;
      }
       p:nth-of-type(2){
        font-size: 0.10rem;
      }
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
