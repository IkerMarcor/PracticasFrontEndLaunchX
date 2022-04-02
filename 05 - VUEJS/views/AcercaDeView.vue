<template>
  <div class="about">
    <InfoPasteleria/>
  </div>
</template>
<script>

import InfoPasteleria from '@/components/cliente/DatosPasteleria.vue'

export default {
  name: 'AcercaDeView',
  components: {
    InfoPasteleria,
  }
}
</script>

<style scoped>
*{
  text-align: center;
}
</style>
