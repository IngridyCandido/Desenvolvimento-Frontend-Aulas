<script setup lang="ts">
import { createApp, ref, computed } from 'vue';

const Real = ref (0)

const Dolar = computed(()=>{
  return Real.value * 0.19
})

const Euro = computed (()=>{
  return Real.value * 0.16
})

</script>

<template>
  <div>
    <h1>Informe o valor em real:</h1>
    <div><input v-model="Real" type="number" placeholder="R$"></input></div>
    <h2>O valor de R${{ Real }},00 em Dolar é {{ Dolar }}.</h2>
    <h2>O valor de R${{ Real }},00 em Euro é {{ Euro }}.</h2>
  </div>
</template>

<style scoped></style>
