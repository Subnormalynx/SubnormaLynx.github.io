//=========== C O N S T A N T E S   D E     H T M L ============
const contenedorProyectos = document.getElementById(
  "contenedor-proyectos-lista"
);
const divLinks = document.getElementById("div-links");
const contenedorLenguajesProgramacion = document.getElementById(
  "contenedor-lenguaje-programacion"
);
const parrafoProyectos = document.getElementById("parrafo-proyectos");

const target = document.querySelectorAll("[data-target]");
const content = document.querySelectorAll("[data-content]");
const iconVolver = document.getElementById("icon-volver");
const divTodo = document.getElementById("todo");
target.forEach((target) => {
  target.addEventListener("click", () => {
    navPaginas();
    content.forEach((c) => {
      setTimeout(() => {
        c.classList.remove("active");
      }, 390);
    });

    const t = document.querySelector(target.dataset.target);
    setTimeout(() => {
      t.classList.add("active");
      iconVolver.style.display = "block";
    }, 402);
  });
});
//=========== A R R A Y     D E     P R O Y E C T O S =============
const lenguajesDeProgramacion = [
  {
    img: "img/lenguajes/html-5-svgrepo-com.svg",
    color: "#ff4500",
    nombre: "html",
  },
  {
    img: "img/lenguajes/css-3-svgrepo-com.svg",
    color: "#0000cd",
    nombre: "css",
  },
  {
    img: "img/lenguajes/javascript-svgrepo-com.svg",
    color: "#ffe344",
    nombre: "js",
  },
  {
    img: "img/lenguajes/typescript-icon-svgrepo-com.svg",
    color: "#19a1ce",
    nombre: "ts",
  },
  {
    img: "img/lenguajes/react.svg",
    color: "#83ffff",
    nombre: "react",
  },
];
const proyectos = [
  {
    nombre: "SubnormaShop",
    img: "img/imgPaginas/SSimg.webp",
    descripcion: "practica de una tienda online de tegnologia mobile.",
    lenguajeUsado: [
      lenguajesDeProgramacion[0],
      lenguajesDeProgramacion[1],
      lenguajesDeProgramacion[2],
    ],
    link: "https://subnormalynx.github.io/SubnormaShop.github.io/",
  },
  {
    nombre: "Palabreando",
    img: "img/imgPaginas/PBimg.webp",
    descripcion: "Minijuego web que te reta a ser rapido escribiendo.",
    lenguajeUsado: [
      lenguajesDeProgramacion[0],
      lenguajesDeProgramacion[1],
      lenguajesDeProgramacion[2],
    ],
    link: "https://subnormalynx.github.io/Palabreando.github.io/",
  },
  {
    nombre: "Chacobi",
    img: "img/imgPaginas/CCimg.webp",
    descripcion: "Pagina para una empresa de construccíones en Mexico.",
    lenguajeUsado: [
      lenguajesDeProgramacion[0],
      lenguajesDeProgramacion[1],
      lenguajesDeProgramacion[2],
    ],
    link: "https://chacobi.000webhostapp.com/",
  },
];
const contactos = [
  {
    app: "Whatsapp",
    img: "img/icons/whatsapp-svgrepo-com.svg",
    link: "https://wa.me/qr/BMJVUEGGQR67M1",
  },
  {
    app: "Instagram",
    img: "img/icons/instagram-svgrepo-com.svg",
    link: "https://instagram.com/subnormalynx?igshid=OGQ5ZDc2ODk2ZA==",
  },
  {
    app: "Tiktok",
    img: "img/icons/tiktok-svgrepo-com.svg",
    link: "https://www.tiktok.com/@subnormalynx?_t=8daWprvtkxC&_r=1",
  },
  {
    app: "LinkedIn",
    img: "img/icons/linkedin-svgrepo-com.svg",
    link: "https://www.linkedin.com/in/edwin-ch%C3%A1vez-917189289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    app: "Gmail",
    img: "img/icons/gmail-svgrepo-com.svg",
    link: "mailto:EdwinChavezxwx@gmail.com",
  },
  {
    app: "Youtube",
    img: "img/icons/youtube-168-svgrepo-com.svg",
    link: "https://youtube.com/@subnormalynx9634?si=YOZQ34kJVPqgOEQW",
  },
];

