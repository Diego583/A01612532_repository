const boxeadores = [{nombre: "Canelo", apellido: "Álvarez", imagen: "https://i2.wp.com/naciondeportes.com/wp-content/uploads/2021/01/canelo-alvarez-peleara-el-27-de-febrero-de-2021-1.jpg?fit=1000%2C600&ssl=1"}, 
{nombre: "Terrence", apellido: "Crawford", imagen: "https://cdn.vox-cdn.com/thumbor/GSE3md1MaKVNLw4AyAu76_2UXk0=/0x570:3200x2383/1200x800/filters:focal(1344x649:1856x1161)/cdn.vox-cdn.com/uploads/chorus_image/image/65908497/1194018076.jpg.0.jpg"},
{nombre: "Naoya", apellido: "Inoue", imagen: "https://bolavip.com/__export/1610983419348/sites/bolavip/img/2021/01/18/naoyainoueee_crop1610983418960.jpg_1902800913.jpg"}, 
{nombre: "Teófimo", apellido: "López", imagen: "https://cdn.vox-cdn.com/thumbor/vfvMgkWJLDEEBkzAIGQVjOZlsac=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21969724/i.jpg"}];

module.exports = class Boxeador {
    constructor(nombre, apellido, imagen) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.imagen = imagen;
    }

    save() {
        boxeadores.push(this);
    }

    static fetchAll() {
        return boxeadores;
    }

}