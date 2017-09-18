<template>
	<div id="movie-detail">
		<div class="fixed-title">
			<span class="back" @click="back">
				<i class="iconfont icon-back"></i>
			</span>
			<span class="type" ref="fixed">
				<span class="icon">
					<i class="iconfont icon-fangying"></i>
					电影
				</span>
				<!-- <span class="movie-name" v-text="movieDetail.title"></span> -->
			</span>
		</div>

		<div class="movie-detail" :data="movieDetail">
			<div class="scroll-wrapper">
				<div class="scroll-content" v-if="movieDetail.images">
					<div class="bg-image">
						<img v-lazy="movieDetail.images.large"/>
					</div>
					<Movie-Info :movieDetail="movieDetail"></Movie-Info>

					<div class="comments">
						<mt-navbar v-model="selected">
						  <mt-tab-item id="1">短评</mt-tab-item>
						  <mt-tab-item id="2">影评</mt-tab-item>
						</mt-navbar>

						<!-- tab-container -->
						<mt-tab-container v-model="selected">
						  <mt-tab-container-item id="1">
						    	 <Movie-Comment :movieComments="movieDetail.popular_comments" :commentsCount="movieDetail.comments_count"></Movie-Comment> 
						  </mt-tab-container-item>
						  <mt-tab-container-item id="2">
						    	<Movie-Review :movieReviews="movieDetail.popular_reviews" :reviewsCount="movieDetail.reviews_count"></Movie-Review>
						  </mt-tab-container-item>
						</mt-tab-container>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { api } from './../../global/api';
	import Vue from 'vue';
	import { mapGetters } from 'vuex';
	import { commonParams } from './../../global/config';

	import MovieInfo from './movie-info';
	import MovieComment from './movie-comment';
	import MovieReview from './movie-review';

	export default{
		name:'movieDetail', // 创建name属性用于keep-alive组件定位本组件防止缓存
		data(){
			return{
				movieDetail: {},
				selected:"1"
			}
		},
		components:{
			"Movie-Info":MovieInfo,
			"Movie-Comment":MovieComment,
			"Movie-Review":MovieReview
		},
		computed: {
	      ...mapGetters([
	        'movie'
	      ])
	    },
		mounted(){
			var vm = this;
			vm.getMovieDetail(); //获取电影详细
		},
		methods:{
			back() { // 回退到上一页面
		        this.$router.back();
		    },
		    //获取正电影详细
			getMovieDetail(){
				var vm = this;
				vm.listLoading = true;
				console.log("电影ID",vm.movie.id);
				if(!vm.movie.id){
					vm.$router.push('/movie-hot');
					return;
				}
				
				// const apikey = '?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd';
				const apikey = "?apikey=" +commonParams.apikey;
				Vue.http.get(api.subject_id+vm.movie.id + apikey ).then(function(res){
						var data = res.body;
						console.log("电影详情",data);
						

						if(data){
							vm.movieDetail= data;
							console.log("列表数据",vm.movieDetail);

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
			}
		}
	}
</script>
<style scoped>
	#movie-detail{
		position: relative;
		z-index: 10;
	}
	.fixed-title{
		position: fixed;
		top:0;
		width: 100%;
		height: 40px;
		z-index: 100;
		background-color: rgba(85, 85,85,0.6);
		text-align: center;
		font-size: 16px;
	}
	.fixed-title .back{
		position: absolute;
		top:0px;
		z-index: 50;
		left: 6px;
	}
	.fixed-title .back .icon-back{
		display: block;
		padding: 10px;
		font-size: 22px;
		color: #ffffff;
	}
	.fixed-title .type .icon{
		position: absolute;
		left: 45%;
		top:0;
		color: #ffffff;
		display: block;
		padding: 10px;
		/*transform: translateX(-50%);*/
	}
	.fixed-title .type .icon-fangying{
		display: inline-block;
		/*vertical-align: text-bottom;*/
		font-size: 18px;
	}
	.fixed-title .type .title{
		display: block;
        padding-top: 11px; 
        width: 100%;
        color: #ffffff;
	}
	.movie-detail{
		/*position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;*/
		background-color: #ffffff;
	}
	.movie-detail .bg-image{
		text-align: center;
		padding: 50px 0 20px 0;
		background-color: #555555;
	}
	.movie-detail .bg-image img{
		width: 50%;
	}
	.comments{
		padding:0 20px;
	}
	.mint-navbar .mint-tab-item.is-selected{
		color:#05AF10;
		border-bottom:2px solid #05AF10;
	}

</style>