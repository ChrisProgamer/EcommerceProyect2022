function change_image(image) {
  let container = document.getElementById("main-image");
  container.src = image.src;
}

let recolectar_datos = function () {
  let producto = {}
  producto.precio_descuento = document.querySelector('.act-price').innerText
  producto.precio_lista = document.querySelector('.dis-price').innerText
  producto.nombre = document.querySelector('#nombre').innerText
  producto.cantidad = 0
  producto.descripcion = document.querySelector('.about').innerText
  producto.talle = document.querySelector('input[type=radio]:checked').value
  producto.fotos = ['https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw7a39f4bf/products/DG_DUOJEU010B/DG_DUOJEU010B-3.JPG',
      'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwf6158278/products/DG_DUOJEU010B/DG_DUOJEU010B-2.JPG',
      'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwf6158278/products/DG_DUOJEU010B/DG_DUOJEU010B-1.JPG'
  ]

  console.log(producto)
  localStorage.setItem('miProducto', JSON.stringify(producto) )

}

recolectar_datos()

let probamosLocalStorage = function() {
  localStorage.setItem('precio',document.querySelector('.act-price').innerText)
  localStorage.setItem('nombre',document.querySelector('#nombre').innerText)
  localStorage.setItem('descuento',document.querySelector('.dis-price').innerText)
  
}