import Vue from 'vue'
import App from './App.vue'
import './index.css'
import './index.scss'

new Vue({
  render: h => h(App),
}).$mount('#app')

console.log('hello world')

if (module && module.hot) {
  module.hot.accept()
}
