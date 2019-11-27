import page from './src/components/page' // 自动找page下的index.js
import checkbox from './src/components/checkbox'
import Alert from './src/components/alert/alert'

// console.log(page)
const myPlugin = {
  page,
  checkbox
}
const install = function(Vue) {
  if (install.installed) return
  Object.keys(myPlugin).forEach(key => {
    Vue.component(key, myPlugin[key])
  })

  Vue.prototype.$Alert = Alert
}

const API = {
  install
}
export default API
