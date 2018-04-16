import Routes from './routes'
import Vue from 'vue'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css';

var windowStatePlugin = {
  install: function(Vue) {
    // ウィンドウの状態
    var state = {
      scrollX: 0,
      scrollY: 0,
      width: 0,
      height: 0
    }
    // スクロール数値を取得
    var onScroll = function() {
      state.scrollX = window.pageXOffset
      state.scrollY = window.pageYOffset
    }
    document.addEventListener('scroll', onScroll)
    // ウィンドウのサイズを取得
    var onResize = function() {
      state.width = document.documentElement.clientWidth
      state.height = document.documentElement.clientHeight
    }
    window.addEventListener('resize', onResize)
    onResize()

    // 初期値を更新
    window.addEventListener('load', onScroll)
    // プロパティ $window を定義
    Vue.util.defineReactive(Vue.prototype, '$window', state)
  }
}


Vue.config.productionTip = false
Vue.use(ElementUI, { locale });
Vue.use(windowStatePlugin);

new Vue({
  el:'#app',
  router: Routes,
  data() {
    return {
      positions: {
        profile:'',
        skills:'',
        links:'',
        works:''
      }
    };
  },
  methods: {
    parentsMethod: function(key, positionY){
      positions.key += positionY;
      console.log("position" + positions);
    }
  },
  render: h => h('router-view')
})