//=========== F U N C I O N E S =============

function navPaginas() {
  divTodo.style.filter = "blur(30px)";
  setTimeout(() => {
    divTodo.style.filter = "blur(0px)";
  }, 400);
}

const fragmentProyectos = document.createDocumentFragment();
function aparicionProyectos() {
  proyectos.forEach((proyecto) => {
    const divLeng = document.createElement("div");
    proyecto.lenguajeUsado.forEach((leng) => {
      const imgLeng = document.createElement("img");
      imgLeng.classList.add("img-leng-proyecto");
      imgLeng.setAttribute("src", leng.img);
      divLeng.appendChild(imgLeng);
    });
    const div = document.createElement("div");
    div.classList.add("caja-proyecto");
    div.innerHTML = `
        <img src="${proyecto.img}" class="imagen-proyecto" />
        <div class="div-info-proyecto">
            <div class="div-nombre-proyecto"><p class="p-nombre-proyecto">${proyecto.nombre}</p></div>
            <div class="div-descripcion-proyecto"><p class="p-descripcion-proyecto">${proyecto.descripcion}</p></div>
            <div class="div-leng-proyecto"></div>
        </div>
        `;
    div.querySelector(".div-leng-proyecto").appendChild(divLeng);
    fragmentProyectos.appendChild(div);
    div.addEventListener("click", () => {
      window.location.href = proyecto.link;
    });
  });
  contenedorProyectos.appendChild(fragmentProyectos);
}

let fragmentContactos = document.createDocumentFragment();
function aparicionContactos() {
  contactos.forEach((contacto) => {
    const div = document.createElement("DIV");
    div.setAttribute("title", contacto.app);
    div.classList.add("caja-contacto");
    div.innerHTML = `
        <a href="${contacto.link}" class="caja-link-contacto">
            <img src="${contacto.img}" alt=${contacto.app}-imagen class="icon-contacto"></img>
        </a>
        `;
    fragmentContactos.appendChild(div);
  });
  divLinks.appendChild(fragmentContactos);
}
let fragmentLenguajes = document.createDocumentFragment();
function aparicionLenguajeProgramacion() {
  lenguajesDeProgramacion.forEach((lenguaje) => {
    const div = document.createElement("DIV");
    div.classList.add("caja-lenguaje-programacion");
    let idImg = `img-len-${lenguaje.nombre}`;
    div.innerHTML = ` 
            <img src="${lenguaje.img}" alt="#" class="img-lenguaje-programacion" id="${idImg}" ></img>
        `;
    fragmentLenguajes.appendChild(div);
    div.addEventListener("mouseenter", () => {
      document.getElementById(
        idImg
      ).style.filter = `drop-shadow(0px 0px 20px ${lenguaje.color})`;
    });
    div.addEventListener("mouseout", () => {
      document.getElementById(
        idImg
      ).style.filter = `drop-shadow(0px 0px 0px ${lenguaje.color})`;
    });
  });
  contenedorLenguajesProgramacion.appendChild(fragmentLenguajes);
}
function textoPP(activo) {
  if (activo) {
    parrafoProyectos.innerHTML = `Toca sobre los recuadros para visitar el sitio
    <b class="bi bi-hand-index-thumb" id="icon-parrafo-proyectos"></b>`;
  } else {
    parrafoProyectos.innerHTML = `Pasa el cursor sobre los recuadros para mas informacion
    <b class="bi bi-hand-index-thumb" id="icon-parrafo-proyectos"></b>`;
  }
}
//=========== E V E N T O S =============

window.addEventListener("DOMContentLoaded", () => {
  aparicionProyectos();
  aparicionContactos();
  aparicionLenguajeProgramacion();
  if (window.innerWidth <= 960) {
    let activo = true;
    textoPP(activo);
  } else {
    let activo = false;
    textoPP(activo);
  }
});
iconVolver.addEventListener("click", () => {
  setTimeout(() => {
    iconVolver.style.display = "none";
  }, 1002);
});
window.addEventListener("resize", () => {
  if (window.innerWidth <= 960) {
    let activo = true;
    textoPP(activo);
  } else {
    let activo = false;
    textoPP(activo);
  }
});
