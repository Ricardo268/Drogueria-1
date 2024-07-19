
function mensaje() {
    alert("Con un Contenedor Para Llamar los comandos cuando yo necesite");
}
function cambiarcolor(){
    const cuadro = document.getElementById('cuadro');
    const colores = ['blue' , 'red' , 'green' , 'yellow' , 'purple'];
    const colorActual = cuadro.style.backgroundColor;
    let nuevoColor = colorActual; 
    while (nuevoColor === colorActual){
        nuevoColor = colores[Math.floor(Math.random()
            *colores.length)]
    }
    cuadro.style.backgroundColor = nuevoColor;


}