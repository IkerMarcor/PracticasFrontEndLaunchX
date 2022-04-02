<template>
    <div class="contenedor">
        <hr>
        <h2>Pasteles</h2>
        <table>
            <tr>
                <th>Sabores</th>
                <th>Precio</th>
                <th>Cantidad</th>
            </tr>

            <tr>
                <td><input type="checkbox" id="saborCalabaza" name="saborCalabaza" value="Calabaza">
                    <label for="saborCalabaza">Calabaza</label></td>
                <td>$3.50</td>
                <td><input class="cant" type="number" id="cantidadCalabaza" name="cantidadCalabaza" min="0" max="25"></td>
            </tr>

            <tr>
                <td><input type="checkbox" id="saborManzana" name="saborManzana" value="Manzana">
                    <label for="saborManzana">Manzana</label></td>
                <td>$5.00</td>
                <td><input class="cant" type="number" id="cantidadManzana" name="cantidadManzana" min="0" max="25"></td>
            </tr>

            <tr>
                <td><input type="checkbox" id="saborPlatano" name="saborPlatano" value="Platano">
                    <label for="saborPlatano">Plátano</label></td>
                <td>$6.50</td>
                <td><input class="cant" type="number" id="cantidadManzana" name="cantidadManzana" min="0" max="25"></td>
            </tr>

            <tr>
                <td><input type="checkbox" id="saborLimon" name="saborLimon" value="Limon">
                    <label for="saborLimon">Limón</label></td>
                <td>$4.50</td>
                <td><input class="cant" type="number" id="cantidadLimon" name="cantidadLimon" min="0" max="25"></td>
            </tr>

            <tr>
                <td><input type="checkbox" id="saborFresa" name="saborFresa" value="Fresa">
                    <label for="saborFresa">Fresa</label></td>
                <td>$6.50</td>
                <td><input class="cant" type="number" id="cantidadFresa" name="cantidadFresa" min="0" max="25"></td>
            </tr>

            <tr>
                <td><input type="checkbox" id="saborChocolate" name="saborChocolate" value="Chocolate">
                    <label for="saborChocolate">Chocolate</label></td>
                <td>$4.50</td>
                <td><input class="cant" type="number" id="cantidadChocolate" name="cantidadChocolate" min="0" max="25"></td>
            </tr>

            <tr>
                <td><input type="checkbox" id="saborZanahoria" name="saborZanahoria" value="Zanahoria">
                    <label for="saborZanahoria">Zanahoria</label></td>
                <td>$6.50</td>
                <td><input class="cant" type="number" id="cantidadZanahoria" name="cantidadZanahoria" min="0" max="25"></td>
            </tr>

            <tr>
                <td><input type="checkbox" id="saborSpecial" name="saborSpecial" value="Special">
                    <label for="saborSpecial">MilkyWay Special</label></td>
                <td>$4.50</td>
                <td><input class="cant" type="number" id="cantidadSpecial" name="cantidadSpecial" min="0" max="25"></td>
            </tr>
        </table>
        <button class="botones-menu">Escojer</button>
    </div>
</template>

<style scoped>
    h2{
        padding: 20px;
        margin: 0;
    }
    td{
        width: 50%;
        padding: 10px 2px;
    }
    table{
        margin: auto;
        padding: 20px 0;
        height: 280px;
        width: 270px;
        text-align: left;
    }
    .cant{
        width: 65px;
        background-color: #0060df;
        border-color: #0060df;
        
    }
    button{
        width: 250px;
        height: 40px;
        background-color: #1169a0;
    }
    .botones-menu {
        font-size: 15px;
        overflow: hidden;
        color: #fff;
        border-radius: 15px;
        border:transparent;
        transition: box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease ;
        
    }
    .botones-menu:hover{
        background-color: aqua;
        cursor: pointer;
        box-shadow: 0 0 10px aqua, 0 0 20px aqua, 0 0 20px aqua;
        color: #595f6e;
    }
</style>