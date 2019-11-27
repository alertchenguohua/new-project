<template>
  <div>
      <button id="btn" :class="'i-button' + '-' + size" :disabled="disabled">
          <slot></slot>
      </button>
  </div>
</template>

<script>
function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}
export default {
  inject: ['app'],
  props: {
    size: {
      validator(value) { // validator名字
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    console.log(this.app.appMethod(), 'form-app-provide')
  }

}
</script>

<style>

</style>
