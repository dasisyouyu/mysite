<template>
	<div>
		<el-row id="works-content">
			<el-col :span="24">
				<h1>WORKS</h1>
			</el-col>

			<el-col :span="20" :offset="2">
				<el-carousel :interval="10000" type="card" height="350px">
			    <el-carousel-item v-for="item in 4" :key="item">
						<img v-bind:src="'./images/works-image'+item+'.jpg'" />
			    </el-carousel-item>
			  </el-carousel>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'Works',
	  data: function() {
	    return {

	    }
	  },
		mounted: function() {
			this.$emit('childs-event', 'works', this.posY = this.$el.getBoundingClientRect().top + window.pageYOffset);
		}
	}
</script>

<style scoped>
	#works-content {
		text-align: center;
		width: 100%;
	}

	.el-carousel__item > img {
		object-fit: cover;
    width: 100%;
    height: 100%;
	}
</style>
