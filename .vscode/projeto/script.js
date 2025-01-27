function toggleMode(){
   const html = document.documentElement
/* 
    if(html.classList.contains("light")){
        html.classList.remove("light")
    }else{
        html.classList.add("light")
    }*/
    html.classList.toggle("light")
}

/* pegar a tag img
const img = document.querySelector("#profile img")

substituir a imagem
if (html.classList.contains("light")){

se tiver light mode, adicioanr a imagem ligth
img.setAtribute("src", "./assets/avatar-ligth.png")

}else {
img.setAtribute("src", "./assets/avatar.png") } */
