<template>
  <div>
    about
    <i-button ref="ibutton" :size="size" :disabled="disabled">
      自定义按钮
    </i-button>
  </div>
</template>

<script>
export default {
  components: {
    iButton: () => import('../components/iButton')
  },
  data() {
    return {
      size: 'large',
      disabled: true
    }
  },
  mounted() {
    console.log(this.$refs.ibutton, 'ref')
  }
}
</script>

<style>

</style>
