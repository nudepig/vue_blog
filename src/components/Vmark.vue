<template>
	<div class="wrap">
		<div class="mark">
			<textarea rows="10" cols="100" class="editor" v-model='markValue'></textarea>
			<div class="show" v-html='currentValue'>
				
			</div>
		</div>
	</div>
</template>
<script>
	import Marked from 'marked'
	export default{
		//name:"Vcontent",
		data(){
			return{
				markValue:''
			}
		},
		methods:{

		},
		computed:{
			currentValue(){
				return Marked(this.markValue);
			}
		}
	}
</script>
<style>
.t{
	width: 300px;
	height: 100px;
}
.mark{
	width: 666px;
	height: 400px;
	margin: 0 auto;
}
.editor,.show{
	float: left;
	width: 330px;
	height: 400px;
	border: 1px solid #666;
}

</style>