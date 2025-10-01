const botonera = document.querySelector("#botonera")
const imgContainer = document.querySelector("#imgContainer")



const botones = ["amigos", "dibujos","nana","naturaleza"]

const arrayFotos = [
    {
        id:1,
        url:"assets/imgs/amigos-01.jpg",
        alt: "Amigos 1",
        tag: ["amigos"],
     },
     {
        id:2,
        url:"assets/imgs/amigos-02.jpg",
        alt: "Amigos 2",
        tag: ["amigos"],
     },
     {
        id:3,
        url:"assets/imgs/dibujos-01.jpg",
        alt: "Dibujos 1",
        tag: ["dibujos"],
     },
     {
        id:4,
        url:"assets/imgs/dibujos-02.jpg",
        alt: "Dibujos 2",
        tag: ["dibujos"],
     },
     {
        id:5,
        url:"assets/imgs/nana-01.jpg",
        alt: "Nana 1",
        tag: ["nana"],
     },
     {
        id:6,
        url:"assets/imgs/nana-02.jpg",
        alt: "Nana 2",
        tag: ["nana"],
     },
     {
        id:7,
        url:"assets/imgs/naturaleza-01.jpg",
        alt: "Naturaleza 1",
        tag: ["naturaleza"],
     },
     {
        id:8,
        url:"assets/imgs/naturaleza-02.jpg",
        alt: "Naturaleza 2",
        tag: ["naturaleza"],
     },
     
     
]


document.addEventListener("click",(ev)=>{
    if(ev.target.matches("#botonera button")){
        const id=ev.target.id
        
        filtrarImagenes(id)
    }
})


const pintarBotones = ()=>{

botones.forEach((boton)=>{
    botonera.innerHTML +=`<button id="${boton}">${boton}</button>`
})

}

const filtrarImagenes = (id)=>{
      console.log(id,"en filtrar imagen")

     const filtradas = arrayFotos.filter((objeto)=>{
        return objeto.tag.includes(id)
     })
     pintarImagenes(filtradas)
    }

const pintarImagenes = (array) => {
    const fragment=document.createDocumentFragment()
    imgContainer.innerHTML=""
   
     array.forEach((imagen)=>{
        const card = document.createElement("article")
        const foto = document.createElement("img")
        foto.src=imagen.url
        foto.alt=imagen.alt
        
        card.append(foto)
        fragment.append(card)
     })
     
     imgContainer.append(fragment)
}

pintarBotones()
pintarImagenes(arrayFotos)