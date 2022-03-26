<template>
  <div>
    <div class="col col-bg-12 col-lg-12">

      <table class="table table-striped">
        <tr>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Correo</th>
          <th>Sabores</th>
          <th>Adornos</th>
        </tr>
        <tr v-for="info in $store.state.information" :key="info">
          <td>
            {{ info[0] }} 
          </td>
          <td>
            {{ info[1] }}
          </td>
          <td> 
            {{ info[2] }}
          </td>
          <td>
            {{ info[3] }}
          </td>
          <td>
            {{ info[4] }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Pedidos'
}
</script>

<style>
  .xd {
    background-color: aqua;
  };
</style>