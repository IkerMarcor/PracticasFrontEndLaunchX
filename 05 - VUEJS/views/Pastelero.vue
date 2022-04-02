<template>
  <div class="home">
    <MsgBienvenida msg="Bienvenido a la pagina del pastelero"/>
    <Pedidos/>
    <InfoClientes/>
    <SaboresRestantes/>
    <AdornosRestantes/>
  </div>
</template>

<script>
// @ is an alias to /src
import MsgBienvenida from '@/components/pastelero/MsgBienvenida.vue'
import Pedidos from '@/components/pastelero/Pedidos.vue'
import InfoClientes from '@/components/pastelero/InfoClientes.vue'
import SaboresRestantes from '@/components/pastelero/SaboresRestantes.vue'
import AdornosRestantes from '@/components/pastelero/AdornosRestantes.vue'

export default {
  name: 'Pastelero',
  components: {
    MsgBienvenida,
    Pedidos,
    InfoClientes,
    SaboresRestantes,
    AdornosRestantes
  }
}
</script>
