<template>
	<div id="movie-hot">
		<div class="go-search" @click="goSearch">
			<div class="logo">
				<img src="./../../assets/douban-logo.png">
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
		    <div class="scroll" :data="hotMovies">
		    	<div class="list-inner">
		    	 	<MovieList-show :listMovie ="hotMovies" @select="selectMovie"></MovieList-show> 
		    	</div>
		    </div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		    <div class="scroll" :data="comingMovies" :needDate="needDate">
		    	<div class="list-inner">
		    	 	<MovieList-show :listMovie ="comingMovies"></MovieList-show> 
		    	</div>
		    </div>
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>
<script>
	import MovieListShow from './movie-list'

	import { api } from './../../global/api';
	import Vue from 'vue';
	import { mapMutations } from 'vuex';

	export default{
		data(){
			return{
				selected:"1",
				hotMovies:[],     //热映电影
				comingMovies:[],  //即将上映电影

				listLoading:true,
				MovieTotal:null,
				listQuery:{
					pagesize:10,
					currPage:1,
				},

				needDate:true  // 电影列表显示日期栏
			}
		},
		components:{
			"MovieList-show": MovieListShow
		},
		mounted(){
			var vm = this;
			vm.getMovieList(); //获取正在热映电影
			vm.getcomingMovieList(); //获取即将上映
		},
		methods:{
			//获取正在热映列表数据
			getMovieList(){
				var vm = this;
				vm.listLoading = true;
				Vue.http.jsonp(api.in_theaters,{params:{"count":vm.listQuery.pagesize,"start":vm.listQuery.currPage-1}}).then(function(res){
						var data = res.body;
						
						if(data.subjects){
							vm.hotMovies= data.subjects;
							console.log("列表数据",vm.hotMovies);
							vm.listQuery.currPage = data.start + 1;
							vm.listQuery.pagesize = data.count;
							vm.MovieTotal = data.total;

							vm.listLoading = false;
						}else{
							Message({
								showClose:true,
								message:res.body.resultMsg,
								type:'error'
							});
							vm.listLoading = false;
						}
				},function(res){
					vm.listLoading = false;
				},true)
			},
			//获取即将上映列表数据
			getcomingMovieList(){
				var vm = this;
				vm.listLoading = true;
				Vue.http.jsonp(api.coming_soon,{params:{"count":vm.listQuery.pagesize,"start":vm.listQuery.currPage-1}}).then(function(res){
						var data = res.body;

						if(data.subjects){
							vm.comingMovies= data.subjects;
							console.log("即将上映列表数据",vm.comingMovies);
							vm.listQuery.currPage = data.start + 1;
							vm.listQuery.pagesize = data.count;
							vm.MovieTotal = data.total;

							vm.listLoading = false;
						}else{
							Message({
								showClose:true,
								message:res.body.resultMsg,
								type:'error'
							});
							vm.listLoading = false;
						}
				},function(res){
					vm.listLoading = false;
				},true)
			},

			//转入搜索页面
			goSearch(){
				this.$router.push({
					path:'/search'
				});
			},

			//转入电影详情
			selectMovie(movie){
				this.setMovie(movie);
				this.$router.push({
					path:`/movie/${movie.id}`
				});
			},

			...mapMutations({
		       	setMovie: 'SET_MOVIE'
		    })
		}
	}
</script>
<style scoped>
	#movie-hot{
		background-color: #ffffff;
		height: 100%;
		margin-bottom: 60px;
	}
	.go-search{
		height: 50px;
		padding: 5px 10px;
		box-sizing:border-box;
		overflow: hidden;
		position: relative;
	}
	.go-search .logo{
		position: absolute;
		line-height: 35px;
		height: 35px
	}
	.go-search .logo img{
		width: 35px;
		height: 35px;
	}
	.go-search .search-content{
		background-color: #edeeee;
		line-height: 35px;
		border-radius: 5px;
		margin-left: 50px;
		font-size: 16px;
		text-align: center;
	}
	.go-search .search-content span{
		display: inline-block;
	}
	.go-search .search-content .iconfont{
		font-size: 24px;
	}
	.mint-navbar .mint-tab-item.is-selected{
		color:#05AF10;
		border-bottom:1px solid #05AF10;
	}
	.scroll{
		margin-top: 3px;
	}
	.list-inner{
		padding:0px 15px;
	}

</style>