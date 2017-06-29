<template>
<div class="wrapper">
  <v-header></v-header>
  <div class="main">
  <h1> Hello</h1>
  </div>
  <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from './Header.vue';
import vFooter from './Footer.vue';
export default {
  components:{
    vHeader,vFooter
  }
}
</script>

<style scoped>
.wrapper{
    display: flex;
    flex-flow: column;
    min-height: 100vh;
}
.main{
    flex:1;
}
</style>

