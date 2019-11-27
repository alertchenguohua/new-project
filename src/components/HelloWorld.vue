<template>
  <div class="hello" id="#chart">
    <h1>{{ $t('message.zh') }}</h1>
    <page :current="2" :total="40" @click.native="whenChange">
      <template v-slot:header>
        <h3>here might be title</h3>
      </template>
      <template v-slot:default>
        <p>main-content-default</p>
      </template>
      <template v-slot:footer>
        <h3>here is some contact info</h3>
      </template>
    </page>
    <checkbox>
      <template v-slot="slotProps">{{slotProps.user.firstName}}子集过来的</template>
      <!-- slot-content -->
      <!-- <page :current="2" :total="40" @click.native="whenChange"></page>
      9999可以是组件等等...-->
    </checkbox>
    <div class="lang">
      <el-radio-group v-model="language" size="mini">
        <el-radio v-for="item of lang" :label="item.value" border :key="item.value">{{item.label}}</el-radio>
      </el-radio-group>
    </div>
    <div>
      <button @click="handleOpen1">打开提示 1</button>
      <button @click="handleOpen2">打开提示 2</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      a: 'count',
      language: 0,
      lang: [
        {
          label: this.$t('message.zh'), // 模板语法的一种
          value: 0
        },
        {
          label: this.$t('message.en'),
          value: 1
        }
      ]
    }
  },
  watch: {
    // 侦听器
    language: function(val) {
      // 侦听单选按钮的变化，从而进行切换语言
      val === 0 ? (this.$i18n.locale = 'zh') : (this.$i18n.locale = 'en')
      this.$set(this.lang, 0, { label: this.$t('message.zh'), value: 0 })
      this.$set(this.lang, 1, { label: this.$t('message.en'), value: 1 })
      /**
        this.lang = [{
          label: this.$t('message.zh'),       //如果不使用Vue.set，也可以使用更新数据的方法
          value: 0
        }, {
          label: this.$t('message.en'),
          value: 1
        }]
        **/
    }
  },
  mounted() {
    this.$i18n.locale === 'zh' ? (this.language = 0) : (this.language = 1) // 数据加载时判断当前属于哪种语言，为其单选按钮赋值
  },
  methods: {
    whenChange(item) {
      console.log(item)
    },
    handleOpen1() {
      this.$Alert.info({
        content: '我是提示信息 1'
      })
    },
    handleOpen2() {
      this.$Alert.info({
        content: '我是提示信息 2',
        duration: 3
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
