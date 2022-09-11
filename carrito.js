let recuperarData = function() {
    console.log('Llamando desde el localStorage')
    console.log(localStorage.getItem('miProducto'))
    let producto = JSON.parse(localStorage.getItem('miProducto'))
   

    //Vamos a traducir de texto plano a un objeto que pueda entender JS
    console.log('Recuperamos del localStorage y pasamos a objeto')
    console.log(JSON.parse(localStorage.getItem('miProducto')))
    
    console.log('Nombre del producto: ')
    console.log(producto.nombre)
}

recuperarData()