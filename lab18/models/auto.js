const db = require('../util/database');

module.exports = class Auto {
    constructor(marca, modelo, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.imagen = imagen;
    }

    save() {
        return db.execute('INSERT INTO autos (marca, modelo, imagen) VALUES (?, ?, ?)',
        [this.marca, this.modelo, this.imagen]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM autos');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM autos WHERE id = ?', [id]);
    }
}