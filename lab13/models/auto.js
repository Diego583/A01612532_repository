const autos = [{marca: "Lamborghini", modelo: "Huracan Performante", imagen: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2020/12/nero-nemesis-lamborghini-huracan-performante-2180883.jpg"}, 
{marca: "Mclaren", modelo: "Speedtail", imagen: "https://www.eventosmotor.com/wp-content/uploads/2020/06/mclaren-reveals-speedtail-electric-secrets-2.jpg"},
{marca: "Ferrari", modelo: "Enzo", imagen: "https://i.pinimg.com/originals/90/ea/72/90ea722a456878110f094492d1648746.jpg"},
{marca: "Porsche", modelo: "Carrera GT", imagen: "https://collectingcars.imgix.net/images/2020/10/cover-74.jpg"},
{marca: "Lamborghini", modelo: "Aventador SVJ", imagen: "https://www.motorbiscuit.com/wp-content/uploads/2019/07/Lamborghini-Aventador-SVJ-2.jpg"},
{marca: "Ferrari", modelo: "LaFerrari", imagen: "https://icdn5.digitaltrends.com/image/digitaltrends_es/ferrari-laferrari-416x416.png"}];

module.exports = class Auto {
    constructor(marca, modelo, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.imagen = imagen;
    }

    save() {
        autos.push(this);
    }

    static fetchAll() {
        return autos;
    }

}