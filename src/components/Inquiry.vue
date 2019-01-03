<template>
	<div>
		<el-row id="inquiry-content">
			<el-col :span="24">
				<h1>INQUIRY</h1>
			</el-col>

      <el-col :span="8" :offset="8">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfnzN5ccKBDoux9fSxeqUU5khj-w5mVVQX8CzUriVOufY6mag/viewform?embedded=true" width="640" height="659" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます...</iframe>
      </el-col>
		</el-row>
	</div>
</template>

<script>
import axios from 'axios';

	export default {
		name: 'Inquiry',
		mounted: function() {
			this.$emit('parent_event', 'inquiry', this.posY = this.$el.getBoundingClientRect().top + window.pageYOffset);
		}
	}
</script>

<style scoped>
	#inquiry-content {
		text-align: center;
		width: 100%;
	}
</style>
