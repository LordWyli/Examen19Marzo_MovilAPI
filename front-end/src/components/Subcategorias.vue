<template lang="es">
    <div class="container">
        <h2 class="text-center">Lista de Subcategorias</h2>
        <div class="card">
            
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>idSubcategorias</th>
                            <th>subcategoria</th>
                            <th>idCategorias</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="c in paginatedCategorias" :key="c.idSubcategoria">
                            <td>{{ c.idSubcategoria }}</td>
                            <td>{{ c.subcategoria }}</td>
                            <td>{{ c.FK_idCategoria }}</td>
                            
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
    name: 'Subcategorias',
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
        axios.get('http://localhost:3000/api/getSubcategorias/')
            .then(res => {
                this.subcategorias = res.data;
            });
    },
}
</script>
<style lang="">

</style>