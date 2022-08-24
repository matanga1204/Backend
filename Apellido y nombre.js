class Usuario {
    constructor (nombre, apellido, juegos, mascotas) {
    this.nombre = nombre
    this.apellido = apellido
    this.juegos = [juegos]
    this.mascotas = [mascotas]
    }

    getFullName() {
        return (`Mi nombre completo es: ${this.nombre} ${this.apellido}`)
    }

    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota)
        return (this.mascotas)
    }

    countMascotas() {
       let cantidadMascotas = this.mascotas.length
       return (`Cantidad de Mascotas = ${cantidadMascotas}`)
    }

    addGame(nombreJuego, autor) {
        this.libros.push({nombre: nombreJuego, autorJuego: autor})
        return (this.libros)
    }

    getGameName() {
        this.libros.map(function(lib) {
            return console.log(lib.nombre)
        })

    }
}

const usuario = new Usuario ("Mateo", "Gigy Traynor", "Football Manager", "Perro")

console.log(usuario);
console.log(usuario.getFullName())
console.log(usuario.addMascota("Gato"))
console.log(usuario.countMascotas())
console.log(usuario.libros)
usuario.addGame("Assasins Creed", "Ubisoft")
usuario.addGame("Batman arkham Night", "Rocksteady")
usuario.addGame("El señor de los anillos", "Tolkien")
console.log(usuario.Game)
console.log(usuario.getGameName())