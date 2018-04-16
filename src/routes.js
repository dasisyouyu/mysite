import VueRouter from 'vue-router'
import Index from './components/Index.vue'
import Vue from 'vue'

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'hash',
  base: '/index',
	routes: [
	    {
	        path: '/',
	        component: Index
	    }
	]
})
