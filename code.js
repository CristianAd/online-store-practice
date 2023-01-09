function mostrarPopup() {
    var popup = document.getElementById("miPopup");
    popup.style.display = "block";

  }
  function ocultarPopup() {
    var popup = document.getElementById("miPopup");
    popup.style.display = "none";
  }
//pARA EL CARRUSEL DE IMAGENES

  let indice=0;
  let imagenes = document.querySelectorAll(".slider img")
  console.log(imagenes)
function siguiente() {
    indice++;
    if (indice >= imagenes.length) {
        indice=0;
    }
    mostrarImagen(indice)
}

function anterior() {
    indice--;
    if (indice<0) {
        indice = imagenes.length - 1;
    }
    mostrarImagen(indice)
}

function mostrarImagen(i) {

        for (var j = 0; j < imagenes.length; j++) {
          imagenes[j].style.display = "none";
        }
        imagenes[i].style.display = "block";

}

mostrarImagen(indice);
setInterval(siguiente, 5000);

// funcionalidad para mostrar resultados
let caracteres = []

function buscar() {
  const duda= document.getElementById("keyWords").value
   caracteres.push(duda)
 document.getElementById("resultados").innerHTML = caracteres
//comparando valores de busqueda con productos
productosPublicados()
conMinus()






}





//accediendo a todos los productos alojados en la página principal
let arrayProd  = []

function productosPublicados() {
    let tituloProd =  document.querySelectorAll(".product-title h2")


    for (let i = 0; i < tituloProd.length; i++) {
      arrayProd[i] =  tituloProd[i]["innerHTML"]
    }




}
 

// accediendo a los productos por separado
let vistaUnitarioProducto = document.querySelectorAll(".bienes")
console.log(vistaUnitarioProducto[0]["innerHTML"])
// console.log(vistaUnitarioProducto[0].children[0].innerHTML)

// convirtiendo los arrays en minúsculas
function conMinus() {
  productosPublicados()
  let arr1 = caracteres
  let    arrA =  arr1.map(value => value.toLowerCase())
  let arr2 = arrayProd
  let    arrB =  arr2.map(value => value.toLowerCase())
   
    

     if (arrA == 0) {
      
     }else{
      for (let i = 0; i < arrB.length; i++) {
            if (arrA[arrA.length -1] == arrB[i]) {
              var coincidencia = arrB[i]
             let resultadoEnDoc = document.getElementById("resultados")
             // resultadoEnDoc.innerHTML = vistaUnitarioProducto[0].children[0].innerHTML
              resultadoEnDoc.innerHTML = vistaUnitarioProducto[i]["innerHTML"]

              console.log("ENCONTRADO")
              break;

            }else if(arrA[arrA.length -1] !== coincidencia){
              document.getElementById("resultados").innerHTML = "lo sentimos no hemos encontrado lo que buscas"
            }
        
      }
     }
          
}
 conMinus()










