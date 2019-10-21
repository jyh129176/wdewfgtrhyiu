<template>
  <div class="order">
    <div class="nav">
      <div>></div>
      <div>订单列表</div>
      <div class="qq"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: "order",
  data() {
    return {
        input: '',
    }
  }


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.order {
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
  
}
</style>
