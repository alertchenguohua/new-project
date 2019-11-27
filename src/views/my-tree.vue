<template>
    <div>
        <Tree :data="data" :showCheckbox="show" @on-toggle-expand="toggleExpand"></Tree>
    </div>
</template>

<script>
import Tree from '../components/tree/tree'
export default {
  components: {
    Tree
  },
  data () {
    return {
      show: true,
      data: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  mounted () {
    console.log(this.$Bus, 'event-bus')
  },
  methods: {
    toggleExpand(data) {
      console.log(data)
    }
  }
}
</script>

<style>

</style>
