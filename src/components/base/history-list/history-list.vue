<template>
	<div id="history-list">
		<ul>
			<li class="history-item">
				<span class="text"></span>
				<span class="icon">
					<i class="iconfont icon-chuyidong"></i>
				</span>
			</li>
		</ul>
		<div class="no-history" v-show="!searches.length">还没有搜索历史，快去搜索吧！</div>
	</div>
</template>
<script>
	export default{
		props:{
			searches:{ type:Array,default:[] }
		},
		methods:{

		}
	}
</script>
<style scoped>
	#history-list{
		
	}
	#history-list .history-item{
		display: flex;
		align-items:center;
		height: 40px;
		overflow: hidden;
	}
	#history-list .history-item .text{
		flex:1;
		font-size: 16px;
		color: #777;
	}
	#history-list .history-item .icon .icon-chuyidong{
		font-size: 18px;
		color: #777;
	}
	#history-list .no-history{
		height: 40px;
		line-height: 40px;
		text-align: center;
		font-size: 14px;
	}
</style>