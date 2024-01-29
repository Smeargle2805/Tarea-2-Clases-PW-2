class Pelicula {
    constructor(id, titulo, director, añoEstreno) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.añoEstreno = añoEstreno;
    }
}

class ColeccionDePeliculas {
    constructor() {
        this.peliculas = [];
    }

    agregarPelicula(pelicula) {
        this.peliculas.push(pelicula);
    }

    actualizarPelicula(id, peliculaActualizada) {
        const peliculaAActualizar = this.peliculas.find(pelicula => pelicula.id === id);
        if (peliculaAActualizar) {
            Object.assign(peliculaAActualizar, peliculaActualizada);
        }
    }

    eliminarPelicula(id) {
        this.peliculas = this.peliculas.filter(pelicula => pelicula.id !== id);
    }

    obtenerTodasLasPeliculas() {
        return this.peliculas;
    }

    obtenerPeliculasPorDirector(director) {
        return this.peliculas.filter(pelicula => pelicula.director === director);
    }
}