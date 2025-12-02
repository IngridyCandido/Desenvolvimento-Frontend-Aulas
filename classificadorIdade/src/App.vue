<script setup lang="ts">
import { createApp, ref, computed } from 'vue';

const idade = ref(0)
</script>

<template>
  <div style="align-items: center; margin: 200px; padding: 150px;">
    <div><h1>Digite qual a sua idade:</h1></div>
    <input v-model="idade" type="number" placeholder="Idade"></input>
    <div v-if="idade<12"><h3>Você é uma Criança.</h3></div>
    <div v-else-if="idade>=12 && idade<=17"><h3>Você é um adolescente.</h3></div>
    <div v-else-if="idade>=18 && idade<=59"><h3>Você é um adulto.</h3></div>
    <div v-else-if="idade>=60 && idade<=120"><h3>Você é um idoso.</h3></div>
    <div v-else=""><h3>Digite uma idade válida.</h3></div>
  </div>
</template>

<style scoped></style>
