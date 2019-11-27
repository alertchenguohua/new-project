<template>
    <form>
      <slot></slot>
    </form>
</template>

<script>
export default {
  name: 'iForm',
  components: {},
  provide() {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  data() {
    return {
      fields: [] // 缓存所有form-item实例
    }
  },
  created() {
    this.$on('on-form-item-add', (field) => {
      if (field) this.fields.push(field)
    })
    this.$on('on-form-item-remove', (field) => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1)
    })
  },
  mounted() {

  },
  methods: {
    // 公开方法 全部重置数据
    resetFields () {
      this.fields.forEach(field => {
        field.resetField()
      })
    },
    // 公开方法 全部校验数据 支持Promise
    validate(callback) {
      // debugger
      return new Promise(resolve => {
        let valid = true
        let count = 0
        this.fields.forEach(field => {
          field.validate('', errors => {
            if (errors) {
              valid = false
            }
            if (++count === this.fields.length) {
              resolve(valid)
              if (typeof callback === 'function') {
                callback(valid)
              }
            }
          })
        })
      })
    }
  }

}
</script>

<style>

</style>
