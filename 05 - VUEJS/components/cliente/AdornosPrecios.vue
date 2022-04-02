<template>
    <div class="contenedor">
        <h2>Adornos</h2>
        <table>
            <tr>
                <th>Toppinngs</th>
                <th>Precio</th>
                <th>Cantidad</th>
            </tr>

            <tr>
                <td><input type="checkbox" id="toppingCrema" name="toppingCrema" value="Crema">
                    <label for="toppingCrema">Crema </label></td>
                <td>$1.50</td>
                <td><input class="cant" type="number" id="cantidadCrema" name="cantidadCrema" min="0" max="25"></td>
            </tr>

            <tr>
                <td><input type="checkbox" id="toppingNueces" name="toppingNueces" value="Nueces">
                    <label for="toppingNueces">Nueces</label></td>
                <td>$1.00</td>
                <td><input class="cant" type="number" id="cantidadNueces" name="cantidadNueces" min="0" max="25"></td>
            </tr>

            <tr>
                <td><input type="checkbox" id="toppingCereza" name="toppingCereza" value="Cereza">
                    <label for="toppingCereza">Cereza</label></td>
                <td>$2.50</td>
                <td><input class="cant" type="number" id="cantidadCereza" name="cantidadCereza" min="0" max="25"></td>
            </tr>

            <tr>
                <td><input type="checkbox" id="toppingChispitas" name="toppingChispitas" value="Chispitas">
                    <label for="toppingChispitas">Chispitas</label>
                </td>
                <td>$1.50</td>
                <td><input class="cant" type="number" id="cantidadChispitas" name="cantidadChispitas" min="0" max="25"></td>
            </tr>

            <tr>
                <td>
                    <input type="checkbox" id="toppingChocolate" name="toppingChocolate" value="Chocolate">
                    <label for="toppingChocolate">Chocolate</label>
                </td>
                <td>$1.50</td>
                <td><input class="cant" type="number" id="cantidadChocolate" name="cantidadChocolate" min="0" max="25"></td>
            </tr>

            <tr>
                <td><input type="checkbox" id="toppingCajeta" name="toppingCajeta" value="Cajeta">
                    <label for="toppingCajeta">Cajeta</label></td>
                <td>$2.50</td>
                <td><input class="cant" type="number" id="cantidadCajeta" name="cantidadCajeta" min="0" max="25"></td>
            </tr>

            <tr>
                <td><input type="checkbox" id="toppingBayas" name="toppingBayas" value="Bayas">
                    <label for="toppingBayas">Bayas</label></td>
                <td>$2.50</td>
                <td><input class="cant" type="number" id="cantidadBayas" name="cantidadBayas" min="0" max="25"></td>
            </tr>
            <tr>
                <td><input type="checkbox" id="toppingCC" name="toppingCC" value="CremaCacahuate">
                    <label for="toppingCC">Crema de cacahuate</label></td>
                <td>$2.00</td>
                <td><input class="cant" type="number" id="cantidadCC" name="cantidadCC" min="0" max="25"></td>
            </tr>
        </table>
        <button class="botones-menu">Escojer</button>
        <br>
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