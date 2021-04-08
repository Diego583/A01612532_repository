const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class User {
    constructor(nombre, username, password) {
        this.nombre = nombre;
        this.username = username;
        this.password = password;
    }

    save() {
        return bcrypt.hash(this.password, 12)
        .then((encrypted_password) => {
            return db.execute('INSERT INTO usuarios (username, nombre, password) VALUES (?, ?, ?)',
        [this.username, this.nombre, encrypted_password]);
        }).catch(err => console.log(err));
    }

    static fetchOne(username) {
        return db.execute('SELECT * FROM usuarios WHERE username = ?', [username]);
    }
}