/* Seleccionamos los elementos */
const btnFiltrar = document.querySelector('.btn-filtrar');
const btnCerrar = document.querySelector('.btn-cerrar');
const contenedorFiltros = document.querySelector('.contenedor-filtros');

/* Se agregan los eventos */
btnFiltrar.addEventListener('click', mostrarSeccion);
btnCerrar.addEventListener('click', cerrarSeccion);

/* Funciones */
function mostrarSeccion(){
    const contenedorOculto = document.querySelector('.hidden');

    /* Validacion para saber si el boton esta o no seleccionado*/
    if(!contenedorFiltros.contains(contenedorOculto)){
        contenedorFiltros.classList.remove('show-elements');
        contenedorFiltros.classList.add('hidden');
    } else {
        contenedorFiltros.classList.remove('hidden');
        contenedorFiltros.classList.add('show-elements');
    };
    
}

function cerrarSeccion(){
    const contenedorOculto = document.querySelector('.hidden');

    /* Validacion para saber si el boton esta o no seleccionado*/
    if(!contenedorFiltros.contains(contenedorOculto)){
        contenedorFiltros.classList.remove('show-elements');
        contenedorFiltros.classList.add('hidden');
    } else {
        contenedorFiltros.classList.remove('hidden');
        contenedorFiltros.classList.add('show-elements');
    };
    
}