<template>
  <div>
    <i-Form ref="form" :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
      <i-form-item label="选择" prop="choice">
        <i-checkbox-group v-model="formValidate.choice" @on-change="changeCheckbox">
          <i-checkbox label="1">选项1</i-checkbox>
          <i-checkbox label="2">选项2</i-checkbox>
          <i-checkbox label="3">选项3</i-checkbox>
        </i-checkbox-group>
      </i-form-item>
    </i-Form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
    <input type="checkbox" value="1" v-model="aaa" @change="changeaaa">aaa
    <input type="checkbox" value="2" v-model="aaa" @change="changeaaa">bbb
    <input type="checkbox" value="3" v-model="aaa" @change="changeaaa">ccc
  </div>
</template>

<script>
import iCheckboxGroup from '../components/checkbox/checkbox-group'
import iCheckbox from '../components/checkbox/checkbox'
export default {
  name: 'myForm',
  components: {
    iForm: () => import('../components/form/form'),
    iFormItem: () => import('../components/form/form-item'),
    iInput: () => import('../components/input/input'),
    iCheckboxGroup,
    iCheckbox
  },
  data() {
    return {
      aaa: [1],
      formValidate: {
        name: '',
        mail: '',
        choice: [1, 2]
      },
      ruleValidate: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '邮箱格式不正确', trigger: 'blur' }
        ],
        choice: [
          { required: true, type: 'array', message: '请选择一个', trigger: 'change' }
          // { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
          // { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
        ]
      }

    }
  },
  mounted() {},
  methods: {
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
        }
      })
    },
    handleReset() {
      this.$refs.form.resetFields()
    },
    changeCheckbox(val) {
      // console.log(val)
    },
    changeaaa(e) {
      console.log(this.aaa, e.target)
    }
  }
}
</script>

<style>
</style>
