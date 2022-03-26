<template>

<div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img alt="Logo de la pasteleria" src="./assets/pasteleria_astro.png" style="height: 80px">
        <span class="fs-4" style="padding-left: 15px">Pasteleria Astro</span>
      </a>

    <nav>
      <router-link to="/">Realizar pedido</router-link> |
      <router-link to="/pastelero">Pastelero</router-link>
    </nav>

    </header>
  </div>

  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(224,187,228);
  background: linear-gradient(0deg, rgba(224,187,228,1) 0%, rgba(173,230,208,1) 50%, rgba(255,223,211,1) 100%);
  height: 1150px;
}

.exp {
  display: flex; /*lo vuelve flexible*/
  justify-content: space-between; /*para separar a los extremos*/
}

.logo {
  display: flex; /*lo vuelve flexible*/
}

nav {
  padding: 20px;
  font-size: 25px;
}

nav a {
  font-weight: bold;
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #2c3e50;
}

</style>
