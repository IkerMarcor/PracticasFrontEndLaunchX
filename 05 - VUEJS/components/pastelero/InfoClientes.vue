<template>
    <div class="contenedor-pastelero">
        <br>
        <h2>Informacion de Clientes</h2>
        <table class="contenido-tabla">
            <thead>
                <tr>
                    <th>IDOrden</th>
                    <th>Nombre(s)</th>
                    <th>Apellidos</th>
                    <th>Teléfono</th>
                    <th>Correo electrónico</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Julian Juan</td>
                    <td>Torres Pezqueira</td>
                    <td>5588887654</td>
                    <td>julian123@gmail.com</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Alex</td>
                    <td>Hernandez</td>
                    <td>6659845125</td>
                    <td>lexlut12@gmail.com</td>
                </tr>
            </tbody>
        </table>
        <hr>
    </div>
</template>

<style scoped>
    .contenido-tabla{
        border-collapse: collapse;
        margin: 25px auto;
        font-size: .9em;
        min-width: 400px;
    }
    .contenido-tabla thead tr{
        background-color: #0060df;
    }

    .contenido-tabla th,
    .contenido-tabla td{
        padding: 12px .9em;
    }
    .contenido-tabla tbody tr{
        border-bottom: 1px solid rgb(0, 0, 0);
        background-color: #fff;
    }
    .contenido-tabla tbody td{
        color: black;
    }
</style>