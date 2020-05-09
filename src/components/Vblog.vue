<template>

<div>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</div>

<!-- 	<div class="note">
		<h1>展示页面 {{title}} </h1>

	</div> -->

</template>

<script>
  export default {
    name: "Vblog",
    data() {
      return {
        title:null
      }
    },
    mounted(){
      this.initMicro()
    },
    methods:{
      initMicro(){
        var that = this
        this.$axios.request({
          url:this.$store.state.apiList.blog,
          method:'GET',
          params:{
            token:this.$store.state.token
          },
          headers:{
            'Content-Type':'application/json',
          }
        }).then(function(ret){

            if(ret.data.code === 1000){
            console.log(ret.data.error)
            that.title = ret.data.error
          }


        })

      }
    }
  }
</script>

<style scoped>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 600px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
</style>
