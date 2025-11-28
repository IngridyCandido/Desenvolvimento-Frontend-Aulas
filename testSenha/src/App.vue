<script setup lang="ts">
import {ref, computed } from "vue";

const senha = ref("");

const senhaForca = computed(() => {
  const tamanho = senha.value.length;

  if (tamanho < 5) {
    return "Fraca";
  } else if (tamanho <= 8) {
    return "Média";
  } else {
    return "Forte";
  }
});

</script>

<template>
  <div>
    <h1 style="font-size: 50px;">Digite a senha a qual você deseja testar a força:</h1>
    <input v-model="senha" type="password" placeholder="Digite sua senha aqui" style="font-size: 30px;"/>
    <p style="font-size: 24px;">Sua senha tem {{ senha.length }} caracteres, por isso a força da senha é:</p>
    <div v-if="senhaForca === 'Fraca'" style="color: red; font-size: 30px;">Senha Fraca</div>
    <div v-else-if="senhaForca === 'Média'" style="color: orange; font-size: 30px;">Senha Média</div>
    <div v-else-if="senhaForca === 'Forte'" style="color: green; font-size: 30px;">Senha Forte</div>
    <div v-else style="color: gray; font-size: 30px;">Força Indefinida</div>
  </div>
</template>

<style scoped>
div {
  text-align: center;
  margin: auto;
  width: 60vw;
}
</style>