<template>
	<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">

<!--    <li class="active">
        	<router-link to="/">我的首页</router-link>
        </li>
        <li>
        	<router-link to="/note">我的笔记</router-link>
        </li> -->


        <li v-for='(item,index) in routes' :class="{active:index==currentIndex}" @click='activeHandler(index)'>
        	<router-link :to="item.url">{{item.title}}</router-link>
        </li>
      </ul>
      <form class="navbar-form navbar-right">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>

    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

</template>

<script>
	export default{
		name:'Vheader',

		data(){
			return {
				routes:[
				{url:"/", title:"我的首页"},
				{url:"/note", title:"我的笔记"},
				{url:"/login", title:"登录"},
				{url:"/blog", title:"博客"},
				],
				currentIndex:0

			}
		},
		methods:{
			activeHandler(index){
				this.currentIndex = index;
			}
		},
		created(){   //页面刷新时被执行  $route 获取页面的url

			for(var i = 0;i < this.routes.length;i++){
				if(this.routes[i].url == this.$route.path){
					this.currentIndex = i;
					return;
				}
			}
		}

	}
</script>
<style scoped>

</style>