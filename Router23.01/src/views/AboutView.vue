<script setup lang="ts">
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'

const a=ref('')

onBeforeMount(()=>{
  console.log('onBeforeMount')
})

onMounted(()=>{
  console.log('onMounted')
})

onBeforeUpdate(()=>{
  console.log('onBeforeUpdate')
})

onUpdated(()=>{
  console.log('onUpdated')
})

onBeforeUnmount(()=>{
  console.log('onBeforeUnmount')
})

onUnmounted(()=>{
  console.log('onUnmounted')
})
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="a"/>

      Conteúdo de A:{{ a }}
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
