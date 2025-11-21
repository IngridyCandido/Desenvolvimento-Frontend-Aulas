<script setup lang="ts">
import {computed,createApp, ref} from 'vue'

const celsius = ref(0)

const fahrenheit = computed (()=>{
  return (celsius.value * 9/5) + 32
})

const kelvin = computed (()=>{
  return celsius.value + 273.15
})

</script>

<template>
    <div class="container">
      <img alt="Temperatura Background" class="background" src="https://www.targifor.com.br/Content/dist/img/blog/mudanca-de-temperatura_hero.webp"/>
      <h1>Conversor de Temperatura</h1>
      <div class="usuario">
        <p>Digite um valor de temperatura em grau Celso:</p>
        <input type="number" v-model="celsius" placeholder="Temperatura em Celsius">°C</input>
      </div>
      <div>
        <h2>Essa temperatura em fahrenheit é: {{ fahrenheit }} °F</h2>
        <h2>Essa temperatura em Kelvin é: {{ kelvin }}</h2>
      </div>
      <div v-if="celsius < 0"><p>Água estaria congelada nessa temperatura.</p></div>
      <div v-else-if=" celsius >= 0 && celsius < 100"><p>Temperatura comum no dia a dia.</p></div>
      <div v-else="celsius >= 100"><p>Água entraria em ebulição nessa temperatura.</p></div>
    </div>
</template>

<style scoped>
  .container{
    align-items: center;
  }
  img {
  width: 100%;      /* Faz a imagem ocupar 100% da largura do seu container */
  height: auto;     /* Mantém a proporção original */
  margin-top: 20px; /* Adiciona algum espaço acima dela */
  }

</style>
