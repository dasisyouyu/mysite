<template>
	<div>
		<el-row id="inquiry-content">
			<el-col :span="24">
				<h1>Inquiry</h1>
			</el-col>

      <el-col :span="8" :offset="8">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm" label-position="top" netlify>
          <el-form-item label="name" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="contact" prop="contact">
            <el-input v-model="ruleForm.contact"></el-input>
          </el-form-item>
          <el-form-item label="content" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.formSuccess();
          } else {
            return false;
          }
        });
      },
      formSuccess() {
        this.$notify({
          title: '受け付けました',
          message: 'thx! contactにメールやSNSなどの連絡手段があれば返信します！',
          iconClass: 'el-icon-bell'
        });
      },
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
