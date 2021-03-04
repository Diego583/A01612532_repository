const boxeadores = [{nombre: "Muhammad", apellido: "Ali", imagen: "https://www.latercera.com/resizer/C_k9DdkglQEVdNbN2mFwtRr6BZI=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/J5SBLOXXF5GCRCD7ZJXNEWKDXI.jpg"}, 
{nombre: "Floyd", apellido: "Mayweather Jr.", imagen: "https://i0.wp.com/naciondeportes.com/wp-content/uploads/2020/12/floyd-mayweather-jr-pelea-logan-paul.jpg?fit=1000%2C600&ssl=1"},
{nombre: "Sugar", apellido: "Ray Robinson", imagen: "https://i2.wp.com/elroundfinal.com/wp-content/uploads/2019/08/sugar-ray-robinson-LN-CQ-750x400.jpg?fit=625%2C390&ssl=1"}, 
{nombre: "Mike", apellido: "Tyson", imagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mike-tyson-stands-in-the-ring-during-the-fight-with-carl-news-photo-1606561448."}];

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