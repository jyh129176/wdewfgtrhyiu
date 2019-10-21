<template>
  <div id="app">
    <!-- <hello></hello> -->
    <router-view/>
  </div>
</template>

<script>
// import hello from "@/components/HelloWorld"
export default {
  name: 'App',
  // components:{hello}
}
</script>

<style>
#app,body,html{
 margin: 0px;
 padding: 0px;
 width: 100%;
 height: 100%;
 list-style-type: none;
 box-sizing: border-box;
}
</style>
