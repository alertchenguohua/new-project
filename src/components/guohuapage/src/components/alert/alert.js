import Notification from './notification'
let messageInstance

function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance()
  return messageInstance
}

function notice({ duration = 1.5, content = '' }) {
  const instance = getMessageInstance()
  instance.add({
    content: content,
    duration: duration
  })
}
export default {
  info(options) {
    return notice(options)
  }
}

// 流程
// 入口alert.js
// 通过调用this.$alert.info({})--> add()--> 创建实例（notification.js） -->触发add()增加数据(instance就是alert组件里的方法)--> 渲染alert.vue
