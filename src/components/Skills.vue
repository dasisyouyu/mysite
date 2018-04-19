<template>
	<div>
		<el-row id="skill-content">
			<el-col :span="24">
				<h1>SKILLS</h1>
			</el-col>

			<el-col :offset="8" :span="8" id="tag-search">
				<el-input
			    placeholder="Search skill"
			    prefix-icon="el-icon-search"
			    v-model="search">
  			</el-input>
			</el-col>
			<el-col :offset="2" :span="20">
				<div class="tag" v-for="post in filteredList">
					<el-tag>{{ post }}</el-tag>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'Skills',
	  data() {
			return {
				posY: null,
				search: '',
				postList: [
					'Vue.js',
					'JQuery',
					'React.js',
					'Nodejs',
					'npm',
					'git',
					'parcel',
					'yarn',
					'poi',
					'GeneXus',
					'SublimeText3',
					'Atom',
					'vim',
					'visual studio code',
					'Unity',
					'さくらエディタ',
					'MySQL',
					'SQLserver',
					'mongoDB',
					'DB2',
					'JavaScript',
					'PHP',
					'Java',
					'Perl',
					'Ruby',
					'C#',
					'Mac',
					'Windows',
					'Linux(CentOS,ubuntu)',
					'slack',
					'backlog',
					'trello',
					'gitlab',
					'gulp'
				]
			}
		},
		computed: {
			filteredList() {
				return this.postList.filter(post => {
					return post.toLowerCase().includes(this.search.toLowerCase())
				})
			}
		},
		mounted: function() {
			this.$emit('parent_event', 'skills', this.posY = this.$el.getBoundingClientRect().top + window.pageYOffset);
		}
	}
</script>

<style scoped>
	#skill-content {
		text-align: center;
		width: 100%;
	}

	.tag {
		all: initial;
	}

	.tag > .el-tag {
		margin: 4px;
		color: #024864;
		background-color: rgba(28, 96, 131, 0.3);

	}

	#tag-search {
		margin-bottom: 15px;
		color: inherit;
	}
</style>
