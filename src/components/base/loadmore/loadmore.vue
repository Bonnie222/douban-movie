<template>
	<div id="loadmore" :class="{'full':fullScreen}">
		<div class="hasmore" v-if="hasMore">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
		<div class="nomore" v-else>
			没有更多了...
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			fullScreen:{ type:Boolean,default:false },
			hasMore:{ type:Boolean,default:true }
		}
	}
</script>
<style scoped>
	#loadmore{
		width: 150px;
		height: 15px;
		margin:0 auto;
		text-align: center;
		padding-bottom: 10px;
	}
	#loadmore.full{
		position: absolute;
		top:50%;
		width: 100%;
		transform:translateY(-50%);
	}
	.hasmore{
		height: 100%
	}
	.hasmore span{
		display: inline-block;
		width: 15px;
		height: 100%;
		margin-right: 5px;
		background: #05AF10;
		animation:load 1.04s ease infinite;
	}
	.hasmore span:nth-child(1){
		animation-delay:0.13s;
	}
	.hasmore span:nth-child(2){
		animation-delay:0.26s;
	}
	.hasmore span:nth-child(3){
		animation-delay:0.39s;
	}
	.hasmore span:nth-child(4){
		animation-delay:0.52s;
	}
	.hasmore span:nth-child(5){
		animation-delay:0.65s;
	}
	.hasmore span:last-child{
		margin-right: 0px;
	}
	@keyframes load{
		0%{
			opacity: 1;
			transform:scale(1.2);
		},
		100%{
			opacity: 0.2;
			transform:scale(0.2);
		}
	}
	.nomore{
		font-size: 14px;
		color: #777;
	}
</style>