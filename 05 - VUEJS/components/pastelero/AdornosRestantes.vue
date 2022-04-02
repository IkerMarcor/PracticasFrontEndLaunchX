<template>
    <div class="contenedor-pastelero">
        <br>
        <h2>Adornos</h2>
        <table class="contenido-tabla">
            <thead>
                <tr>
                    <th>Topping</th>
                    <th>Cantidades</th>
                    <th>Restantes</th>
                    <th>Combinaciones</th>
                    <th>Costos</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Chocolate</td>
                    <td>3</td>
                    <td>47</td>
                    <td>0</td>
                    <td>$5.00</td>
                </tr>
                <tr>
                    <td>Crema</td>
                    <td>6</td>
                    <td>44</td>
                    <td>4</td>
                    <td>$12.00</td>
                </tr>
                <tr>
                    <td>Cajeta</td>
                    <td>2</td>
                    <td>48</td>
                    <td>0</td>
                    <td>$5.00</td>
                </tr>
                <tr>
                    <td>Chispitas</td>
                    <td>4</td>
                    <td>46</td>
                    <td>0</td>
                    <td>$6.00</td>
                </tr>
                <tr>
                    <td>Cereza</td>
                    <td>4</td>
                    <td>46</td>
                    <td>4</td>
                    <td>$10.00</td>
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