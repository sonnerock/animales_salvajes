class Animales {
    constructor(nombre, edad, img, comentarios, sonido){
        let Comentarios = comentarios;
        let Sonido = sonido;

        this.getNombre = () => nombre;
        this.getEdad = () => edad;
        this.getImg = () => img;
        this.getComentarios = () => Comentarios;
        this.getSonido = () => Sonido;

        this.setComentarios = (comentarios) => (Comentarios = comentarios);
        this.setSonido = (sonido) => (Sonido = sonido);
    }
    get Nombre(){
        return this.getNombre();
    }
    get Edad(){
        return this.getEdad();
    }
    get Img(){
        return this.getImg();
    }
    get comentarios(){
        return this.getComentarios();
    }
    get Sonido(){
        return this.getSonido();
    }
    set Comentarios(comentarios){
        return this.Comentarios(comentarios);
    }
    set Sonido(sonido){
        return this.getSonido(sonido);
    }
}

export default Animales;