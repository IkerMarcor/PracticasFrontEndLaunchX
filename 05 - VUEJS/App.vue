<template>
<div class="menu">
  <nav>
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/about">Acerca de</router-link></li>
      <li><router-link to="/pastelero">Pastelero</router-link></li>
    </ul>
  </nav>
  <router-view/>
  </div>
</template>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f1eecc;
}
body{
  background-color: #122665 ;
}
h1,h2{
  text-align: center;
}
nav {
  text-align: center;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  display: block;
  padding: 20px 80px;
}

nav a.router-link-exact-active {
  color: #102053;
  background: #f1eecc;
}

.menu{
  background-color: #102053;
  height: 58px;
}

.menu ul li{
  display: inline-block;
  /* padding: 0 5px; */
}
.menu ul li a:hover{
  background-color: #2f7dca;
}

hr{
  margin: 0px;
  height: 3px;
  background-color: #749ecf;
  border: #749ecf;
}

.contenedor{
  background-color: #3875ba;
  height: 550px;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
}

.contenedor-descrip{
  background-color: #3875ba;
  height: 280px;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
}

.contenedor-pastelero{
  background-color: #3875ba;
  height: 100%;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
}

.desc-box{
  resize: none;
  color: #2f7dca;
  height: 150px;
  width: 80%;
  text-align: justify;
  margin: 1em;
  padding: 0.5em;
  border-radius: 10px;
  border: 2px solid transparent;
  outline: none;
  font-size: 15px;
  transition: all 0.3s ease;
}
.desc-box:hover{
  cursor: pointer;
  background: #dddda5;
}
.desc-box:focus{
  cursor:text;
  color:#2f7dca;
  background-color: #ecebd9;
  border-color: transparent;
}
</style>
