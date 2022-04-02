<template>
    <div class="contenedor-pastelero">
        <br>
        <h2>Sabores</h2>
        <table class="contenido-tabla">
            <thead>
                <tr>
                    <th>Sabor</th>
                    <th>Cantidades</th>
                    <th>Restantes</th>
                    <th>Combinaciones</th>
                    <th>Costos</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Chocolate</td>
                    <td>4</td>
                    <td>46</td>
                    <td>3</td>
                    <td>$10.00</td>
                </tr>
                <tr>
                    <td>Fresa</td>
                    <td>5</td>
                    <td>45</td>
                    <td>1</td>
                    <td>$12.00</td>
                </tr>
                <tr>
                    <td>Calabaza</td>
                    <td>4</td>
                    <td>46</td>
                    <td>2</td>
                    <td>$14.00</td>
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