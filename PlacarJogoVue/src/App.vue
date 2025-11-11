<script setup lang="ts">
import { createApp, ref, reactive, computed } from "vue";

const count = ref(0)

const count1 = ref(0)

const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})

const winner = computed(() => {
  if (count.value > count1.value) {
    return "Jogador 1 está ganhando"
  } else if (count1.value > count.value) {
    return "Jogador 2 está ganhando"
  } else {
    return "Empate"
  }
})



app.mount('#app')
</script>

<template>
  <h1>Placar Interativo de Jogo</h1>
  <div v-if="count == 0 && count1 == 0">O jogo ainda não começou! Boa sorte aos jogadores!</div>
  <div id="app">
    <h2 class="jogador1">Jogador 1: {{ count }}</h2>
    <button id="somar" @click="count++">+</button>
    <button v-if="count>0" @click="count--">-</button>
  </div>
  <div id="app">
    <h2 class="jogador2">Jogador 2: {{ count1 }}</h2>
    <button id="somar" @click="count1++">+</button>
    <button v-if="count1>0" @click="count1--">-</button>
  </div>
  <h3 v-if="count>0 || count1>0 ">{{ winner }}</h3>
</template>

<style scoped>
h1, div, h2, h3 {
  text-align: center;
  font-size: 40px;
}
.jogador1{
  border: 4px solid;
  margin: 50px;
  padding: 10px;
  color: violet;
  margin-right: 20px;
}
.jogador2{
  border: 4px solid;
  margin: 50px;
  padding: 10px;
  color: pink;
  margin-right: 20px;
}

button, #somar {
  margin: 5px;
  padding: 10px;
  font-size: 16px;
  background-color: white;
  font-size: 40px;
}

button:hover {
  background-color: red;
  font-weight: bold;
}

#somar:hover {
  font-weight: bold;
  background-color: green;
}

h3 {
  margin-top: 50px;
  font-size: 40px;
}
</style>
