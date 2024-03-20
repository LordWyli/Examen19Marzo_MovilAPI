const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const Categoria = require('./model/Categoria');
const Subcategoria = require('./model/Subcategoria');
const Autor = require('./model/Autor');
const Titulo = require('./model/Titulo');
const TituloAutor = require('./model/TituloAutor')
const PORT = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

/*API CATEGORIAS (GET, POST, UPDATE, DELETE)*/

/*GET's Categorias*/
app.get('/api/getCategorias', async (req, res) => {
    const categorias = await Categoria.findAll();
    res.json(categorias);
});

/*GET by ID Categoria*/
app.get('/api/getCategorias/:id', async (req, res) => {
    const {idCategoria} = req.params;
    try {
        const categoria = await Categoria.findByPk(idCategoria);
        if (categoria) {
            res.status(200).json(categoria);
        }
        else {
            res.status(404).json({
                message: 'Categoria no encontrada, por wey',
            });
        }
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Error al consultar la categoria',
        });
    }
});

/* POST Categoria*/
app.post('/api/insertCategoria', async (req, res) => {
    const {categoria} = req.body;
    try {
        const newCategoria = await Categoria.create({categoria});
        res.status(200).json({
            newCategoria,
        });
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Error al crear la categoria',
        });
    }
});

/* PUT Categorias */
app.put('/api/categoria/:idCategoria', async (req, res) => {
    const {idCategoria} = req.params;
    const {categoria} = req.body;
    try {
        const categoriaExistentes = await Categoria.findByPk(idCategoria);
        if (categoriaExistentes) {
            await categoriaExistentes.update({categoria});
            res.status(200).json({
                message: 'Categoria actualizada',
            });
        }
        else {
            res.status(404).json({
                message: 'Categoria no encontrada',
            });
        }
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Error al actualizar la categoria',
        });
    }
});

/* DELETE Categorias */
app.delete('/api/categoria/:idCategoria', async (req, res) => {
    const {idCategoria} = req.params;
    try {
        const categoria = await Categoria.findByPk(idCategoria);
        if (categoria) {
            await categoria.destroy();
            res.status(200).json({
                message: 'Categoria eliminada',
            });
        }
        else {
            res.status(404).json({
                message: 'Categoria no encontrada',
            });
        }
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Error al eliminar la categoria',
        });
    }
});


/*GET's Subcategorias*/
app.get('/api/getSubcategorias', async (req, res) => {
    try {
        const subcategorias = await Subcategoria.findAll();
        res.json(subcategorias);
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Error al obtener las subcategorias',
        });
    }
});

/*GET by ID Subcategorias*/
app.get('/api/getSubCategorias/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const subcategoria = await Subcategoria.findByPk(id);
        if (subcategoria) {
            res.status(200).json(subcategoria);
        } else {
            res.status(404).json({
                message: 'Subcategoria no encontrada',
            });
        }
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Error al consultar la subcategoria',
        });
    }
});

/* POST Subcategoria*/
app.post('/api/insertSubCategoria', async (req, res) => {
    const { subcategoria, FK_idCategoria } = req.body;
    try {
        const newSubcategoria = await Subcategoria.create({ subcategoria, FK_idCategoria });
        res.status(200).json({
            newSubcategoria,
        });
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Error al crear la subcategoria',
        });
    }
});

/* PUT Subcategoria */
app.put('/api/subcategoria/:idSubCategoria', async (req, res) => {
    const { idSubCategoria } = req.params;
    const { subcategoria } = req.body;
    try {
        const subcategoriaExistente = await Subcategoria.findByPk(idSubCategoria);
        if (subcategoriaExistente) {
            await subcategoriaExistente.update({ subcategoria });
            res.status(200).json({
                message: 'SubCategoria actualizada',
            });
        } else {
            res.status(404).json({
                message: 'SubCategoria no encontrada',
            });
        }
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Error al actualizar la subcategoria',
        });
    }
});

/* DELETE Subcategoria */
app.delete('/api/subcategoria/:idSubcategoria', async (req, res) => {
    const { idSubcategoria } = req.params;
    try {
        const subcategoria = await Subcategoria.findByPk(idSubcategoria);
        if (subcategoria) {
            await subcategoria.destroy();
            res.status(200).json({
                message: 'SubCategoria eliminada',
            });
        } else {
            res.status(404).json({
                message: 'SubCategoria no encontrada',
            });
        }
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Error al eliminar la Subcategoria',
        });
    }
});


