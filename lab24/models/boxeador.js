const db = require('../util/database');

module.exports = class Boxeador {
    constructor(nombre, apellido, imagen) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.imagen = imagen;
    }

    save() {
        return db.execute('INSERT INTO boxeadores (nombre, apellido, imagen) VALUES (?, ?, ?)',
        [this.nombre, this.apellido, this.imagen]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM boxeadores');
    }

    static fetchByName(nombre) {
        return db.execute("SELECT * FROM boxeadores WHERE nombre LIKE ? OR apellido LIKE ? ", ['%' + nombre + '%', '%' + nombre + '%']);
    }
}