## M7-7-Aplicación de Películas y Actores (Node.js, Postgres y sequelize)

## Descripción

Aplicación web desarrollada con Node.js, Express y Sequelize que permite gestionar películas y actores, incluyendo una relación muchos a muchos (N–N) entre ambos mediante una tabla intermedia.
El sistema permite crear, listar y relacionar entidades, además de realizar asignaciones utilizando transacciones para garantizar la integridad de los datos.



## Tecnologías utilizadas

* Node.js
* Express
* PostgreSQL
* Sequelize (ORM)
* HTML / CSS / JavaScript
* Fetch API
* dotenv

## Funcionalidades

* Crear películas
* Crear actores
* Listar películas con sus actores asociados
* Listar actores con sus películas
* Asignar actor a película (relación N–N con transacción)
* Eliminar películas


## Endpoints

| Método | Endpoint       | Descripción                           |
| ------ | -------------- | ------------------------------------- |
| GET    | /peliculas     | Lista todas las películas con actores |
| POST   | /peliculas     | Crea una nueva película               |
| DELETE | /peliculas/:id | Elimina una película                  |
| GET    | /actores       | Lista todos los actores con películas |
| POST   | /actores       | Crea un nuevo actor                   |
| POST   | /asignar-actor | Asigna un actor a una película        |


## Instrucciones de ejecución

1. Configurar el archivo **.env_ejemplo** con las credenciales de tu base de datos.
2. Instalar dependencias **npm install**
3. Ejecutar Servidor **npm start**
4. Abrir Navegador http://localhost:3000.

## Notas

* Las tablas se crean automáticamente con `sequelize.sync()`.
* La relación entre películas y actores es de tipo muchos a muchos (N–N).
* Se utilizan transacciones para asegurar la consistencia al asignar actores a películas.
* Las credenciales de la base de datos se configuran mediante variables de entorno (`.env`).
* El frontend consume la API usando `fetch()`.

## Autor
Fernanda Álvarez para curso Fullstack Javascript Sence.
