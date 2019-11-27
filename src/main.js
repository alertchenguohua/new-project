import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import VueClipboard from 'vue-clipboard2'
import VueI18n from 'vue-i18n'
import page from './components/guohuapage' // 本地目录公共组件方式引入
import 'element-ui/lib/theme-chalk/index.css'
import router from './route'
Vue.use(VueClipboard)
Vue.use(VueI18n)
// import page from 'page'  //node_modules方式引入

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
console.log(Vue.config, 'config-vue')
// Vue.config.silent = true

Vue.config.optionMergeStrategies._my_option = function(parent, child, vm) {
  console.log(parent, child, vm)
  return child + 1
}
// const Profile = Vue.extend({
//   _my_option: 1
// })
// console.log(Profile.options)
// 可全局捕获
Vue.config.errorHandler = function(err, vm, info) {
  console.log(err, 'err')
  console.log(vm)
  console.log(info, 'info')
}
// 基本使用
// const i18n = new VueI18n({
//   locale: 'CN',   //语言标识
//   messages: {
//     en: {
//       message: {
//         hello: 'hello world'
//       }
//     },
//     cn: {
//       messages: {
//         hello: '你好'
//       }
//     }
//   }
// })
// 使用语言包
const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  // this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    zh: require('./common/lang/zh'), // 中文语言包
    en: require('./common/lang/en') // 英文语言包
  }
})

// eslint-disable-next-line no-console
// console.log(page)
Vue.config.productionTip = false
Vue.use(Element)
Vue.use(page)
Vue.prototype.$Bus = new Vue()
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

// element-ui兼容i18n问题
// import enLocale from 'element-ui/lib/locale/lang/en'        //引入Element UI的英文包
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'     //引入Element UI的中文包

// Vue.use(VueI18n);
// Vue.use(ElementUI, {
//   i18n: (key, value) => i18n.t(key, value)
// }); //兼容i18n 7.x版本设置

// const i18n = new VueI18n({
//   locale: 'zh', // 语言标识
//   messages: {
//     zh: Object.assign(require('@/components/common/lang/zh'), zhLocale),  //这里需要注意一下，是如何导入多个语言包的
//     en: Object.assign(require('@/components/common/lang/en'), enLocale),
//   }
// });
