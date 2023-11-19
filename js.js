
let cambias = document.getElementById("next")
let regresa = document.getElementById("previus")
let imagen1 = document.getElementById("imagen1")
let imagen2 = document.getElementById("imagen2")
let imagen3 = document.getElementById("imagen3")

let contador = -1
function cambia(){
    contador ++
    console.log(contador)
    if(contador === 1){
        imagen1.style.display = "none"
        imagen3.style.display = "none"
        imagen2.style.display = "block"
    }else if(contador === 3){
        imagen2.style.display = "none"
        imagen1.style.display = "none"
        imagen3.style.display = "block"

        

    }else if(contador === 5){
        imagen1.style.display = "block"
        imagen3.style.display = "none"
        imagen2.style.display = "none"
        contador = -1 

    }


}


cambias.addEventListener("click",cambia)

