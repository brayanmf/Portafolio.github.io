const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas');

	// Agregamos los listener de los enlaces para filtrar por categoria.
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');

			const categoria = evento.target.innerHTML.toLowerCase();
			categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
		});
	});

	// Agregamos el listener para la barra de busqueda
	document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
		const busqueda = evento.target.value;
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
	});

	// Agregamos listener para las imagenes
	const overlay = document.getElementById('overlay');
	document.querySelectorAll('.grid .item img').forEach((elemento) => {
		elemento.addEventListener('click', () => {
			const ruta = elemento.getAttribute('src');
			const descripcion = elemento.parentNode.parentNode.dataset.descripcion;


			overlay.classList.add('activo');

			document.querySelector('#overlay img').src = ruta;
			document.querySelector('#overlay .descripcion').innerHTML = descripcion;
		});
	});

	// Eventlistener del boton de cerrar
	document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
		overlay.classList.remove('activo');
	});

	// Eventlistener del overlay
	overlay.addEventListener('click', (evento) => {
		evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
	});


	
	







	

/*a.onclick=(b)=>{
	console.log(a)
}*/



    /*.onclick=(a)=>{//cuando el  user click en items
        if(a.target.classList.contains("collapsible-bodycollapsible-body")){//si el elemento de clic del usuario tiene la clase .item
            filteritem.querySelector(".collapsible-body").classList.remove("collapsible-body")//seleccionamos si tiene la variable active y lo removmos
            a.target.classList.add("collapsible-body1")//agregar esa clase activa en el elemento o elemento seleccionado por el usuario
           /*-------------------------------------------------------------------------------- */
           /* let filtername=a.target.getAttribute("data-name")//obtener el valor del name-data del elemento seleccionado por 
                                                            //el usuario y almacenarlo en una variable de nombre de filtro
           filterimg.forEach((image)=>{/*recorremos las imagenes para relacionarle con el elemento seleccionado */
     
/*let filterimages=image.getAttribute("data-name");//obteniendo el valor de name-data
     // si el valor de name-data de elemento seleccionado por el usuario es igual al valor
     // de name-data de imagen o el valor del name-data del elemento
           /*    if((filterimages==filtername) || filtername=="all"){
                   image.classList.remove("hide")
                   image.classList.add("show")
               }else{
                   image.classList.add("hide")
                   image.classList.remove("show")
               }
           });
        }
    }*/

	
});

var a= document.querySelectorAll("#p1")
var b= document.querySelectorAll("#p2")
function clicktxt(z){
	a[z].addEventListener('click',function(){
	b[z].classList.toggle('collapsible-body1')
		})
}
clicktxt(0);
clicktxt(1);
clicktxt(2);
clicktxt(3);

	



/*let a=document.querySelector("#p1")
let b=document.querySelector("#p2")



a.addEventListener('click',function(){
	b.classList.toggle('collapsible-body1')
		})

*/
		
/*for (let b of a){--mostrar el contenido dentro de un contenedor hijo
	i=0
c=b.getElementsByTagName("p")[i].innerHTML
i++

console.log(c)

}*/


