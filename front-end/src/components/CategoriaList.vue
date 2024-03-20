<template lang="es">
    <div class="container">
        <h2 class="text-center">Lista de Categorias</h2>
        <div class="card">
            
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>idCategoria</th>
                            <th>Categoria</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="c in paginatedCategorias" :key="c.idCategoria">
                            <td>{{ c.idCategoria }}</td>
                            <td>{{ c.categoria }}</td>
                            
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
    name: 'CategoriaList',
    data() {
        return {
            categorias: [],
            currentPage: 1,
            itemsPerPage: 5,

        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.categorias.length / this.itemsPerPage);
        },
        paginatedCategorias() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.categorias.slice(startIndex, endIndex);
        }
    },
    mounted() {
        axios.get('http://localhost:3000/api/getCategorias/')
            .then(res => {
                this.categorias = res.data;
            });
    },
}
</script>
<style lang="">

</style>