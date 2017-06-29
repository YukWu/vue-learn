<template>
  <div class="header">
      <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">Book</el-menu-item>
  <el-menu-item index="2">Music</el-menu-item>
  <el-menu-item index="3">Bill</el-menu-item>
</el-menu>
  </div>
</template>

<<script>
export default {
  data (){
      return {
          activeIndex: '1'
      }
  }
}
</script>

<<style>
.header{

}
</style>


