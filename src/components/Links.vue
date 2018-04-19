<template>
	<div>
		<el-row id="links-content">
			<el-col :span="24">
				<h1>LINKS</h1>
			</el-col>

			<el-col :span="20" :offset="2" id="link-icons">
				<a target="_blank" href="http://amzn.asia/gCnXmf9"><img draggable="false" src="icons/amazon.png" /></a>
				<a target="_blank" href="https://www.facebook.com/profile.php?id=100006795931980"><img draggable="false" src="icons/facebook.png" /></a>
				<a target="_blank" href="https://twitter.com/dasisyouyu213"><img draggable="false" src="icons/twitter.png" /></a>
				<a target="_blank" href="https://github.com/dasisyouyu"><img draggable="false" src="icons/github.png" /></a>
				<a target="_blank" href="https://qiita.com/dasisyouyu"><img draggable="false" src="icons/qiita.png" /></a>
				<a plain @click="open3" style="cursor: pointer"><img draggable="false" src="icons/thumb-up.png" /></a>
			</el-col>

			<el-col v-model="point_num" v-if="secret_card_flag">
				<el-dialog
					id="secret_dialog"
					:modal-append-to-body="false"
				  title="おめでとう！"
				  :visible.sync="center_dialog_visible"
				  width="30%"
				  center>
				  <span>どうやら君は相当暇人のようだ。そんな暇人の君には僕のおすすめボードゲームを紹介しよう</span>
				  <span slot="footer" class="dialog-footer">
				    <el-button @click="center_dialog_visible = false; point_num=0">閉じる</el-button>
				  </span>
				</el-dialog>

				<div id="cards">
					<el-card :body-style="{ padding: '0px' }">
						<img draggable="false" src="/images/zinnrou.png" class="secret_image">
						<div style="padding: 14px;">
							<span>ワンナイト人狼</span>
							<div class="bottom clearfix">
								<el-button type="primary" class="button">購入</el-button>
							</div>
						</div>
					</el-card>

					<el-card :body-style="{ padding: '0px' }">
						<img draggable="false" src="/images/gokiburi-poker.jpg" class="secret_image">
						<div style="padding: 14px;">
							<span>ごきぶりポーカー</span>
							<div class="bottom clearfix">
								<el-button type="primary" class="button">購入</el-button>
							</div>
						</div>
					</el-card>

					<el-card :body-style="{ padding: '0px' }">
						<img draggable="false" src="/images/ojamamono.jpeg" class="secret_image">
						<div style="padding: 14px;">
							<span>お邪魔者</span>
							<div class="bottom clearfix">
								<el-button type="primary" class="button">購入</el-button>
							</div>
						</div>
					</el-card>

					<el-card :body-style="{ padding: '0px' }">
						<img draggable="false" src="/images/esegeijutuka.jpeg" class="secret_image">
						<div style="padding: 14px;">
							<span>エセ芸術家 ニューヨークへ行く</span>
							<div class="bottom clearfix">
								<el-button type="primary" class="button">購入</el-button>
							</div>
						</div>
					</el-card>

					<el-card :body-style="{ padding: '0px' }">
						<img draggable="false" src="/images/sasuraba.png" class="secret_image">
						<div style="padding: 14px;">
							<span>さすらば汝は恵まれん</span>
							<div class="bottom clearfix">
								<el-button type="primary" class="button">購入</el-button>
							</div>
						</div>
					</el-card>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'Links',
	  data: function() {
	    return {
				point_num: 0,
				center_dialog_visible: false,
				secret_card_flag: false
	    }
	  },
		methods: {
			open3() {
				this.$notify({
					title: 'Point UP!',
					message: 'おめでとう１ポイントゲットだ！',
					type: 'success',
					duration: 1500
				});

				if (this.point_num >= 50) {
					this.center_dialog_visible = true;
					this.secret_card_flag = true;
				}else{
					this.point_num++
				}
			}
		},
		mounted: function() {
			this.$emit('parent_event', 'links', this.posY = this.$el.getBoundingClientRect().top + window.pageYOffset);
		}
	}
</script>

<style scoped>
	#links-content {
		text-align: center;
		width: 100%;
	}

	#link-icons > a > img {
		width: 50px;
    margin: 5px;
	}

	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}

	.button {
		padding: 0;
		width: 100%;
		height: 25px;
	}

	.secret_image {
		width: 100%;
		display: block;
	}

	.clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both;
  }

	#secret_dialog {
		z-index: 3000;
	}

	#cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	#cards > .el-card {
		width: 12%;
		margin: 2%;
		min-width: 179px;
		height: 100%;
	}
</style>
