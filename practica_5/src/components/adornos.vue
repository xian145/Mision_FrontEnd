<template>
<div class="si">
    <div class="col mb-3">
        <p>Elija los adornos que prefiera (Costo por adorno $50)</p>
        <table class="table table-bordered">
            <tr>
                <th><label for="adorno1"><img src="../assets/adorno1.png" alt="adorno" width="100" height="100" for='adorno1'></label></th> <!--el For de label nos permite utilizar lo que estadentro de label como parte del checkbox, de tal manera que si nosotros damos click en la etiqueta funciona como el checkbox-->
                <th><label for="adorno2"><img src="../assets/adorno2.png" alt="adorno" width="100" height="100"></label></th>
                <th><label for="adorno3"><img src="../assets/adorno3.png" alt="adorno" width="100" height="100"></label></th>
                <th><label for="adorno4"><img src="../assets/adorno4.png" alt="adorno" width="100" height="100"></label></th>
                <th><label for="adorno5"><img src="../assets/adorno5.png" alt="adorno" width="100" height="100"></label></th>
                <th><label for="adorno6"><img src="../assets/adorno6.png" alt="adorno" width="100" height="100"></label></th>
                <th><label for="adorno7"><img src="../assets/adorno7.png" alt="adorno" width="80" height="100"></label></th>
                <th><label for="adorno8"><img src="../assets/adorno8.png" alt="adorno" width="100" height="100"></label></th>
            </tr>
            <tr>
                <td><input type="checkbox" name="adorno1" id="adorno1" value="adorno1" v-model="$store.state.customer.decor"></td> <!--Es necesario utilizar el id para poder utilizar el label-->
                <td><input type="checkbox" name="adorno2" id="adorno2" value="adorno2" v-model="$store.state.customer.decor"></td>
                <td><input type="checkbox" name="adorno3" id="adorno3" value="adorno3" v-model="$store.state.customer.decor"></td>
                <td><input type="checkbox" name="adorno4" id="adorno4" value="adorno4" v-model="$store.state.customer.decor"></td>
                <td><input type="checkbox" name="adorno5" id="adorno5" value="adorno5" v-model="$store.state.customer.decor"></td>
                <td><input type="checkbox" name="adorno6" id="adorno6" value="adorno6" v-model="$store.state.customer.decor"></td>
                <td><input type="checkbox" name="adorno7" id="adorno7" value="adorno7" v-model="$store.state.customer.decor"></td>
                <td><input type="checkbox" name="adorno8" id="adorno8" value="adorno8" v-model="$store.state.customer.decor"></td>
            </tr>
        </table>
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
</style>

<script>
export default {
    name: 'Adornos'
}
</script>