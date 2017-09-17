<template>
	<div id="movie-info">
		<div class="overall">
			<div class="desc">
				<h2 class="title">{{ movieDetail.title }}</h2>
				<span class="tag">{{ tags }}</span>
				<span class="original-title">原名:{{ movieDetail.original_title }}</span>
				<span class="pubdate">上映时间:{{ pubdate }}</span>
				<span class="duration">片长:{{ movieDetail.durations[0] }}</span>
			</div>
			<div class="rank">
				<span class="origin">豆瓣评分</span>
				<span class="rating" v-if="rating">{{ normalizeScore() }}</span>
				<Star :size="24" :score="movieDetail.rating.average" :needNullStar="needNullStar"></Star>
				<span class="num" v-if="rating">{{ movieDetail.ratings_count }}人</span>
			</div>
		</div>

		<div class="operate">
			<div class="want-watch" v-text="wantedText" ></div>
			<div class="has-watched">
				<img src="./avatar.jpg" alt="" v-show="hasWatched" width="25" height="25"/>{{ watchedText }}
			</div>
		</div>

		<div class="summary">
			<h2 class="title">剧情简介</h2>
			<p class="content">&nbsp;&nbsp;&nbsp;&nbsp;{{ movieDetail.summary }}</p>
		</div>
		<div class="casts" >
			<div class="casts-content">
				<h2 class="title">影人</h2>
				<div class="cast-item" v-for="item in allcasts">
					<img v-lazy="item.avatars.large" width="90" height="120">
					<h3 class="item-title">{{ item.name }}</h3>
					<span v-if="item.isDirector">导演</span>
				</div>
				<div class="no-result" v-if="!allcasts.length">
					抱歉，暂无影人信息
				</div>
			</div>
		</div>

	</div>
</template>
<script>
	import Star from './../base/star/star';
	export default{
		props:{
			movieDetail:{ type:Object,default:{} }
		},
		data(){
			return{
				needNullStar:true,
				wantedText:"想看",
				hasWatched:false,
				watchedText: '看过 ☆☆☆☆☆'


			}
		},
		computed:{
			//电影标签
			tags(){
				var vm =this;
				let year = vm.movieDetail.year;
				let type = vm.movieDetail.genres.join("/");
				let tag = year+"/"+type;
				return tag;
			},

			//上映时间
			pubdate(){
				var vm = this;
				let pubdate ='';
				let date = vm.movieDetail.pubdates;
				for(let i=0; i < date.length; i++){
					if(date[i].indexOf('电影节') === -1){
						pubdate = date[i];
						//没有在中国大陆上映，取不为电影节的最后一个信息
					}
					if(date[i].indexOf('中国大陆') > -1){
						pubdate = date[i];
						break;
					}
				}
				if(!pubdate){
					pubdate = "暂无信息";
				}
				return pubdate;
			},
			//是否有分数 
			rating() {
		        let rating = this.movieDetail.rating.average;
		        if (rating === 0) {
		          return false;
		        }
		        return true;
		      },

		      //获取导演和演员的分组
		      allcasts(){
		      	let removeIndex = [];
		      	this.movieDetail.directors.forEach((item,index) => {
		      		item.isDirector = true;
		      		if( item.avatars === null ){  // 有的导演不存在照片
		      			removeIndex.push(index);
		      		}
		      	});
		      	for(let i = removeIndex.length;i > 0; i--){  // 移除信息不完全的导演
		      		this.movieDetail.directors.splice(removeIndex[i-1],1);
		      	}

		      	removeIndex = []; //重置移除清单
		      	this.movieDetail.casts.forEach((item,index) => {
		      		if(item.avatars === null){
		      			removeIndex.push(index);
		      		}
		      	});
		      	for(let i = removeIndex.length; i > 0;i--){
		      		this.movieDetail.casts.splice(removeIndex[i-1],1);
		      	}
		      	return this.movieDetail.directors.concat(this.movieDetail.casts);
		      }

		},
		methods:{
			normalizeScore() { // 数位补零
		        let len = this.movieDetail.rating.average.toString().length;
		        if (len < 2) {
		          return `${this.movieDetail.rating.average}.0`;
		        }
		        return this.movieDetail.rating.average;
		      },
		      //点击想看
		      // isWanted(id){
		      // 	const index = this.
		      // }
		},
		components:{
			Star
		}
	}
</script>
<style scoped>
	#movie-info{
		background-color: #ffffff;
		padding: 0 20px;
	}
	.overall{
		display: flex;
		height: 140px;
		justify-content:space-between;
	}
	.overall .desc{
		flex:70% 0 0;
		overflow: hidden;
		display: flex;
		flex-direction:column;
		justify-content:space-around;
	}
	.overall .desc .title{
		font-size: 18px;
		color: #333333;
		padding:10px 0 5px 0;
	}
	.overall .desc .original-title{
		white-space: nowrap;
	}
	.overall .desc span{
		font-size: 12px;
		color: #bbbbbb;
	}
	.overall .rank{
		height: 70px;
		margin-top: 15px;
		padding: 10px 15px;
		display: flex;
		flex-direction: column;
		align-items:center;
		justify-content:space-between;
		/*border: 1px solid #ccc;*/
		box-shadow: 0px 0px 5px #ccc;
		background-color: #f8f8f8;
	}
	.overall .rank span{
		font-size: 12px;
		color: #777;
	}
	.overall .rank span.rating{
		font-size: 18px;
		color: #333;
	}
	.operate{
		margin-top: 20px;
		line-height: 35px;
		height: 35px;
		display: flex;
		text-align: center;
		font-size: 16px;
		color: #42bd56;
	}
	.operate .want-watch{
		flex:1;
		border:1px solid #42bd56;
		border-radius: 5px;
		margin-right: 20px;
	}
	.operate .want-watch.wanted{
		border:1px solid #fe9800;
		color: #fe9800;
	}
	.operate .has-watched{
		flex:2;
		border:1px solid #42bd56;
		border-radius: 5px;
	}
	.operate .has-watched.watched{
		border:1px solid #fe9800;
		color: #fe9800;
	}
	.operate .has-watched img{
		display: inline-block;
		vertical-align: middle;
		padding-bottom: 2px;
		border-radius: 50%;
	}
	.summary{
		margin-top: 20px;
		padding-top: 20px;
		border-top:1px solid #ccc;
	}
	.summary .title{
		font-size: 12px;
	}
	.summary .content{
		padding-top: 10px;
		font-size: 14px;
		color: #777;
		line-height: 25px;
	}
	.casts{
		padding:30px 0;
		width: 100%;
		white-space: nowrap;
		font-size: 0;
		overflow: hidden;
		border-bottom: 1px solid #CCC;
	}
	.casts .casts-content .title{
		font-size: 12px;
		padding-bottom: 20px;
	}
	.casts .casts-content .cast-item{
		width: 90px;
		vertical-align: top;
		display: inline-block;
		text-align: center;
		margin-right: 8px;
		font-size: 12px;
	}
	.casts .casts-content .cast-item img{
		height: 120px;
		width: 90px;
	}
	.casts .casts-content .cast-item .item-title{
		color: #333;
		padding:8px 0 5px 0;
		white-space: nowrap;
	}
	.casts .casts-content .no-result{
		text-align: center;
		font-size: 12px;
		color:#42bd56; 
	}


</style>