/*GET's Autores*/
app.get('/api/getAutores', async (req, res) => {
    try {
        const autores = await Autor.findAll();
        res.json(autores);
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Error al obtener los autores',
        });
    }
});

/*GET by ID Autor*/
app.get('/api/getAutores/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const autor = await Autor.findByPk(id);
        if (autor) {
            res.status(200).json(autor);
        } else {
            res.status(404).json({
                message: 'Autor no encontrado',
            });
        }
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Error al consultar el autor',
        });
    }
});

/* POST Autor */
app.post('/api/insertAutor', async (req, res) => {
    const { nombre, nacionalidad, correoElectronico } = req.body;
    try {
        const newAutor = await Autor.create({ nombre, nacionalidad, correoElectronico });
        res.status(200).json({
            newAutor,
        });
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Error al crear el autor',
        });
    }
});

/* PUT Autor */
app.put('/api/autor/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, nacionalidad, correoElectronico } = req.body;
    try {
        const autorExistente = await Autor.findByPk(id);
        if (autorExistente) {
            await autorExistente.update({ nombre, nacionalidad, correoElectronico });
            res.status(200).json({
                message: 'Autor actualizado',
            });
        } else {
            res.status(404).json({
                message: 'Autor no encontrado',
            });
        }
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Error al actualizar el autor',
        });
    }
});

/* DELETE Autor */
app.delete('/api/autor/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const autor = await Autor.findByPk(id);
        if (autor) {
            await autor.destroy();
            res.status(200).json({
                message: 'Autor eliminado',
            });
        } else {
            res.status(404).json({
                message: 'Autor no encontrado',
            });
        }
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Error al eliminar el autor',
        });
    }
});


/*GET's Titulos*/
app.get('/api/getTitulos', async (req, res) => {
    try {
        const titulos = await Titulo.findAll();
        res.json(titulos);
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Error al obtener los títulos',
        });
    }
});

/*GET by ID Titulo*/
app.get('/api/getTitulos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const titulo = await Titulo.findByPk(id);
        if (titulo) {
            res.status(200).json(titulo);
        } else {
            res.status(404).json({
                message: 'Título no encontrado',
            });
        }
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Error al consultar el título',
        });
    }
});

/* POST Titulo */
app.post('/api/insertTitulo', async (req, res) => {
    const { titulo, editorial, isbn, fechaPublicacion, noEjemplares, FK_idSubcategoria } = req.body;
    try {
        const newTitulo = await Titulo.create({ titulo, editorial, isbn, fechaPublicacion, noEjemplares, FK_idSubcategoria });
        res.status(200).json({
            newTitulo,
        });
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Error al crear el título',
        });
    }
});

/* PUT Titulo */
app.put('/api/titulo/:id', async (req, res) => {
    const { id } = req.params;
    const { titulo, editorial, isbn, fechaPublicacion, noEjemplares, FK_idSubcategoria } = req.body;
    try {
        const tituloExistente = await Titulo.findByPk(id);
        if (tituloExistente) {
            await tituloExistente.update({ titulo, editorial, isbn, fechaPublicacion, noEjemplares, FK_idSubcategoria });
            res.status(200).json({
                message: 'Título actualizado',
            });
        } else {
            res.status(404).json({
                message: 'Título no encontrado',
            });
        }
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Error al actualizar el título',
        });
    }
});

/* DELETE Titulo */
app.delete('/api/titulo/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const titulo = await Titulo.findByPk(id);
        if (titulo) {
            await titulo.destroy();
            res.status(200).json({
                message: 'Título eliminado',
            });
        } else {
            res.status(404).json({
                message: 'Título no encontrado',
            });
        }
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Error al eliminar el título',
        });
    }
});


app.get('/api/getTitulosAutores', async (req, res) => {
    try {
        const titulosAutores = await TituloAutor.findAll({
            attributes: ['FK_idAutor', 'FK_idTitulo']
        });
        res.json(titulosAutores);
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Error al obtener los títulos y autores',
        });
    }
});

/*PORT */
app.listen(
    PORT,
    () => console.log(`Server running on http://localhost:${PORT}`)
)