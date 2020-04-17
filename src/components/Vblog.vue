<template>
	<div class="note">
		<h1>展示页面:{{title}}</h1>
	</div>
</template>

<script>
  export default {
    name: "Vblog",
    data() {
      return {
        error:null
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
          }
        }).then(function (arg) {
          if(arg.data.code === 1000){
            that.title = arg.data.error
          }
        })

      }
    }
  }
</script>

<style scoped>

</style>
