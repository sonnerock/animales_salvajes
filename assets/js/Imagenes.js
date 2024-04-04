import Animales from "./Consulta.js";

document.getElementById("animal").addEventListener("change", async () => {
    const {animales} = await Animales.getData();
    const tipoAnimal = document.getElementById("animal").value;
    const imagenesPjTemplate = animales.find((p)=> p.name == tipoAnimal).imagen;
    const vistaPrevia = document.getElementById("preview");
    vistaPrevia.style.backgroundImage = `url(/assets/imgs/${imagenesPjTemplate})`;

    const obtenerSonido = animales.find((p)=> p.name == tipoAnimal).sonido;
    const audioEtiqueta = document.getElementById("player");
    audioEtiqueta.setAttribute("src", `./assets/sounds/${obtenerSonido}`);
})