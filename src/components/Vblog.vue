<template>
	<div class="note">
		<h1>展示页面 {{title}} </h1>
	</div>
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

</style>
