<template>
	<div id="suggest-wrapper">
		<div class="to-top" v-show="result.length" @click="toTop">
			<span>返回顶部</span>
		</div>
		<div class="suggest" :data="result" ref="suggest">
			<ul class="suggest-list">
				<li class="suggest-item">
					<div class="item-pic">
						<img width="50" height="70">
					</div>
					<div class="item-info">
						<div class="title"></div>
						<div class="info">
							<span class="rating"></span>
							<span class="pubdate"></span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	const SEARCH_MORE = 20;
	export default{
		props:{
			query:{ type:String, default:'' },
			tagSearch:{ type:Boolean,default:false }
		},
		data(){
			return{
				result:[], //搜索结果

				listLoading: true,
				searchIndex: 0,
			}
		},
		mounted(){
			//this.getresultlist();
		},
		methods:{
			//返回顶部
			toTop(){
				this.$refs.suggest.scrollTo(0,0,200);
			},
			//获得搜索结果
			getresultlist(){
				var vm = this;
				vm.listLoading = true;

				//请求参数
				let par = {
					"tag":vm.query
				}
				console.log(vm.query);
				//jsonp请求方式
				// vm.$http.jsonp('https://api.douban.com/v2/movie/search',{params:par}).then(function(res){

				// 	console.log("result",res);
				// })

			}
		},
		wacth:{
			query(){
				if(this.query){
					console.log(this.query);
					this.result = [];
					this.getresultlist();  //获取结果
				}
			}
		}
	}
</script>
<style scoped>
	#suggest-wrapper{
		height: 100%;
	}
	.to-top{
		box-sizing:border-box;
		height: 22px;
		position: fixed;
		right: 0;
		top:80%;
		z-index: 800;
		padding: 5px;
		background: #42bd56;
		text-align: center;
		font-size: 12px;
		color: #ffffff;
	}
	.suggest{
		height: 100%;
		overflow: hidden;
	}
	.suggest .suggest-list{
		padding: 15px;
	}
	/*.suggest .suggest-list .su*/
</style>