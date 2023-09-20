//=========== C O N S T A N T E S   D E     H T M L ============
const contenedorProyectos = document.getElementById('contenedor-proyectos-lista');
const divLinks = document.getElementById('div-links');
const contenedorLenguajesProgramacion = document.getElementById('contenedor-lenguaje-programacion');
const target = document.querySelectorAll('[data-target]');
const content = document.querySelectorAll('[data-content]');
const iconVolver = document.getElementById('icon-volver');
target.forEach(target => {
    target.addEventListener('click', () => {
        content.forEach(c => {
            setTimeout(() => {
                c.classList.remove('active');
            }, 1000);
        });
        
        const t = document.querySelector(target.dataset.target);
        setTimeout(() => {
            t.classList.add('active');
            iconVolver.style.display = 'block';
        }, 1002);
    })
});
//=========== A R R A Y     D E     P R O Y E C T O S =============
const lenguajesDeProgramacion = [
    {
        img: 'lenguajes/html-5-svgrepo-com.svg',
    },
    {
        img: 'lenguajes/css-3-svgrepo-com.svg',
    },
    {
        img: 'lenguajes/javascript-svgrepo-com.svg',
    },
    {
        img: 'lenguajes/typescript-icon-svgrepo-com.svg',
    },
    {
        img: 'lenguajes/react.svg',
    },
]
const proyectos = [
    {
        nombre: "Tegnomobile",
        img: 'img/lince.png',
        descripcion: 'practica de una tienda online de tegnologia mobile.',
        lenguajeUsado: [lenguajesDeProgramacion[0],lenguajesDeProgramacion[1], lenguajesDeProgramacion[2]],
        link:'#',
    },
    {
        nombre: 'Palabreando',
        img: 'img/lince.png',
        descripcion: 'Minijuego web que te reta a ser rapido escribiendo.',
        lenguajeUsado: [lenguajesDeProgramacion[0],lenguajesDeProgramacion[1], lenguajesDeProgramacion[2]],
        link:'#',
    },
    {
        nombre: 'Chacobi',
        img: 'img/lince.png',
        descripcion: 'Pagina para una empresa de construccíones en Mexico.',
        lenguajeUsado: [lenguajesDeProgramacion[0],lenguajesDeProgramacion[1], lenguajesDeProgramacion[2]],
        link:'#',
    },
    {
        nombre: 'Practica TypeScript',
        img: 'img/lince.png',
        descripcion: 'Un sitio de publicaciones con localStorage, creada para la practica con TypeScript.',
        lenguajeUsado: [lenguajesDeProgramacion[0],lenguajesDeProgramacion[1], lenguajesDeProgramacion[3]],
        link:'#',
    },
    {
        nombre: 'Practica React',
        img: 'img/lince.png',
        descripcion: 'Practicas para las creacion de componentes en react (convinando r-router).',
        lenguajeUsado: [lenguajesDeProgramacion[0], lenguajesDeProgramacion[1], lenguajesDeProgramacion[2], lenguajesDeProgramacion[4]],
        link:'#',
    },
];
const contactos = [
    {
        img: 'icons/whatsapp-svgrepo-com.svg',
        link:"#"
    },
    {
        img: 'icons/instagram-svgrepo-com.svg',
        link:"#"
    },
    {
        img: 'icons/tiktok-svgrepo-com.svg',
        link:"#"
    },
    {
        img: 'icons/facebook-svgrepo-com.svg',
        link:"#"
    },
    {
        img: 'icons/gmail-svgrepo-com.svg',
        link:"#"
    },
    {
        img: 'icons/youtube-168-svgrepo-com.svg',
        link:"#"
    }
]

const fragmentProyectos = document.createDocumentFragment();
function aparicionProyectos() {
    proyectos.forEach(proyecto => {
        const divLeng = document.createElement('div');
        proyecto.lenguajeUsado.forEach(leng => {
            const imgLeng = document.createElement('img');
            imgLeng.classList.add('img-leng-proyecto');
            imgLeng.setAttribute('src', leng.img);
            divLeng.appendChild(imgLeng);
        });
        console.log(divLeng);
        const div = document.createElement('div');
        div.classList.add('caja-proyecto');
        div.innerHTML = `
        <img src="${proyecto.img}" class="imagen-proyecto" />
        <div class="div-info-proyecto">
            <div class="div-nombre-proyecto"><p class="p-nombre-proyecto">${proyecto.nombre}</p></div>
            <div class="div-descripcion-proyecto"><p class="p-descripcion-proyecto">${proyecto.descripcion}</p></div>
            <div class="div-leng-proyecto"></div>
        </div>
        `;
        div.querySelector('.div-leng-proyecto').appendChild(divLeng);
        fragmentProyectos.appendChild(div);
        div.addEventListener('click', () => {
            alert(`redirijiendo a ${proyecto.link} ...`);
        })
    })
    contenedorProyectos.appendChild(fragmentProyectos);
}

let fragmentContactos = document.createDocumentFragment();
function aparicionContactos() {
    contactos.forEach(contacto => {
        const div = document.createElement('DIV');
        div.classList.add('caja-contacto');
        div.innerHTML = `
        <a href="${contacto.link}" class="caja-link-contacto">
            <img src="${contacto.img}" alt="#" class="icon-contacto"></img>
        </a>
        `;
        fragmentContactos.appendChild(div);
    })
    divLinks.appendChild(fragmentContactos);
}
let fragmentLenguajes = document.createDocumentFragment();
function aparicionLenguajeProgramacion() {
    lenguajesDeProgramacion.forEach(lenguaje => {
        const div = document.createElement('DIV');
        div.classList.add('caja-lenguaje-programacion');
        div.innerHTML = `
            <img src="${lenguaje.img}" alt="#" class="img-lenguaje-programacion"></img>
        `;
        fragmentLenguajes.appendChild(div);
    })
    contenedorLenguajesProgramacion.appendChild(fragmentLenguajes);
}

//=========== E V E N T O S =============

window.addEventListener('DOMContentLoaded',() => {
    aparicionProyectos();
    aparicionContactos();
    aparicionLenguajeProgramacion();
})
iconVolver.addEventListener('click', () => {
    setTimeout(() => {
        iconVolver.style.display = 'none';
    }, 1002);
})