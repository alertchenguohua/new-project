<template>
  <div>
    <el-button @click="startTimer" type="primary">启动定时器</el-button>
    <InputNumber v-model="value1"></InputNumber>
    <input type="text" v-model="message">
    <button type="button"
      v-clipboard:copy="message"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
      >
      Copy!
    </button>
    <!-- <AsyncInput :oneprop.sync="value2"></AsyncInput> -->
    <!-- 路由组件包含 -->
    <!-- <about></about> -->
  </div>
</template>

<script>
import InputNumber from './input-number'
// import AsyncInput from './async-input'
// document.onkeydown = function(e) {
//   const event = e || window.event
//   console.log(event.keyCode)
// }
export default {
  components: {
    // AsyncInput,
    InputNumber
    // about: () => import('./about') // 异步引入
  },
  data() {
    return {
      message: 'Copy These Text',
      timer: null,
      a: 'a',
      b: 'b',
      value1: 1000,
      value2: 666
    }
  },
  mounted() {

  },
  beforeRouteEnter(to, from, next) {
    console.log(this, 'beforeRouteEnter') // undefined
    console.log(to, '组件独享守卫beforeRouteEnter第一个参数')
    console.log(from, '组件独享守卫beforeRouteEnter第二个参数')
    console.log(next, '组件独享守卫beforeRouteEnter第三个参数')
    next(vm => {
      // 因为当钩子执行前，组件实例还没被创建
      // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
      console.log(vm)// 当前组件的实例
    })
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 对于一个带有动态参数的路径 /good/:id，在 /good/1 和 /good/2 之间跳转的时候，
    // 由于会渲染同样的good组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log(this, 'beforeRouteUpdate') // 当前组件实例
    console.log(to, '组件独享守卫beforeRouteUpdate第一个参数')
    console.log(from, '组件独享守beforeRouteUpdate卫第二个参数')
    console.log(next, '组件独享守beforeRouteUpdate卫第三个参数')
    next()
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log(this, 'beforeRouteLeave') // 当前组件实例
    console.log(to, '组件独享守卫beforeRouteLeave第一个参数')
    console.log(from, '组件独享守卫beforeRouteLeave第二个参数')
    console.log(next, '组件独享守卫beforeRouteLeave第三个参数')
    next()
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        console.log(1)
      }, 1000)
      // 推荐用的方式--程序化的事件侦听
      this.$once('hook:beforeDestroy', () => {
        clearInterval(this.timer)
      })
      // throw new Error('error---') 可通过Vue.config.errorHandler捕获
    },
    testHandle() {
      if (this.a === this.b) { // 测试==是否编译通过

      }
    },
    onCopy(e) {
      console.log('You just copied' + this.message)
    },
    onError() {
      console.log('Failed to copy!')
    }

  },
  beforeDestroy() {
    // 其中一种方式
    // clearInterval(this.timer)
    // this.timer = null
  }
}
</script>

<style>

</style>
