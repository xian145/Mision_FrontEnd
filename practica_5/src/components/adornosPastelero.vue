<template>
<div class="si">
    <div class="col col-bg-5 col-lg-5">
        <h2>Cantidad de adornos disponibles</h2>
        <table class="table table-bordered">
            <tr>
                <th><img src="../assets/adorno1.png" alt="adorno1" width="100" height="100"></th>
                <th><img src="../assets/adorno2.png" alt="adorno2" width="100" height="100"></th>
                <th><img src="../assets/adorno3.png" alt="adorno3" width="100" height="100"></th>
                <th><img src="../assets/adorno4.png" alt="adorno4" width="100" height="100"></th>
                <th><img src="../assets/adorno5.png" alt="adorno5" width="100" height="100"></th>
                <th><img src="../assets/adorno6.png" alt="adorno6" width="100" height="100"></th>
                <th><img src="../assets/adorno7.png" alt="adorno7" width="80" height="100"></th>
                <th><img src="../assets/adorno8.png" alt="adorno8" width="100" height="100"></th>
            </tr>
            <tr>
                <td>{{ $store.state.decoration.adorno1 }}</td>
                <td>{{ $store.state.decoration.adorno2 }}</td>
                <td>{{ $store.state.decoration.adorno3 }}</td>
                <td>{{ $store.state.decoration.adorno4 }}</td>
                <td>{{ $store.state.decoration.adorno5 }}</td>
                <td>{{ $store.state.decoration.adorno6 }}</td>
                <td>{{ $store.state.decoration.adorno7 }}</td>
                <td>{{ $store.state.decoration.adorno8 }}</td>
            </tr>
        </table>
    </div>
</div>
    <hr>
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