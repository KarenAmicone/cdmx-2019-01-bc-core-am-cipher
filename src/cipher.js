window.cipher = {
  //Cifrar
  encode: (offsetCode, mensajeSecreto) => {
    let cifrado = '';
    for (let m = 0; m < mensajeSecreto.length; m++) {
      let codAscii = mensajeSecreto.charCodeAt(m);
      if (codAscii >= 65 && codAscii <= 90) {
        let codeMayus = (codAscii - 65 + parseInt(offsetCode)) % 26 + 65;
        let resultCode = String.fromCharCode(codeMayus);
        cifrado += resultCode;
      } else if (codAscii >= 97 && codAscii <= 122) {
        let codeMin = (codAscii - 97 + parseInt(offsetCode)) % 26 + 97;
        let resultCodem = String.fromCharCode(codeMin);
        cifrado += resultCodem;
      } else
        cifrado += String.fromCharCode(codAscii);
    }
    return cifrado;
  },

  //Decifrar
  decode: (offsetDecode, codigo) => {
    let decifrado = '';
    for (let n = 0; n < codigo.length; n++) {
      let ascii = codigo.charCodeAt(n);
      if (ascii >= 65 && ascii <= 90) {
        let decodeMayus = (ascii + 65 - parseInt(offsetDecode)) % 26 + 65;
        let resultDecode = String.fromCharCode(decodeMayus);
        decifrado += resultDecode;
      } else if (ascii >= 97 && ascii <= 122) {
        let decodeMin = (ascii -122 - parseInt(offsetDecode)) % 26 + 122;
        let resultDecodem = String.fromCharCode(decodeMin);
        decifrado += resultDecodem;
      } else
        decifrado += String.fromCharCode(ascii);
    }
    return decifrado;
  }

}
