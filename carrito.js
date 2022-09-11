let recuperarData = function() {
    console.log('Llamando desde el localStorage')
    console.log(localStorage.getItem('miProducto'))
    let producto = JSON.parse(localStorage.getItem('miProducto'))
   

    //Vamos a traducir de texto plano a un objeto que pueda entender JS
    console.log('Recuperamos del localStorage y pasamos a objeto')
    console.log(JSON.parse(localStorage.getItem('miProducto')))
    
    console.log('Nombre del producto: ')
    console.log(producto.nombre)

    document.querySelector('.item-name').innerText = producto.nombre
    document.querySelector('.item-desc').innerText = producto.descripcion
    document.querySelector('.item-price').innerText = producto.precio_lista                                 
}

recuperarData()