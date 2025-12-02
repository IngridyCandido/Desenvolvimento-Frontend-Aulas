<script setup lang="ts">
import { createApp, ref, computed } from 'vue';

const PorcentoDesconto = ref (0)

const ValorProduto = ref(0)

const Desconto = computed (()=>{
  return ValorProduto.value * PorcentoDesconto.value/100
})

const ValorProdutoCDesconto = computed (()=>{
  return ValorProduto.value - Desconto.value
})

</script>

<template>
  <div class="conteiner" style=" background-color: darkgrey; text-align: center; padding: 200px; margin: 50px;">
    <h1 style="color: blueviolet; font-size: 50px;">Calcule o desconto da sua venda aqui!</h1>
    <div><h1>Qual o valor do Produto?</h1></div>
    <div><input type="number" v-model="ValorProduto" placeholder="Valor do Produto em R$"></input></div>
    <div><h1>Qual a porcentagem de desconto do Produto?</h1></div>
    <div><input type="number" v-model="PorcentoDesconto" placeholder="Porcentagem de desconto"></input></div>
    <div v-if="PorcentoDesconto<5" style="color: green;" ><h2>O desconto dado foi pequeno.</h2></div>
    <div v-else-if="PorcentoDesconto>=5 && PorcentoDesconto<=10" style="color: orange;" ><h2>O desconto dado foi moderado.</h2></div>
    <div v-else="PorcentoDesconto>10" style="color: red;"><h2>O desconto dado foi alto.</h2></div>
    <div><h1>O produto saiu por R${{ ValorProdutoCDesconto }},00 pois o desconto foi de R${{ Desconto }},00</h1></div>
  </div>
</template>

<style scoped>
.container{
  display: flex;
  text-align: center;
  background-color: darkgrey;
}
</style>
