import Animales from "./clases/Animales.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/Sonidos.js";
import animales from "./Consulta.js";

let mostrarAnimales = [];

document.getElementById("btnRegistrar").addEventListener("click", () => {
  let imagenBg = document.getElementById("preview");
  let imagenSrcBg = imagenBg.style.backgroundImage;
  let imagenSrc = imagenSrcBg.slice(5, imagenSrcBg.length - 2);

  let nombreAnimal = document.getElementById("animal").value;
  let edadAnimal = document.getElementById("edad").value;
  let coment = document.getElementById("comentarios").value;
  let sonidoA = document.getElementById("player").getAttribute("src");

  let nuevoAnimal;
  

  if (nombreAnimal == "Leon") {
    nuevoAnimal = new Leon(nombreAnimal, edadAnimal, imagenSrc, coment, sonidoA);
  } else if (nombreAnimal == "Lobo") {
    nuevoAnimal = new Lobo(nombreAnimal, edadAnimal, imagenSrc, coment, sonidoA);
  } else if (nombreAnimal == "Oso") {
    nuevoAnimal = new Oso(nombreAnimal, edadAnimal, imagenSrc, coment, sonidoA);
  } else if (nombreAnimal == "Serpiente") {
    nuevoAnimal = new Serpiente(nombreAnimal, edadAnimal, imagenSrc, coment, sonidoA);
  } else if (nombreAnimal == "Aguila") {
    nuevoAnimal = new Aguila(nombreAnimal, edadAnimal, imagenSrc, coment, sonidoA);
  }


  if (nombreAnimal && edadAnimal && imagenSrc && coment) {
    document.getElementById("animal").selectedIndex = 0;
    document.getElementById("edad").selectedIndex = 0;
    document.getElementById("comentarios").value = "";
    imagenBg.style.backgroundImage = "none";

    mostrarAnimales.push(nuevoAnimal);
    reloadTable();

    console.log(nuevoAnimal);
  } else {
    alert("Debe ingresar todos los datos");
  }
});


const reloadTable = () => {
  const animalesTemplate = document.getElementById("Animales");
  

  animalesTemplate.innerHTML = "";
  mostrarAnimales.forEach((p, i) => {
    animalesTemplate.innerHTML += `
        <div class="card m-3" style="width: 15rem">
        <img id="nuevaImagen"src="${p.getImg()}" class="card-img-top" style="max-width: 15rem" data-toggle="modal" data-target="#${i}exampleModal" />
        
        <div class="card-body">
          <button href="#" id="btnAudio" class="btn btn-primary" ><i class="fas fa-volume-up"></i></button>
          <audio autoplay id="${i}player2" src="${p.getSonido()}" class="d-none"></audio>
          </div>
        
        <!-- Modal -->
        <div class="modal fade" id="${i}exampleModal">
        <div class="modal-dialog modal-dialog-centered w-25" role="document">
          <div class="modal-content bg-dark">
                   <div class="modal-body">
              <div class="text-center text-light mx-3">
                          <img width="300" src="${p.getImg()}"/>
                          <p>${p.getEdad()}</p>
                          <p>Comentarios</p>
                          <p>${p.getComentarios()}</p>
                          
                     </div>
              </div>
            </div>
          </div>
        </div>
        `;
  });
};