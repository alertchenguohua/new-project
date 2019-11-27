<template>
  <div>
      <button @click="increse(-1)">减1</button>
      <span style="color: red;padding: 0 5px;">{{ number }}</span>
      <button @click="increse(1)">加1</button>
  </div>
</template>

<script>
export default {
  props: {
    oneprop: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      number: this.oneprop
    }
  },
  methods: {
    increse(num) {
      this.$emit('update:value2', this.number += num)
    }
  }
}
</script>

<style>

</style>
