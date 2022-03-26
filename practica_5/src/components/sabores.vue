<template>
<div class="si mb-3">
    <div class="col mb-3">
        <p>Elija el o los sabores (Precio extra por sabor adicional $50)</p>
        <table class="table table-bordered">
            <tr>
                <th><label for="vainilla">Vainilla</label></th>
                <th><label for="redvelvet">Red Velvet</label></th>
                <th><label for="chocolate">Chocolate</label></th>
                <th><label for="fresa">Fresa</label></th>
                <th><label for="matcha">Matcha</label></th>
                <th><label for="coco">Coco</label></th>
            </tr>
            <tr>
                <td><input type="checkbox" id="vainilla" value="Vainilla" v-model="$store.state.customer.flavor"></td>
                <td><input type="checkbox" id="redvelvet" value="RedVelvet" v-model="$store.state.customer.flavor"></td>
                <td><input type="checkbox" id="chocolate" value="Chocolate" v-model="$store.state.customer.flavor"></td>
                <td><input type="checkbox" id="fresa" value="Fresa" v-model="$store.state.customer.flavor"></td>
                <td><input type="checkbox" id="matcha" value="Matcha" v-model="$store.state.customer.flavor"></td>
                <td><input type="checkbox" id="coco" value="Coco" v-model="$store.state.customer.flavor"></td>
            </tr>
        </table>
        <div v-if="$store.state.flavorError" class="error"> <!--Solo se creara este div en caso de que el if sea True, cosa que sucedera si no se elije un sabor-->
            {{$store.state.flavorError}}
        </div>
    </div>
</div>
</template>

<style scoped>
    .si {
        display: flex;
        justify-content: center;
    }   

    .col {
        max-width: 80%;
    }

    .error{
        color: red;
        margin-top: 10px;
        font-size: 0.8em;
        font-weight: bold;
    }
</style>

<script>
export default {
    name: 'Sabores',
}
</script>