<script >

</script>

<template>
  <nav class="bg-black px-6 py-3 flex gap-3 ">
    <router-link to="/">Home</router-link>
    <router-link :to="{name:'About'}">About</router-link>
  </nav>
  <router-view/>
</template>

<style scoped>

</style>
