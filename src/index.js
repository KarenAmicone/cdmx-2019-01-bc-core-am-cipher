const botonEncode = document.getElementById("botonM");
botonEncode.addEventListener("click", function () {
  let mensajeSecreto = document.getElementById("message").value;
  let offsetCode = document.getElementById("offset").value;
  let codificado = window.cipher.encode(offsetCode, mensajeSecreto);
  document.getElementById("codific").innerHTML = codificado;
})

const botonDecode = document.getElementById("botonN");
botonDecode.addEventListener("click", function () {
  let codigo = document.getElementById("message").value;
  let offsetDecode = document.getElementById("offset").value;
  let decodificado = window.cipher.decode(offsetDecode, codigo);
  document.getElementById("codific").innerHTML = decodificado;
})
