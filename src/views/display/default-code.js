const code = `<template>
    <div>
        <input v-model="message">
        {{ message }}
    </div>
</template>
<script>
    export default {
        data () {
            return {
                message: '111222'
            }
        }
    }
</script>`

export default code
