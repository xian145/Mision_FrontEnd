<template>
<div class="si">
    <div class="col mb-3">
        <div class="col-auto columna">
            <h2>Informacion del comprador</h2>
            <label class="col-form-label">Escriba su nombre completo</label>
            <input type="text" placeholder="Luis..." required v-model="$store.state.customer.name" autocomplete="off" class="form-control" ><br>
        </div >

        <div class="col-auto">
            <label class="col-form-label">Introduzca su numero de telefono</label>
            <input type="tel"  maxlength="10" placeholder="662..." required v-model="$store.state.customer.phone" autocomplete="off" class="form-control"><br>
        </div>

        <div class="col-auto mb-4">
            <label class="col-form-label">Introduzca su correo electronico</label>
            <input type="email" placeholder="...@correo.com" required v-model="$store.state.customer.email" autocomplete="off" class="form-control">
        </div>
        

    </div>
</div>
</template>

<script>
export default {
    name: 'Informacion',
}
</script>

<style scoped>
    .col {
        max-width: 80%;
    }

    .si {
        display: flex;
        justify-content: center;
    }   

    @media only screen and (min-width: 768px) {
            .col {
        max-width: 50%;
    }
    }

    @media only screen and (min-width: 1000px) {
            .col {
        max-width: 30%;
    }
    }
</style>