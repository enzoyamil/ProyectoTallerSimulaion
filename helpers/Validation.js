import React from "react";

//function Validation(){

    var re = /^[^0-9$%&|<>#-]*$/;
    
    export function tamanioMaximo(cadena, max) {
        let tamanio = cadena.length;
        let esMayor = true;
        if (tamanio > max) {
            return esMayor;
        }
    }
    export function tamanioMin(cadena, min) {
        let tamanio = cadena.length;
        let esMin = true;
        if (tamanio < min) {
            return esMin;
        }
    }
    export  function sinCaractEsp(cadena) {
            let validado = true;
            if (re.test(cadena)) {
                console.log("hay caracteres especiales"); return validado;
            } else { console.log("no hay carateres especiales"); return valido }
        }

    
//}
//export default Validation;