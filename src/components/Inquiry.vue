<template>
	<div>
		<el-row id="inquiry-content">
			<el-col :span="24">
				<h1>Inquiry</h1>
			</el-col>

      <el-col :span="8" :offset="8">
        <el-form
				:model="ruleForm"
				:rules="rules"
				ref="ruleForm"
				label-width="120px"
				class="demo-ruleForm"
				label-position="top"
				method="post"
				netlify>
          <el-form-item label="name" prop="name">
            <el-input name="name" v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="contact" prop="contact">
            <el-input name="contact" v-model="ruleForm.contact"></el-input>
          </el-form-item>
          <el-form-item label="content" prop="desc">
            <el-input name="textarea" type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Send</el-button>
          </el-form-item>
        </el-form>
      </el-col>
		</el-row>
	</div>
</template>

<script>
import axios from 'axios';

	export default {
		name: 'Inquiry',
	  data: function() {
	    return {
        ruleForm: {
          name: '',
          contact: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 0, max: 100, message: 'Length should be 0 to 100', trigger: 'blur' }
          ],
          contact: [
            { required: true, message: 'Please input Activity contact', trigger: 'blur' },
            { min: 0, max: 300, message: 'Length should be 0 to 300', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: 'Please input activity form', trigger: 'blur' }
          ]
        }
	    }
	  },
    methods: {
      // submitForm(formName) {
				// let params = new URLSearchParams();
				// 		params.append('form-name', 'content', ...this.ruleForm);

      //   this.$refs[formName].validate((valid) => {
      //     if (valid) {
			// 			axios.post(
			// 				'/',
			// 				encode({ 'form-name': 'content', ...this.ruleForm }),
			// 				{
			// 					headers: { 'content-type': 'application/x-www-form-urlencoded' }
			// 				}
			// 			).then(r => {
			// 				this.formSuccess();
			// 			}).catch(e => {
			// 				this.formError();
			// 				this.error = true;
			// 			});
      //     } else {
      //       return false;
      //     }
      //   });
      // },
      // formSuccess() {
      //   this.$notify({
      //     title: '受け付けました',
      //     message: 'thx! contactにメールやSNSなどの連絡手段があれば返信します！',
      //     iconClass: 'el-icon-success'
      //   });
      // },
			// formError() {
			// 		this.$notify({
			// 			title: '送信に失敗しました。',
			// 			message: '何かしらのエラーが出てますね、、、Twitterなどでメンションを送ってくれ！ @dasisyouyu213',
			// 			iconClass: 'el-icon-error'
			// 		});
			// }
    // },
	},
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
