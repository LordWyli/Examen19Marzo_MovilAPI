CREATE DATABASE Biblioteca;

USE Biblioteca;

/*Categorias*/
CREATE TABLE Categorias(
	idCategoria INT PRIMARY KEY AUTO_INCREMENT,
    categoria VARCHAR(100)
);

/*Subcategorias*/
CREATE TABLE Subcategorias(
	idSubcategoria INT PRIMARY KEY AUTO_INCREMENT,
    subcategoria VARCHAR(100),
    FK_idCategoria INT,
    FOREIGN KEY (FK_idCategoria) REFERENCES Categorias(idCategoria)
);

/*Autores*/
CREATE TABLE Autores(
	idAutor INT PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(100),
	nacionalidad VARCHAR(100),
	correoElectronico VARCHAR(100)
);

/*Titulos*/
CREATE TABLE Titulos(
	idTitulo INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	editorial VARCHAR(100),
	isbn VARCHAR(100),
	fechaPublicacion DATETIME,
	noEjemplares INT NOT NULL,
    FK_idSubcategoria INT,
    FOREIGN KEY (FK_idSubcategoria) REFERENCES Subcategorias(idSubcategoria)
);

/*Titulo Autores*/
CREATE TABLE TitulosAutores(
	FK_idAutor INT,
    FK_idTitulo INT,
    FOREIGN KEY (FK_idAutor) REFERENCES Autores(idAutor),
    FOREIGN KEY (FK_idTitulo) REFERENCES Titulos(idTitulo)
);


/*INSERT*/
INSERT INTO Categorias (categoria) VALUES ('Horror');

INSERT INTO Subcategorias (subcategoria, FK_idCategoria) VALUES ('Ficción', 1);

INSERT INTO Autores (nombre, nacionalidad, correoElectronico) 
VALUES ('Gabriel García Márquez', 'Colombiano', 'gabo@example.com');

INSERT INTO Titulos (titulo, editorial, isbn, fechaPublicacion, noEjemplares, FK_idSubcategoria) 
VALUES ('Cien años de soledad', 'Editorial Sudamericana', '978-84-376-0494-7', '1967-05-30', 100, 1);

SELECT * FROM TitulosAutores;