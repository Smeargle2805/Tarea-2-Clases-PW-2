# Gestor de Coleccion de Peliculas

Esta aplicación web simple está diseñada para administrar una colección de películas utilizando JavaScript. Utiliza clases para representar películas y una colección de películas, permitiendo realizar operaciones como agregar, actualizar, eliminar y obtener películas.

## Como funciona?

### 1. Clase Pelicula:

- La clase Pelicula se utiliza para representar una película con propiedades como id, titulo, director y añoEstreno.

### 2. Clase ColeccionDePeliculas:

- La clase ColeccionDePeliculas es una colección de películas que permite realizar operaciones en la colección completa.

- Métodos principales:
  
  - *agregarPelicula(pelicula)*: Agrega una nueva película a la colección.
  - *actualizarPelicula(id, peliculaActualizada)*: Actualiza la información de una película existente.
  - *eliminarPelicula(id)*: Elimina una película de la colección.
  - *obtenerTodasLasPeliculas()*: Obtiene todas las películas en la colección.
  - *obtenerPeliculasPorDirector(director)*: Obtiene todas las películas dirigidas por un director específico.

Para inicializar la app se debera ingresar el siguiente codigo en la terminal de VSC:
~~~
npm run dev
~~~

## Ejemplos de Uso

#### Ejemplo de creación de una instancia de la colección y algunas películas
~~~
const coleccionPeliculas = new ColeccionDePeliculas();

const pelicula1 = new Pelicula(1, "Interstellar", "Christopher Nolan", 2014);
const pelicula2 = new Pelicula(2, "Taxi Driver", "Martin Scorsese", 1976);
const pelicula3 = new Pelicula(3, "El Padrino", "Francis Ford Coppola", 1972);

coleccionPeliculas.agregarPelicula(pelicula1);
coleccionPeliculas.agregarPelicula(pelicula2);
coleccionPeliculas.agregarPelicula(pelicula3);
~~~

#### Ejemplo de actualización de una película
~~~
coleccionPeliculas.actualizarPelicula(1, { titulo: "Interstellar (Actualizada)" });
~~~

#### Ejemplo de obtener todas las películas
~~~
const todasLasPeliculas = coleccionPeliculas.obtenerTodasLasPeliculas();
console.log("Todas las Películas:", todasLasPeliculas);
~~~

#### Ejemplo de obtener películas por director
~~~
const peliculasNolan = coleccionPeliculas.obtenerPeliculasPorDirector("Christopher Nolan");
console.log("Películas de Christopher Nolan:", peliculasNolan);
~~~
#### Ejemplo de eliminar una película
~~~
coleccionPeliculas.eliminarPelicula(2);
console.log("Películas después de la eliminación:", coleccionPeliculas.obtenerTodasLasPeliculas());
~~~