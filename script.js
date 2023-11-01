//=========== C O N S T A N T E S   D E     H T M L ============
const contenedorProyectos = document.getElementById('contenedor-proyectos-lista');
const divLinks = document.getElementById('div-links');
const contenedorLenguajesProgramacion = document.getElementById('contenedor-lenguaje-programacion');
const target = document.querySelectorAll('[data-target]');
const content = document.querySelectorAll('[data-content]');
const iconVolver = document.getElementById('icon-volver');
const divTodo = document.getElementById('todo');
target.forEach(target => {
    target.addEventListener('click', () => {
        navPaginas();
        content.forEach(c => {
            setTimeout(() => {
                c.classList.remove('active');
            }, 390);
        });
        
        const t = document.querySelector(target.dataset.target);
        setTimeout(() => {
            t.classList.add('active');
            iconVolver.style.display = 'block';
        }, 402);
        
    })
});
//=========== A R R A Y     D E     P R O Y E C T O S =============
const lenguajesDeProgramacion = [
    {
        img: 'lenguajes/html-5-svgrepo-com.svg',
        color: '#ff4500',
        nombre: 'html',
    },
    {
        img: 'lenguajes/css-3-svgrepo-com.svg',
        color: '#0000cd',
        nombre: 'css',
    },
    {
        img: 'lenguajes/javascript-svgrepo-com.svg',
        color: '#ffe344',
        nombre: 'js',
    },
    {
        img: 'lenguajes/typescript-icon-svgrepo-com.svg',
        color: '#19a1ce',
        nombre: 'ts',
    },
    {
        img: 'lenguajes/react.svg',
        color: '#83ffff',
        nombre: 'react',
    },
]
const proyectos = [
    {
        nombre: "SubnormaShop",
        img: 'img/imgPaginas/SSimg.webp',
        descripcion: 'practica de una tienda online de tegnologia mobile.',
        lenguajeUsado: [lenguajesDeProgramacion[0],lenguajesDeProgramacion[1], lenguajesDeProgramacion[2]],
        link:'https://subnormalynx.github.io/SubnormaShop.github.io/',
    },
    {
        nombre: 'Palabreando',
        img: 'img/imgPaginas/PBimg.webp',
        descripcion: 'Minijuego web que te reta a ser rapido escribiendo.',
        lenguajeUsado: [lenguajesDeProgramacion[0],lenguajesDeProgramacion[1], lenguajesDeProgramacion[2]],
        link:'https://subnormalynx.github.io/Palabreando.github.io/',
    },
    {
        nombre: 'Chacobi',
        img: 'img/imgPaginas/CCimg.webp',
        descripcion: 'Pagina para una empresa de construccíones en Mexico.',
        lenguajeUsado: [lenguajesDeProgramacion[0],lenguajesDeProgramacion[1], lenguajesDeProgramacion[2]],
        link:'https://chacobi.000webhostapp.com/',
    },
    {
        nombre: 'SubnormaArt',
        img: 'img/imgPaginas/SSimg.webp',
        descripcion: 'Practica de creacion de red social para creacion de componentes en react (convinando React-Router y Redux).',
        lenguajeUsado: [lenguajesDeProgramacion[0], lenguajesDeProgramacion[1], lenguajesDeProgramacion[2], lenguajesDeProgramacion[4]],
        link:'#',
    },
    {
        nombre: 'Practica TypeScript',
        img: 'img/imgPaginas/CCimg.webp',
        descripcion: 'Un sitio de publicaciones con localStorage, creada para la practica con TypeScript.',
        lenguajeUsado: [lenguajesDeProgramacion[0],lenguajesDeProgramacion[1], lenguajesDeProgramacion[3]],
        link:'#',
    },
    
];
const contactos = [
    {
        app: 'Whatsapp',
        img: 'icons/whatsapp-svgrepo-com.svg',
        link:"#"
    },
    {
        app: 'Instagram',
        img: 'icons/instagram-svgrepo-com.svg',
        link:"#"
    },
    {
        app: 'Tiktok',
        img: 'icons/tiktok-svgrepo-com.svg',
        link:"#"
    },
    {
        app: 'Facebook',
        img: 'icons/facebook-svgrepo-com.svg',
        link:"#"
    },
    {
        app: 'Gmail',
        img: 'icons/gmail-svgrepo-com.svg',
        link:"#"
    },
    {
        app: 'Youtube',
        img: 'icons/youtube-168-svgrepo-com.svg',
        link:"#"
    }
]

//=========== F U N C I O N E S =============

function navPaginas() {
    divTodo.style.filter = 'blur(30px)';
    setTimeout(() => {
        divTodo.style.filter = 'blur(0px)';
    }, 400);
}

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
            window.location.href = proyecto.link;
        })
    })
    contenedorProyectos.appendChild(fragmentProyectos);
}

let fragmentContactos = document.createDocumentFragment();
function aparicionContactos() {
    contactos.forEach(contacto => {
        const div = document.createElement('DIV');
        div.setAttribute('title', contacto.app)
        div.classList.add('caja-contacto');
        div.innerHTML = `
        <a href="${contacto.link}" class="caja-link-contacto">
            <img src="${contacto.img}" alt=${contacto.app}-imagen class="icon-contacto"></img>
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
        let idImg = `img-len-${lenguaje.nombre}`;
        div.innerHTML =` 
            <img src="${lenguaje.img}" alt="#" class="img-lenguaje-programacion" id="${idImg}" ></img>
        `;
        fragmentLenguajes.appendChild(div);
        div.addEventListener('mouseenter',() => {
            document.getElementById(idImg).style.filter = `drop-shadow(0px 0px 20px ${lenguaje.color})`;
        })
        div.addEventListener('mouseout',() => {
            document.getElementById(idImg).style.filter = `drop-shadow(0px 0px 0px ${lenguaje.color})`;
        })
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