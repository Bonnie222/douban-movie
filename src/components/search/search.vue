<template>
	<div id="search">
		<Search-Box @query="onQueryChange" :tagSearch="tagSearch" ref="searchBox" v-show="!tagSearch"></Search-Box>
		<div class="fixed-title" v-show="tagSearch">
			<span class="back" @click="back">
				<i class="iconfont icon-back"></i>
			</span>
			<span class="type">
				<span>关于{{ query }}的电影</span>
			</span>
		</div>
		<div class="shortcut-wrapper" v-show="!query">
			<div class="shortcut">
				<div>
					<div class="tag-list">
						<div class="douban-tag tag">
							<span class="tag-item" v-for="item in doubanTag" @click="tagQuery(item)">{{ item }}</span>
						</div>
						<div class="movie-tag tag">
							<span class="tag-item" v-for="item in movieTag" @click="tagQuery(item)">{{ item }}</span>
						</div>
						<div class="country-tag tag">
							<span class="tag-item" v-for="item in countryTag" @click="tagQuery(item)">{{ item }}</span>
						</div>
					</div>
					<div class="search-history">
						<h1 class="title">
							<span class="text">搜索历史</span>
							<span class="clear">
								<i class="iconfont icon-shanchu"></i>
							</span>
						</h1>
						<!-- <History-List :searches="searchHistory"></History-List> -->
					</div>
				</div>
			</div>
		</div>
		<div class="search-result" v-show="query" :class="{'tagSearch':tagSearch}">
			<Suggest :query="query" :tagSearch="tagSearch"></Suggest>
		</div>
		<div class="confrim"></div>
	</div>
</template>
<script>
	import SearchBox from './../base/search-box/search-box';
	import HistoryList from './../base/history-list/history-list';
	import Suggest from './../suggest/suggest'
	export default{
		name:'search',
		data(){
			return{
				doubanTag: ['经典', '豆瓣高分', '冷门佳片'],
		        movieTag: ['剧情', '爱情', '喜剧', '科幻', '动作', '悬疑', '治愈', '青春', '文艺'],
		        countryTag: ['日本', '韩国'],
		        tagSearch:false,

		        query:'',
		        tagSearch:false

			}
		},
		components:{
			"Search-Box":SearchBox,
			"History-List":HistoryList,
			"Suggest":Suggest
		},
		methods:{
			back(){
				//清楚搜索项
				this.tagSearch = false;
				this.query = '';
				// this.$refs.searchBox.clear();
			},
			// 搜索框查询改变
			onQueryChange(query){
				this.query = query;
			},

			//搜索标签内容，按标签搜索
			tagQuery(query){
				//隐藏搜索栏，区分关键字搜索和标签搜索
				this.tagSearch = true;
				this.query = query;
				// this.$refs.searchBox.setQuery(query);
			}
		}
	}
</script>
<style scoped>
	#search{
		position: fixed;
		z-index: 500;
		top:0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ffffff;	
	}
	.fixed-title{
		border-bottom: 1px solid #ccc;
		position: fixed;
		top:0;
		width: 100%;
		height: 50px;
		z-index: 200;
		background:#ffffff; 
	}
	.fixed-title .back{
		position: absolute;
		top: 0;
		left: 6px;
		z-index: 50;
	}
	.fixed-title .back .icon-back{
		display: block;
		padding: 15px;
		font-size: 24px;
		color: #42bd56;
	}
	.fixed-title .type{
		line-height: 55px;
		font-size: 16px;
		padding-left: 60px;
		color: #333;
	}
	.shortcut-wrapper{
		position: fixed;
		top:50px;
		bottom: 0;
		width: 100%;
	}
	.shortcut-wrapper .shortcut{
		height: 100%;
		overflow: hidden;
	}
	.shortcut-wrapper .shortcut .tag-list{
		padding:0 15px;
		width: 90%;
	}
	.shortcut-wrapper .shortcut .tag-list .tag{
		border-bottom: 1px solid #ccc;
		padding: 15px 0;
	}
	.shortcut-wrapper .shortcut .tag-list .tag:last-child{
		border-bottom: 1px solid #42bd56;
	}
	.shortcut-wrapper .shortcut .tag-list .tag.movie-tag{
		margin-bottom: 15px;
	}
	.shortcut-wrapper .shortcut .tag-list .tag .tag-item{
		display: inline-block;
		margin-right: 15px;
		padding: 8px 16px;
		font-size: 14px;
		color: #42bd56;
		border: 1px solid #42bd56;
		border-radius: 10px;
	}

	.shortcut-wrapper .shortcut .search-history{
		position: relative;
		margin:20px 20px 0 20px;
	}
	.shortcut-wrapper .shortcut .search-history .title{
		display: flex;
		align-items:top;
		height: 40px;
		font-size: 18px;
	}
	.search-history .title .text{
		flex:1;
		color:#42bd56; 
	}
	.search-history .title .clear .icon-shanchu{
		font-size: 24px;
		color:#42bd56; 
	}
</style>