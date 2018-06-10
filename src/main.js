import Vue from 'vue'
import App from './App.vue'

//exposing a global vue instance to use as a state manager
export const stateManager  = new Vue({
  data: {
    quoteCounter: 0
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
