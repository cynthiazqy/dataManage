<template>
  <div>
    {{ helloConst }} ------ {{ greeting }}
  </div>
</template>

<script lang="ts">
  import { hello, sayHello, miao } from '../const'

  export default {
    name: 'hello',
    data() {
      return {
        helloConst: hello,

      }
    },
    computed: {
      greeting() {
        return sayHello('王麻子') + '=====' + miao()
      }
    }
  }
</script>

<style scoped>

</style>