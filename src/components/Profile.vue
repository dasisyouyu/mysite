<template>
	<div v-once>
		<el-row id='profile-content'>
			<el-col :xs="24" :sm="24" :md="{offset:2, span:20}" :lg="{offset:3, span:18}" :xl="{offset:4, span:16}">
				<img draggable="false" id="profile-image" src="images/profile-image.jpg" />
			</el-col>

			<el-col :span="20" :offset="2">
				<h1>PROFILE</h1>
				<p>
					社会不適合なエンジニア。映画・アニメなどが好き 体がでかい。
				</p>
			</el-col>

			<el-col :span="24" id="detail">
				<p>
					<span class="content">shota imamoto</span><br />
					<span class="content">23</span><br />
					<span class="content">male</span><br />
					<span class="content">Ichikawa, Chiba</span><br />
				</p>
			</el-col>

			<el-col :span="20" :offset="2" id="tags">
				<el-tag type="warning">釣り</el-tag>
				<el-tag type="warning">アニメ</el-tag>
				<el-tag type="warning">映画</el-tag>
				<el-tag type="warning">水泳</el-tag>
				<el-tag type="warning">プログラミング</el-tag>
				<el-tag type="warning">計画から行動までがクソ早い</el-tag>
				<el-tag type="warning">旅行したい</el-tag>
				<el-tag type="warning">絵</el-tag>
				<el-tag type="warning">動画編集</el-tag>
				<el-tag type="warning">egoist</el-tag>
				<el-tag type="warning">東のエデン</el-tag>
				<el-tag type="warning">Angel Beats!</el-tag>
				<el-tag type="warning">Vtuber界隈見てる</el-tag>
				<el-tag type="warning">LOL</el-tag>
				<el-tag type="warning">fortnite</el-tag>
				<el-tag type="warning">サカナクション</el-tag>
				<el-tag type="warning">amazarashi</el-tag>
				<el-tag type="warning">PUBG</el-tag>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name: 'Profile',
  data: function() {
    return {

    }
  },
	mounted: function() {
		this.$emit('childs-event', 'profile', this.posY = this.$el.getBoundingClientRect().top + window.pageYOffset);
	}
}
</script>


<style scoped>
	#profile-image {
	  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
		width: 30%;
	}

	#profile-content {
		text-align: center;
	}

	#tags > .el-tag {
		margin: 4px;
		background-color: rgba(230,162,60,.3);
	}
</style>
