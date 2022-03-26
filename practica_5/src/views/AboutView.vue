<template>
  <div class="about">
    <SaboresPastelero/>
    <AdornosPastelero/>
    <Pedidos/>
    <Piedepagina/>
  </div>
</template>

<script>
import AdornosPastelero from '../components/adornosPastelero.vue'
import SaboresPastelero from '../components/saboresPastelero.vue'
import Pedidos from '../components/pedidos.vue'
import Piedepagina from '../components/piedepagina.vue'

export default {
  components: {
    AdornosPastelero,
    SaboresPastelero,
    Pedidos,
    Piedepagina
  }
}
</script>