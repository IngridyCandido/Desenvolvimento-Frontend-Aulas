<script lang="ts" setup>
   // import noticias from '@/noticias';
    import { RouterLink} from 'vue-router';
    import { onMounted, ref } from 'vue';

    type Noticia = {
      id:number,
      titulo:string
    }
    const noticias = ref<Noticia[]> ([])

    onMounted(async()=> {
      const resultado = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?format=json')
      
      const resposta = await resultado.json()

      noticias.value = resposta.results.map((n:any)=> {
        return{
          id: n.id,
          titulo: n.title
        } as Noticia
      })
    })

</script>

<template>
  <div class="about">
    <h1>Notícias</h1>
    <div>
        <div v-for="noticia in noticias" :key="noticia.id">
            <RouterLink :to="{ name: 'detalhe', params: { id: noticia.id } }">{{ noticia.titulo }}</RouterLink>
        </div>    
    </div>
  </div>
</template>