export class Pelicula {
    id: number = 0;
    Nombre: string = '';
    tipo: string = '';
    fechaEstreno: Date = new Date();
    cantidadPublico: number = 0;
    foto: string = '';


    /**
     *
     */
    constructor(id: number, Nombre: string, tipo: string, fechaEstreno: Date, cantidadPublico: number, foto: string) {
        this.id = id,
            this.Nombre = Nombre,
            this.tipo = tipo,
            this.fechaEstreno = fechaEstreno,
            this.cantidadPublico = cantidadPublico,
            this.foto = foto
    }
}

export class TipoPelicula {

}
