
<template>
  <div>
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
  import Ninjas from './NinjasApp.vue'

  export default {
      components: {
        'ninjas': Ninjas
      },
      data () {
        return {
          title: 'Welcome to Your Vue.js App'
        }
      }
  }
</script>

<style>

</style>
