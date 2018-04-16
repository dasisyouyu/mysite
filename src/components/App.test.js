import Vue from 'vue'
import Index from './Index.vue'

Vue.config.productionTip = false

it('does not crash', () => {
  const Ctor = Vue.extend(Index)
  const vm = new Ctor().$mount()
  expect(vm.$el.textContent).toMatch(/Welcome to Vue\.js/)
})
