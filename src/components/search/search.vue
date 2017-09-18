<template>
	<div id="search">
		<Search-Box></Search-Box>
		<!-- <div class="fixed-title" >
			<span class="back" @click="back">
				<i class="iconfont icon-back"></i>
			</span>
			<span class="type">
				<span>关于xxx的电影</span>
			</span>
		</div> -->
		<div class="shortcut-wrapper">
			<div class="shortcut">
				<div>
					<div class="tag-list">
						<div class="douban-tag tag">
							<span class="tag-item" v-for="item in doubanTag">{{ item }}</span>
						</div>
						<div class="movie-tag tag">
							<span class="tag-item" v-for="item in movieTag">{{ item }}</span>
						</div>
						<div class="country-tag tag">
							<span class="tag-item" v-for="item in countryTag">{{ item }}</span>
						</div>
					</div>
					<div class="search-history">
						<h1 class="title">
							<span class="text">搜索历史</span>
							<span class="clear">
								<i class=""></i>
							</span>
						</h1>
						<div class="history-list"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="search-result">
			<div class="suggest"></div>
		</div>
		<div class="confrim"></div>
	</div>
</template>
<script>
	import SearchBox from './../base/search-box/search-box';
	export default{
		name:'search',
		data(){
			return{
				doubanTag: ['经典', '豆瓣高分', '冷门佳片'],
		        movieTag: ['剧情', '爱情', '喜剧', '科幻', '动作', '悬疑', '治愈', '青春', '文艺'],
		        countryTag: ['日本', '韩国'],

			}
		},
		components:{
			"Search-Box":SearchBox
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
	/*.fixed-title{
		border-bottom: 1px solid #ccc;
	}*/
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
	}
	.shortcut-wrapper .shortcut .tag-list .tag:last-child{
		border-bottom: 1px solid green;
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
</style>