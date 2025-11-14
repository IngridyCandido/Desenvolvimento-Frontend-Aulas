<script setup lang="ts">
import { computed, ref, reactive } from 'vue';

const peso = ref (0)

const altura = ref (0)

const IMC = computed (()  => {
  return peso.value/(altura.value*altura.value)
})

</script>

<template>
    <div class="container">
      <div><h1>Índice de Massa Corporal</h1></div>
      <div><h2>Qual seu peso?</h2></div>
      <div><input v-model="peso" placeholder="Peso em kg">kg</input></div>
      <div><h2>Qual sua altura?</h2></div>
      <div><input v-model="altura" placeholder="Altura em metros">m</input></div>
      <div><p>Seu IMC (Índice de Massa Corporal) é {{ IMC }} e você está</p>
      <div id="abaixo" v-if="IMC<18.5"><p>abaixo do peso.</p></div>
      <div id="normal" v-else-if="IMC >= 18.5 && IMC<25"><p>peso normal.</p></div>
      <div id="sobrepeso" v-else-if="IMC >= 25 && IMC<30"><p>sobrepeso.</p></div>
      <div id="obesidade" v-else="IMC>30"><p>obesidade.</p></div></div>
    </div>
</template>

<style scoped>
.container{
  display: flexbox;
  align-items: center;
}
h1{
  padding: 10px;
  color: blueviolet;
  font-size: 50px;
}
#obesidade{
  color:red;
}
#sobrepeso{
  color: yellow;
}
#normal{
  color: green;
}
#abaixo{
  color:orange;
}
</style>
