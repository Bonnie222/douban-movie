<template>
	<div id="movie-comment">
		<!-- <div class="type-title"></div> -->
		<ul>
			<li class="comment-item" v-for="(comment,index) in movieComments">
				<div class="avatar">
					<img v-lazy="comment.author.avatar" width="36" height="36">
				</div>
				<div class="content">
					<h1 class="name">{{ comment.author.name }}</h1>
					<Star :size="24" :score="comment.rating.value"></Star>
					<p class="text">{{ comment.content }}</p>
					<span class="createdate">{{ comment.created_at }}</span>
					<div class="useful-count">
						<i class="iconfont"></i>{{ comment.useful_count }}
					</div>
				</div>
			</li> 
		</ul>
		<div class="allcomment">
			<span>全部短评{{ commentsCount }}条</span>
		</div>
	</div>
</template>
<script>
	import Star from './../base/star/star'
	export default{
		props:{
			movieComments:{ type:Array, default:[] },
			commentsCount:{ type:Number, default:0 }
		},
		components:{
			Star
		}
	}
</script>
<style scoped>
	#movie-comment{
		margin-top:3px;
		padding:20px;
		background:#ffffff;
	}
	/*.type-title{
		font-size: 16px;
		margin-bottom: 15px;
	}*/
	.comment-item{
		display: flex;
		margin-bottom: 20px;
	}
	.comment-item .avatar{
		flex:0 0 36px;
		width: 36px;
		margin-right:12px;
	}
	.comment-item .avatar img{
		border-radius: 50%;
	}
	.comment-item .content{
		flex:1;
		position: relative;
		font-size: 14px;
		color: #333;
	}
	.comment-item .content .name{
		display: inline-block;
		line-height: 25px;
		margin-right: 5px;
	}
	.comment-item .content .Star{
		display: inline-block;
	}
	.comment-item .content .text{
		line-height: 20px;
	}
	.comment-item .content .createdate{
		font-size: 12px;
		color: #777;
		line-height: 25px;
	}
	.comment-item .content .useful-count{
		position: absolute;
		color: #777;
		top:5px;
		right: 5px;
	}
	.comment-item .content .useful-count.like{
		color: #05AF10;
	}
	.allcomment{
		font-size: 14px;
		color: #05AF10;
		text-align: center;
		padding-bottom: 10px;
	}
</style>