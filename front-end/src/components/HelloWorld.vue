<template lang="">
  <div>
    <CategoriaList></CategoriaList>
    <Subcategorias></Subcategorias>
    <Titulos></Titulos>
    <Autores></Autores>
  </div>
</template>

<script>

import CategoriaList from '@/components/CategoriaList.vue'
import Subcategorias from '@/components/Subcategorias.vue'
import Titulos from '@/components/Titulos.vue'

import Autores from '@/components/Autores.vue'

export default {
  name: 'HomeView',
  components:{
    CategoriaList,
    Subcategorias,
    Titulos,
    Autores
  }
}
</script>
<style lang="">
  
</style>