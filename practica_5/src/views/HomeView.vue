<template>
<div>
  <div>

    <form @submit.prevent="$store.dispatch('confirm')" id="forma"> <!--prevent evitara que se le de refresh a la pagina pero si realizara la accion-->
      <Informacion/>
      <Sabores/>
      <Adornos/>
      <Submit/>
    </form>
    <PieDePagina/>

  </div>
</div>
</template>

<script>

import PieDePagina from '../components/piedepagina.vue';
import Sabores from '../components/sabores.vue';
import Adornos from '../components/adornos.vue'
import Informacion from '../components/informacion.vue';
import Submit from '../components/submit.vue'

export default {
  name: 'HomeView',
  components:{ //Es necesario que digamos que componentes estamos utilzando 

    PieDePagina,
    Sabores,
    Adornos,
    Informacion,
    Submit,
  }
}

</script>

<style scoped>

</style>