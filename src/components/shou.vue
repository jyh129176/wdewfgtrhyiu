<template>
  <div class="shou">
    <div class="nav">
      <div>ele.me</div>
      <div>登陆|注册</div>
    </div>
    <div class="boot">
      <div class="tou">
        <div>当前定位城市</div>
        <div>定位不准时，请在城市列表中选择</div>
      </div>
      <!-- 当前城市 -->
      <div class="tt" @click="dd(txt.id)">{{txt.name}} <span>></span></div>
      <!-- 热门城市 -->
      <div class="re">热门城市</div>
      <ul class="ul1">
        <li v-for="(v,i) in list" :key="i" class="li" @click="dd(v.id)">{{v.name}}</li>
      </ul>
      <!-- 所有城市 -->
      <div class="suo" v-for="(item,index) in Object.keys(arr).sort()" :key="index">
        <div class="pai">{{item}}</div>
        <ul class="ul1">
          <li v-for="(item,i) in arr[item]" :key="i" class="li1" @click="dd(item.id)">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { shou, sho, sh } from "../api/Data";

export default {
  name: "shou",
  data() {
    return {
      txt: "",
      list: [],
      arr: []
    };
  },
  methods: {
    //当前城市
    async bei() {
      const r = await shou({ type: "guess" });
      // console.log(r)
      this.txt = r.data
    },
    //热门城市
    async re() {
      const s = await sho({ type: "hot" });
      //  console.log(s)
      this.list = s.data;
    },
    //所有城市
    async suo() {
      const s = await sho({ type: "group" });
      console.log(s.data);
      this.arr = s.data;
    },
    //点击到城市详细
    dd(id){
      this.$router.push({path:"/city",query:{id:id}})
    }
  },
  mounted() {
    this.bei();
    this.re();
    this.suo();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.shou {
  width: 100%;
  height: 100%;
  list-style: none;
  font-size: 0.2rem;
  background: #e4e4e4;
  display: flex;
  flex-direction: column;
  .nav {
    width: 100%;
    height: 0.50rem;
    background: #3190e8;
    display: flex;
    justify-content: space-between;
    font-size: 0.18rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    align-items: center;
    color: white;
  }
  .boot {
    width: 100%;
    height: 100%;
    flex-grow: 1;
    overflow: auto;
    .pai {
      font-size: 0.2rem;
      height: 0.4rem;
      border: 0.01rem solid #e4e4e4;
      color: #666;
      padding-left: 0.1rem;
      line-height: 0.4rem;
    }
    .tou {
      background: white;
      margin-top: 0.1rem;
      width: 100%;
      height: 0.41rem;
      font-size: 0.12rem;
      display: flex;
      padding-left: 0.1rem;
      align-items: center;
      padding-right: 0.1rem;
      justify-content: space-between;
      border-bottom: 0.01rem solid #e4e4e4;
      div:nth-of-type(2) {
        color: #9f9f9f;
      }
    }
    .tt {
      width: 100%;
      height: 0.52rem;
      padding-left: 0.1rem;
       padding-right: 0.1rem;
      line-height: 0.52rem;
      border-bottom: 0.01rem solid #e4e4e4;
      font-size: 0.2rem;
      color: #3190e8;
      background: white;
      span{
        float: right;
        color:  #666;
        font-size: 0.25rem;
      }
    }
    .re {
      height: 0.4rem;
      border: 0.01rem solid #e4e4e4;
      font-size: 0.12rem;
      padding-left: 0.1rem;
      line-height: 0.4rem;
      margin-top: 0.15rem;
      background: white;
    }
    .ul1 {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      background: white;
      font-size: 0.15rem;
      .li {
        height: 0.45rem;
        width: 25%;
        text-align: center;
        line-height: 0.45rem;
        color: #3190e8;
        border: 0.01rem solid #e4e4e4;
      }
    }
    .suo {
      margin-top: 0.15rem;
      background: white;
    }
    .li1 {
      height: 0.45rem;
      width: 25%;
      text-align: center;
      line-height: 0.45rem;
      color: #666;
      border: 1px solid #e4e4e4;
    }
  }
}
</style>
