<template>
	<div id="movie-list">
		<ul>
			<li v-for="(movie,index) in listMovie" @click="selectItem(movie)" ref="group">
				<div class="date" v-if="needDate && !dateEqual(index)">{{ movie.date }}</div>
				<div class="item">
					<div class="info-img">
						<img v-lazy="movie.images.small" height="120" width="80">
					</div>
					<div class="info-desc">
						<p class="title">{{ movie.title }}</p>
						<Star :size="24" :score="movie.rating.average" :showScore="showScore"></Star>
						<div class="director">
							导演:<span v-for="item in movie.directors">{{ item.name }}</span>
						</div>
						<div class="casts">
							主演:<span v-for="item in movie.casts">{{ item.name }}&nbsp;</span>
						</div>
						<div class="hasWatched">{{movie.collect_count }}人看过</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	import Star from './../base/star/star';

	export default{
		props:{
			listMovie:{ type:Array, default:[] },
			needDate:{ type:Boolean, default:false },
			hasMore:{ type:Boolean, default:true }
		},
		data(){
			return{
				// listLoading:true,
				// //listMovie:null,
				// MovieTotal:null,
				// listQuery:{
				// 	pagesize:10,
				// 	currPage:1,
				// },

				small:null,
				average:0,
				showScore: true

			}
		},
		components:{
			Star
		},
		created() {
	      this.indexMap = {};
	    },
		methods:{
			selectItem(movie) {
		        this.$emit('select', movie);
		    },
			// 确定相邻两部电影日期是否一样，划分日期分组
			dateEqual(index) { 
		        if (index === 0) {
		          return false;
		        }
		        console.log(this.listMovie[index].date);
		        return this.listMovie[index].date === this.listMovie[index - 1].date;
		    },

		    // 根据日期创建电影分组
		    getMap() { 
		        let map = {};
		        for (let i = 0; i < this.listMovie.length; i++) {
		          if (map[this.listMovie[i].date]) {
		            map[this.listMovie[i].date].push(i);
		          } else {
		            map[this.listMovie[i].date] = [i];
		          }
		        }
		        this.indexMap = map;
		     }

		}
		
	}


</script>
<style scpoed>
	.date{
		width: 100%;
		background-color: red;
		padding-left:5px;
		height: 30px;
		line-height: 30px;
	}
	.item{
		display: flex;
		align-items:center;
		box-sizing:border-box;
		padding:15px 0;
	}
	.item .info-img{
		flex:80px 0 0;
		margin-right: 15px;
	}
	.item .info-desc{
		height:120px;
		flex:1;
		display: flex;
		flex-direction:column;
		justify-content:space-around;
		overflow: hidden;
	}
	.item .info-desc .title{
		font-size: 16px;
		color: #333;
	}
	.item .info-desc .director{
		font-size: 12px;
		color: #777777;
	}
	.item .info-desc .casts{
		font-size: 12px;
		color: #777777;
		white-space: nowrap;
	}
	.item .info-desc .hasWatched{
		color: #333333;
		font-size: 12px;
	}
</style>