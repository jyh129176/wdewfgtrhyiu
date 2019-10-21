<template>
  <div class="city">
   <div class="nav">
     <div @click="hsn"> <i class="el-icon-arrow-left"></i> </div>
     <div>{{txt.name}} </div>
     <div @click="hsn">切换城市</div>
    </div>
    <div class="boot">
            <div class="bo">
                    <el-input v-model="input" placeholder="输入学校/商务楼/地址"></el-input>
                      <el-button type="primary" @click="s">提交</el-button>
            </div>
           <ul v-show="fage==true">
               <li v-for="(item,i) in arr" :key="i" class="li1" @click="tes(item)">
                   <div>{{item.name}}</div>
                   <div class="asd">{{item.address}}</div>
               </li>
           </ul>
            <ul v-show="fage==false">
               <li v-for="(item,i) in list" :key="i" class="li1" @click="tes(item)">
                   <div>{{item.name}}</div>
                 
               </li>
               <h2 @click="del">清空所有</h2>
           </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { huo } from "../api/Data";
export default {
  name: 'city',
  data () {
    return {
        txt:'',
        input:'',
        arr:[],
        list:[],
        list2:[],
        fage:false

    }
  },
  mounted(){
  
    this.ss()
  },
  methods:{
      async ss(){
           var id=this.$route.query.id
 
           const r=await huo({},id)
           console.log(r)
                 this.txt=r.data
      },
      hsn(){
          this.$router.push("/")
      },
    s(){
        axios.get("https://elm.cangdu.org/v1/pois?city_id="+this.txt.id+"&keyword="+this.input)
   .then(r=>{
            this.arr=r.data
            // console.log(r)
        })
        this.fage=!this.fage
    },
    tes(item){
        this.$router.push({path:"/msite",query:{geohash:item.geohash}})
     
        this.list.push(item.name);
        var set = new Set(this.list)
        var  dd=Array.from(set)
         
     
       
        // var index = this.list.findIndex((v)=>{
        //   return item.name == v.name
        // })
        // if (index == -1) {
        //   this.list.push(item.name);
        // } else {
        //   return
        // }
       localStorage.setItem('list',JSON.stringify(dd));
    },
    del(){
      this.list=[]
       localStorage.setItem('list',JSON.stringify(dd));
    }

  },
  created(){
    var a = localStorage.list;
    if(a){
      this.list = JSON.parse(a);
      console.log(a)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.city{
  width: 100%;
  height: 100%;
  list-style: none;
  font-size: 0.2rem;
  background: #f0eeee;
   .nav {
    width: 100%;
    height: 0.55rem;
    background: #3190e8;
    display: flex;
    justify-content: space-between;
    font-size: 0.25rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    align-items: center;
    color: white;
    div:nth-of-type(3){
        font-size: 0.18rem;
    }
  }
  .boot{
    width: 100%;
    height: 100%;
    flex: 1;
    overflow: auto;
    .bo{
        height: 1.05rem;
        background: white;
        margin-top: 0.1rem;
        padding: 0.15rem;
        .el-button{
            width: 100%;
            margin-top: 0.1rem;
        } 
    }
    .li1{
        background: white;
        padding-top: 0.23rem;
        height: 0.7rem;
         padding: 0.15rem;
         border: 0.01rem solid #e4e4e4;
         font-size: 0.15rem;
         .asd{
                font-size: 0.12rem;
                margin-top: 0.1rem;
                color: gray;
         }
    }

  }
}
</style>
