<template>
  <div>
      checkbox:
      <input type="checkbox" name="" id="">
      <slot :user="user">
        {{ user.lastName }}----
      </slot>

  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: 'first',
        lastName: 'last'
      }
    }
  }
}
</script>

<style>

</style>
