window.cipher = {
  //Cifrar
  encode: (offsetCode, mensajeSecreto) => {
    let cifrado = '';
    for (let m = 0; m < mensajeSecreto.length; m++) {
      let mensajeUpper = mensajeSecreto.toUpperCase();
      const ascii = mensajeUpper.charCodeAt(m);
      const form = (ascii - 65 + parseInt(offsetCode)) % 26 + 65;
      let result = String.fromCharCode(form);
      cifrado += result;
    }
    return cifrado;
  },

  //Decifrar
  decode: (offsetDecode, codigo) => {
    let decifrado = '';
    for (let n = 0; n < codigo.length; n++) {
      let codigoUpper = codigo.toUpperCase();
      const asciiD = codigoUpper.charCodeAt(n);
      const formD = (asciiD + 65 - parseInt(offsetDecode)) % 26 + 65;
      let resultD = String.fromCharCode(formD);
      decifrado += resultD;
    }
    return decifrado;
  }

}
