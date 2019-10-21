<template>
  <div class="search">
    <div class="nav">
      <div>ele.me</div>
      <div>搜索</div>
      <div class="qq"></div>
    </div>
    <div class="cont">
      <div class="cont1">
        <el-input placeholder="请输入商家或美食名称" v-model="input" clearable> </el-input>
        <el-button type="primary" @click="ti">提交</el-button>
      </div>
      <div class="cont2">
          <h4>商家</h4>
          <div>

          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
        input:'',
    }
  },
  methods:{
    //https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword=肯德基
   
      ti(){ 
        var  geohash =this.$route.query.geohash
        this.axios.get("https://elm.cangdu.org/v4/restaurants?geohash="+geohash+"&keyword="+this.input).then(r=>{
          console.log(r)
        })
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.search {
  width: 100%;
  height: 100%;
  list-style: none;
  font-size: 0.2rem;
  background: #e4e4e4;
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
  .cont {
    flex: 1;
    .cont1{
        width: 100%;
        height: 0.5rem;
        background: white;
        padding: 0.05rem;
        .el-input{
           width: 2.8rem;
           height: 0.8rem;
        }
        .el-button{
              width: 0.6rem;
        }
    }
    .cont2{
        width: 100%;
        height: 100%;
        overflow: auto;
        h4{
            margin: 0.05rem;
        }
    }
  }
}
</style>
