<template>
  <div>
    <router-view></router-view>

    <el-row>
      <el-col :span="24">
        <div id="step-list">
          <el-steps direction="vertical" :active="active">
            <el-step title="Profile"></el-step>
            <el-step title="Skills"></el-step>
            <el-step title="Links"></el-step>
            <el-step title="Works"></el-step>
          </el-steps>
        </div>
      </el-col>
    </el-row>

    <Profile class="block profile"/>
    <Skills class="block skills"/>
    <Links class="block links"/>
    <Works class="block works"/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Profile from './Profile'
  import Skills from './Skills'
  import Links from './Links'
  import Works from './Works'

  export default {
    name: 'Index',
    data() {
      return {
        active: 0
      };
    },
    computed: {
      range: function() {
        var range = Math.round(100 - (this.posY - this.$window.scrollY) / this.$window.height * 100)
        return range < 0 ? 0 : range > 100 ? 100 : range
      }
    },
    watch: {
      '$window.height': 'getPosition'
    },
    methods: {
      getPosition: function() {
        // コンポーネントの位置
        this.posY = this.$el.getBoundingClientRect().top + window.pageYOffset
      }
    },
    mounted: function() {
      this.getPosition();
    },
    // component: {
    //   Profile,
    //   Skills,
    //   Links,
    //   Works
    // }
  }
  //
  Vue.component('Profile', Profile)
  Vue.component('Skills', Skills)
  Vue.component('Links', Links)
  Vue.component('Works', Works)
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

  #step-list {
    position: absolute;
    text-align: right;
    height: 300px;
    margin-left: 90%;
    margin-top: 3%;
    z-index: 500;
  }
</style>
