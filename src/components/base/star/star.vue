<template>
  <div class="star" :class="starType">
    <span v-if="score || needNullStar" v-for="item in itemClasses" class="star-item" :class="item"></span>
    <span v-if="!score" class="no-score" :class="{'block':needNullStar}">暂无评分</span>
    <span v-if="showScore && score" class="show-score">{{normalizeScore}}</span> 
  </div>
</template>
<script type="text/ecmascript-6">
  const LENGTH = 5;
  const CLS_ON = 'on';
  const CLS_HALF = 'half';
  const CLS_OFF = 'off';
  export default {
    props:{
        size:{ type:Number, default:24 },
        score:{ type:Number, default:0 },
        showScore:{ type:Boolean, default:false },
        needNullStar:{ type:Boolean,default:false }
    },
  	data(){
  		return{

  		}
  	},
    computed: {
      normalizeScore() { // 数位补零
        let len = this.score.toString().length;
        if (len < 2) {
          return `${this.score}.0`;
        }
        return this.score;
      },
      starType() {
        return 'star-' + this.size;
      },
      itemClasses() {
        let result = [];
        let score = Math.floor(this.score) / 2;
        let hasDecimal = score % 1 !== 0;
        let integer = Math.floor(score);
        for (let i = 0; i < integer; i++) {
          result.push(CLS_ON);
        }
        if (hasDecimal) {
          result.push(CLS_HALF);
        }
        while (result.length < LENGTH) {
          result.push(CLS_OFF);
        }
        // console.log(result);
        return result;
      }
    }
  }
</script>
<style scoped>
	.star{
		font-size: 0;
	}
  .star .no-score{
    font-size:12px;
  }
  .star .no-score .block{
    display: block;
    font-size: 12px;
    text-align: center;
    padding: 15px 0 10px 0;
  }
  .star .show-score{
     display: inline-block;
     font-size:12px;
  }
  .star .star-item{
    display: inline-block;
    background-repeat: no-repeat;
  }
  .star-24 .star-item{
    height: 10px;
    width: 10px;
    margin-right: 3px;
    background-size: 10px 10px;
  }
  .star-24 .star-item:last-child{
    margin-right: 0;
  }
  .star-24 .star-item.on{
    background-image: url('./star24_on@2x.png');
  }
  .star-24 .star-item.half{
     background-image: url('./star24_half@2x.png');
  }
   .star-24 .star-item.off{
     background-image: url('./star24_off@2x.png');
  }
  .star-36.star-item{
    height: 15px;
    width: 15px;
    margin-right: 6px;
    background-size: 15px 15px;
  }
  .star-36 .star-item:last-child{
    margin-right: 0;
  }
  .star-36 .star-item.on{
    background-image: url('star36_on@2x.png');
  }
   .star-36 .star-item.half{
     background-image: url('star36_half@2x.png');
  }
   .star-36 .star-item.off{
     background-image: url('star36_off@2x.png');
  }
</style>