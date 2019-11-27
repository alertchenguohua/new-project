<template>
  <div>
    <label v-if="label" :class="{'i-form-item-label-required': isRequired}">{{ label }}</label>
    <div style="display:inline-block;">
      <slot></slot>
      <div v-if="validateState === 'error'" class="i-form-item-message">{{ validateMessage }}</div>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
import Emitter from '../../mixins/emitter'
export default {
  name: 'iFormItem',
  inject: ['form'],
  mixins: [Emitter],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      isRequired: false,
      validateState: '', // 校验状态
      validateMessage: '' // 校验不通过的提示信息
    }
  },
  // 组件渲染时，将实例缓存在Form中
  mounted() {
    // 如果没有传入prop 则无需校验 也就无需缓存
    if (this.prop) {
      this.dispatch('iForm', 'on-form-item-add', this)

      // 设置初始值 重置时候恢复默认
      this.initiaValue = this.fieldValue
      this.setRules()
    }
  },
  beforeDestroy() {
    this.dispatch('iForm', 'on-form-item.remove', this)
  },
  computed: {
    // 从Form的model中动态得到当前表单组件的数据
    fieldValue() {
      return this.form.model[this.prop]
    }
  },
  methods: {
    // 从form的rules属性中 获取当前formitem的校验规则
    getRules() {
      let formRules = this.form.rules
      formRules = formRules ? formRules[this.prop] : []
      return [].concat(formRules || [])
    },
    setRules() {
      const rules = this.getRules()
      if (rules.length) {
        rules.every(rule => {
          // 如果当前校验有必填项 则标记出来
          this.isRequired = rule.required
        })
      }
      this.$on('on-form-blur', this.onFieldBlur)
      this.$on('on-form-change', this.onFiledChange)
    },
    // 只支持blur和change 所以过滤出符合要求的rule规则
    getFilteredRule(trigger) {
      const rules = this.getRules()
      return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1)
    },

    /**
     * 校验数据
     * @param trigger 校验类型
     * @param callback 回调函数
     */
    validate(trigger, callback = function() {}) {
      const rules = this.getFilteredRule(trigger)
      if (!rules || rules.length === 0) {
        return true
      }

      // 设置状态为校验中
      this.validateState = 'validating'

      // 以下为 async-validator 库的调用方法
      const descriptor = {}
      descriptor[this.prop] = rules
      const validator = new AsyncValidator(descriptor)
      const model = {}
      model[this.prop] = this.fieldValue

      validator.validate(model, { firstFields: true }, errors => {
        // debugger
        this.validateState = !errors ? 'success' : 'error'
        this.validateMessage = errors ? errors[0].message : ''

        callback(this.validateMessage)
      })
    },
    onFieldBlur() {
      this.validate('blur')
    },
    onFiledChange() {
      this.validate('change')
    },
    // 重置数据
    resetField() {
      this.validateState = ''
      this.validateMessage = ''
      this.form.model[this.prop] = this.initiaValue
    }
  }
}
</script>

<style>
  .i-form-item-label-required:before {
    content: '*';
    color: red;
  }
  .i-form-item-message {
    color: red;
  }
</style>
