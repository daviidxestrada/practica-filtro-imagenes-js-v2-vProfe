const fotos = [
    // Amigos
    { src: "assets/imgs/amigos-01.jpg", alt: "polo en plaza mayor", title: "Amigos 1", tags: ["amigos"]},
    {  src: "assets/imgs/amigos-02.jpg", alt: "alvarito sexy", title: "Amigos 2", tags: ["amigos"] },

    // Dibujos
    { src: "assets/imgs/dibujos-01.jpg", alt:"La Calabaza Charlie Brown", title: "Dibujos 1", tags: ["dibujos"]},
    { src: "assets/imgs/dibujos-02.jpg", alt: "Over the Garden Wall", title: "Dibujos 2", tags: ["dibujos"] },

    // Naturaleza 
    { src: "assets/imgs/naturaleza-01.jpg", alt: "La playa", title: "Naturaleza 1", tags:["naturaleza"] },
    { src: "assets/imgs/naturaleza-02.jpg", alt: "Edificios Ramen", title: "Naturaleza 2", tags: ["naturaleza"] },

    // Nana
    { src: "assets/imgs/nana-01.jpg", alt: "Nana comiendo ramen", title: "Nana 1", tags: ["nana"] },
    { src: "assets/imgs/nana-02.jpg", alt: "Nana guapeando", title: "Nana 2", tags: ["nana"] },
];

// Seleccionamos el contenedor donde irán las imágenes
const galeria = document.querySelector("#galeria")

const contador = document.querySelector("#contador");

//Función que pinta fotos en la galería
function pintarGaleria(lista){
    galeria.innerHTML = ""; // vaciamos antes de pintar
    
    lista.forEach((foto) => {
        const figure = document.createElement("figure");

        const img = document.createElement("img");
        img.src = foto.src;
        img.alt = foto.alt;

        const caption = document.createElement("figcaption");
        caption.textContent = foto.title;

        figure.appendChild(img);
        figure.appendChild(caption);
        galeria.appendChild(figure);
    });

      // Actualizar el contador
      contador.textContent = `Se muestran ${lista.length} fotos`;

    }

    //Probar: pinta todas las fotos al cargar

    pintarGaleria(fotos);

console.log("Total fotos:", fotos.length);

const filtros = document.querySelector("#filtros")

const categorias = [
    {slug: "amigos", label:"Amigos"},
    {slug: "dibujos", label:"Dibujos"},
    {slug: "naturaleza", label:"Naturaleza"},
    {slug: "nana", label:"nana<3"},
    {slug: "todos", label:"Todos"} // para resetear
]

//pintar los botones
categorias.forEach((cat) => {
    const boton = document.createElement("button");
    boton.textContent = cat.label
    boton.dataset.filtro = cat.slug // atributo personalizado
    filtros.appendChild(boton)
});

filtros.addEventListener("click",(ev)=>{
    if(ev.target.tagName === "BUTTON"){
        const filtro = ev.target.dataset.filtro;

    document.querySelectorAll("#filtros button").forEach((btn)=>{
        btn.classList.remove("activo");
    }
)

   ev.target.classList.add("activo")

        if (filtro === "todos") {
            pintarGaleria(fotos);
            }else {
                const filtradas = fotos.filter((foto) => foto.tags.includes(filtro));
                pintarGaleria(filtradas);
            }
        
    }
})



