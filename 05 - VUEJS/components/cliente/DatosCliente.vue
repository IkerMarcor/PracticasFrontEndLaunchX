<template>
    <div class="contenedor">
        <br>
        <h3>Información de Contacto</h3>
        <form class="info-cliente">
            <div class="grupo">
                <input class="info-cliente-input" type="text" id="nombre" name="nombre" autocomplete="off" required>
                <label for="nombre" class="lbl-name">
                    <span class="span-name">Nombre</span>
                </label>
            </div>
            <div class="grupo">
                <input class="info-cliente-input" type="text" id="apellido" name="apellido" autocomplete="off" required>
                <label for="apellido" class="lbl-name">
                    <span class="span-name">Apellido</span>
                </label>
            </div>
            <div class="grupo">
                <input class="info-cliente-input" type="tel" id="telefono" name="telefono" maxlength="10" autocomplete="off" required>
                <label for="telefono" class="lbl-name">
                    <span class="span-name">Teléfono</span>
                </label>
            </div>
            <div class="grupo">
                <input class="info-cliente-input" type="text" id="correo" name="correo" autocomplete="off" required>
                <label for="correo" class="lbl-name">
                    <span class="span-name">Correo</span>
                </label>
            </div>
        </form>
        <button class="botones-menu" type="submit">Hacer pedido 🚀</button>
        <hr>
    </div>
</template>

<style scoped>
    .contenedor {
        height: 100%;
    }

    .info-cliente {
        margin: 10% 20%;
        text-align: start;
        position: relative;

    }

    form .grupo {
        position: relative;
        margin: 20px;
        overflow: hidden;
    }

    .info-cliente input {
        width: 100%;
        height: 25px;
        color: #f1eecc;
        background: none;
        padding-top: 15px;
        border: none;
        outline: none;
    }

    .info-cliente label {
        position: absolute;
        bottom: 0px;
        left: 0%;
        width: 100%;
        height: 100%;
        pointer-events: none;
        border-bottom: 1px solid #f1eecc;
    }

    .info-cliente label::after {
        content: "";
        position: absolute;
        left: 0px;
        bottom: -1px;
        height: 100%;
        width: 100%;
        border-bottom: 3px solid aqua;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    }

    .span-name {
        position: absolute;
        bottom: 5px;
        left: 0;
        transition: all 0.3s ease;
    }

    .info-cliente input:focus+.lbl-name .span-name,
    .info-cliente input:valid+.lbl-name .span-name {
        transform: translateY(-120%);
        font-size: 12px;
        color: aqua;
    }

    .info-cliente input:focus+.lbl-name::after,
    .info-cliente input:valid+.lbl-name::after {
        transform: translateX(0);
    }

    .botones-menu {
        width: 9em;
        height: 4em;
        margin: 25px;
        font-size: 21px;
        overflow: hidden;
        color: #fff;
        background-color: #1169a0;
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