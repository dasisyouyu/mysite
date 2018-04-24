<template>
	<div>
		<el-row id="works-content">
			<el-col :span="24">
				<h1>WORKS</h1>
			</el-col>

			<el-col :span="18" :offset="3">
				<el-table :data="workData" style="width: 100%" :row-class-name="'workTableStyle'">
					<el-table-column type="expand">
						<template slot-scope="props">
							<p>内容とか感想: {{ props.row.detail }}</p>
							<p>メンバー: {{ props.row.member }}</p>
							<p>技術: {{ props.row.tech }}</p>
						</template>
					</el-table-column>
					<el-table-column
						label="Title"
						prop="title">
					</el-table-column>
				</el-table>
			</el-col>

			<el-col :span="24">
				<h1>PHOTO GALLERY</h1>
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
				workData: [{
					title: 'unityスマホゲーム作成',
					detail: '合宿から始まってリリースするまで色々ありました。。。動作確認が一番辛かった。',
					member: '４名〜',
					tech: 'unity, C#, Photon'
				}, {
					title: '某会社HP作成',
					detail: 'reactやりたいねということでレスポンシブなサイトを１から勉強して専務とデザイナーさん、バイトの方の約４人で作りました。\n当初開発を任せられてどこまで自分のイメージに作っていいのかわからず苦労しました。',
					member: '４名〜',
					tech: 'react.js, materializecss'
				}, {
					title: 'このサイト',
					detail: '転職をきっかけにポートフォリオとして作成しました。\nvue素晴らしい・・・。',
					member: 'me',
					tech: 'vue.js, elementUI'
				},{
					title: 'pawoo_music_extension',
					detail: 'https://chrome.google.com/webstore/detail/pawoomusicextension/iljljahpljpmhomafdlbifgbgmaocbic?hl=ja \n pawoo用のchrome拡張機能。全然アップデートしてません。',
					member: 'me',
					tech: 'chrome.*API'
				}]
	    }
	  },
		mounted: function() {
			this.$emit('parent_event', 'works', this.posY = this.$el.getBoundingClientRect().top + window.pageYOffset);
		}
	}
</script>

<style>
.workTableStyle {
	background-color: 'red';
	color: #d7e86a;
}
</style>

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
