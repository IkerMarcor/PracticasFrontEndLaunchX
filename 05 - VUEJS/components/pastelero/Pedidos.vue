<template>
    <div class="contenedor-pastelero">
        <hr>
        <h2>Pedidos</h2>
        <ul class="lista-ordenes">
            <li>Orden 1. (Julian Torres):
                <ul>
                    <li>2 de Chocolate con Crema</li>
                    <li>3 de Zanahoria con Chocolate</li>
                    <li>Descripción: 1 Pastel de chocolate combinado con Fresa. El pedido será para llevar 🚗</li><br>
                </ul>
            </li>
            <li>Orden 2. (Alex Hernandez):
                <ul>
                    <li>2 de Chocolate con Cajeta</li>
                    <li>4 de Fresa con Chispitas</li>
                    <li>4 de Calabaza con crema y cereza</li>
                    <li>Descripción: 2 Pasteles de Calabaza combinado con Chocolate. El pedido no es para llevar ⛪</li><br>
                </ul>
            </li>
        </ul>
        <hr>
    </div>
</template>

<style scoped>
.contenedor{
    height: 100%;
}
.contenedor-pastelero ul{
    margin: 20px;
}
.lista-ordenes{
    list-style-type:circle;
}
</style>