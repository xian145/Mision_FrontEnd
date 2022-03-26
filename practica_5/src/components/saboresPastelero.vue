<template>
<div class="si">
    <div class="col col-bg-4 col-lg-4">
        <h2>Cantidad de sabores disponibles</h2>
        <table class="table table-bordered">
            <tr>
                <th>Sabores</th>
                <th>Vainilla</th>
                <th>Red Velvet</th>
                <th>Chocolate</th>
                <th>Fresa</th>
                <th>Matcha</th>
                <th>Coco</th>
            </tr>
            <tr>
                <th>Cantidad</th>
                <td>{{ $store.state.flavors.Vainilla }}</td>
                <td>{{ $store.state.flavors.RedVelvet }}</td>
                <td>{{ $store.state.flavors.Chocolate }}</td>
                <td>{{ $store.state.flavors.Fresa }}</td>
                <td>{{ $store.state.flavors.Matcha }}</td>
                <td>{{ $store.state.flavors.Coco }}</td>
            </tr>
        </table><br>
    </div>
</div>
    <hr><br>
</template>

<script>
export default {
    name: 'AdornosPastelero'
}
</script>

<style scoped>
    .si {
        display: flex;
        justify-content: center;
    }   

    .col {
        max-width: 80%;
    }
</style>