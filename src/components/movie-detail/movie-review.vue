<template>
	<div id="movie-review">
		<!-- <div class="type-title"></div> -->
		<ul>
			<li class="review-item" v-for="(review,index) in movieReviews">
				<div class="content">
					<h1 class="title">{{ review.title }}</h1>
					<div class="user-info">
						<div class="avatar">
							<img v-lazy="review.author.avatar" alt="" width="25" height="25">
						</div>
						<span class="name">{{ review.author.name }}</span>
						<Star :size="24" :score="review.rating.value*2"></Star>
					</div>	 
					<p class="desc">{{ review.summary }}</p>
				</div>
				
			</li> 
		</ul>
		<div class="allreview">
			<span>全部影评{{ reviewsCount }} 条</span>
		</div>
	</div>
</template>
<script>
	import Star from './../base/star/star'
	export default{
		props:{
			movieReviews:{ type:Array, default:[] },
			reviewsCount:{ type:Number, default:0 }
		},
		components:{
			Star
		}
	}
</script>
<style scoped>
	#movie-review{
		margin-top:3px;
		padding:20px;
		background:#ffffff;
	}
	/*.type-title{
		font-size: 16px;
		margin-bottom: 15px;
	}*/
	.review-item{
		margin-bottom: 20px;
	}
	.review-item .content{
		font-size: 14px;
	}
	.review-item .content .title{
		font-size: 16px;
		color: #333;
		padding: 5px 0;
	}
	.review-item .content .user-info{
		padding: 5px 0;
	}
	.review-item .content .user-info .avatar{
		display: inline-block;
		vertical-align: middle;
		margin-right: 6px;
	}
	.review-item .content .user-info .avatar img{
		border-radius: 50%;
	}

	.review-item .content .user-info .name{
		display: inline-block;
		vertical-align: middle;
	}
	.review-item .content .user-info .Star{
		display: inline-block;
		vertical-align: middle;
	}
	.review-item .content .desc{
		line-height: 20px;
	}
	.allreview{
		font-size: 14px;
		color: #05AF10;
		text-align: center;
		padding-bottom: 10px;
	}
</style>