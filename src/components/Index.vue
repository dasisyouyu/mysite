<template>
  <div>
    <router-view></router-view>

    <el-row class="hidden-xs-only">
      <el-col :span="24">
        <div id="step-list">
          <el-steps direction="vertical" :active="active" finish-status="success">
            <el-step title="Profile"></el-step>
            <el-step title="Skills"></el-step>
            <el-step title="Links"></el-step>
            <el-step title="Works"></el-step>
            <el-step title="Inquiry"></el-step>
          </el-steps>
        </div>
      </el-col>
    </el-row>

    <Profile class="block profile" @parent_event="AddComponentPosY" />
    <Skills class="block skills" @parent_event="AddComponentPosY" />
    <Links class="block links" @parent_event="AddComponentPosY" />
    <Works class="block works" @parent_event="AddComponentPosY" />
    <Inquiry class="block inquiry" @parent_event="AddComponentPosY" />
  </div>
</template>

<script>
  import Vue from 'vue'
  import Profile from './Profile'
  import Skills from './Skills'
  import Links from './Links'
  import Works from './Works'
  import Inquiry from './Inquiry'

  export default {
    name: 'Index',
    data() {
      return {
        active: 0,
        positions: {
          profile:'',
          skills:'',
          links:'',
          works:'',
          inquiry:''
        }
      };
    },
    watch: {
      '$window.scrollY': 'CurrentActiveStep'
    },
    methods: {
      scrollY: function () {
        return this.$window.scrollY;
      },
      AddComponentPosY: function(key, positionY){
        this.positions[key] += positionY;
      },
      CurrentActiveStep: function() {
        Object.keys(this.positions).forEach(function (item){
          if (this.positions[item] <= this.scrollY()){
            switch (item) {
              case 'profile':
                this.active = 1;
                break;
              case 'skills':
                this.active = 2;
                break;
              case 'links':
                this.active = 3;
                break;
              case 'works':
                this.active = 4;
                break;
              case 'inquiry':
                this.active = 5;
                break;
              default:
                this.active = 1;
            }
          }
        }, this);
      }
    },
    components: {
      Profile,
      Skills,
      Links,
      Works,
      Inquiry
    }
  }
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- style for every content  -->
<style>
  @font-face {
    font-family: 'nikumaru';
    src: local(fonts/nikumaru.otf);
  }

  @@font-face {
    font-family: 'paula-H';
    src: local(fonts/paula-H.otf);
  }

  body {
    font-family: 游ゴシック体, 'Yu Gothic', YuGothic, 'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
    -webkit-font-feature-settings: 'palt';
    font-feature-settings: 'palt';
  }

  body::-webkit-scrollbar {
    display: none;
  }

  html {
    overscroll-behavior: contain;
    scroll-behavior:smooth;
  }

  ::selection {
		background: none;
		color: #ffffff;
	}

	::-moz-selection {
		background: none;
		color: #ffffff;
	}
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
  .block {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }

  .profile {
    background-color: #2CA057;
    color: #88D9A6;
    z-index: 100;
  }

  .skills {
    background-color: #DD903D;
    color: #FFD19F;
    z-index: 200;
  }

  .links {
    background-color: #2A6F8A;
    color: #82B8CC;
    z-index: 300;
  }

  .works {
    background-color: #DD593D;
    color: #FFB09F;
    z-index: 400;
  }

  .inquiry {
    background-color: #2CA057;
    color: #88D9A6;
    z-index: 500;
  }

  #step-list {
    position: fixed;
    text-align: right;
    height: 300px;
    top: 30px;
    left: 3%;
    z-index: 9999;
  }
</style>
