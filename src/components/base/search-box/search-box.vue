<template>
	<div class="search-box">
		<i class="iconfont icon-sousuo"></i>
		<input type="text" class="box" :placeholder="placeholder" v-model="query" ref="query">
		<span class="cansel" @click="back">取消</span>
	</div>
</template>
<script>
	export default{
		props:{
			placeholder:{ type:String, default:'搜索电影/影人' },
			tagSearch:{ type:Boolean,default:false }
		},
		data(){
			return{
				query:''
			}
		},
		methods:{
			//返回上一级
			back(){
				this.$router.back();
			},

			//搜索内容
			setQuery(query){
				this.query = query;
			},

			//清空
			clear(){
				this.query = '';
			},

			//失去焦点
			blur(){
				this.$refs.query.blur();
			},
			//聚集焦点
			focus(){
				this.$refs.query.focus();
			}
		},
		wacth:{
			query(newQuery){   //节流操作
				if(!this.tagSearch){
					if(this.timer){
						clearTimeout(this.timer);
					}
					this.timer = setTimeout(()=>{
						this.$emit('query',newQuery);
					},200);
				}else{   //标签搜索不需要节流
					this.$emit('query',newQuery);
				}
			}
		}
	}
</script>
<style scoped>
	.search-box{
		box-sizing:border-box;
		width: 100%;
		display: flex;
		align-items:center;
		padding: 10px 0 10px 20px;
		height: 50px;
		background-color: #42bd56;
	}
	.search-box .icon-sousuo{
		position: absolute;
		top:18px;
		left:28px;
		font-size: 18px;
		color: #777;
	}
	.search-box .box{
		flex:75% 0 0;
		padding-left: 30px;
		height: 30px;
		line-height: 30px;
		border-radius: 5px;
		background-color: #ffffff;
		color: #333;
		font-size: 14px;
		caret-color:#42bd56;
	}
	.search-box .box::placeholder{
		color: #777;
	}
	.search-box .cansel{
		flex:1;
		text-align: center;
		font-size: 16px;
		color: #ffffff;
	}
</style>