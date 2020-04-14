<template>
	<div class="container">
		<div class="row">
			<div class="col-md-3">
				<div class="panel panel-default">
         		<div class="panel-heading">
    			<h3 class="panel-title">我的笔记列表</h3>
  				</div>
  				<div class="panel-body">
				    <VnoteShow></VnoteShow>
				  </div>
				</div>
			</div>
			<div class="col-md-9">
				<div class="panel panel-default">
         		<div class="panel-heading">
         			请输入文章标题:<input type="text" name="">
  				</div>
  				<div class="panel-body">
				    <Vmark></Vmark>
				  </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vmark from './Vmark'
	import VnoteShow from './VnoteShow'

	export default{
		name:"Vnote",
		
		data(){
			return {

			}
		},
		components:{
			Vmark,
			VnoteShow
		}
	}
</script>
<style scoped>
	
</style>