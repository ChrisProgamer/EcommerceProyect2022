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
  producto.talle = document.querySelector('input[type=radio]:checked')
  producto.marca = document.querySelector('.brand').innerText
  producto.fotos = [
    'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwb9ac9d2d/products/DG_QCACPU001IB/DG_QCACPU001IB-3.JPG',
    'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwfd0492d7/products/DG_QCACPU001IB/DG_QCACPU001IB-1.JPG',
    'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw77a26a9a/products/DG_QCACPU001IB/DG_QCACPU001IB-4.JPG'
  ]
}

console.log(producto)

let formas_pago = {}
  formas_pago.tarjeta = "Visa"
  formas_pago.efectivo = "Rapipago"

recolectar_datos