

export class Contacto {

    public id: number;

    constructor(
        public nombre: string,
        public email?: string,
        public movil?: string,
        public facebook?: string,
        public twitter?: string
    ){}
}
