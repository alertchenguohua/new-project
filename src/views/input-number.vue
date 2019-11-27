<template>
  <div>
      <button @click="increse(-1)">减1</button>
      <span style="color: red;padding: 0 5px;">{{ currentValue }}</span>
      <button @click="increse(1)">加1</button>
  </div>
</template>

<script>
export default {
  name: 'inputNumber',
  props: {
    numbers: {
      type: Number

    }
  },
  model: {
    prop: 'numbers',
    event: 'changed'
  },
  data() {
    return {
      currentValue: this.numbers
    }
  },
  watch: {
    // value(val, oldVal) {
    //   if (val) {
    //     this.currentValue = val
    //   }
    // }
  },
  mounted() {
    this.$on('changed', val => {
      console.log(val)
    })
  },
  methods: {
    increse(num) {
      this.currentValue += num
      this.$emit('changed', this.currentValue)
    }
  }
}
</script>

<style>

</style>
