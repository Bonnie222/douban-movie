<template>
	<div id="movie-hot">
		<div class="go-search">
			<div class="logo">
				<img src="./../../assets/douban-logo.png" width="35" height="35">
			</div>
			<div class="search-content">
				<span><i class="iconfont icon-sousuo"></i></span>
				<span>电影/电视剧/影人</span>
			</div>
		</div>

		<mt-navbar v-model="selected">
		  <mt-tab-item id="1">正在热映</mt-tab-item>
		  <mt-tab-item id="2">即将上映</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		    <div class="scroll">
		    	<div class="list-inner">
		    		<MovieList></MovieList>
		    	</div>
		    </div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>
<script>
	import MovieList from './movie-list'
	export default{
		data(){
			return{
				selected:"1"
			}
		},
		components:{
			MovieList
		}
	}
</script>
<style scoped>
	#movie-hot{
		background-color: yellow;
		height: 100%;
	}
	.go-search{
		height: 50px;
		padding: 10px;
		box-sizing:border-box;
		overflow: hidden;
	}
	.go-search .logo{
		float: left;
	}
	.go-search .search-content{
		background-color: #edeeee;
		line-height: 35px;
		border-radius: 5px;
		float: left;
		width: 85%;
		margin-left: 3%;
		font-size: 16px;
	}
	.go-search .search-content span{
		display: inline-block;
	}
	.go-search .search-content .iconfont{
		font-size: 24px;
	}
	.mint-navbar .mint-tab-item.is-selected{
		color:#05AF10;
		border-bottom:2px solid #05AF10;
	}
	.scroll{
		background-color: green
	}
	.list-inner{
		background-color: blue;
		padding:0px 15px;
	}

</style>