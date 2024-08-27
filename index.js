function encriptar() {
  console.log("entro");
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("mensaje");
  let parrafo = document.getElementById("cifrado_parrafo");
  let imagen = document.getElementById("imgCifrado");

  if (texto.length != 0) { 
    let textoCifrado = codificar(texto);
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    imagen.src = "img/encriptado.jpg";
  } else {
    imagen.src = "img/sinmensaje.jpg";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("mensaje");
  let parrafo = document.getElementById("cifrado_parrafo");
  let imagen = document.getElementById("imgCifrado");
  
    if (texto.length != 0) {
      let textoDecifrado = decodificar(texto);
      document.getElementById("texto").value = textoDecifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      imagen.src = "img/encriptado.jpg";
    } else {
      imagen.src = "img/sinmensaje.jpg";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    }
}

function codificar(oracion){
  let arreglo = Array.from(oracion);
  var codificado = "";
  for (let index = 0; index < arreglo.length; index++) {
      const element = arreglo[index];
      let codigoCaracter = element.charCodeAt(0) + 15;
      let caracter = String.fromCharCode(codigoCaracter);
      codificado+= caracter;
  }
  return codificado;
}

function decodificar(oracion){
  let arreglo = Array.from(oracion);
  var decodificado = "";
  for (let index = 0; index < arreglo.length; index++) {
      const element = arreglo[index];
      let codigoCaracter = element.charCodeAt(0) - 15;
      let caracter = String.fromCharCode(codigoCaracter);
      decodificado+= caracter;
  }
  return decodificado;
}
