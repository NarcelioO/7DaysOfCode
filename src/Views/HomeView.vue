<script setup>
import {watch, ref} from 'vue'
const name = ref()


  
watch(name, ()=>{
   console.log('mudou')
})
</script>

<template>
    <div>
        <label for="name"></label>
        <form @submit.prevent="onSubmit">
            <input type="text" id="name" v-model.lazy="name">
            <button>Enviar</button>
        </form>
       
        {{name}}
    </div>
</template>



<style lang="scss" scoped>

</style>