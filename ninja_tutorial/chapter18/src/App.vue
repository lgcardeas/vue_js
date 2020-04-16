<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        title: 'Welcome Ninja'
      }
    },
    methods: {
      greeting() {
        return "Welcome the Ninja's funtion"
      }
    }    
  }
</script>

<style>
</style>
