<template>
  <div class="shop">
      <input type="text" v-model="txt" @keydown.13="ss(e)"> 
      <div v-for="(v,i) in arr"> {{v}}  </div>
      <button @click="del">删除</button>
  </div>
</template>

<script>
export default {
  name: 'shop',
  data () {
    return {
      txt:"",
      arr:[1,2,3,4,1,2,3,4,5,6,6]
    }
  },
  methods:{
        ss(e){

            this.arr.push(this.txt)
            // console.log(this.arr)
            // var dd=new Set(this.arr)
            // var w=Array.from(dd)
            //   console.log(w)
            var index=this.arr.findIndex(val=>{
              e
            })
            localStorage.setItem("list",JSON.stringify(w))
            
        },
        del(){
          this.arr=[];
            localStorage.setItem("list",JSON.stringify(this.arr))
        }
  },
  watch:{
    
  },
  mounted(){
         this.arr=JSON.parse(localStorage.getItem("list")) || []
          this.ss()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
