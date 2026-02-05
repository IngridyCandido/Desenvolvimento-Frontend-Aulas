<script lang="ts" setup>
    //import noticias from '@/noticias';
    import { RouterLink, useRouter} from 'vue-router';
    import {ref, onBeforeMount} from 'vue'

    const router = useRouter()

    const props = defineProps(['id'])

    const noticia = ref ()

    onBeforeMount(async()=>{
      const result = await fetch ('https://api.spaceflightnewsapi.net/v4/articles/'+props.id+'/?format=json')

      if (result.status == 200){
          const resposta = await result.json()
          noticia.value ={
            titulo: resposta.title,
            conteudo: resposta.summary
          }
      }
      else {
        router.push('/noticias')
      }
    })
</script>

<template>
  <div>
    <h1>{{noticia?.titulo}}</h1>
    <div>
        {{noticia?.conteudo}}
    </div>
    <RouterLink to="/noticias">Voltar</RouterLink>
  </div>
</template>