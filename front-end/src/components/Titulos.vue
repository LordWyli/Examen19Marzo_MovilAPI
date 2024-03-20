<template lang="es">
    <div class="container">
        <h2 class="text-center">Lista de Titulos</h2>
        <div class="card">
            
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>idTitulo</th>
                            <th>titulo</th>
                            <th>editorial</th>
                            <th>isbn</th>
                            <th>fechaPublicacion</th>
                            <th>noEjemplares</th>
                            <th>FK_idSubcategoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="c in paginatedCategorias" :key="c.idTitulo">
                            <td>{{ c.idTitulo }}</td>
                            <td>{{ c.titulo }}</td>
                            <td>{{ c.editorial }}</td>
                            <td>{{ c.isbn }}</td>
                            <td>{{ c.fechaPublicacion }}</td>
                            <td>{{ c.noEjemplares }}</td>
                            <td>{{ c.FK_idSubcategoria }}</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Titulos',
    data() {
        return {
            subcategorias: [],
            currentPage: 1,
            itemsPerPage: 5,

        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.subcategorias.length / this.itemsPerPage);
        },
        paginatedCategorias() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.subcategorias.slice(startIndex, endIndex);
        }
    },
    mounted() {
        axios.get('http://localhost:3000/api/getTitulos/')
            .then(res => {
                this.subcategorias = res.data;
            });
    },
}
</script>
<style lang="">

</style>