/* eslint-disable no-console */
import Vue from 'vue'

const AlertComponent = Vue.extend({
  template: '<div>{{message}}</div>',
  data() {
    return {
      message: 'Hello Chen'
    }
  }
})
console.log(AlertComponent)
const component = new AlertComponent().$mount()
console.log(component)
document.body.appendChild(component.$el)
