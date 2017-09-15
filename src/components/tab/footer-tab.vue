<template>
	<div id="footer">
	  	<router-link tag="div" class="tab-item" to="/movie-hot">
     	    <span class="tab-icon">
        		<i class="iconfont icon-fangying"></i>
            </span>
      		<span class="tab-link">热映</span>
    	</router-link>   
	 
	  	<router-link tag="div" class="tab-item" to="">
      		<span class="tab-icon">
       			<i class="iconfont icon-lily-rank"></i>
      		</span>
      		<span class="tab-link">排行</span>
    	</router-link>	    
	
	    <router-link tag="div" class="tab-item" to="">
     	 	<span class="tab-icon">
        		<i class="iconfont icon-wode"></i>
      		</span>
      		<span class="tab-link">我的</span>
    	</router-link>  
    
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>
<style scoped>
	 #footer{
		position:fixed;
		bottom:0;
		width:100%;
		height: 60px;
		border-top:1px solid #05AF10;
		display: flex;  
		font-size: 20px;
	}
	.tab-item{
		flex:1;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		line-height: 24px;
	}
	.tab-icon {
		font-size: 24px;
	}
	.tab-icon .iconfont{
		font-size: inherit;
		color: #777676;
	}
	.tab-link{
		font-size:inherit;
		font-size: 16px;
	}
	/*.router-link-active{
		color:#05AF10;
	}*/
</style>