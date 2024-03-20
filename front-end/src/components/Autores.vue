<template lang="es">
    <div class="container">
        <h2 class="text-center">Lista de Autores</h2>
        <div class="card">
            
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>idAutor</th>
                            <th>nombre</th>
                            <th>nacionalidad</th>
                            <th>correoElectronico</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="c in paginatedCategorias" :key="c.idTitulo">
                            <td>{{ c.idAutor }}</td>
                            <td>{{ c.nombre }}</td>
                            <td>{{ c.nacionalidad }}</td>
                            <td>{{ c.correoElectronico }}</td>
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
    name: 'Autores',
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
        axios.get('http://localhost:3000/api/getAutores/')
            .then(res => {
                this.subcategorias = res.data;
            });
    },
}
</script>
<style lang="">

</style>