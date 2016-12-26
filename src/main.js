// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import Question from './components/Question'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter ({
	mode: 'history',
	routes: [
		{path: '/', component: Hello},
		{path: '/leetcode-question/:id', name: 'question', component: Question}
	]
})

new Vue({
  el: '#app',
  router,
  render: h=>h(App)
})
