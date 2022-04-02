<template>
  <div class="home">
    <h1>¡Bienvenid@ a pastelnauta!</h1>
    <img class="pastelnauta" alt="Vue logo" src="../assets/Capture.png">
    
    <SaboresPrecios/>
    <SaboresDescrip/>
    <AdornosPrecios/>
    <AdornosDescrip/>
    <InfoCliente/>
  </div>
</template>

<script>
// @ is an alias to /src
import SaboresPrecios from '@/components/cliente/SaboresPrecios.vue'
import AdornosPrecios from '@/components/cliente/AdornosPrecios.vue'
import AdornosDescrip from '@/components/cliente/AdornosCombinar.vue'
import SaboresDescrip from '@/components/cliente/SaboresCombinar.vue'
import InfoCliente from '@/components/cliente/DatosCliente.vue'

export default {
  name: 'InicioView',
  components: {
    SaboresPrecios,
    AdornosPrecios,
    AdornosDescrip,
    SaboresDescrip,
    InfoCliente
  }
}
</script>

<style scoped>
  *{
    text-align: center;
  }
  .pastelnauta{
    width: 40%;
  }
</style>
